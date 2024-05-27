package project.ipl_dashboard.enums;

public enum StatsEnum {

    MOST_RUNS("mostRuns"),
    MOST_WICKETS("mostWickets"),
    HIGHEST_SCORE("highestScore"),
    MOST_SIXES("mostSixes"),
    MOST_FOURS("mostFours"),
    MOST_CENTURIES("mostHundreds"),
    MOST_FIFTIES("mostFifties"),
    BEST_ECONOMY("lowestEcon");

    private String displayName;

    StatsEnum(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }

    public static boolean isStatsTypeValid(String displayName) {
        for (StatsEnum stat : StatsEnum.values()) {
            if (stat.getDisplayName().equalsIgnoreCase(displayName)) {
                return true;
            }
        }
        return false;
    }
}
