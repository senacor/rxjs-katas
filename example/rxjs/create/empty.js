/**
 * @author Andreas Keefer
 */
describe('empty Example', function () {

   it('that observable is created', function (done) {
      Rx.Observable.empty()
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