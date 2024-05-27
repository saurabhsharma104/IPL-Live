package project.ipl_dashboard.service;

import jakarta.persistence.EntityManager;
import project.ipl_dashboard.entity.Team;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MatchService {
    
      public List<Team> getAllTeams(EntityManager em) {
        Map<String, Team> teamData = new HashMap<>();
            
        em.createQuery("select m.team1, count(*) from Match m group by m.team1", Object[].class)
            .getResultList()
            .stream()
            .map(e -> new Team((String) e[0], (long) e[1]))
            .forEach(team -> teamData.put(team.getTeamName(), team));
    
        em.createQuery("select m.team2, count(*) from Match m group by m.team2", Object[].class)
            .getResultList()
            .stream()
            .forEach(e -> {
                Team team = teamData.get((String) e[0]);
                team.setTotalMatches(team.getTotalMatches() + (long) e[1]);
            });

        em.createQuery("select m.matchWinner, count(*) from Match m group by m.matchWinner", Object[].class)
            .getResultList()
            .stream()
            .forEach(e -> {
                Team team = teamData.get((String) e[0]);
                if (team != null) team.setTotalWins((long) e[1]);
            });

        return teamData.values().stream().toList();
      }
    }
    