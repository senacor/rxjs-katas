/**
 * Kata 4 Transform Observable Solution
 * @author Dr. Michael Menzel
 */
$(document).ready(function(){
   $('#run').click(function(){

        var planeTypes = ["Boeing 777", "Boeing 747", "Boeing 737", "Airbus A330", "Airbus A320 family"];

        // reduces plane information by summing up the build counter
        var sumPlaneInfo = function(planeInfoSum, planeInfo){
            planeInfoSum.numberBuild += planeInfo.numberBuild;
            planeInfoSum.typeName += ", " + planeInfo.typeName;
            return planeInfoSum;
         };

        // 1) create an observable that emits the plane type
        Rx.Observable.from(planeTypes)
           // 2) use the wikipediaService to fetch an article (wikipediaService.fetchArticleObservable)
           .flatMap(wikipediaService.fetchArticleObservable)
           // 3) use the wikipediaService.parseArticleInfo method to transform the article to an planeInfo object
           .map(wikipediaService.parseArticleInfo)
           // 4) sum build count of all planes
           .reduce(sumPlaneInfo)
           // 5) subscribe to the observable and print the build count using output.logArticleInfo
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
