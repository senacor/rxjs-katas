/**
 * @author Dr. Michael Menzel, Senacor Technologies AG
 */
describe('Zip Example', function () {

   it('that streams are combined', function (done) {
      var obs1 = Rx.Observable.range(1,2);
      var obs2 = Rx.Observable.range(11,2);

      Rx.Observable.merge(obs1, obs2)
      .subscribe (
         function(next) {console.log("next: " + next) },
         function(error) {console.log("error: " + error) },
         function() {
            console.log("complete!");
            done();
         }
      );
   });


});