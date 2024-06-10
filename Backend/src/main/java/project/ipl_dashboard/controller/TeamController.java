package project.ipl_dashboard.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import project.ipl_dashboard.entity.Match;
import project.ipl_dashboard.entity.Team;
import project.ipl_dashboard.repository.MatchRepository;
import project.ipl_dashboard.repository.TeamRepository;

@RestController
@CrossOrigin
public class TeamController {
    static private int HIGHEST_SCORE = 500;

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;
    
    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }


    @GetMapping("/team")
    public Iterable<Team> getAllTeam() {
        return this.teamRepository.findAll();
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        Team team = this.teamRepository.findByTeamName(teamName);
        if (team == null) return null;
        team.setMatches(matchRepository.findLatestMatchesbyTeam(teamName,14));
            
        return team;
    }

    @PostMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);
        return this.matchRepository.getMatchesByTeamBetweenDates(
            teamName,
            startDate,
            endDate
            );
    }

    @GetMapping("/team/{teamName}/{year}")
    public Team getTeamDashboard(@PathVariable String teamName, @PathVariable String year) {
        Team team = this.teamRepository.findByTeamName(teamName);
        if (team == null) return null;

        LocalDate startDate = LocalDate.of(Integer.parseInt(year), 1, 1);
        LocalDate endDate = LocalDate.of(Integer.parseInt(year) + 1, 1, 1);

        List<Match> matches = this.matchRepository.getMatchesByTeamBetweenDates(
            teamName,
            startDate,
            endDate
            );
        
        int win=0, loss = 0;
        int highestScore = 0;
        int lowestScore = HIGHEST_SCORE; 
        for (Match match : matches) {
            if (teamName.equalsIgnoreCase(match.getMatchWinner())) {
                highestScore = Math.max(highestScore, Integer.parseInt(match.getEliminator()));
                lowestScore = Math.min(lowestScore, Integer.parseInt(match.getEliminator()));
            } else {
                highestScore = Math.max(highestScore, Integer.parseInt(match.getEliminator()) - Integer.parseInt(match.getResultMargin()));
                lowestScore = Math.min(lowestScore, Integer.parseInt(match.getEliminator())- Integer.parseInt(match.getResultMargin()));
            }

            if (teamName.equalsIgnoreCase(match.getMatchWinner())) {
                win++;
            } else {
                loss = 1;
            }
        }  
        
        int winProb = (win * 100)/(win+loss);


        team.setHighestScore(highestScore);
        team.setLowestScore(lowestScore);
        team.setWinProb(winProb);
        team.setMatches(matches);    
        return team;
    }

}    
