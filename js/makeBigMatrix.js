/*globals
    $, document
*/
"use strict";
var i, j, loopOrigin, loopDest, filePath,
    distanceMatrix = {},
    idMap = {"63cf63": "8 8th Ave N, Hopkins, MN 55343, USA",
            "64fbab": "125 9th St E, St Paul, MN 55101, USA",
            "deb8bc": "248 River St N, Delano, MN 55328, USA",
            "f56e2a": "414 7th St W, St Paul, MN 55102, USA",
            "2115c1": "414 N 6th Ave, Minneapolis, MN 55401, USA",
            "883de4": "421 3rd St, Excelsior, MN 55331, USA",
            "75a012": "426 St Peter St, St Paul, MN 55102, USA",
            "40def3": "429 Wabasha St S, St Paul, MN 55107, USA",
            "18f56b": "520 Malcolm Ave SE, Minneapolis, MN 55414, USA",
            "69e78a": "688 Minnehaha Ave E, St Paul, MN 55106, USA",
            "f7fcea": "701 N Washington Ave, Minneapolis, MN 55401, USA",
            "fa56b1": "711 NE 15th Ave, Minneapolis, MN 55413, USA",
            "c72ea8": "712 Ontario Ave W, Minneapolis, MN 55403, USA",
            "e4251e": "783 Harding St NE, Minneapolis, MN 55413, USA",
            "f88b79": "920 E Lake St, Minneapolis, MN 55407, USA",
            "3dd8b7": "945 Broadway St NE, Minneapolis, MN 55413, USA",
            "ccebac": "990 Payne Ave, St Paul, MN 55130, USA",
            "aa3680": "1105 S Washington Ave, Minneapolis, MN 55415, USA",
            "7c4513": "1300 NE 2nd St, Minneapolis, MN 55413, USA",
            "40f402": "1315 Tyler St NE, Minneapolis, MN 55413, USA",
            "9c98a7": "1360 Lexington Pkwy N, St Paul, MN 55103, USA",
            "8e8d9d": "1430 S Washington Ave, Minneapolis, MN 55454, USA",
            "21a778": "1500 Fillmore St NE, Minneapolis, MN 55413, USA",
            "8c8c19": "1750 Thomas Ave W, St Paul, MN 55104, USA",
            "6d2cd8": "1900 Tower Dr W, Stillwater, MN 55082, USA",
            "4d1879": "2014 N Washington Ave, Minneapolis, MN 55411, USA",
            "23dd0d": "2222 4th St, White Bear Lake, MN 55110, USA",
            "0fa7c0": "2320 Capp Rd, St Paul, MN 55114, USA",
            "350c72": "2325 Endicott St, St Paul, MN 55114, USA",
            "07c4d8": "2506 Central Ave NE, Minneapolis, MN 55418, USA",
            "001d01": "2610 E 32nd St, Minneapolis, MN 55406, USA",
            "f82cd4": "2716 E 38th St, Minneapolis, MN 55406, USA",
            "dcd183": "2821 E Hennepin Ave, Minneapolis, MN 55413, USA",
            "101863": "2934 Lyndale Ave S, Minneapolis, MN 55408, USA",
            "43df91": "3036 Minnehaha Ave, Minneapolis, MN 55406, USA",
            "b7836a": "4848 W 35th St, Minneapolis, MN 55416, USA",
            "6b0466": "6020 Culligan Way, Minnetonka, MN 55345, USA",
            "d782ac": "7785 Lake Dr, Lino Lakes, MN 55014, USA",
            "0a8d16": "7929 Victoria Dr, Victoria, MN 55386, USA"},
    idMapReverse = {"8 8th Ave N, Hopkins, MN 55343, USA": "63cf63",
            "125 9th St E, St Paul, MN 55101, USA": "64fbab",
            "248 River St N, Delano, MN 55328, USA": "deb8bc",
            "414 7th St W, St Paul, MN 55102, USA": "f56e2a",
            "414 N 6th Ave, Minneapolis, MN 55401, USA": "2115c1",
            "421 3rd St, Excelsior, MN 55331, USA": "883de4",
            "426 St Peter St, St Paul, MN 55102, USA": "75a012",
            "429 Wabasha St S, St Paul, MN 55107, USA": "40def3",
            "520 Malcolm Ave SE, Minneapolis, MN 55414, USA": "18f56b",
            "688 Minnehaha Ave E, St Paul, MN 55106, USA": "69e78a",
            "701 N Washington Ave, Minneapolis, MN 55401, USA": "f7fcea",
            "711 NE 15th Ave, Minneapolis, MN 55413, USA": "fa56b1",
            "712 Ontario Ave W, Minneapolis, MN 55403, USA": "c72ea8",
            "783 Harding St NE, Minneapolis, MN 55413, USA": "e4251e",
            "920 E Lake St, Minneapolis, MN 55407, USA": "f88b79",
            "945 Broadway St NE, Minneapolis, MN 55413, USA": "3dd8b7",
            "990 Payne Ave, St Paul, MN 55130, USA": "ccebac",
            "1105 S Washington Ave, Minneapolis, MN 55415, USA": "aa3680",
            "1300 NE 2nd St, Minneapolis, MN 55413, USA": "7c4513",
            "1315 Tyler St NE, Minneapolis, MN 55413, USA": "40f402",
            "1360 Lexington Pkwy N, St Paul, MN 55103, USA": "9c98a7",
            "1430 S Washington Ave, Minneapolis, MN 55454, USA": "8e8d9d",
            "1500 Fillmore St NE, Minneapolis, MN 55413, USA": "21a778",
            "1750 Thomas Ave W, St Paul, MN 55104, USA": "8c8c19",
            "1900 Tower Dr W, Stillwater, MN 55082, USA": "6d2cd8",
            "2014 N Washington Ave, Minneapolis, MN 55411, USA": "4d1879",
            "2222 4th St, White Bear Lake, MN 55110, USA": "23dd0d",
            "2320 Capp Rd, St Paul, MN 55114, USA": "0fa7c0",
            "2325 Endicott St, St Paul, MN 55114, USA": "350c72",
            "2506 Central Ave NE, Minneapolis, MN 55418, USA": "07c4d8",
            "2610 E 32nd St, Minneapolis, MN 55406, USA": "001d01",
            "2716 E 38th St, Minneapolis, MN 55406, USA": "f82cd4",
            "2821 E Hennepin Ave, Minneapolis, MN 55413, USA": "dcd183",
            "2934 Lyndale Ave S, Minneapolis, MN 55408, USA": "101863",
            "3036 Minnehaha Ave, Minneapolis, MN 55406, USA": "43df91",
            "4848 W 35th St, Minneapolis, MN 55416, USA": "b7836a",
            "6020 Culligan Way, Minnetonka, MN 55345, USA": "6b0466",
            "7785 Lake Dr, Lino Lakes, MN 55014, USA": "d782ac",
            "7929 Victoria Dr, Victoria, MN 55386, USA": "0a8d16"};

$(document).ready(function () {
    for (i = 0; i < 4; i += 1) {
        for (j = 0; j < 4; j += 1) {
            filePath = 'data/json-combining/json' + i + '-' + j + '.json';
            $.getJSON(filePath, function (data) {
                for (loopOrigin = 0; loopOrigin < data.origin_addresses.length; loopOrigin += 1) {
                    for (loopDest = 0; loopDest < data.destination_addresses.length; loopDest += 1) {
                        if (!distanceMatrix.hasOwnProperty(idMapReverse[data.origin_addresses[loopOrigin]])) {
                            distanceMatrix[idMapReverse[data.origin_addresses[loopOrigin]]] = [];
                        }
                        distanceMatrix[idMapReverse[data.origin_addresses[loopOrigin]]][idMapReverse[data.destination_addresses[loopDest]]] = 0.000621371 * (data.rows[loopOrigin].elements[loopDest].distance.value);
                    }
                }
            });
        }
    }
});
