var wikipediaService = function() {
  var service = {};

  var MOCKMODE = true;

  /**
   * fetches a wiki article as a media wiki formated string
   * @param articleName name of the article to be fetched
   * @return the fetched wikipedia article
   */
  service.fetchArticle = function(articleName) {
      return wikipediaArticleAdapterMock.fetchArticle(articleName);
  };


  /**
   * fetches a wiki article as a media wiki formated string
   * @param articleName name of the article to be fetched
   * @param successHandler callback to handle the result
   * @param errorHandler callback to handle errors
   */
  service.fetchArticleCallback = function(articleName, successHandler, errorHandler) {
    if (MOCKMODE){
      wikipediaArticleAdapterMock.fetchArticleCallback(articleName, successHandler, errorHandler);
    } else {
      wikipediaArticleAdapter.fetchArticleCallback(articleName, successHandler, errorHandler);
    }
  };

  /** fetches a wiki article as a media wiki formated string
   * @param articleName name of the article to be fetched
   * @return an promise that provides an article structure
   */
  service.fetchArticlePromise = function(articleName) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      _this.fetchArticleCallback(articleName, resolve, reject)
    });
  };

  /**
   * fetches a wiki article as a media wiki formated string
   * @param articleName name of the article to be fetched
   * @return an observable that provides an article structure
   */
  service.fetchArticleObservable = function(articleName){
    return Rx.Observable.create(function (observer) {
      service.fetchArticleCallback(articleName,
         function(article) {
           observer.onNext(article);
           observer.onCompleted();
         }, function(error) {
           observer.onError(error)
         });

    });
  };

  /**
   * extracts the number of planes built from an wikipedia article about a specific plane type
   * @param article content about plane type
   * @return number of planes built
   */
  service.parseBuildCount = function(article){
    return service.findValue(article, "number built");
  };

  /**
   * creates article info with name and build counter
   * @param article article about plane type
   * @return name and number of planes built
   */
  service.parseArticleInfo = function(article){
    return {
      typeName: article.title, //service.findString(article.content, "name"),
      numberBuild: service.findValue(article.content, "number built")
    }
  };

  service.findValue = function(text, key) {
    var pattern = new RegExp(key+" ?= ?([\\d,]*)");
    var parsedResult = text.match(pattern);

    if (parsedResult.length >= 2) {
      return parseInt(parsedResult[1].replace(",",""),10);
    } else {
      return 0
    }
  };

  service.findString = function(text, key) {
    var pattern = new RegExp(key+" ?= ?([\\w ]*)");
    var parsedResult = text.match(pattern);

    if (parsedResult.length >= 2) {
      return text.match(pattern)[1];
    } else {
      return ""
    }
  };

  return service;
}();
