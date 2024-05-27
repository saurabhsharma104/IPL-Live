package project.ipl_dashboard.service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.springframework.stereotype.Service;

import project.ipl_dashboard.config.APIConfig;


@Service
public class LiveStatsService {

    public String getApiResult(String statsType) {
        return getResponce(statsType);
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
