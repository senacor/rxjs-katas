/**
 * Kata 3 Fetch Multiple Article Solution
 *
 * @author Dr. Michael Menzel
 */

$(document).ready(function(){
    $('#run').click(function(){

        var planeTypes = ["Boeing 777", "Boeing 747", "Boeing 737", "Airbus A330", "Airbus A320 family"];

        // 1) create an observable that emits the plane type
        // 2) use the wikipediaService to fetch an article (wikipediaService.fetchArticleObservable)
        // 3) subscribe to the observable and print the article content

        output.log(planeTypes);

    });

});