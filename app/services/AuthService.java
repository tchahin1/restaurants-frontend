package services;

import com.fasterxml.jackson.databind.JsonNode;
import models.UserLoginModel;
import models.UserModel;
import play.libs.Json;
import play.libs.ws.WSRequest;
import play.libs.ws.WSResponse;
import utils.RestService;

public class AuthService extends RestService {

    public JsonNode login(String username, String password) {

        WSRequest request = createRequest("/login");

        UserLoginModel userLoginModel = new UserLoginModel(username, password);
        JsonNode obj = Json.toJson(userLoginModel);

        JsonNode jsonNode = post(request, obj.toString());

        return jsonNode;
    }

    public JsonNode register(String name, String last_name, String email, String phone_num, String country, String city, String password) {


        WSRequest request = createRequest("/users/register");

        UserModel userModel = new UserModel(name, last_name, email, phone_num, country, city, password);
        JsonNode obj = Json.toJson(userModel);

        JsonNode jsonNode = post(request, obj.toString());

        JsonNode b = jsonNode;
        if(b!=null) return b;
        else return b;
    }
}
