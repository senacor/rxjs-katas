
describe('WikipediaService', function () {

  it('fetch Article by callback', function (done) {

     wikipediaService.fetchArticleCallback("Boeing_737", function(article) {
      expect(article.title).toEqual("Boeing 737");
      done();
    }, function(error) {
      expect(error).toBe(undefined);
      done();
    })
  });


  it('fetch Article as promise', function (done) {

     wikipediaService.fetchArticlePromise("Boeing_737")
       .then(function(article) {
          expect(article.title).toEqual("Boeing 737");
          done();
        })
       .catch(function(error) {
         expect(error).toBe(undefined);
         done();
        });
  });

   it('fetch Article as observable', function (done) {

      wikipediaService.fetchArticleObservable("Boeing_737")
         .subscribe(function(article) {
            expect(article.title).toEqual("Boeing 737");
            done();
         }, function(error) {
            expect(error).toBe(undefined);
            done();
         });
   });

   it('that build number is calculated', function (done) {

      wikipediaService.fetchArticleCallback("Boeing_737", function(article) {
         expect(wikipediaService.parseBuildCount(article.content)).toBeGreaterThan(9000);
         done();
      }, function(error) {
         expect(error).toBe(undefined);
         done();
      })
   });
});
