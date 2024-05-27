package project.ipl_dashboard.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import project.ipl_dashboard.entity.Match;
import project.ipl_dashboard.repository.MatchRepository;
import project.ipl_dashboard.repository.TeamRepository;

@RestController
@CrossOrigin
public class MatchController {

    // private TeamRepository teamRepository;
    private MatchRepository matchRepository;
    
    public MatchController(TeamRepository teamRepository, MatchRepository matchRepository) {
        // this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }
    


    @GetMapping("/match")
    public Iterable<Match> getAllMatch() {
        return this.matchRepository.findAll();
    }
}    
