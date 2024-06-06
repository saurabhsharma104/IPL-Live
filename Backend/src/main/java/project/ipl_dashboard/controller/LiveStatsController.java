package project.ipl_dashboard.controller;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import project.ipl_dashboard.config.APIConfig;
import project.ipl_dashboard.enums.StatsEnum;

@RestController
public class LiveStatsController { 

    @GetMapping("/stats/{statsType}")
    public String getStats(@PathVariable String statsType) {
        if (StatsEnum.isStatsTypeValid(statsType)) {
            return getResponce(statsType);
        } else {
            return "Invalid Request " + statsType;
        }
    }

    private String getResponce(String statsType) {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(APIConfig.BASE_URL + "/stats/v1/series/" + APIConfig.SERIES_ID + "?statsType=" + statsType))
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

