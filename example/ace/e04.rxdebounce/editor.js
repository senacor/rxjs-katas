(function(){

	function saveInBackend(){
		console.log("save invoked ...");
	}

	//setup editor
   var editor = ace.edit("editor");
   editor.setTheme("ace/theme/twilight");
   editor.getSession().setMode("ace/mode/javascript");

	editor.getSession().on('change', function(e) {
		console.log("Editor Changed!");
	});

	//load Editor value
	editor.setValue("function foo(items) {\n  var x = \"All this is syntax highlighted\";\n  return x;\n}");

	//setup subscription
	var subscription = Rx.Observable.fromEvent(editor, "change")
	  .skip(1)
	  .debounce(1000)
	  .subscribe(saveInBackend);

}());
    