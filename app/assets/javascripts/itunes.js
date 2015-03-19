var item_template =
"<div class='item'>" +
  "<img src='_artworkUrl60' alt=''>" +
  "<div>_trackName</div>" +
  "<div><a href='_previewUrl'>Preview</a></div>"
"</div>"

var ITUNES_URL = "https://itunes.apple.com/search?media=movie&country=US&term="
$(function(){
  $("#search-btn").click(function(){
    var term = $("#search").val();
    if(term !== ''){
      $.ajax({
        url: ITUNES_URL + term,

        // The name of the callback parameter, as specified by the YQL service
        jsonp: "callback",

        // Tell jQuery we're expecting JSONP
        dataType: "jsonp",

        // Tell YQL what we want and that we want JSON
        data: {
        },

        // Work with the response
        success: function( response ) {
          var items = response.results;
          var results = $('#results');
          for(var i = 0; i < items.length; i++) {
            var template = item_template;
            for(var prop in items[i]){
              if(items[i].hasOwnProperty(prop)) {
                template = template.replace('_'+prop, items[i][prop]);
              }
            }
            results.append(template);
          }
        }
      });
    }
  })
})