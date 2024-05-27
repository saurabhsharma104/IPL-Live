package project.ipl_dashboard.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import project.ipl_dashboard.enums.StatsEnum;
import project.ipl_dashboard.service.LiveStatsService;

@RestController
public class LiveStatsController { 
    
    
     @Autowired
    private LiveStatsService liveStatsService;

    @GetMapping("/stats")
    public String getStats(@RequestParam String statsType) {
        if (StatsEnum.isStatsTypeValid(statsType)) {
            return liveStatsService.getApiResult(statsType);
        } else {
            return "Invalid Request " + statsType;
        }
    }
}

