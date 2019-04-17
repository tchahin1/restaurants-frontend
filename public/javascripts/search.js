function search() {
    var query = $("#searchQuery").val();
    console.log(query);

    $.ajax({
        url: 'http://localhost:9000/search',
        type: 'get',
        dataType: 'json',
        data: jQuery.param({name: query}),
        success: function (response) {
            console.log(response);

            sortFunction(response);

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
    });
}