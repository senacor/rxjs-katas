/**
 * @author Andreas Keefer
 */
describe('Filter Example', function () {

   it('that observable is filtered', function (done) {
      Rx.Observable.from(["1", "2", "3", "4", "5", "6"])
         .filter(function(value){
            return value % 2 === 0;
         })
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