/**
 * Created by mmenzel on 16.05.2016.
 */

var summary = function() {
   var service = {};

   service.printCounter = function(planeNumber, numberBuild) {
      console.log("Article on Plane " + planeNumber + ". " + numberBuild + " planes have been build.\n");
   };

   service.printArticleInfo = function(articleInfo) {
      console.log("Article on Plane " + articleInfo.typeName + ". " + articleInfo.numberBuild + " planes have been build.\n");
   };

   service.createPrintCounter = function(planeNumber) {
      return function(numberBuild) {
         console.log("Article on Plane " + planeNumber + ". " + numberBuild + " planes have been build.\n");
      }
   };


   return service;
}();