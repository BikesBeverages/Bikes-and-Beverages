/*jslint
    browser: true,
    white: true
*/
/*globals
    google, jQuery, $
*/
"use strict";

var venues = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.28888028,44.9733473]},"properties":{"Name":"Sisyphus Brewing","Address1":"712 Ontario Ave","Address2":"Suite 100","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.sisyphusbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.28850892,44.94889873]},"properties":{"Name":"Lynlake Brewery","Address1":"2934 Lyndale Ave S","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.lynlakebrewery.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.28133402,44.99987253]},"properties":{"Name":"Boom Island Brewing","Address1":"2014 Washington Ave N","Address2":"Suite 300","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://boomislandbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.27912321,44.98493736]},"properties":{"Name":"Fulton","Address1":"414 6th Ave N","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://fultonbeer.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.26639125,45.00111671]},"properties":{"Name":"Dangerous Man","Address1":"1300 2nd St NE","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://dangerousmanbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.26075482,44.94930973]},"properties":{"Name":"Eastlake Craft Brewery","Address1":"920 Lake St E","Address2":"Suite 107","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.eastlakemgm.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.25314358,44.9749704]},"properties":{"Name":"Day Block Brewing","Address1":"1105 Washington Ave S","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"https://www.dayblockbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.24787267,45.01355918]},"properties":{"Name":"Fair State Brewing Cooperative","Address1":"2506 Central Ave NE","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"https://fairstate.coop/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.2477956,44.97339892]},"properties":{"Name":"Town Hall Brewery","Address1":"1430 Washington Ave S","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.townhallbrewery.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.24669246,44.99909078]},"properties":{"Name":"612Brew","Address1":"945 Broadway St NE","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.612brew.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.24506438,45.00094775]},"properties":{"Name":"Bauhaus Brew Labs","Address1":"1315 Tyler St NE","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://bauhausbrewlabs.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.24409551,45.00448325]},"properties":{"Name":"Sociable Cider Werks","Address1":"1500 Fillmore St NE","Address2":"Suite 100","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://sociablecider.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.23434893,44.94501376]},"properties":{"Name":"Du Nord Craft Spirits","Address1":"2610 32nd St E","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://dunordcraftspirits.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.23389439,44.94710153]},"properties":{"Name":"Harriet Brewing","Address1":"3036 Minnehaha Ave","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://harrietbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.23257779,44.93859817]},"properties":{"Name":"Northbound Smokehouse","Address1":"2716 38th St E","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://northboundbrewpub.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.22108965,44.99819937]},"properties":{"Name":"Northgate Brewing","Address1":"783 Harding St NE","Address2":"Suite 100","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.northgatebrew.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.21295046,44.99193296]},"properties":{"Name":"Insight Brewing","Address1":"2821 Hennepin Ave E","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.insightbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.20940833,44.97286474]},"properties":{"Name":"Surly Brewing","Address1":"520 Malcolm Ave SE","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://surlybrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.1101995,44.9389351]},"properties":{"Name":"Bad Weather Brewery","Address1":"414 7TH ST W ","Address2":"","City":"St. Paul","State":"MN","ZIP":"55102-2733","Website":"http://www.badweatherbrewery.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.1925768,44.9704882]},"properties":{"Name":"Bang Brewing Company","Address1":"2320 CAPP ROAD ","Address2":"","City":"St. Paul","State":"MN","ZIP":"55114","Website":"http://bangbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.1461962,44.9819887]},"properties":{"Name":"Como Dockside","Address1":"1360 LEXINGTON PKWY N ","Address2":"","City":"St. Paul","State":"MN","ZIP":"55103-1060","Website":"http://www.comodockside.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.0968155,44.9467327]},"properties":{"Name":"Great Waters","Address1":"426 ST PETER ST ","Address2":"","City":"St. Paul","State":"MN","ZIP":"55102-1105","Website":"http://www.restaurantstpaulmn.com/menu/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.0891516,44.952861]},"properties":{"Name":"Tin Whiskers","Address1":"125 9TH ST E","Address2":"Unit 127","City":"St. Paul","State":"MN","ZIP":"55101-2246","Website":"http://twbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.1925645,44.9701614]},"properties":{"Name":"Urban Growler","Address1":"2325 ENDICOTT ST","Address2":"Unit 11","City":"St. Paul","State":"MN","ZIP":"55114","Website":"http://www.urbangrowlerbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[93.0848121,44.9329398]},"properties":{"Name":"Wabasha Brewing","Address1":"429 WABASHA ST S ","Address2":"","City":"St. Paul","State":"MN","ZIP":"55107-1126","Website":"http://www.wabashabrewing.com/"}}]},
    mapStyle = [{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"weight":0.1},{"color":"#f9ffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"},{"weight":6}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#22ff00"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#8e5353"},{"saturation":"0"},{"lightness":"68"},{"weight":"0.01"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"weight":"0.38"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"lightness":"45"}]}],
    mapCenter = {lat: 44.947704, lng:  -93.202313},
    venuesFriendly = {},
    marker,
    markers = [],
    markerStart,
    markerEnd,
    latLngRegex = /^-?\d+\.\d+,-?\d+\.\d+$/,
    i,
    wayList,
    waySelected = [],
    entry;

/**
 * Enable popovers (via Bootstrap) in UI
 */
$(document).ready(function() {
  $('[data-toggle="popover"]').popover();
});

/**
 * Don't let users select more than eight waypoints
 *
 * Warn users if they try to select more than eight waypoints. Revert them to the previous state.
 */
$('#user-waypoints').change(function(e){
    if (e.currentTarget.selectedOptions.length > 8) {
        revertWaypoints();
        $('#too-many-selected-waypoints').modal();
    } else {
        updateWaySelected();
    }
});

/**
 * Update the seet of selected waypoints global
 *
 * Used to aid in lookback, so a user trying to select more than eight
 * waypoints will have their selection reverted to the previous saved
 * set.
 */
function updateWaySelected() {
    waySelected = [];
    $('#user-waypoints option:selected').each(function() {
        waySelected.push($(this).index());
    });
}

/**
 * Set the selected waypoints based on the global (for rollback)
 */
function revertWaypoints() {
    var i;
    $("#user-waypoints option:selected").removeAttr("selected");
    for (i = 0; i < waySelected.length; i += 1) {
        $('#user-waypoints option:eq(' + waySelected[i] + ')').prop('selected', true);
    }
}

/**
 * Sort venues by name
 */
venues.features.sort(function(a, b) {
    return a.properties.Name.localeCompare(b.properties.Name);
});

/**
 * Create a name-indexed array of venues for easier lookup
 */
for (i = 0; i < venues.features.length; i += 1) {
    venuesFriendly[(venues.features[i].properties.Name)] = {
        "coordinates": {
            "lat": venues.features[i].geometry.coordinates[1], "lng": venues.features[i].geometry.coordinates[0]
        },
        "fullAddr": venues.features[i].properties.Address1 + "<br>"
                    + ((venues.features[i].properties.Address2 !== '') ? (venues.features[i].properties.Address2 + "<br>") : '')
                    + venues.features[i].properties.City + ' '
                    + venues.features[i].properties.ZIP,
        "website": venues.features[i].properties.Website
    };
}

var startLocation = document.getElementById('sf-start-location');
var endLocation = document.getElementById('sf-end-location');
var routeEndInputWrapper = document.getElementById("sf-end-location-wrapper");
var startEndOption = document.getElementById("sf-same-start-end");

/**
 * Build up select list of waypoints
 */
for (i = 0; i < venues.features.length; i+=1) {
    wayList = document.getElementById('user-waypoints');
    entry = document.createElement('option');
    entry.text = venues.features[i].properties.Name;
    entry.value = venues.features[i].properties.Address1 + ', '
                    + venues.features[i].properties.City + ', '
                    + venues.features[i].properties.State;
    wayList.appendChild(entry);
}

function initMap() {
    var map,
        customMapTypeId,
        customMapType,
        bikeLayer,
        directionsService = new google.maps.DirectionsService(),
        directionsDisplay = new google.maps.DirectionsRenderer(),
        geocoder = new google.maps.Geocoder(),
        browserGeolocation,
        initialLocation,
        latlng;

    customMapType = new google.maps.StyledMapType(mapStyle, {name: 'Custom Style'});
    customMapTypeId = 'custom_style';
  
    map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 13,
        center: mapCenter,
        mapTypeControlOptions: {
            mapTypeIds: []
        }
    });

    /**
     * Geolocate using browser or stick with map center
     */ 
    if(navigator.geolocation) {
        browserGeolocation = true;
        navigator.geolocation.getCurrentPosition(function(position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
            latlng = {lat: parseFloat(position.coords.latitude), lng: parseFloat(position.coords.longitude)};
            map.setCenter(initialLocation);
            if (document.getElementById('user-start').value !== '' || document.getElementById('user-end').value === '') {
                geocoder.geocode({'location': latlng}, function(results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                      if (results[0]) {
                        if (document.getElementById('user-start').value === '') {
                            document.getElementById('user-start').value = results[0].formatted_address;
                        }
                        if (document.getElementById('user-end').value === '') {
                            document.getElementById('user-end').value = results[0].formatted_address;
                        }
                      } else {
                        console.log('Geocoder: No results found');
                      }
                    } else {
                        console.log('Geocoder failed due to: ' + status);
                        console.log('Geocoder results:');
                        console.log(results);
                    }
                });
            }
        });
    } else {
        browserGeolocation = false;
    }

    directionsDisplay.setMap(map);
    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
    bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(map);
    document.getElementById('user-route-submit').addEventListener('click', function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    });
}

