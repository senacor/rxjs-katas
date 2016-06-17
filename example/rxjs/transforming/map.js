/**
 * @author Andreas Keefer
 */
describe('From Example', function () {

   it('that observable is created', function (done) {
      Rx.Observable.from(["Michael", "Andreas"])
         .map(function(firstName){
            return "vorname=" + firstName;
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