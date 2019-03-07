package services;

import com.fasterxml.jackson.databind.JsonNode;
import play.libs.Json;
import play.libs.ws.WSRequest;
import play.libs.ws.WSResponse;
import utils.RestService;

public class SearchService extends RestService{
    public JsonNode search(String name){
        WSRequest request = createRequest("/restaurants/search?query=" + name + "&page=0&size=9");

        JsonNode jsonNode = get(request);

        return jsonNode;
    }

    public JsonNode search_Page(String name, Integer pageNum){
        WSRequest request = createRequest("/restaurants/search?query=" + name + "&page=" + pageNum + "&size=9");

        JsonNode jsonNode = get(request);

        return jsonNode;
    }

    public JsonNode search_PageFilter(String name, Integer filterStars, Integer filterPricing, Integer pageNum){
        WSRequest request = createRequest("/restaurants/search/filterBy?query=" + name + "&stars=" + filterStars + "&pricing=" + filterPricing + "&page=" + pageNum + "&size=9");

        JsonNode jsonNode = get(request);

        return jsonNode;
    }
}