function makeInfoWindowEvent(map, infowindow, contentString, marker) {
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(contentString);
    infowindow.open(map, marker);
  });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var waypts = [],
        checkboxArray = document.getElementById('user-waypoints'),
        i,
        routeSegment;

    for (i = 0; i < checkboxArray.length; i += 1) {
        if (checkboxArray.options[i].selected) {
          waypts.push({
            location: checkboxArray[i].value,
            stopover: true
          });
        }
    }

    directionsService.route({
            origin: document.getElementById('user-start').value,
            destination: document.getElementById('user-end').value,
            waypoints: waypts,
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.BICYCLING
        }, function (response, status) {
            var route, summaryPanel;
            if (status === google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                console.log(response);
                route = response.routes[0];
                summaryPanel = document.getElementById('directions-panel');
                summaryPanel.innerHTML = '';
                
                // For each route, display summary information.
                for (i = 0; i < route.legs.length; i += 1) {
                    routeSegment = i + 1;
                    summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
                    '</b><br>';
                    // console.log(route.legs[i]);
                    summaryPanel.innerHTML += '<strong>From</strong> ' + route.legs[i].start_address + ' <strong>to</strong> ';
                    summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
                    summaryPanel.innerHTML += '<strong>Leg distance: </strong> ' + route.legs[i].distance.text + '<br><br>';
                }
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        }
    );
}
