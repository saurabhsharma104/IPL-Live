package project.ipl_dashboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import project.ipl_dashboard.service.LivePointsTableService;

@RestController
@CrossOrigin
public class LivePointsTableController {

    @Autowired
    private LivePointsTableService livePointsTableService;
    
    @GetMapping("/points-table")
    public String getPointsTable() {

        return livePointsTableService.getPointTableResult();
    }
}
