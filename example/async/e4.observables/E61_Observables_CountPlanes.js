
describe('E61_Observables_CountPlanes', function () {

    it('that plane build count is summed up with observables', function (done) {

        var planeTypes = ["Boeing_777", "Boeing_747", "Boeing_737", "Airbus_A330"];

        var exceptionHandler = function (error) {
            expect(error).toBe(undefined);
            done();
        };

        Rx.Observable.from(planeTypes)
           .flatMap(wikipediaService.fetchArticleObservable)
           .map(wikipediaService.parseArticleInfo)
           .subscribe(summary.printArticleInfo, exceptionHandler, done);

    });

});