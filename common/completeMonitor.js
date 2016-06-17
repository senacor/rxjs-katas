var waitMonitorFactory = function() {
  var service = {};

  service.create = function(completionStage, doneCallback) {
    var counter = 0;

    return {
      complete: function(){
        counter ++;
        if(completionStage === counter) {
          doneCallback();
        }
      }
    }

  };

  return service;
}();