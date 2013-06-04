var storage = {
	
	WANNA_GET_NOTIFIED : 'wannaGetNotified',
	WANNA_DISMISS_AUTOMATICALLY : 'wannaDismissAutomatically',
	WANNA_DISMISS_AFTER : 'wannaDismissAfter',

	isStringValid: function(testString){
		
		if(testString == null)
			return false;
			
		if(testString == "")
			return false;
			
		if(testString.length == 0)
			return false;
		
		return true;
	},

	getWannaNotify : function(){

		var wannaGetNotified = localStorage.getItem(storage.WANNA_GET_NOTIFIED);

		if(wannaGetNotified == null) wannaGetNotified = 1;
		return parseInt(wannaGetNotified);

	},

	setWannaNotify : function(value){
		localStorage.removeItem(storage.WANNA_GET_NOTIFIED);
		if(value == true)
			localStorage.setItem(storage.WANNA_GET_NOTIFIED, 1);
		else
			localStorage.setItem(storage.WANNA_GET_NOTIFIED, 0);
	},

	getWannaDismissAutomatically : function(){

		var wannaDismissAutomatically = localStorage.getItem(storage.WANNA_DISMISS_AUTOMATICALLY);

		if(wannaDismissAutomatically == null) wannaDismissAutomatically = 1;
		return parseInt(wannaDismissAutomatically);

	},

	setWannaDismissAutomatically : function(value){
		localStorage.removeItem(storage.WANNA_DISMISS_AUTOMATICALLY);
		if(value == true)
			localStorage.setItem(storage.WANNA_DISMISS_AUTOMATICALLY, 1);
		else
			localStorage.setItem(storage.WANNA_DISMISS_AUTOMATICALLY, 0);
	},

	getWannaDismissAfter : function(){

		var wannaDismissAfter = localStorage.getItem(storage.WANNA_DISMISS_AFTER);

		if(wannaDismissAfter == null) wannaDismissAfter = 2;
		return parseInt(wannaDismissAfter);

	},

	setWannaDismissAfter : function(value){
		localStorage.removeItem(storage.WANNA_DISMISS_AFTER);
		localStorage.setItem(storage.WANNA_DISMISS_AFTER, value);
	},

	resetToDefaults : function(){
		localStorage.removeItem(storage.WANNA_DISMISS_AFTER);
		localStorage.removeItem(storage.WANNA_DISMISS_AUTOMATICALLY);
		localStorage.removeItem(storage.WANNA_GET_NOTIFIED);
	}


}