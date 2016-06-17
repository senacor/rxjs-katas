/**
 * Kata 4 Transform Observable Solution
 * @author Dr. Michael Menzel
 */
$(document).ready(function(){
    $('#run').click(function(){

        var planeTypes = ["Boeing 777", "Boeing 747", "Boeing 737", "Airbus A330"];

        // 1) create an observable that emits the plane type
        // 2) use the wikipediaService to fetch an article (wikipediaService.fetchArticleObservable)
        // 3) use the wikipediaService.parseArticleInfo method to transform the article to an planeInfo object
        // 4) subscribe to the observable and print the plane information using output.logArticleInfo

        output.log(planeTypes);

    });

});