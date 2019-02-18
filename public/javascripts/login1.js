$(document).ready(function(){

    $("#country").change(function(){
        var countryid = $(this).val();
        var countryName = $(this).text();

        $.ajax({
            url: 'http://localhost:8080/cities/country',
            type: 'get',
            data: {id: countryid, name: countryName},
            dataType: 'json',
            success:function(response){

                var len = response.length;

                $("#city").empty();
                for( var i = 0; i<len; i++){
                    var id = response[i]['id'];
                    var name = response[i]['name'];

                    $("#city").append("<option value='"+id+"'>"+name+"</option>");

                }
            }
        });
    });

});