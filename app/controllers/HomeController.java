package controllers;

import play.mvc.*;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    /*public Result index() {
        return ok(views.html.index.render());
    }*/
    
    public Result explore() {
        return ok(views.html.explore.render());
    }

    public Result home() { return ok(views.html.home.render()); }

    public Result login() { return ok(views.html.login.render()); }

    public Result signup() { return ok(views.html.signup.render()); }

    public Result index() { return ok(views.html.index.render()); }

    public Result admin() { return ok(views.html.admin.homeAdmin.render()); }

    public Result usersAdmin() { return ok(views.html.admin.usersAdmin.render()); }

    public Result categoriesAdmin() { return ok(views.html.admin.categoriesAdmin.render()); }

    public Result locationsAdmin() { return ok(views.html.admin.locationsAdmin.render()); }

    public Result restaurantsAdmin() { return ok(views.html.admin.restaurantsAdmin.render()); }

    public Result addUserAdmin() { return ok(views.html.admin.userAdmin.render()); }

    public Result addLocationAdmin() { return ok(views.html.admin.locationAdmin.render()); }

    public Result addCategoryAdmin() { return ok(views.html.admin.categoryAdmin.render()); }

    public Result addRestaurantAdmin() { return ok(views.html.admin.restaurantAdmin.render()); }

    public Result addMenuAdmin() { return ok(views.html.admin.restaurantMenu.render()); }

    public Result addTableAdmin() { return ok(views.html.admin.restaurantTable.render()); }

    public Result editUserAdmin(String email) { return ok(views.html.admin.editUserAdmin.render(email)); }

    public Result editLocationAdmin(String name) { return ok(views.html.admin.editLocationAdmin.render(name)); }

    public Result editCategoryAdmin(String name) { return ok(views.html.admin.editCategoryAdmin.render(name)); }

    //public Result editRestaurantAdmin(String name) { return ok(views.html.admin.editRestaurantAdmin.render(name)); }

    //public Result editMenuAdmin() { return ok(views.html.admin.restaurantMenu.render()); }

    //public Result editTableAdmin(String name) { return ok(views.html.admin.restaurantTable.render()); }

    //public Result singlePage() { return ok(views.html.single_page.render()); }
}
