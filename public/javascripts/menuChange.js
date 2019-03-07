//$(document).

    function breakfastClicked(){
        $(".breakfastButton").css("color", "white");
        $(".breakfastButton").css("background-color", "#fd6f60");
        $(".lunchButton").css("color", "#fd6f60");
        $(".lunchButton").css("background-color", "white");
        $(".dinnerButton").css("color", "#fd6f60");
        $(".dinnerButton").css("background-color", "white");
        $(".breakfast").css("display", "inherit");
        $(".lunch").css("display", "none");
        $(".dinner").css("display", "none");
    }

    function lunchClicked(){
        $(".lunchButton").css("color", "white");
        $(".lunchButton").css("background-color", "#fd6f60");
        $(".breakfastButton").css("color", "#fd6f60");
        $(".breakfastButton").css("background-color", "white");
        $(".dinnerButton").css("color", "#fd6f60");
        $(".dinnerButton").css("background-color", "white");
        $(".breakfast").css("display", "none");
        $(".lunch").css("display", "inherit");
        $(".dinner").css("display", "none");
    }

    function dinnerClicked(){
        $(".dinnerButton").css("color", "white");
        $(".dinnerButton").css("background-color", "#fd6f60");
        $(".breakfastButton").css("color", "#fd6f60");
        $(".breakfastButton").css("background-color", "white");
        $(".lunchButton").css("color", "#fd6f60");
        $(".lunchButton").css("background-color", "white");
        $(".breakfast").css("display", "none");
        $(".lunch").css("display", "none");
        $(".dinner").css("display", "inherit");
    }