/**
 * Kata 4 Transform Observable Solution
 * @author Dr. Michael Menzel
 */
$(document).ready(function(){
   $('#run').click(function(){

        var planeType777 = "Boeing 777";
        var planeType747 = "Boeing 747";

        // reduces plane information by summing up the build counter
        var combinePlaneInfo = function(planeInfo1, planeInfo2){
           return {
              numberBuild: planeInfo1.numberBuild + planeInfo2.numberBuild,
              typeName: planeInfo1.typeName + " and " + planeInfo2.typeName
           }
         };

      // 1) create a function getPlaneInfo(planeType) that returns an Observable of article infos
      var getPlaneInfo = function(planeType) {
            // 1a) create an observable that emits the plane type
         return Rx.Observable.just(planeType)
            // 1b) use the wikipediaService to fetch an article (wikipediaService.fetchArticleObservable)
            .flatMap(wikipediaService.fetchArticleObservable)
            // 1c) use the wikipediaService.parseArticleInfo method to transform the article to an planeInfo object
            .map(wikipediaService.parseArticleInfo)
      };



      // 2) use the getPlaneInfo function to create observables for planeType777 and planeType747
      var obsPlaneInfo777  = getPlaneInfo(planeType777);
      var obsPlaneInfo747  = getPlaneInfo(planeType747);

      //3) combine the observables to one observable that emits plane info object {numberBuild: ..., typeName:...} with the summed numberBuild
      Rx.Observable.zip(obsPlaneInfo777, obsPlaneInfo747, combinePlaneInfo)
      //4) subscribe to the observable to print the article with output.logArticleInfo
           .subscribe(
              output.logArticleInfo,
              function(error) {
                  output.log("error " + error)
              },
              function(){
                 output.log("complete!");
              }
           )

    });

});
