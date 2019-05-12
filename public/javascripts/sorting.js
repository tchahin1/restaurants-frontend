var res;

function sortFunction(response){
    res=response;
}

function sortIt(){
    //console.log("obj:" + res[0]["name"]);
    var sorting = $("#sortby").val();
    if(sorting == 1){
        var query = $("#loadQuery").text();
        var rating = 0;
        if ($('.star1').is('.checked')) {
            rating++;
        }
        if ($('.star2').is('.checked')) {
            rating++;
        }
        if ($('.star3').is('.checked')) {
            rating++;
        }
        if ($('.star4').is('.checked')) {
            rating++;
        }
        if ($('.star5').is('.checked')) {
            rating++;
        }

        var price = 0;
        if ($('.dollar1').is('.checked')) {
            price++;
        }
        if ($('.dollar2').is('.checked')) {
            price++;
        }
        if ($('.dollar3').is('.checked')) {
            price++;
        }
        if ($('.dollar4').is('.checked')) {
            price++;
        }
        var lat = Number(window.localStorage.getItem("lat"));
        var lng = Number(window.localStorage.getItem("lng"));


        $.ajax({
            url: 'https://abh-restaurants-backend.herokuapp.com/restaurants/sort',
            type: 'get',
            dataType: 'json',
            data: jQuery.param({query: query, lon: lng, lat: lat, pricing: price, rating: rating}),
            success:function(responseLocations){
                console.log(responseLocations);


                /*$("#row1").empty(); $("#row2").empty(); $("#row3").empty();

                for( var i = 0; i<3; i++){
                    var id = response[i]['id'];
                    var name = response[i]['name'];
                    var pictureUrl = response[i]['pictureUrl'];
                    var starString = "";
                    var starRatingChecked = '<span class="fa fa-star checked"></span>';
                    var starRating = '<span class="fa fa-star"></span>';
                    var stars = response[i]['stars'];
                    for(var j=0; j<5; j++){
                        if(stars!=0) {
                            starString+=starRatingChecked;
                            stars--;
                        }
                        else starString+=starRating;
                    }
                    var priceString = '<div class="pricing">';
                    var priceRatingChecked = '<span class="fa fa-dollar checked1"></span>';
                    var priceRating = '<span class="fa fa-dollar"></span>';
                    var price = response[i]['pricing'];
                    for(var j=0; j<4; j++){
                        if(price!=0) {
                            priceString+=priceRatingChecked;
                            price--;
                        }
                        else priceString+=priceRating;
                    }
                    priceString += '</div>';

                    $("#row1").append("<div class='col-lg-4 col-sm-6 col-xs-12 rowElement'><img id=\"picture\" src="+pictureUrl+" height=\"260px\" width=\"300px\"><br><p id='namePar'>"+name+"</p><br>"+starString+priceString+"<br><input type='submit' id='button' value='Reserve now' onclick='reserve()'></div>");
                }


                for( var i = 3; i<6; i++){
                    var id = response[i]['id'];
                    var name = response[i]['name'];
                    var starString = "";
                    var starRatingChecked = '<span class="fa fa-star checked"></span>';
                    var starRating = '<span class="fa fa-star"></span>';
                    var stars = response[i]['stars'];
                    for(var j=0; j<5; j++){
                        if(stars!=0) {
                            starString+=starRatingChecked;
                            stars--;
                        }
                        else starString+=starRating;
                    }
                    var priceString = '<div class="pricing">';
                    var priceRatingChecked = '<span class="fa fa-dollar checked1"></span>';
                    var priceRating = '<span class="fa fa-dollar"></span>';
                    var price = response[i]['pricing'];
                    for(var j=0; j<4; j++){
                        if(price!=0) {
                            priceString+=priceRatingChecked;
                            price--;
                        }
                        else priceString+=priceRating;
                    }
                    priceString += '</div>';

                    $("#row2").append("<div class='col-lg-4 col-sm-6 col-xs-12 rowElement'><img id=\"picture\" src="+pictureUrl+" height=\"260px\" width=\"300px\"><br><p id='namePar'>"+name+"</p><br>"+starString+priceString+"<br><input type='submit' id='button' value='Reserve now' onclick='reserve()'></div>");
                }


                for( var i = 6; i<9; i++){
                    var id = response[i]['id'];
                    var name = response[i]['name'];
                    var starString = "";
                    var starRatingChecked = '<span class="fa fa-star checked"></span>';
                    var starRating = '<span class="fa fa-star"></span>';
                    var stars = response[i]['stars'];
                    for(var j=0; j<5; j++){
                        if(stars!=0) {
                            starString+=starRatingChecked;
                            stars--;
                        }
                        else starString+=starRating;
                    }
                    var priceString = '<div class="pricing">';
                    var priceRatingChecked = '<span class="fa fa-dollar checked1"></span>';
                    var priceRating = '<span class="fa fa-dollar"></span>';
                    var price = response[i]['pricing'];
                    for(var j=0; j<4; j++){
                        if(price!=0) {
                            priceString+=priceRatingChecked;
                            price--;
                        }
                        else priceString+=priceRating;
                    }
                    priceString += '</div>';

                    $("#row3").append("<div class='col-lg-4 col-sm-6 col-xs-12 rowElement'><img id=\"picture\" src="+pictureUrl+" height=\"260px\" width=\"300px\"><br><p id='namePar'>"+name+"</p><br>"+starString+priceString+"<br><input type='submit' id='button' value='Reserve now' onclick='reserve()'></div>");
                }*/


            }
        });






        /*var response = new Array();
        var index = new Array();
        var distance = new Array();
        $.ajax({
            url: 'https://abh-restaurants-backend.herokuapp.com/locations/all',
            type: 'get',
            dataType: 'json',
            success:function(responseLocations){
                for(var i=0; i<res.length; i++){
                    for(var j=0; j<responseLocations.length; j++){
                        if(res[i]["id"]==responseLocations[j]["restaurant"]["id"]){
                            var x1 = lat;
                            var y1 = lng;
                            var x2 = responseLocations[j]["latitude"];
                            var y2 = responseLocations[j]["longitude"];
                            var d = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
                            distance.push(d);
                            index.push(res[i]);
                        }
                    }
                }
                for(var i=0; i<distance.length-1; i++){
                    var change = false;
                    for(var j=0; j<distance.length-1; j++){
                        if(distance[j]>distance[j+1]){
                            var tmp = distance[j];
                            distance[j] = distance[j+1];
                            distance[j+1] = tmp;
                            tmp = index[j];
                            index[j] = index[j+1];
                            index[j+1] = tmp;
                            change = true;
                        }
                    }
                    if(!change) break;
                }
                response = index;



                $("#row1").empty(); $("#row2").empty(); $("#row3").empty();

                for( var i = 0; i<3; i++){
                    var id = response[i]['id'];
                    var name = response[i]['name'];
                    var pictureUrl = response[i]['pictureUrl'];
                    var starString = "";
                    var starRatingChecked = '<span class="fa fa-star checked"></span>';
                    var starRating = '<span class="fa fa-star"></span>';
                    var stars = response[i]['stars'];
                    for(var j=0; j<5; j++){
                        if(stars!=0) {
                            starString+=starRatingChecked;
                            stars--;
                        }
                        else starString+=starRating;
                    }
                    var priceString = '<div class="pricing">';
                    var priceRatingChecked = '<span class="fa fa-dollar checked1"></span>';
                    var priceRating = '<span class="fa fa-dollar"></span>';
                    var price = response[i]['pricing'];
                    for(var j=0; j<4; j++){
                        if(price!=0) {
                            priceString+=priceRatingChecked;
                            price--;
                        }
                        else priceString+=priceRating;
                    }
                    priceString += '</div>';

                    $("#row1").append("<div class='col-lg-4 col-sm-6 col-xs-12 rowElement'><img id=\"picture\" src="+pictureUrl+" height=\"260px\" width=\"300px\"><br><p id='namePar'>"+name+"</p><br>"+starString+priceString+"<br><input type='submit' id='button' value='Reserve now' onclick='reserve()'></div>");
                }


                for( var i = 3; i<6; i++){
                    var id = response[i]['id'];
                    var name = response[i]['name'];
                    var starString = "";
                    var starRatingChecked = '<span class="fa fa-star checked"></span>';
                    var starRating = '<span class="fa fa-star"></span>';
                    var stars = response[i]['stars'];
                    for(var j=0; j<5; j++){
                        if(stars!=0) {
                            starString+=starRatingChecked;
                            stars--;
                        }
                        else starString+=starRating;
                    }
                    var priceString = '<div class="pricing">';
                    var priceRatingChecked = '<span class="fa fa-dollar checked1"></span>';
                    var priceRating = '<span class="fa fa-dollar"></span>';
                    var price = response[i]['pricing'];
                    for(var j=0; j<4; j++){
                        if(price!=0) {
                            priceString+=priceRatingChecked;
                            price--;
                        }
                        else priceString+=priceRating;
                    }
                    priceString += '</div>';

                    $("#row2").append("<div class='col-lg-4 col-sm-6 col-xs-12 rowElement'><img id=\"picture\" src="+pictureUrl+" height=\"260px\" width=\"300px\"><br><p id='namePar'>"+name+"</p><br>"+starString+priceString+"<br><input type='submit' id='button' value='Reserve now' onclick='reserve()'></div>");
                }


                for( var i = 6; i<9; i++){
                    var id = response[i]['id'];
                    var name = response[i]['name'];
                    var starString = "";
                    var starRatingChecked = '<span class="fa fa-star checked"></span>';
                    var starRating = '<span class="fa fa-star"></span>';
                    var stars = response[i]['stars'];
                    for(var j=0; j<5; j++){
                        if(stars!=0) {
                            starString+=starRatingChecked;
                            stars--;
                        }
                        else starString+=starRating;
                    }
                    var priceString = '<div class="pricing">';
                    var priceRatingChecked = '<span class="fa fa-dollar checked1"></span>';
                    var priceRating = '<span class="fa fa-dollar"></span>';
                    var price = response[i]['pricing'];
                    for(var j=0; j<4; j++){
                        if(price!=0) {
                            priceString+=priceRatingChecked;
                            price--;
                        }
                        else priceString+=priceRating;
                    }
                    priceString += '</div>';

                    $("#row3").append("<div class='col-lg-4 col-sm-6 col-xs-12 rowElement'><img id=\"picture\" src="+pictureUrl+" height=\"260px\" width=\"300px\"><br><p id='namePar'>"+name+"</p><br>"+starString+priceString+"<br><input type='submit' id='button' value='Reserve now' onclick='reserve()'></div>");
                }


            }
        });*/
    }
    else console.log("noup");
    //todo: empty rows and append new sorted elements
}