package project.ipl_dashboard.repository;

import org.springframework.data.repository.CrudRepository;

import project.ipl_dashboard.entity.Team;

public interface TeamRepository extends CrudRepository<Team, Long>  {

    Team findByTeamName(String teamName);
    
}
