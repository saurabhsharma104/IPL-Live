package project.ipl_dashboard.controller;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import project.ipl_dashboard.config.APIConfig;

@RestController
@CrossOrigin
public class LiveMatchController {

    private String matchList = null;

    @GetMapping("/match/{id}")
    public String getMatchScoreCard(@PathVariable String id) {
        try {
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(APIConfig.BASE_URL + "/mcenter/v1/" + id + "/hscard"))
                .header("X-RapidAPI-Key", APIConfig.API_KEY)
                .header("X-RapidAPI-Host", APIConfig.HOST_NAME)
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();

            HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println(response.body());
            return response.body();
        } catch (Exception e) {
            e.printStackTrace();
        } 

        return "{}";
    }
    
    @GetMapping("/matchlist")
    public String getmatchesList() {

        // if (matchList != null) {
        //     return matchList;
        // }

        try {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(APIConfig.BASE_URL + "/series/v1/"+APIConfig.SERIES_ID))
                    .header("X-RapidAPI-Key", APIConfig.API_KEY)
                    .header("X-RapidAPI-Host", APIConfig.HOST_NAME)
                    .method("GET", HttpRequest.BodyPublishers.noBody())
                    .build();
            HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
            matchList = response.body();
        } catch (Exception e) {
            e.printStackTrace();
        } 

        return matchList;
    }

}
