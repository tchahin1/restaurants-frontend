package utils;

import java.util.concurrent.CompletionStage;

import javax.inject.Inject;

import com.fasterxml.jackson.databind.JsonNode;

import play.Logger;
import play.libs.ws.WSClient;
import play.libs.ws.WSRequest;
import play.libs.ws.WSResponse;

import play.libs.Json;

public class RestService {

    private static final String APP_JSON = "application/json";

    @Inject WSClient ws;

    protected WSRequest createRequest(String serviceUrl) {
        return ws.url("http://localhost:8080" + serviceUrl);
    }

    protected WSRequest createFullPathRequest(String serviceUrl) {
        return ws.url(serviceUrl);
    }

    protected String getBody(WSRequest wsRequest) {
        CompletionStage<String> stringCompletionStage = wsRequest.get().thenApply(WSResponse::getBody);

        try {
            return stringCompletionStage.toCompletableFuture().get();
        } catch (Exception e) {
            Logger.error("Error parsing response body.", e);
        }
        return null;
    }

    protected JsonNode get(WSRequest wsRequest) {

        CompletionStage<JsonNode> jsonPromise = wsRequest.get().thenApply(WSResponse::asJson);

        return parsePromise(jsonPromise);
    }

    protected void voidGet(WSRequest wsRequest) {
        wsRequest.get();
    }

    protected JsonNode post(WSRequest wsRequest, String jsonString) {
        CompletionStage<JsonNode> jsonPromise = wsRequest
                .setContentType(APP_JSON)
                .post(jsonString)
                .thenApply(WSResponse::asJson);

        return parsePromise(jsonPromise);
    }

    protected void voidPost(WSRequest wsRequest, String jsonString) {
        wsRequest.setContentType(APP_JSON).post(jsonString);
    }

    protected JsonNode put(WSRequest wsRequest, String jsonString) {
        CompletionStage<JsonNode> jsonPromise = wsRequest
                .setContentType(APP_JSON)
                .put(jsonString)
                .thenApply(WSResponse::asJson);

        return parsePromise(jsonPromise);
    }

    protected void voidPut(WSRequest wsRequest, String jsonString) {
        wsRequest.setContentType(APP_JSON).put(jsonString);
    }

    protected JsonNode delete(WSRequest wsRequest) {
        CompletionStage<JsonNode> jsonPromise = wsRequest
                .setContentType(APP_JSON)
                .delete()
                .thenApply(WSResponse::asJson);

        return parsePromise(jsonPromise);
    }

    protected void voidDelete(WSRequest wsRequest) {
        wsRequest.setContentType(APP_JSON).delete();
    }

    private JsonNode parsePromise(CompletionStage<JsonNode> jsonPromise) {

        try {
            return jsonPromise.toCompletableFuture().get();
        } catch (Exception e) {
            Logger.error("Failed parsing json promise.", e);
        }

        return null;
    }
}
