function openPopup(){
    $(".popupOuter").fadeIn("slow");
};

$(document).ready(function(){

    $(".close").click(function(){
        $(".popupOuter").fadeOut("slow");
    });

    $(".star1").hover(function(){
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "orangered");
        }
    }, function() {
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "gray");
        }
    });

    $(".star2").hover(function(){
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "orangered");
            $(".star1").css("color", "orangered");
        }
    }, function() {
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "gray");
            $(".star1").css("color", "gray");
        }
    });

    $(".star3").hover(function(){
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "orangered");
            $(".star1").css("color", "orangered");
            $(".star2").css("color", "orangered");
        }
    }, function() {
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "gray");
            $(".star1").css("color", "gray");
            $(".star2").css("color", "gray");
        }
    });

    $(".star4").hover(function(){
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "orangered");
            $(".star1").css("color", "orangered");
            $(".star2").css("color", "orangered");
            $(".star3").css("color", "orangered");
        }
    }, function() {
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "gray");
            $(".star1").css("color", "gray");
            $(".star2").css("color", "gray");
            $(".star3").css("color", "gray");
        }
    });

    $(".star5").hover(function(){
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "orangered");
            $(".star1").css("color", "orangered");
            $(".star2").css("color", "orangered");
            $(".star3").css("color", "orangered");
            $(".star4").css("color", "orangered");
        }
    }, function() {
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "gray");
            $(".star1").css("color", "gray");
            $(".star2").css("color", "gray");
            $(".star3").css("color", "gray");
            $(".star4").css("color", "gray");
        }
    });

    $(".star1").click(function(){
        $(this).removeClass("checked");
        $(this).addClass("checked");
    });

    $(".star2").click(function(){
        $(this).removeClass("checked");
        $(".star1").removeClass("checked");
        $(this).addClass("checked");
        $(".star1").addClass("checked");
    });

    $(".star3").click(function(){
        $(this).removeClass("checked");
        $(".star1").removeClass("checked");
        $(".star2").removeClass("checked");
        $(this).addClass("checked");
        $(".star1").addClass("checked");
        $(".star2").addClass("checked");
    });

    $(".star4").click(function(){
        $(this).removeClass("checked");
        $(".star1").removeClass("checked");
        $(".star2").removeClass("checked");
        $(".star3").removeClass("checked");
        $(this).addClass("checked");
        $(".star1").addClass("checked");
        $(".star2").addClass("checked");
        $(".star3").addClass("checked");
    });

    $(".star5").click(function(){
        $(this).removeClass("checked");
        $(".star1").removeClass("checked");
        $(".star2").removeClass("checked");
        $(".star3").removeClass("checked");
        $(".star4").removeClass("checked");
        $(this).addClass("checked");
        $(".star1").addClass("checked");
        $(".star2").addClass("checked");
        $(".star3").addClass("checked");
        $(".star4").addClass("checked");
    });
});