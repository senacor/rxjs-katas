/**
 * @author Dr. Michael Menzel, Senacor Technologies AG
 */
describe('Zip Example', function () {

   it('that streams are combined', function (done) {
      var obsFirstName = Rx.Observable.from(["Michael", "Andreas"]);
      var obsLastName = Rx.Observable.from(["Menzel", "Keefer"]);

      Rx.Observable.zip(obsFirstName, obsLastName, function (firstName, lastName) {
         return firstName + " " + lastName;
      })
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