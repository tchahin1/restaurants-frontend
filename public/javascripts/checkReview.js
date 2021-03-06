function checkReview() {
    var token = window.localStorage.getItem("token");
    var username = window.localStorage.getItem("username");
    var restname = $("#restaurantName").text();

    $.ajax({
        url: 'https://abh-restaurants-backend.herokuapp.com/reviews/check',
        //url: 'https://localhost:8080/reviews/check',
        //url: 'http://localhost:8080/reviews/check',
        type: 'get',
        dataType: 'json',
        data: jQuery.param({restaurant: restname, user: username}),
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", token);
        },
        complete: function (response) {
            console.log(response);
            if(response!=null && token!=null && response.status!=200 && response["responseJSON"]!=null) {
                $("#ratedYet").text("Your review: " + response["responseJSON"]["rating"] + "/5");
            }
            else if(token!=null && response.status==200 && response["responseJSON"]==null){
                $("#ratedYet").text("You haven't rated this place yet.");
            }
        }
    });
}