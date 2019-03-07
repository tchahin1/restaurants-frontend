var imgs = ['/assets/images/Pizza-capricciosa.jpg', '/assets/images/dessert_image.jpg', '/assets/images/salad_image.jpg'];
var titles = ['Best pizza of 2016', 'Choco pancakes', 'Chicken salad'];

function changeImage(dir) {
    var img = $("#imgClickAndChange");
    var par = $("#parClickAndChange");
    console.log(img.attr('src'));
    var newSrc = imgs[imgs.indexOf(img.attr('src')) + (dir || 1)] || imgs[dir ? imgs.length - 1 : 0];
    var text = titles[titles.indexOf(par.text()) + (dir || 1)] || titles[dir ? titles.length - 1 : 0];
    img.attr('src', newSrc);
    par.text(text);
}

$(document).ready(function(){
    $("#leftArrow").click(function(){
        console.log("clicked");
        changeImage(-1)
    });

    $("#rightArrow").click(function(){
        console.log("clicked");
        changeImage()
    });
});