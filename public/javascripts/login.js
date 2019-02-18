$(document).ready(function(){

        $.ajax({
            url: 'http://localhost:8080/countries/all',
            type: 'get',
            dataType: 'json',
            success:function(response){

                var len = response.length;

                $("#country").empty();
                for( var i = 0; i<len; i++){
                    var id = response[i]['id'];
                    var name = response[i]['name'];

                    $("#country").append("<option value='"+id+"'>"+name+"</option>");

                }
            }
        });
});