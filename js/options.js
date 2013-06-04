var beNotified;
var dismissAutomatically;
var dismissAfter;
$(function() {

	beNotified = storage.getWannaNotify();
	dismissAutomatically = storage.getWannaDismissAutomatically();
	dismissAfter = storage.getWannaDismissAfter();

	localizeOptions();
	loadData();

	$('#chkWannaBeNotified').change(function(){
		storage.setWannaNotify($('#chkWannaBeNotified').prop('checked'));

		var value = 0;
		if($('#chkWannaBeNotified').prop('checked') == true) value = 1;
		enableDismissAutomatically(value);
	});

	$('#chkDismissAutomatically').change(function(){
		storage.setWannaDismissAutomatically($('#chkDismissAutomatically').prop('checked'));

		
		var value = 0;
		if($('#chkDismissAutomatically').prop('checked') == true) value = 1;
		enableDismissAfter(value);
		
	});

	$('#dismissAfterSeconds').change(function(){

		var selected = $('#dismissAfterSeconds').val();
		storage.setWannaDismissAfter(selected);
	});

	$("#btnReset").click(function(){
		storage.resetToDefaults();
		loadData();
	});

	$("#aboutTheAuthor").click(function(){
		window.open('http://about.me/tiwiz');
	});
});



function localizeOptions(){

	$('#titleOptions').text(getString("optionsTitle"));
	$('#lblWannaBeNotified').text(getString("wannaBeNotified"));
	$('#lblDismissAutomatically').text(getString("dismissAutomatically"));
	$('#lblDismissAfterSeconds').text(getString("dismissAfter"));
	$('#lblDismissAfterSecondsPartTwo').text(getString("dismissAfterPartTwo"));
	$("#btnReset").text(getString("resetToDefaults"));
	$("#aboutTheAuthor").text(getString("aboutTheAuthor"));
}

function loadData(){
	if(beNotified > 0)
		$('#chkWannaBeNotified').attr('checked',true);
		
	enableDismissAutomatically(beNotified);

	if(dismissAutomatically > 0)
		$('#chkDismissAutomatically').attr('checked',true);

	enableDismissAfter(dismissAutomatically);

	$('#dismissAfterSeconds').val(dismissAfter);

}

function getString(id){
	return chrome.i18n.getMessage(id);
}

function enableDismissAutomatically(value){

	if(value>0){
		$('#chkDismissAutomatically').removeAttr("disabled");
	}else{
		$('#chkDismissAutomatically').attr("disabled", true);
	}

	var enableAll = value + storage.getWannaDismissAutomatically();

	if(enableAll > 1)
		enableDismissAfter(1);
	else
		enableDismissAfter(0);
}

function enableDismissAfter(value){

	if(value > 0){
		$('#dismissAfterSeconds').removeAttr("disabled");
	}else{
		$('#dismissAfterSeconds').attr("disabled", true);
	}
}