function saveReview() {

    var token = window.localStorage.getItem("token");
    var username = window.localStorage.getItem("username");
    var restaurant = $("#restaurantName").text();

    var comment = $("#reviewText").val();

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

    $.ajax({
        url: 'http://localhost:8080/users/id',
        type: 'get',
        data: jQuery.param({username: username}),
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", token);
        },
        success:function(response){
            var user = response;

            $.ajax({
                url: 'http://localhost:8080/restaurants/name',
                type: 'get',
                dataType: 'json',
                data: jQuery.param({name: restaurant}),
                contentType: 'application/json',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader ("Authorization", token);
                },
                success: function (responseRest) {
                    var json = {
                        'user': user,
                        'comment': comment,
                        'restaurant': responseRest,
                        'rating': rating
                    };
                    $.ajax({
                        url: 'http://localhost:8080/reviews',
                        type: 'post',
                        dataType: 'json',
                        data: JSON.stringify(json),
                        contentType: 'application/json',
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader ("Authorization", token);
                        },
                        success: function (response) {
                        },
                        complete: function () {
                            $(".popupOuter").fadeOut("slow");
                        }
                    });
                }
            });

        }
    });
}