// get children count element
    (function($) {
        "use strict";

        $(document).ready(function(){
            function explode_tribe(){
                var geoResults = document.querySelector("#tribe-geo-results");
                if(geoResults.children.length <= 0){
                    $('#tribe-events-footer').remove();
                    $('#tribe-events-content .tribe-events-button').remove();
                    console.log('has children: ', geoResults.children.length > 0)


                }
            }

            setTimeout(explode_tribe, 6000);
	// get and replace url param
           function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        var param_url = getParameterByName('tribe_paged'); // "lorem"
        param_url = parseInt(param_url, 10);

        var url_tribe = 'tribe_paged=';
        var my_url = window.location.href;

        $(document).on('click', '.tribe_map_paged', function(){

            if(!isNaN(param_url) && param_url >= 1){
                param_url++;
            } else{
                param_url = 2;
            }

            if(param_url > 2){
                var newText = my_url.replace(/(tribe_paged=).*?(&)/,'$1' + param_url + '$2');
                window.location = newText;
            } else{
                window.location = my_url + '&' + url_tribe  + param_url + '&';
            }
            $("#tribe-events-content").remove();
        });

        $(document).on('click', '.tribe_map_paged_previous', function(){

            if( param_url >= 2 ){
                param_url = param_url - 1;

                var newText = my_url.replace(/(tribe_paged=).*?(&)/,'$1' + param_url + '$2');
            } else{
                var newText = my_url.replace(/(tribe_paged=).*?(&)/,'$1' + '1' + '$2');
            }

            window.location = newText;
            $("#tribe-events-content").remove();


        });





        });

    })( jQuery );