/**
 * Created by mmenzel on 16.05.2016.
 */

var output = function() {
   var service = {};

   service.log = function(text) {
      if( typeof text === "object") {
         text = JSON.stringify(text);
      }

      $("#output").append('<div>' + text + '</div>');
      console.log(text);
   };

   service.logArticleInfo = function(articleInfo) {
      service.log("Article on Plane " + articleInfo.typeName + ". " + articleInfo.numberBuild + " planes have been build.");
   };


   return service;
}();