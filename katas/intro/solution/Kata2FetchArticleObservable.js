/**
 * Kata 2 Fetch Article Observable Solution
 *
 * @author Dr. Michael Menzel
 */
$(document).ready(function(){
   $('#run').click(function(){

        var planeType = "Boeing 737";

        // 1) create an observable that emits the plane type
        Rx.Observable.just(planeType)
           // 2) use the wikipediaService to fetch an article (wikipediaService.fetchArticleObservable)
           .flatMap(wikipediaService.fetchArticleObservable)
           // 3) subscribe to the observable and print the article content
           .subscribe(
              function(article){
                 output.log("Article: ");
                 output.log(article);
              },
              function(error) {
                 output.log("error " + error)
              },
              function(){
                 output.log("complete!");
              }
           )

    });

});
