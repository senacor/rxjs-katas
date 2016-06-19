/**
 * Retrieves plane information with Promises
 *
 * @author Dr. Michael Menzel, Sencaor Technologies AG
 */

describe('E31_Promise_CountPlanes', function () {

    it('that plane build count is fetched with futures', function (done) {

       var monitor = waitMonitorFactory.create(2, done);

       //get article on 777
        wikipediaService.fetchArticlePromise("Boeing 777")
           .then(function (article){ return article.content;})
           .then(wikipediaService.parseBuildCount)
           .then(summary.createPrintCounter("777"))
           .then(monitor.complete);

       //get article on 747
       wikipediaService.fetchArticlePromise("Boeing 747")
          .then(function (article){ return article.content;})
          .then(wikipediaService.parseBuildCount)
          .then(summary.createPrintCounter("747"))
          .then(monitor.complete);
    });

});
