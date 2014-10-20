
var button = document.getElementsByClassName('button')[0];
var startpoint = document.getElementById('starting_point_menu');
var endpoint = document.getElementById('finish_point_menu');


button.onclick = whichRoute;

var stop_1 = "1st";
var stop_3 = "3rd";
var stop_6 = "6th";
var stop_8n = "8th on N";
var stop_8l = "8th on L";
var stop_23n = "23rd on N";
var stop_236 = "23rd on 6th";
var stop_28n = "28th on N";
var stop_286 = "28th on 6th";
var stop_33 = "33rd";
var stop_34 = "34th";
var intersect = "Union Square";
var ast = "Astor Place";
var times = "Times Square";


var line_n = [times, stop_34, stop_28n, stop_23n, intersect, stop_8n];
var line_l = [stop_8l, stop_6, intersect, stop_3, stop_1];
var line_6 = [stop_33,stop_286,stop_236, intersect, ast];

var subway_station = [stop_1, stop_3, stop_6, stop_8n, stop_8l, stop_23n, stop_236, stop_28n, stop_286, stop_33, stop_34, intersect, ast, times]; 
var trip = [];
var startpt;
var endpt;
var startstop;
var endstop;

function calcRoute(){
	
	if (startpt < endpt) {
		var nextStop = startpt + 1;
		for(var i = nextStop; i < endpt; i++) {
			trip.push(subway_station[i]);
			console.log(trip);
		}

	}
};

var travelDiff = function(line1, line2) {
	var endPointDiff = line1.indexOf(intersect);
	var startPointDiff = line2.indexOf(intersect);
	if (startstop < endPointDiff) {
		for(var i = (startstop+1); i < endPointDiff; i++) {
			trip.push(line1[i]);
		}
	} else if (startstop > endPointDiff) {
		for(var i = (startstop-1); i > endPointDiff; i--) {
			trip.push(line1[i]);
		}
	} if (startPointDiff < endstop) {
		for(var i = startPointDiff; i < endstop; i++) {
			trip.push(line2[i]);
		}
	} else if (startPointDiff > endstop) {
		for(var i = startPointDiff; i > endstop; i--) {
			trip.push(line2[i]);
		}
	}
		for(var i = 0; i < trip.length; i++) {
			document.getElementsByClassName('trip')[i].innerHTML = trip[i];	
		}
}

var sameRoute = function(startstop, endstop, line) {
	if (startstop < endstop) {
			for(var i = (startstop+1); i <= endstop; i++) {
				trip.push(line[i]);
			}
		} else if ( startstop > endstop) {
			for(var i = (startstop-1); i >= endstop; i--) {
				trip.push(line[i]);
			}
			
		}
		for(var i = 0; i < trip.length; i++) {
			document.getElementsByClassName('trip')[i].innerHTML = trip[i];	
		}
}

function whichRoute() {
	trip = [];

		for (i = 1; i < 10; i++) {
			document.querySelector('#trip' + i).innerHTML = " ";		
		}
	

	
	startpt = startpoint.value;
	endpt = endpoint.value;

	if ((line_n.indexOf(subway_station[startpt-1]) > -1) && (line_n.indexOf(subway_station[endpt-1])) > -1 ) {
		startstop = line_n.indexOf(subway_station[startpt-1]);
		endstop = line_n.indexOf(subway_station[endpt-1]);
		return sameRoute(startstop, endstop, line_n);
		
	} else if ((line_l.indexOf(subway_station[startpt-1]) > -1) && (line_l.indexOf(subway_station[endpt-1])) > -1) {
		startstop = parseInt(line_l.indexOf(subway_station[startpt-1]),10);
		endstop = parseInt(line_l.indexOf(subway_station[endpt-1]),10);
		return sameRoute(startstop, endstop, line_l);

	} else if ((line_6.indexOf(subway_station[startpt-1]) > -1) && (line_6.indexOf(subway_station[endpt-1])) > -1) {
		startstop = parseInt(line_6.indexOf(subway_station[startpt-1]),10);
		endstop = parseInt(line_6.indexOf(subway_station[endpt-1]),10);
		return sameRoute(startstop, endstop, line_6);

	} else if ((line_n.indexOf(subway_station[startpt-1]) > -1) && (line_l.indexOf(subway_station[endpt-1])) > -1) {
		startstop = line_n.indexOf(subway_station[startpt-1]);
		endstop = line_l.indexOf(subway_station[endpt-1]);
		return travelDiff(line_n, line_l);
		
	} else if ((line_n.indexOf(subway_station[startpt-1]) > -1) && (line_6.indexOf(subway_station[endpt-1])) > -1) {
		startstop = line_n.indexOf(subway_station[startpt-1]);
		endstop = line_l.indexOf(subway_station[endpt-1]);
		return travelDiff(line_n, line_6);

	} else if ((line_l.indexOf(subway_station[startpt-1]) > -1) && (line_n.indexOf(subway_station[endpt-1])) > -1) {
		startstop = line_l.indexOf(subway_station[startpt-1]);
		endstop = line_n.indexOf(subway_station[endpt-1]);
		return travelDiff(line_l, line_n);

	} else if ((line_l.indexOf(subway_station[startpt-1]) > -1) && (line_6.indexOf(subway_station[endpt-1])) > -1) {
		startstop = line_l.indexOf(subway_station[startpt-1]);
		endstop = line_6.indexOf(subway_station[endpt-1]);
		return travelDiff(line_l, line_6);
	} else if ((line_6.indexOf(subway_station[startpt-1]) > -1) && (line_n.indexOf(subway_station[endpt-1])) > -1) {
		startstop = line_6.indexOf(subway_station[startpt-1]);
		endstop = line_n.indexOf(subway_station[endpt-1]);
		return travelDiff(line_6, line_n);

	} else if ((line_6.indexOf(subway_station[startpt-1]) > -1) && (line_l.indexOf(subway_station[endpt-1])) > -1) {
		startstop = line_6.indexOf(subway_station[startpt-1]);
		endstop = line_l.indexOf(subway_station[endpt-1]);
		return travelDiff(line_6, line_l);
	}

};



