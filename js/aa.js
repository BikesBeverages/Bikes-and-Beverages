	var map;
     var venues = {"type":"FeatureCollection","features":[
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.28888028,44.9733473]},"properties":{"Name":"Sisyphus Brewing","Address 1":"712 Ontario Ave","Address 2":"Suite 100","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.sisyphusbrewing.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.28850892,44.94889873]},"properties":{"Name":"Lynlake Brewery","Address 1":"2934 Lyndale Ave S","Address 2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.lynlakebrewery.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.28133402,44.99987253]},"properties":{"Name":"Boom Island Brewing","Address 1":"2014 Washington Ave N","Address 2":"Suite 300","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://boomislandbrewing.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.27912321,44.98493736]},"properties":{"Name":"Fulton","Address 1":"414 6th Ave N","Address 2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://fultonbeer.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.26639125,45.00111671]},"properties":{"Name":"Dangerous Man","Address 1":"1300 2nd St NE","Address 2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://dangerousmanbrewing.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.26075482,44.94930973]},"properties":{"Name":"Eastlake Craft Brewery","Address 1":"920 Lake St E","Address 2":"Suite 107","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.eastlakemgm.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.25314358,44.9749704]},"properties":{"Name":"Day Block Brewing","Address 1":"1105 Washington Ave S","Address 2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"https://www.dayblockbrewing.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.24787267,45.01355918]},"properties":{"Name":"Fair State Brewing Cooperative","Address 1":"2506 Central Ave NE","Address 2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"https://fairstate.coop/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.2477956,44.97339892]},"properties":{"Name":"Town Hall Brewery","Address 1":"1430 Washington Ave S","Address 2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.townhallbrewery.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.24669246,44.99909078]},"properties":{"Name":"612Brew","Address 1":"945 Broadway St NE","Address 2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.612brew.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.24506438,45.00094775]},"properties":{"Name":"Bauhaus Brew Labs","Address 1":"1315 Tyler St NE","Address 2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://bauhausbrewlabs.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.24409551,45.00448325]},"properties":{"Name":"Sociable Cider Werks","Address 1":"1500 Fillmore St NE","Address 2":"Suite 100","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://sociablecider.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.23434893,44.94501376]},"properties":{"Name":"Du Nord Craft Spirits","Address 1":"2610 32nd St E","Address 2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://dunordcraftspirits.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.23389439,44.94710153]},"properties":{"Name":"Harriet Brewing","Address 1":"3036 Minnehaha Ave","Address 2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://harrietbrewing.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.23257779,44.93859817]},"properties":{"Name":"Northbound Smokehouse","Address 1":"2716 38th St E","Address 2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://northboundbrewpub.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.22108965,44.99819937]},"properties":{"Name":"Northgate Brewing","Address 1":"783 Harding St NE","Address 2":"Suite 100","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.northgatebrew.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.21295046,44.99193296]},"properties":{"Name":"Insight Brewing","Address 1":"2821 Hennepin Ave E","Address 2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.insightbrewing.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.20940833,44.97286474]},"properties":{"Name":"Surly Brewing","Address 1":"520 Malcolm Ave SE","Address 2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://surlybrewing.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.1101995,44.9389351]},"properties":{"Name":"Bad Weather Brewery","Address 1":"414 7TH ST W ","Address 2":"","City":"St. Paul","State":"MN","ZIP":"55102-2733","Website":"http://www.badweatherbrewery.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.1925768,44.9704882]},"properties":{"Name":"Bang Brewing Company","Address 1":"2320 CAPP ROAD ","Address 2":"","City":"St. Paul","State":"MN","ZIP":"55114","Website":"http://bangbrewing.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.1461962,44.9819887]},"properties":{"Name":"Como Dockside","Address 1":"1360 LEXINGTON PKWY N ","Address 2":"","City":"St. Paul","State":"MN","ZIP":"55103-1060","Website":"http://www.comodockside.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.0968155,44.9467327]},"properties":{"Name":"Great Waters","Address 1":"426 ST PETER ST ","Address 2":"","City":"St. Paul","State":"MN","ZIP":"55102-1105","Website":"http://www.restaurantstpaulmn.com/menu/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.0891516,44.952861]},"properties":{"Name":"Tin Whiskers","Address 1":"125 9TH ST E","Address 2":"Unit 127","City":"St. Paul","State":"MN","ZIP":"55101-2246","Website":"http://twbrewing.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.1925645,44.9701614]},"properties":{"Name":"Urban Growler","Address 1":"2325 ENDICOTT ST","Address 2":"Unit 11","City":"St. Paul","State":"MN","ZIP":"55114","Website":"http://www.urbangrowlerbrewing.com/"}},
		{"type":"Feature","geometry":{"type":"Point","coordinates":[93.0848121,44.9329398]},"properties":{"Name":"Wabasha Brewing","Address 1":"429 WABASHA ST S ","Address 2":"","City":"St. Paul","State":"MN","ZIP":"55107-1126","Website":"http://www.wabashabrewing.com/"}}
		]};
var i;

for (i = 0; i < venues.features.length; i+=1) {

    var venueAddress = venues.features[i].properties['Address 1'] + ', '
                    + venues.features[i].properties.City + ', '
                    + venues.features[i].properties.State;
    var venueName = venues.features[i].properties.Name,
        startList = document.getElementById('start'),
		waylist = document.getElementById('waypoints')
        endList = document.getElementById('end');

    var entry = document.createElement('option');
    var entry2 = document.createElement('option');
	var entry3 = document.createElement('option');
    
    entry.text = venueName;
    entry.value = venueAddress;

    entry2.text = venueName;
    entry2.value = venueAddress;

	entry3.text = venueName;
    entry3.value = venueAddress;
	
    startList.appendChild(entry);
	waylist.appendChild(entry3);
    endList.appendChild(entry2);
}
	
function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  map = new google.maps.Map(document.getElementById('map'), {
  zoom: 11,
  center:{"lat": 44.9719336, "lng": -93.24279719}
  });
  directionsDisplay.setMap(map);
  document.getElementById('submit').addEventListener('click', function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var waypts = [];
  var checkboxArray = document.getElementById('waypoints');
  for (var i = 0; i < checkboxArray.length; i++) {
    if (checkboxArray.options[i].selected) {
      waypts.push({
        location: checkboxArray[i].value,
        stopover: true
      });
    }
  }

  directionsService.route({
    origin: document.getElementById('start').value,
    destination: document.getElementById('end').value,
    waypoints: waypts,
    optimizeWaypoints: true,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      var route = response.routes[0];
      var summaryPanel = document.getElementById('directions-panel');
      summaryPanel.innerHTML = '';
      // For each route, display summary information.
      for (var i = 0; i < route.legs.length; i++) {
        var routeSegment = i + 1;
        summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
            '</b><br>';
        summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
        summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
        summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
      }
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
