package project.ipl_dashboard.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;

@Entity
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String teamName;
    private long totalMatches;
    private long totalWins;
    private int highestScore;
    private int lowestScore;
    private int winProb;

    @Transient
    private List<Match> matches;
    
    public int getHighestScore() {
        return highestScore;
    }
    public void setHighestScore(int highestScore) {
        this.highestScore = highestScore;
    }
    public int getLowestScore() {
        return lowestScore;
    }
    public void setLowestScore(int lowestScore) {
        this.lowestScore = lowestScore;
    }
    public int getWinProb() {
        return winProb;
    }
    public void setWinProb(int winProb) {
        this.winProb = winProb;
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getTeamName() {
        return teamName;
    }
    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }
    public long getTotalMatches() {
        return totalMatches;
    }
    public void setTotalMatches(long totalMatches) {
        this.totalMatches = totalMatches;
    }
    public long getTotalWins() {
        return totalWins;
    }
    public void setTotalWins(long totalWins) {
        this.totalWins = totalWins;
    }
    public Team(String teamName, long totalMatches) {
        this.teamName = teamName;
        this.totalMatches = totalMatches;
    }
    @Override
    public String toString() {
        return "Team [teamName=" + teamName + ", totalMatches=" + totalMatches + ", totalWins=" + totalWins + "]";
    }
    public Team() {
        
    }
    public List<Match> getMatches() {
        return matches;
    }
    public void setMatches(List<Match> matches) {
        this.matches = matches;
    }

    
    
    
    

    
}
