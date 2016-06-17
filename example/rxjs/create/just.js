/**
 * @author Andreas Keefer
 */
describe('just Example', function () {

   it('that observable is created', function (done) {
      Rx.Observable.just("first")
         .subscribe(
            function(next) {console.log("next: " + next) },
            function(error) {console.log("error: " + error) },
            function() {
               console.log("complete!");
               done();
            }
         );
   });

   it('that observable is created with function', function (done) {
      var getValue = function() {
         console.log("getValue invoked");
         return "first";
      };

      var obs = Rx.Observable.just(getValue());
      console.log("Observable created");
      obs.subscribe(
         function(next) {console.log("next: " + next) },
         function(error) {console.log("error: " + error) },
         function() {
            console.log("complete!");
            done();
         }
      );
   });
});