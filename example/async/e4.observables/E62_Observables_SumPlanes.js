describe('E62_Observables_SumPlanes', function () {

    it('that plane build sum is calculated with observables', function (done) {

        var planeTypes = ["Boeing_777", "Boeing_747", "Boeing_737", "Airbus_A330"];

        var exceptionHandler = function (error) {
            expect(error).toBe(undefined);
            done();
        };

        // reduces plane information by summing up the build counter
        var reducePlaneInfo = function(planeInfoSum, planeInfo){
            planeInfoSum.numberBuild += planeInfo.numberBuild;
            planeInfoSum.typeName += " and " + planeInfo.typeName;
            return planeInfoSum;
        };

        Rx.Observable.from(planeTypes)
           .flatMap(wikipediaService.fetchArticleObservable)
           .map(wikipediaService.parseArticleInfo)
           .reduce(reducePlaneInfo)
           .subscribe(summary.printArticleInfo, exceptionHandler, done);


    });

});
