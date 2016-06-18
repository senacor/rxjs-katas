/**
 * Kata 2 Transform Observable
 *
 * @author Dr. Michael Menzel
 */
$(document).ready(function(){
    $('#run').click(function(){

        var planeType = "Boeing 737";

        // 1) create an observable that emits the plane type
        // 2) use the wikipediaService to fetch an article (wikipediaService.fetchArticleObservable)
        // 3) subscribe to the observable and print the article content

        output.log(planeType);

    });

});