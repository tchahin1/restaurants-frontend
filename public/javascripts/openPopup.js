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







    $(".dollar1").hover(function(){
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "orangered");
        }
    }, function() {
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "gray");
        }
    });

    $(".dollar2").hover(function(){
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "orangered");
            $(".dollar1").css("color", "orangered");
        }
    }, function() {
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "gray");
            $(".dollar1").css("color", "gray");
        }
    });

    $(".dollar3").hover(function(){
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "orangered");
            $(".dollar1").css("color", "orangered");
            $(".dollar2").css("color", "orangered");
        }
    }, function() {
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "gray");
            $(".dollar1").css("color", "gray");
            $(".dollar2").css("color", "gray");
        }
    });

    $(".dollar4").hover(function(){
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "orangered");
            $(".dollar1").css("color", "orangered");
            $(".dollar2").css("color", "orangered");
            $(".dollar3").css("color", "orangered");
        }
    }, function() {
        if(!$(this).hasClass("checked")) {
            $(this).css("color", "gray");
            $(".dollar1").css("color", "gray");
            $(".dollar2").css("color", "gray");
            $(".dollar3").css("color", "gray");
        }
    });

    $(".dollar1").click(function(){
        $(this).removeClass("checked");
        $(this).addClass("checked");
    });

    $(".dollar2").click(function(){
        $(this).removeClass("checked");
        $(".dollar1").removeClass("checked");
        $(this).addClass("checked");
        $(".dollar1").addClass("checked");
    });

    $(".dollar3").click(function(){
        $(this).removeClass("checked");
        $(".dollar1").removeClass("checked");
        $(".dollar2").removeClass("checked");
        $(this).addClass("checked");
        $(".dollar1").addClass("checked");
        $(".dollar2").addClass("checked");
    });

    $(".dollar4").click(function(){
        $(this).removeClass("checked");
        $(".dollar1").removeClass("checked");
        $(".dollar2").removeClass("checked");
        $(".dollar3").removeClass("checked");
        $(this).addClass("checked");
        $(".dollar1").addClass("checked");
        $(".dollar2").addClass("checked");
        $(".dollar3").addClass("checked");
    });
});