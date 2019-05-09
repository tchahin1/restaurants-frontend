function searchRedirect() {
    var query = $("#searchQuery").val();
    var number = $("#pageNumber").val();

    var filterStars = 0;
    var filterPrice = 0;
    var checkedArray = [];

    $("input:radio:checked").each(function(){
        checkedArray.push($(this).val());
    });

    for(var i=0; i<checkedArray.length; i++) {
        if (checkedArray[i] <= 5) filterStars = checkedArray[i];
        else filterPrice = checkedArray[i] - 5;
    }

    if(number == 0 && checkedArray.length != 0){
        $.ajax({
            //url: 'https://abh-restaurants-backend.herokuapp.com/restaurants/search/filterBy',
            url: 'https://localhost:8080/restaurants/search/filterBy',
            //url: 'http://localhost:8080/restaurants/search/filterBy',
            type: 'get',
            dataType: 'json',
            data: jQuery.param({query: query, pricing: filterPrice, stars: filterStars, page: 0, size: 9}),
            success: function (responsePage) {
                var response = responsePage["content"];

                sortFunction(response);

                $("#row1").empty(); $("#row2").empty(); $("#row3").empty(); $(".pageNumbers").empty();

                var totalPageNum = responsePage["totalPages"];
                for (var i = 0; i < totalPageNum; i++) {
                    var num = i + 1;
                    $(".pageNumbers").append("<button value=" + num + " onclick='loadPage($(this).attr(\"value\"))' id='pageNumButton'>" + num + "</button>")
                }

                var length1;
                if (response.length <= 3) length1 = response.length;
                else length1 = 3;
                for (var i = 0; i < length1; i++) {
                    var id = response[i]['id'];
                    var name = response[i]['name'];
                    var pictureUrl = response[i]['pictureUrl'];
                    var starString = "";
                    var starRatingChecked = '<span class="fa fa-star checked"></span>';
                    var starRating = '<span class="fa fa-star"></span>';
                    var stars = response[i]['stars'];
                    for (var j = 0; j < 5; j++) {
                        if (stars != 0) {
                            starString += starRatingChecked;
                            stars--;
                        } else starString += starRating;
                    }
                    var priceString = '<div class="pricing">';
                    var priceRatingChecked = '<span class="fa fa-dollar checked1"></span>';
                    var priceRating = '<span class="fa fa-dollar"></span>';
                    var price = response[i]['pricing'];
                    for (var j = 0; j < 4; j++) {
                        if (price != 0) {
                            priceString += priceRatingChecked;
                            price--;
                        } else priceString += priceRating;
                    }
                    priceString += '</div>';

                    $("#row1").append("<div class='col-lg-4 col-sm-6 col-xs-12 rowElement'><img id=\"picture\" src=" + pictureUrl + " height=\"260px\" width=\"300px\"><br><p id='namePar'>" + name + "</p><br>" + starString + priceString + "<br><input type='submit' id='button' value='Reserve now' onclick='reserve()'></div>");
                }

                var length2;
                if (response.length > 3 && response.length <= 6) length2 = response.length;
                else length2 = 6;
                for (var i = 3; i < length2; i++) {
                    var id = response[i]['id'];
                    var name = response[i]['name'];
                    var starString = "";
                    var starRatingChecked = '<span class="fa fa-star checked"></span>';
                    var starRating = '<span class="fa fa-star"></span>';
                    var stars = response[i]['stars'];
                    for (var j = 0; j < 5; j++) {
                        if (stars != 0) {
                            starString += starRatingChecked;
                            stars--;
                        } else starString += starRating;
                    }
                    var priceString = '<div class="pricing">';
                    var priceRatingChecked = '<span class="fa fa-dollar checked1"></span>';
                    var priceRating = '<span class="fa fa-dollar"></span>';
                    var price = response[i]['pricing'];
                    for (var j = 0; j < 4; j++) {
                        if (price != 0) {
                            priceString += priceRatingChecked;
                            price--;
                        } else priceString += priceRating;
                    }
                    priceString += '</div>';

                    $("#row2").append("<div class='col-lg-4 col-sm-6 col-xs-12 rowElement'><img id=\"picture\" src=" + pictureUrl + " height=\"260px\" width=\"300px\"><br><p id='namePar'>" + name + "</p><br>" + starString + priceString + "<br><input type='submit' id='button' value='Reserve now' onclick='reserve()'></div>");
                }

                var length3;
                if (response.length > 6 && response.length <= 9) length3 = response.length;
                for (var i = 6; i < length3; i++) {
                    var id = response[i]['id'];
                    var name = response[i]['name'];
                    var starString = "";
                    var starRatingChecked = '<span class="fa fa-star checked"></span>';
                    var starRating = '<span class="fa fa-star"></span>';
                    var stars = response[i]['stars'];
                    for (var j = 0; j < 5; j++) {
                        if (stars != 0) {
                            starString += starRatingChecked;
                            stars--;
                        } else starString += starRating;
                    }
                    var priceString = '<div class="pricing">';
                    var priceRatingChecked = '<span class="fa fa-dollar checked1"></span>';
                    var priceRating = '<span class="fa fa-dollar"></span>';
                    var price = response[i]['pricing'];
                    for (var j = 0; j < 4; j++) {
                        if (price != 0) {
                            priceString += priceRatingChecked;
                            price--;
                        } else priceString += priceRating;
                    }
                    priceString += '</div>';

                    $("#row3").append("<div class='col-lg-4 col-sm-6 col-xs-12 rowElement'><img id=\"picture\" src=" + pictureUrl + " height=\"260px\" width=\"300px\"><br><p id='namePar'>" + name + "</p><br>" + starString + priceString + "<br><input type='submit' id='button' value='Reserve now' onclick='reserve()'></div>");
                }

                $("#filterStars").val(filterStars);
                $("#filterPrice").val(filterPrice);
                if(query=="") $("#loadQuery").text("");
            }
        });
    }

    else {
        window.location = '/restaurants/search?query=' + query;
    }
}