package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import services.SearchService;

import javax.inject.Inject;

public class SearchController extends Controller {

    @Inject
    private SearchService searchService;

    public Result search(String name) {
        JsonNode res = searchService.search(name);

        if (res!=null) return ok(Json.toJson(res));

        else return ok();
    }

    public Result searchPage(String name, Integer pageNum) {
        pageNum=pageNum-1;
        JsonNode res = searchService.search_Page(name, pageNum);

        if (res!=null) return ok(Json.toJson(res));

        else return ok();
    }

    public Result searchPageFilter(String name, Integer filterStars, Integer filterPricing, Integer pageNum) {
        pageNum=pageNum-1;
        JsonNode res = searchService.search_PageFilter(name, filterStars, filterPricing, pageNum);

        if (res!=null) return ok(Json.toJson(res));

        else return ok();
    }
}
