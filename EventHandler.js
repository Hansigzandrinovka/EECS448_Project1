var Event = require('./Event.js');

module.exports = {

window.events = newArray();

addEvent: function(name,date,duration,location){
	var newEvent = new Event.Event(name,date,duration,location);
	window.events.push(newEvent);
},

searchEvents: function(begin, end){
	var eventsFound = new Array();
	for(var x=0;x<window.events.length;x++){
		if(window.events[x].date.between(begin,end)){
			eventsFound.push(window.events[x]);
		}
	}
	return eventsFound;
}

};
