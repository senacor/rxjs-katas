/**
 * Kata 1 Create Observable Solution
 *
 * @author Dr. Michael Menzel
 */
$(document).ready(function(){
   $('#run').click(function(){

        var planeType = "Boeing 737";

        // 1) create an observable that emits the plane type
        var obs = Rx.Observable.just(planeType);


        // 2) subscribe to the observable and print the plane type
        obs.subscribe(
           function(next){
              output.log("next " + next);
           },
           function(error) {
              output.log("error " + error)
           },
           function(){
              output.log("complete!");

           }
        );
   })
});
