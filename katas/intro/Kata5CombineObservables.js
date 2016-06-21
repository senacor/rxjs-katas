/**
 * Kata 4 Transform Observable Solution
 * @author Dr. Michael Menzel
 */
$(document).ready(function(){
   $('#run').click(function(){

        var planeType777 = "Boeing 777";
        var planeType747 = "Boeing 747";


      // 1) create a function getPlaneInfo(planeType) that returns an Observable of article infos
            // 1a) create an observable that emits the plane type
            // 1b) use the wikipediaService to fetch an article (wikipediaService.fetchArticleObservable)
            // 1c) use the wikipediaService.parseArticleInfo method to transform the article to an planeInfo object
      // 2) use the getPlaneInfo function to create observables for planeType777 and planeType747
      // 3) combine the observables to one observable that emits plane info object {numberBuild: ..., typeName:...} with the summed numberBuild
      // 4) subscribe to the observable to print the article with output.logArticleInfo

      output.log(planeType777 + " " + planeType747);
    });

});
