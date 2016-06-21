$(document).ready(function(){

	//setup editor
	var editor = ace.edit("editor");
	editor.setTheme("ace/theme/twilight");
	editor.getSession().setMode("ace/mode/javascript");

	function saveInBackend(){
		console.log("save invoked ...");
	}

	//register on change event
	editor.getSession().on('change', function(e) {
		console.log("Editor Changed!");
	});

	var observableEventStream = Rx.Observable.fromEvent(editor, "change");

	// 1) Filter the first event to suppress the document loading
	// 2) Filter the event stream to emit the most recent event within 2 ms
	// 3) Subscribe to the event stream to invoke saveInBackend


	//load Editor value
	editor.setValue("function foo(items) {\n  var x = \"All this is syntax highlighted\";\n  return x;\n}");

});
    