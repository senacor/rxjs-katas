
/**
 * Retrieves plane information with callbacks
 *
 * @author Dr. Michael Menzel, Sencaor Technologies AG
 */

describe('E13_Call_SumMultiplesPlanes', function () {

    it('that plane build count is fetched', function (done) {

        var planes = ["Boeing_777","Boeing_747"];
        var buildCount = 0;

        planes.forEach(function(plane) {
            //get article
            var article  = wikipediaService.fetchArticle(plane);
            buildCount += wikipediaService.parseBuildCount(article.content);
        });

        summary.printCounter(planes, buildCount);

    });

});
