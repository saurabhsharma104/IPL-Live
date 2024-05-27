package project.ipl_dashboard.enums;

import java.util.HashSet;
import java.util.Set;

public enum IplTeam {
    MUMBAI_INDIANS("Mumbai Indians"),
    SUNRISERS_HYDERABAD("Sunrisers Hyderabad"),
    GUJARAT_TITANS("Gujarat Titans"),
    LUCKNOW_SUPER_GIANTS("Lucknow Super Giants"),
    RAJASTHAN_ROYALS("Rajasthan Royals"),
    KOLKATA_KNIGHT_RIDERS("Kolkata Knight Riders"),
    ROYAL_CHALLENGERS_BANGALORE("Royal Challengers Bangalore"),
    DELHI_CAPITALS("Delhi Capitals"),
    PUNJAB_KINGS("Punjab Kings"),
    CHENNAI_SUPER_KINGS("Chennai Super Kings");

    private String teamName;

    IplTeam(String teamName) {
        this.teamName = teamName;
    }

    public String getTeamName() {
        return teamName;
    }

    // Utility method to check if a given team name is valid
    private static final Set<String> VALID_TEAM_NAMES = new HashSet<>();

    static {
        for (IplTeam team : IplTeam.values()) {
            VALID_TEAM_NAMES.add(team.getTeamName());
        }
    }

    public static boolean isValidTeam(String teamName) {
        return VALID_TEAM_NAMES.contains(teamName);
    }
}
