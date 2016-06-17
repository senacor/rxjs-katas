var wikipediaArticleAdapter = function() {
  var service = {};

  /**
   * fetches a wiki article as a media wiki formated string
   * @param articleName name of the article to be fetched
   * @param successHandler callback to handle the result
   * @param errorHandler callback to handle errors
   */
  service.fetchArticleCallback = function(articleName, successHandler, errorHandler) {
    var requestURL = 'http://en.wikipedia.org/w/api.php?format=json&action=query&titles=' + articleName + '&prop=revisions&rvprop=content&callback=?';

    $.getJSON(requestURL, function (data) {
      var pages = data.query.pages;
      var firstPage = pages[Object.keys(pages)[0]];

      successHandler({
        title: firstPage.title,
        content: firstPage.revisions[0]["*"]
      });
    }, errorHandler);
  };

  return service;
}();
