
describe('E61_Observables_CountPlanes', function () {

    it('that plane build count is summed up with observables', function (done) {

        var planeTypes = ["Boeing 777", "Boeing 747", "Boeing 737", "Airbus A330"];

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