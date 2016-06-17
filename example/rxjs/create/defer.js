/**
 * @author Andreas Keefer
 */
describe('defer Example', function () {

   it('that observable is created', function (done) {
      var getValue = function() {
         console.log("getValue invoked");
         return "first";
      };

      Rx.Observable.defer(
         function() {
            return  Rx.Observable.just(getValue());
         }
      )
      .subscribe(
         function(next) {console.log("next: " + next) },
         function(error) {console.log("error: " + error) },
         function() {
            console.log("complete!");
            done();
         }
      );
   });

});