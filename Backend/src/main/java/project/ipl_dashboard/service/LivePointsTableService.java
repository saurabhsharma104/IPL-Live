package project.ipl_dashboard.service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import project.ipl_dashboard.config.APIConfig;


@Service
public class LivePointsTableService {

    private String pointTableResult = null;

    @PostConstruct
    public void init() {
        fetchPointTableData(); // Fetch data on application startup
    }


    @Scheduled(cron = "0 0 0 * * ?") // Run at midnight every day
    public void fetchPointTableData() {
            pointTableResult = getResponce();
    }

    public String getPointTableResult() {
        return pointTableResult;
    }

    private String getResponce() {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(APIConfig.BASE_URL+ "/stats/v1/series/"+APIConfig.SERIES_ID+"/points-table"))
                .header("X-RapidAPI-Key", APIConfig.API_KEY)
                .header("X-RapidAPI-Host", APIConfig.HOST_NAME)
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        try {
            HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
            return response.body();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }
}
