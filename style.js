// JavaScript File
$(document).ready(function(){
    $("form").on("submit",function(event){
        event.preventDefault();
        var gif = document.getElementById('gif').value;
        console.log(gif);
        // call the api with 'gif' as your query then console.log the response
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search",
            data: {
                q: gif,
                api_key: "dc6zaTOxFJmzC"
            },
            success: function(response){
                console.log('RESPONSE', response.data);
                var gifs = response.data;
                // for (i=0; i< gifs.length; i++ ) {
                //     var url = gifs[i].images.fixed_height.url;
                //     $('body').append('<img src="'+ url + '"/>')
                // }
                   for(g=0; g<gifs.length; g++) {
                     var url = gifs[g].images.fixed_height.url;
                     $("body").append('<img src="'+ url + '"/>')
                       
                   }
            }
            
        })
    })
    
    
})