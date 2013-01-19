/* Copyright (c) 2012 Sergiy Kovalchuk (serg472@gmail.com) under the Apache License 2.0 */
(function() {
	if(window.location.hash.toLowerCase() == "#debug" || window.location.href.match(/[&?]debug\b/i)) {
		DEBUG = true;
	}
	
	var logProps = ["log", "debug", "info", "warn", "error"];
	var generalProps = ["assert", "clear", "count", "dir", "dirxml", "exception", "group", "groupCollapsed", "groupEnd", "markTimeline", "memoryProfile", "memoryProfileEnd", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace"];
	
	//console is not available or disabled
	if(typeof(window.console) === "undefined" || typeof(DEBUG) === "undefined" || (typeof(DEBUG) === "boolean" && !DEBUG) || (typeof(DEBUG) === "string" && DEBUG.toLowerCase() == "off")) {
		//disable all
		window.console = {};
		var props = generalProps.concat(logProps);
		for(var i=0; i<props.length; i++) {
			disableProp(props[i]);
		}
	} else if(typeof(window.console) !== "undefined") {
		//console is available and not disabled
		
		for(var i=0; i<generalProps.length; i++) {
			//enable all general console props if debug mode is on, disable otherwise
			if((typeof(DEBUG) === "boolean" && DEBUG) || (typeof(DEBUG) === "string" && DEBUG.toLowerCase() == "on")) {
				enableProp(generalProps[i]);
			} else {
				disableProp(generalProps[i]);
			}
		}
		
		//enable log props above logging level
		var level = logProps[0];
		if(typeof(DEBUG) === "string") {
			level = (DEBUG.toLowerCase() == "on" ? logProps[0] : DEBUG);
		} 
	
		var levelReached = false;
		for(var i=0; i<logProps.length; i++) {
			if(logProps[i] == level) {
				levelReached = true;
			}
			levelReached ? enableProp(logProps[i]) : disableProp(logProps[i]);
		}
	}
	
	function disableProp(prop) {
		window.console[prop] = function(){};
	}
	
	function enableProp(prop) {
		if(typeof(window.console[prop]) === "undefined") disableProp(prop);
	}
})();