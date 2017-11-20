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





        });

    })( jQuery );