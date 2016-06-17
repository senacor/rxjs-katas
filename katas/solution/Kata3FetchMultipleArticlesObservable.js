/**
 * Kata 3 Fetch Multiple Article Solution
 *
 * @author Dr. Michael Menzel
 */
$(document).ready(function(){
   $('#run').click(function(){

        var planeTypes = ["Boeing 777", "Boeing 747", "Boeing 737", "Airbus A330", "Airbus A320 family"];

        // 1) create an observable that emits the plane type
        Rx.Observable.from(planeTypes)
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
