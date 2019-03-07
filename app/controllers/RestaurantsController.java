package controllers;

import play.mvc.Controller;
import play.mvc.Result;


public class RestaurantsController extends Controller {
    public Result singlePage(String name){
        return ok(views.html.single_page.render(name));
    }

    public Result restaurantsSearch(Integer pageNum, Integer stars, Integer price, String query){
        return ok(views.html.restaurants.render(query, stars, price, pageNum));
    }

    public Result restaurantsSearchPage(Integer pageNum, Integer filterByStars, Integer filterByPrice, String query){
        return ok(views.html.restaurants.render(query, filterByStars, filterByPrice, pageNum));
    }
}
