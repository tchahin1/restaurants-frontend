function searchRedirect() {
    var query = $("#searchQuery").val();
    window.location = '/restaurants/search?query=' + query;
}