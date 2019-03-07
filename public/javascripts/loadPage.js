function loadPage(pageNum){

    var query = $("#loadQuery").text();
    var starsFilter = $("#filterStars").val();
    var priceFilter = $("#filterPrice").val();

    if(starsFilter!=-1 || priceFilter!=-1){
        window.location = '/restaurants/search/page?pageNum=' + pageNum + "&filterByStars=" + starsFilter + "&filterByPrice=" + priceFilter + '&query=' + query;
    }

    else{
        window.location = '/restaurants/search/page?pageNum=' + pageNum + '&query=' + query;
    }
}