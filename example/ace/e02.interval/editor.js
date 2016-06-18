$(document).ready(function(){

	//setup editor
	var editor = ace.edit("editor");
	editor.setTheme("ace/theme/twilight");
	editor.getSession().setMode("ace/mode/javascript");

	function saveInBackend(){
		console.log("save invoked ...");
	}

	///////////////////////////////////////////////////////////////////////
	//sample on change events

	var eventCounter = 0;
	var editorChanged = false;

	//register on change event
	editor.getSession().on('change', function(e) {
		console.log("Editor Changed!");
		eventCounter ++;
		editorChanged = true;
	});

	//check for changes every 1500 ms
	function checkEditorChangesInInterval() {

		//ignore first event
		if(eventCounter > 1) {
			//check for changes
			if(editorChanged) {
				saveInBackend();
				editorChanged = false;
			}
		}
		setTimeout(checkEditorChangesInInterval,1500);
	}

	checkEditorChangesInInterval();

	////////////////////////////////////////////////////////////////////////
	//load Editor value
	editor.setValue("function foo(items) {\n  var x = \"All this is syntax highlighted\";\n  return x;\n}");

});
    