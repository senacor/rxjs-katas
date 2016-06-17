/**
 * Retrieves and combines plane information with callbacks
 *
 * @author Dr. Michael Menzel, Sencaor Technologies AG
 */



describe('E23_Callback_SumPlanes', function () {

    it('that plane build count is summed up with callback', function (done) {

        var exceptionHandler = function (error) {
            expect(error).toBe(undefined);
            done();
        };

        var buildCount777;
        var buildCount747;

        var processResult = function() {
            if(buildCount777 && buildCount747){
                summary.printCounter("777 and 747", buildCount777 + buildCount747);
                done();
            }
        };

        //get article on 777
        wikipediaService.fetchArticleCallback("Boeing_777", function(article777) {
            //extract and print number of built planes
            buildCount777 = wikipediaService.parseBuildCount(article777.content);
            processResult();
        }, exceptionHandler);

        //get article on 747
        wikipediaService.fetchArticleCallback("Boeing_747", function(article747) {
            //extract and print number of built planes
            buildCount747 = wikipediaService.parseBuildCount(article747.content);
            processResult();
        }, exceptionHandler);


    });


});
