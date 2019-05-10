function makeReservation(){
    var token = window.localStorage.getItem("token");
    var date = $("#datepicker").val();
    var time = $("#timepicker").val();
    var username = window.localStorage.getItem("username");
    var restaurant = $("#restaurantName").text();
    //var type = $(".selectRes option:selected").text();
    var type = $(".selectRes").val();

    if(token!=null) {
        console.log(date);
        console.log(time);
        console.log(username);
        console.log(restaurant);
        console.log(type);
        $.ajax({
            url: 'https://abh-restaurants-backend.herokuapp.com/reservations/check/table',
            //url: 'https://localhost:8080/reservations/check/table',
            //url: 'http://localhost:8080/reservations/check/table',
            type: 'get',
            dataType: 'json',
            data: jQuery.param({date: date, time: time, username: username, restaurant: restaurant, type: type}),
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", token);
            },
            success: function (response) {
            },
            complete: function (response) {
                console.log(response.status);

                if (response.status == 200) {
                    $(".reservationProcess").append("<input type='button' id='reserveNow' onclick='reserveThisTable()' value='Reserve now'>");
                } else if (response.status == 400) {
                    $("#reservationQuery").text("");
                    $("#tablesLeft").text("");
                    $("#bestTime").text("");
                    $("#popUp").text("");
                    $("#popUp").css("color", "red");
                    $("#popUp").text("You already made a reservation for this table!");
                    $(".taken").show();
                    setTimeout(function () {
                        $(".taken").hide();
                    }, 2000);
                } else if (response.status == 409) {
                    var res = response["responseJSON"];
                    console.log(res);
                    for(var i=0; i<res.length; i++){
                        if(i==4) break;
                        var temp = res[i].split("T");
                        var time = temp[1];
                        var temp = time.split(":");
                        var hours = temp[0];
                        var minutes = temp[1];
                        var timeFrom = hours + ":" + minutes;
                        console.log(timeFrom);
                        $(".reservationProcess").append("<input type='button' class='removable' id='reserveNowTime' onclick='reserveThisTableTime()' value=" + timeFrom + ">");
                    }
                    /*$(".reservationProcess").append("<input type='button' class='removable' id='reserveNowTime' onclick='reserveThisTableTime()' value=" + timeFrom1 + ">");
                    $(".reservationProcess").append("<input type='button' class='removable' id='reserveNowTime' onclick='reserveThisTableTime()' value=" + timeFrom2 + ">");
                    $(".reservationProcess").append("<input type='button' class='removable' id='reserveNowTime' onclick='reserveThisTableTime()' value=" + timeFrom3 + ">");
                    $(".reservationProcess").append("<input type='button' class='removable' id='reserveNowTime' onclick='reserveThisTableTime()' value=" + timeFrom4 + ">");*/
                }
            }
        });
    }

    else{
        $("#popUp").text("");
        $("#popUp").css("color", "red");
        $("#popUp").text("Please log in to proceed!");
        $(".taken").show();
        setTimeout(function () {
            $(".taken").hide();
        }, 2000);
    }

    /*https://abh-restaurants-backend.herokuapp.com*/
}