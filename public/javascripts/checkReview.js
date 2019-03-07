function checkReview() {
    var token = window.localStorage.getItem("token");
    var username = window.localStorage.getItem("username");
    var restname = $("#restaurantName").text();
    var res = null;

    $.ajax({
        url: 'http://localhost:8080/reviews/check',
        type: 'get',
        dataType: 'json',
        data: jQuery.param({restaurant: restname, user: username}),
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", token);
        },
        success: function (response) {
            res = response;
        },
        complete: function (response) {
            if(response!=null && token!=null && response.status!=200) {
                $("#ratedYet").text("Your review: " + response["responseJSON"]["rating"] + "/5");
            }
            else if(token!=null && response.status==200){
                $("#ratedYet").text("You haven't rated this place yet.");
            }
        }
    });
}