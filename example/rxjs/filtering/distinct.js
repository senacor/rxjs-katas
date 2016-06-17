/**
 * @author Andreas Keefer
 */
describe('Distinct Example', function () {

   it('that observable is filtered', function (done) {
      Rx.Observable.from(["1", "2", "2", "3", "4", "5", "6", "5"])
         .distinct()
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