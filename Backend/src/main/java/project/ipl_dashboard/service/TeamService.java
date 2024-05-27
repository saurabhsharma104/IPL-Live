package project.ipl_dashboard.service;

import jakarta.persistence.EntityManager;
import project.ipl_dashboard.entity.Team;
import project.ipl_dashboard.enums.IplTeam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TeamService {

  @Autowired
  private EntityManager em;

  @Transactional
  public void saveTeams(List<Team> teamData) {
    teamData.stream()
          .filter(team -> IplTeam.isValidTeam(team.getTeamName()))
          .forEach(team -> {
            em.joinTransaction();
            em.persist(team);
          });
    em.flush(); // Ensure changes are flushed to the database
  }

  public List<Team> getAllTeams() {
    return em.createQuery("SELECT t FROM Team t", Team.class).getResultList();
  }
}
