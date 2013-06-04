$(function() {
	
	localizePopup();
	updateData();

	$('#copyW').click(function(){
		var w = $('#width').text();
		copyToClipboard(w);
	});


	$('#copyH').click(function(){
		var h = $('#height').text();
		copyToClipboard(h);	
	});
		
});

function localizePopup(){

	$('#title').text(getString('popupTitle'));
	$('#labelWidth').text(getString('labelWidth'));
	$('#labelHeight').text(getString('labelHeight'));
}

function updateData(){
	
	chrome.windows.getCurrent(function(currentWindow) {
    	var width = currentWindow.width;
    	$('#width').text(width);

    	var height = currentWindow.height;
    	$('#height').text(height);

	});

}

//Copies content to Clipboard
function copyToClipboard( text ){
    var copyDiv = document.createElement('div');
    copyDiv.contentEditable = true;
    document.body.appendChild(copyDiv);
    copyDiv.innerHTML = text;
    copyDiv.unselectable = "off";
    copyDiv.focus();
    document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
    document.body.removeChild(copyDiv);
    notify();
}

function notify(){

	//Dev Channel only
	/*
	var opt = {
		  type: "basic",
		  title: "Holo Dim",
		  message: "Data copied to clipboard",
		  iconUrl: "icon128.png"
		}
	chrome.notifications.create('holodim', opt, null);
	*/
	if (window.webkitNotifications) { //triggers only if notifications are available

		//if(storage.getWannaNotify()){
			if (window.webkitNotifications.checkPermission() == 0) { //checks for permission
				var notification = window.webkitNotifications.createNotification("http://img59.imageshack.us/img59/2262/icon128k.png",getString("extName"),getString("alertText"));
				notification.show();

				window.setTimeout(function(){notification.cancel()},1000);
			}else{ //and requests it
				window.webkitNotifications.requestPermission();
			}
		//}
	}
}

function getString(id){
	return chrome.i18n.getMessage(id);
}