/**
 * @author Dr. Michael Menzel, Senacor Technologies AG
 */
describe('Buffer Example', function () {

   it('that the stream is transformed', function (done) {
      Rx.Observable.range(1,15)
         .bufferWithCount(5)
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