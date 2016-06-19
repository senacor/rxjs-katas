/**
 * Retrieves plane information with callbacks
 *
 * @author Dr. Michael Menzel, Sencaor Technologies AG
 */

describe('E21_Callback_CountPlanes', function () {

    it('that plane build count is fetched with callback', function (done) {

        var monitor = waitMonitorFactory.create(2, done);

        //get article on 777
        wikipediaService.fetchArticleCallback("Boeing 777", function(article777) {
            //extract and print number of built planes
            var buildCount777 = wikipediaService.parseBuildCount(article777.content);
            summary.printCounter("777", buildCount777);

            monitor.complete();
        }, function(error) {
            expect(error).toBe(undefined);
            monitor.complete();
        });

        //get article on 747
        wikipediaService.fetchArticleCallback("Boeing 747", function(article747) {

            //extract and print number of built planes
            var buildCount747 = wikipediaService.parseBuildCount(article747.content);
            summary.printCounter("747", buildCount747);

            monitor.complete();
        }, function(error) {
            expect(error).toBe(undefined);
            monitor.complete();
        });

    });

});
