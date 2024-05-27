package project.ipl_dashboard.data;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobExecutionListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import jakarta.persistence.EntityManager;
import project.ipl_dashboard.entity.Team;
import project.ipl_dashboard.service.MatchService;
import project.ipl_dashboard.service.TeamService;

@Component
public class JobCompletionNotificationListener implements JobExecutionListener {

  private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);
  
  @Autowired
  private EntityManager em;
  
  @Autowired
  private TeamService teamService;

  @Autowired
  private MatchService matchService;

  public JobCompletionNotificationListener(EntityManager em) {
    this.em = em;
  }

  @Override
  public void afterJob(JobExecution jobExecution) {
    if(jobExecution.getStatus() == BatchStatus.COMPLETED) {
      log.info("!!! JOB FINISHED! Time to verify the results");
      
       
        List<Team> teamData = matchService.getAllTeams(em);
      
        log.info("Persisting team data");
        teamService.saveTeams(teamData); // Delegate to the transactional service

        // Verify data persistence
        List<Team> teams = teamService.getAllTeams();

        System.out.println("___________________________________");
        System.out.println("\t Total teams " + teams.size());        
        System.out.println("___________________________________");

        teams.forEach(team -> {
          System.out.println(team);
        });
    }
  }
}