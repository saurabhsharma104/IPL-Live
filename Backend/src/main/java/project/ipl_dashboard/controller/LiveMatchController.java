package project.ipl_dashboard.controller;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

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

        if (matchList == null) return matchList;

         try {
            // Convert JSON string to JSON object
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(matchList);

            // Navigate to the node you want to update
            JsonNode matchInfoNode = rootNode
                .path("matchDetails")
                .get(rootNode.path("matchDetails").size()-1)
                .path("matchDetailsMap")
                .path("match")
                .get(0)
                .path("matchInfo");

            
            if (matchInfoNode.isObject()) {
                ObjectNode matchInfoObjectNode = (ObjectNode) matchInfoNode;
                // Update the state
                matchInfoObjectNode.put("state", "In Progress");
            }
            // System.out.println(matchInfoNode.toString());
            

            // Convert JSON object back to string
            String updatedmatchList = objectMapper.writeValueAsString(rootNode);

            // Print updated JSON string
            // System.out.println(updatedmatchList);

            return updatedmatchList;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

    @GetMapping("/preview-match-id")
    public String getPreviewMatch() {
        return "91740";
    }

}
