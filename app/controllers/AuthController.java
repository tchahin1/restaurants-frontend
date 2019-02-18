package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import services.AuthService;

import javax.inject.Inject;

public class AuthController extends Controller{

    @Inject
    private AuthService authService;

    public Result login(String username, String password) {
        // post request
        boolean login = authService.login(username, password);

        if (login)
            return redirect(controllers.routes.HomeController.hello());

        else
            return redirect(controllers.routes.HomeController.hello());
    }

    public Result register(String name, String last_name, String email, String phone_num, String country, String city, String password){
        boolean reg = authService.register(name, last_name, email, phone_num, country, city, password);
        if(reg) return redirect(controllers.routes.HomeController.login());
        return redirect(controllers.routes.HomeController.signup());
    }
}
