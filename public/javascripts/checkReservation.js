var token = window.localStorage.getItem("token");
var username = window.localStorage.getItem("username");

function checkReservation(restname) {
    $.ajax({
        url: 'http://localhost:8080/reservations/check',
        type: 'get',
        dataType: 'json',
        data: jQuery.param({restaurant: restname, user: username}),
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", token);
        },
        complete: function (response) {
            console.log(response);
            if(response!=null && token!=null && response.status != 200){
                var res = response["responseJSON"];
                var tableFor = res["table"]["type"];
                var timeFrom = res["timeFrom"].split("T");
                var date = timeFrom[0];
                var time = timeFrom[1];
                $("#reservedYet").text("Your reservation: For " + tableFor + " people on " + date + " at " + time);
            }
            else if(token!=null && response.status==200){
                $("#reservedYet").text("You haven't reserved any tables yet.");
            }
        }
    });
}


/*url: 'http://localhost:8080/reservations/check',*/