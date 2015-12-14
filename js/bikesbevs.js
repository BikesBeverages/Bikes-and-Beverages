/*jslint
    browser: true,
    white: true
*/
/*globals
    google, jQuery, $
*/
"use strict";

var venues = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.28888028,44.9733473]},"properties":{"Name":"Sisyphus Brewing","Address1":"712 Ontario Ave","Address2":"Suite 100","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.sisyphusbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.28850892,44.94889873]},"properties":{"Name":"Lynlake Brewery","Address1":"2934 Lyndale Ave S","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.lynlakebrewery.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.28133402,44.99987253]},"properties":{"Name":"Boom Island Brewing","Address1":"2014 Washington Ave N","Address2":"Suite 300","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://boomislandbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.27912321,44.98493736]},"properties":{"Name":"Fulton","Address1":"414 6th Ave N","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://fultonbeer.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.26639125,45.00111671]},"properties":{"Name":"Dangerous Man","Address1":"1300 2nd St NE","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://dangerousmanbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.26075482,44.94930973]},"properties":{"Name":"Eastlake Craft Brewery","Address1":"920 Lake St E","Address2":"Suite 107","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.eastlakemgm.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.25314358,44.9749704]},"properties":{"Name":"Day Block Brewing","Address1":"1105 Washington Ave S","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"https://www.dayblockbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.24787267,45.01355918]},"properties":{"Name":"Fair State Brewing Cooperative","Address1":"2506 Central Ave NE","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"https://fairstate.coop/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.2477956,44.97339892]},"properties":{"Name":"Town Hall Brewery","Address1":"1430 Washington Ave S","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.townhallbrewery.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.24669246,44.99909078]},"properties":{"Name":"612Brew","Address1":"945 Broadway St NE","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.612brew.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.24506438,45.00094775]},"properties":{"Name":"Bauhaus Brew Labs","Address1":"1315 Tyler St NE","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://bauhausbrewlabs.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.24409551,45.00448325]},"properties":{"Name":"Sociable Cider Werks","Address1":"1500 Fillmore St NE","Address2":"Suite 100","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://sociablecider.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.23434893,44.94501376]},"properties":{"Name":"Du Nord Craft Spirits","Address1":"2610 32nd St E","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://dunordcraftspirits.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.23389439,44.94710153]},"properties":{"Name":"Harriet Brewing","Address1":"3036 Minnehaha Ave","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://harrietbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.23257779,44.93859817]},"properties":{"Name":"Northbound Smokehouse","Address1":"2716 38th St E","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://northboundbrewpub.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.22108965,44.99819937]},"properties":{"Name":"Northgate Brewing","Address1":"783 Harding St NE","Address2":"Suite 100","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.northgatebrew.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.21295046,44.99193296]},"properties":{"Name":"Insight Brewing","Address1":"2821 Hennepin Ave E","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://www.insightbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.20940833,44.97286474]},"properties":{"Name":"Surly Brewing","Address1":"520 Malcolm Ave SE","Address2":"","City":"Minneapolis","State":"MN","ZIP":"","Website":"http://surlybrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.1101995,44.9389351]},"properties":{"Name":"Bad Weather Brewery","Address1":"414 7th St W ","Address2":"","City":"St. Paul","State":"MN","ZIP":"55102-2733","Website":"http://www.badweatherbrewery.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.1925768,44.9704882]},"properties":{"Name":"Bang Brewing Company","Address1":"2320 Capp Rd ","Address2":"","City":"St. Paul","State":"MN","ZIP":"55114","Website":"http://bangbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.1461962,44.9819887]},"properties":{"Name":"Como Dockside","Address1":"1360 Lexington Pkwy N","Address2":"","City":"St. Paul","State":"MN","ZIP":"55103-1060","Website":"http://www.comodockside.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.0968155,44.9467327]},"properties":{"Name":"Great Waters","Address1":"426 St. Peter St","Address2":"","City":"St. Paul","State":"MN","ZIP":"55102-1105","Website":"http://www.restaurantstpaulmn.com/menu/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.0891516,44.952861]},"properties":{"Name":"Tin Whiskers","Address1":"125 9th St E","Address2":"Unit 127","City":"St. Paul","State":"MN","ZIP":"55101-2246","Website":"http://twbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.1925645,44.9701614]},"properties":{"Name":"Urban Growler","Address1":"2325 Endicott St","Address2":"Unit 11","City":"St. Paul","State":"MN","ZIP":"55114","Website":"http://www.urbangrowlerbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.0848121,44.9329398]},"properties":{"Name":"Wabasha Brewing","Address1":"429 Wabasha St S","Address2":"","City":"St. Paul","State":"MN","ZIP":"55107-1126","Website":"http://www.wabashabrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.0067688,45.0854011]},"properties":{"Name":"Big Wood Brewery","Address1":"2222 4th St","Address2":"","City":"White Bear Lake","State":"MN","ZIP":"55110","Website":"http://bigwoodbrewery.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.174271,44.9588093]},"properties":{"Name":"Burning Brothers Brewing","Address1":"1750 Thomas Ave W","Address2":"","City":"St. Paul","State":"MN","ZIP":"55105","Website":"http://www.burnbrosbrew.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-92.1755795,44.973433]},"properties":{"Name":"Dave's Brew Farm","Address1":"2470 Wilson St","Address2":"","City":"Wilson","State":"Wi","ZIP":"54027","Website":"http://davesbrewfarm.blogspot.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.6618851,44.8597894]},"properties":{"Name":"Enki Brewing","Address1":"7929 Victoria Dr","Address2":"","City":"Victoria","State":"MN","ZIP":"55386","Website":"http://www.enkibrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.566596,44.902297]},"properties":{"Name":"Excelsior Brewing","Address1":"421 3rd St","Address2":"","City":"Excelsior","State":"MN","ZIP":"55331","Website":"http://excelsiorbrew.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.0716083,44.962711]},"properties":{"Name":"Flat Earth Brewing","Address1":"688 Minnehaha Ave E","Address2":"","City":"St. Paul","State":"MN","ZIP":"55106","Website":"http://flatearthbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.2771578,44.9875643]},"properties":{"Name":"Free House","Address1":"701 Washington Ave N","Address2":"Suite 101","City":"Minneapolis","State":"MN","ZIP":"55401","Website":"http://www.freehousempls.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.1069414,45.1890097]},"properties":{"Name":"Hammerheart Brewing","Address1":"7785 Lake Dr","Address2":"","City":"Lino Lakes","State":"MN","ZIP":"55014","Website":"http://www.hammerheartbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.251547,45.003464]},"properties":{"Name":"Indeed Brewing","Address1":"711 NE 15th Ave","Address2":"","City":"Minneapolis","State":"MN","ZIP":"55413","Website":"http://www.indeedbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-92.831784,45.0392038]},"properties":{"Name":"Lift Bridge Brewery","Address1":"1900 Tower Dr W","Address2":"","City":"Stillwater","State":"MN","ZIP":"55082","Website":"http://liftbridgebrewery.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.40992,44.924746]},"properties":{"Name":"LTD Brewing","Address1":"8 8th Ave N","Address2":"","City":"Hopkins","State":"MN","ZIP":"55343","Website":"http://www.ltdbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.4496065,44.8952066]},"properties":{"Name":"Lucid Brewing","Address1":"6020 Culligan Way","Address2":"","City":"Minnetonka","State":"MN","ZIP":"55345","Website":"http://www.lucidbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.8853398,45.2103825]},"properties":{"Name":"Lupine Brewing","Address1":"248 River St N","Address2":"","City":"Delano","State":"MN","ZIP":"55328","Website":"http://lupinebrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-92.5473194,44.5626922]},"properties":{"Name":"Pitchfork Brewing","Address1":"709 Rodeo Drive","Address2":"","City":"Hudson","State":"WI","ZIP":"54016","Website":"http://www.pitchforkbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-92.5473194,44.5626922]},"properties":{"Name":"Red Wing Brewing","Address1":"1411 Old W Main Street","Address2":"","City":"Red Wing","State":"MN","ZIP":"55066","Website":"http://www.redwingbrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-92.6382175,44.890625]},"properties":{"Name":"Rush River Brewing","Address1":"990 Antler Ct","Address2":"","City":"River Falls","State":"MN","ZIP":"54022","Website":"http://rushriverbeer.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.0730347,44.9710375]},"properties":{"Name":"Sidhe Brewing","Address1":"990 Payne Ave","Address2":"","City":"St. Paul","State":"MN","ZIP":"55130","Website":"http://www.sidhebrewing.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-93.3412401,44.9413003]},"properties":{"Name":"Steel Toe Brewing","Address1":"4848 W 35th St","Address2":"","City":"St. Louis Park","State":"MN","ZIP":"55416","Website":"http://www.steeltoebrewing.com/"}}]},
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
    entry,
    lastDirSvcResponse; // holds the last route calculated

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
        autocompleteBiasArea = new google.maps.Circle({
            center: mapCenter,
            radius: 50000
        }),
        autocompleteOptions = {
            bounds: autocompleteBiasArea,
            componentRestrictions: {country: 'us'}
        },
        geocoder = new google.maps.Geocoder(),
        browserGeolocation,
        initialLocation,
        latlng,
        userStart = document.getElementById('user-start'),
        userEnd = document.getElementById('user-end'),
        autocompleteStart = new google.maps.places.Autocomplete(userStart, autocompleteOptions),
        autocompleteEnd = new google.maps.places.Autocomplete(userEnd, autocompleteOptions);

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
	directionsDisplay.setPanel(document.getElementById('directions-pane2'));
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

    if (waypts.length === 0) {
        $('#gotta-select-a-waypoint').modal();
        return false;
    }

    directionsService.route({
            origin: document.getElementById('user-start').value,
            destination: document.getElementById('user-end').value,
            waypoints: waypts,
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.BICYCLING
        }, function (response, status) {
            var route, summaryPanel, stopProgressionHtml, detailProgressionHtml, waypointNamesOrdered;
            if (status === google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                console.log(response);
                lastDirSvcResponse = response;
                waypointNamesOrdered = getWaypointNamesInOrder(lastDirSvcResponse);
                route = response.routes[0];
                summaryPanel = document.getElementById('directions-panel');
                summaryPanel.innerHTML = '';
                detailProgressionHtml = '';
                stopProgressionHtml = '';
                
                // For each route, display summary information.
                for (i = 0; i < route.legs.length; i += 1) {
                    routeSegment = i + 1;
                    '</b><br>';
                    
                    if (i === 0) {
                    stopProgressionHtml += '<p class="text-center">' + route.legs[i].start_address + '</p>';
                    } else {
                       stopProgressionHtml += '<p class="text-center">' + waypointNamesOrdered[i-1] + '</p>';
                    }

                    if (i === (route.legs.length - 1)) {
                       stopProgressionHtml += '<p class="text-center"><span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span> (' + route.legs[i].distance.text + ')</p>';
                        stopProgressionHtml += '<p class="text-center">' + route.legs[i].end_address + '</p>';
                    }

                    if (i !== (route.legs.length - 1)) {
                       stopProgressionHtml += '<p class="text-center"><span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span> (' + route.legs[i].distance.text + ')</p>';
                    }
                }
               summaryPanel.innerHTML += stopProgressionHtml;
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        }
    );
}

/**
 * Roll the dice routes
 *
 * Pick a number between 1 and 8 (settable) Then randomly select that
 * many destinations. And generate the route.
 */
function diceRoll(minStops, maxStops) {
    var minStops = minStops || 1,
        maxStops = maxStops || 8,
        numStops,
        numVenues,
        stopIds = [],
        i, j,
        iStop,
        stopFound;

    numStops = Math.floor(Math.random() * (maxStops - minStops)) + minStops;
    numVenues = $('#user-waypoints option').length;
    $('#user-waypoints option').prop('selected', false);

    console.log('Venues: ' + numVenues + "\nStops: " + numStops);

    for (i = 0; i < numStops; i += 1) {
        stopFound = false;
        iStop = Math.floor(Math.random() * numVenues);

        for (j = 0; j < stopIds; j += 1) {
            if (stopIds[j] = iStop) {
                stopFound = true;
                console.log('stop already exists: ' + iStop);
            } else {
                console.log('stop not there: ' + iStop);
            }
        }

        if (!stopFound) {
            stopIds.push(iStop);
        }
    }
    console.log(stopIds);

}


/**
 * Check for existence of nested properties
 *
 * Sweet! http://stackoverflow.com/a/2631198
 */
function checkNested(obj /*, level1, level2, ... levelN*/) {
    var args = Array.prototype.slice.call(arguments, 1);

    for (var i = 0; i < args.length; i++) {
        if (!obj || !obj.hasOwnProperty(args[i])) {
          return false;
        }
        obj = obj[args[i]];
    }
    return true;
}

/**
 * Get total distance of a route in miles
 */
function getRouteDistance(route) {
    var i,
        sumDistance = 0;

    if (checkNested(route, 'routes', 0, 'legs', 'length')) {
        for (i = 0; i < route.routes[0].legs.length; i += 1) {
            sumDistance += route.routes[0].legs[i].distance.value;
        }
    } else {
        return false;
    }
    return Math.round(sumDistance * 0.000621371 * 10) / 10; // floating point problems shouldn't come up with tenths of a mile, right?
}

/**
 * Pull the names of waypoints in order
 *
 * Check waypoint_order from a route against our option list to pull names
 */
function getWaypointNamesInOrder(route) {
    var i,
        orderedStopNames = [];

    if (checkNested(lastDirSvcResponse, 'routes', 0, 'waypoint_order', 'length')) {
        for (i = 0; i < lastDirSvcResponse.routes[0].waypoint_order.length; i += 1) {
            orderedStopNames.push($('#user-waypoints option:selected:eq(' + lastDirSvcResponse.routes[0].waypoint_order[i] +  ')').html());
        }
    } else {
        return false;
    }

    return orderedStopNames;
}
