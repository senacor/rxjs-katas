/**
 * Retrieves and combine plane information with Promises
 *
 * @author Dr. Michael Menzel, Sencaor Technologies AG
 */
describe('E42_Promise_SumPlanes', function () {

   it('that plane build count is summed with futures', function (done) {

      //get article on 777
      var parseBuildCount777promise = wikipediaService.fetchArticlePromise("Boeing 777")
         .then(function (article){ return article.content;})
         .then(wikipediaService.parseBuildCount);

      //get article on 747
      var parseBuildCount747promise = wikipediaService.fetchArticlePromise("Boeing 747")
         .then(function (article){ return article.content;})
         .then(wikipediaService.parseBuildCount);

      Promise.all([parseBuildCount777promise, parseBuildCount747promise])
         .then(function(values) {
            return values[0] + values [1];
         })
         .then(summary.createPrintCounter("777 and 747"))
         .then(done);

   });

});
