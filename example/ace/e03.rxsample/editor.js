$(document).ready(function(){

	//setup editor
   var editor = ace.edit("editor");
   editor.setTheme("ace/theme/twilight");
   editor.getSession().setMode("ace/mode/javascript");

	function saveInBackend(){
		console.log("save invoked ...");
	}

	// register on change event
	editor.getSession().on('change', function(e) {
		console.log("Editor Changed!");
	});

	//setup subscription
	var subscription = Rx.Observable.fromEvent(editor, "change")
	  .skip(1)
	  .sample(1500)
	  .subscribe(saveInBackend);


	//load Editor value
	editor.setValue("function foo(items) {\n  var x = \"All this is syntax highlighted\";\n  return x;\n}");

});
    