/**
 * @author Dr. Michael Menzel, Senacor Technologies AG
 */
describe('Flatmap Example', function () {

   it('that the stream is transformed', function (done) {

      Rx.Observable.from(["Michael Menzel", "Andreas Keefer"])
         .flatMap(function(name){
            return Rx.Observable.from(name.split(" "))
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