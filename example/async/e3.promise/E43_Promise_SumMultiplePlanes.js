/**
 * Retrieves and combine plane information with Promises
 *
 * @author Dr. Michael Menzel, Sencaor Technologies AG
 */
describe('E43_Promise_SumMultiplePlanes', function () {

   it('that plane build count is summed with futures', function (done) {

      var sumValues = function(values) {
            return values.reduce(function(a, b) {
               return a + b;
            }, 0);
         }

      var planes = ["Boeing 777","Boeing 747"];
      var parseBuildCountPromises = [];

      //get articles
      planes.forEach(function(plane){
         parseBuildCountPromises.push(wikipediaService.fetchArticlePromise(plane)
            .then(function (article){ return article.content;})
            .then(wikipediaService.parseBuildCount));
      });

      Promise.all(parseBuildCountPromises)
         .then(sumValues)
         .then(summary.createPrintCounter("777 and 747"))
         .then(done);

   });

});
