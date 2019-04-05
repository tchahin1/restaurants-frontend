package controllers;

import akka.stream.impl.io.OutputStreamSourceStage;
import com.fasterxml.jackson.databind.JsonNode;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import services.AuthService;

import javax.inject.Inject;

public class AuthController extends Controller{

    @Inject
    private AuthService authService;

    public Result login(String username, String password) {

        JsonNode login = authService.login(username, password);

        if (login!=null) return ok(Json.toJson(login));

        else return badRequest("Register");
    }

    public Result register(String name, String last_name, String email, String phone_num, String country, String city, String password){
        JsonNode reg = authService.register(name, last_name, email, phone_num, country, city, password);
        if(reg!=null) return ok(Json.toJson(reg));
        return badRequest("Already exists");
    }
}
