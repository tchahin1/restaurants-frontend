var counter = 0;

function findATable(){
    var peopleNum = $(".selectRes option:selected").text();
    var date = $("#datepicker").val();
    var time = $("#timepicker").val();

    if(peopleNum == "People") {
        $("#reservationQuery").text("No number of people provided!");
        $("#reservationQuery").css("color", "red");
    }

    else {
        $("#reservationQuery").text("");
        $("#reservationQuery").css("color", "black");
        $("#reservationQuery").text("Availability on " + date + " around " + time + " for " + peopleNum + " people:");

        var name = $("#restaurantName").text();
        var type = $(".selectRes option:selected").text();

        $.ajax({
            url: 'https://abh-restaurants-backend.herokuapp.com/tables/restaurant',
            type: 'get',
            data:jQuery.param({name: name, type: type}),
            dataType: 'json',
            success:function(response){
                $("#tablesLeft").text("");
                $("#tablesLeft").css("color", "gray");
                if(response == 1) $("#tablesLeft").append(response + " table left!");
                else $("#tablesLeft").append(response + " tables left!");

                makeReservation();
            }
        });
    }
}

/*if(response!=0 && counter==0) {
    $(".reservationProcess").append("<input type='button' id='reserveNow' onclick='reserveThisTable()' value='Reserve now'>");
    counter++;
}*/