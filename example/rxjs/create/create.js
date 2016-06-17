/**
 * @author Andreas Keefer
 */

describe('Create Example', function () {

   it('that observable is created', function (done) {
      Rx.Observable.create(function(subscriber){
            try {
               subscriber.onNext("first");
               subscriber.onNext("second");
               subscriber.onNext("3rd");
               subscriber.onNext("...");
               subscriber.onCompleted();
            } catch (e) {
               subscriber.onError(e);
            }
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

   it('that observable is created with function', function (done) {
      var getValue = function() {
         console.log("getValue invoked");
         return "first";
      };

      Rx.Observable.create(function(subscriber){
            try {
               subscriber.onNext(getValue());
               subscriber.onCompleted();
            } catch (e) {
               subscriber.onError(e);
            }
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