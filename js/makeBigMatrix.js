/*globals
    $, document
*/
"use strict";
var i, j, loopOrigin, loopDest, filePath, distanceMatrix = {};

$(document).ready(function () {

    for (i = 0; i < 4; i += 1) {
        for (j = 0; j < 4; j += 1) {
            filePath = 'data/json-combining/json' + i + '-' + j + '.json';
            $.getJSON(filePath, function (data) {
                for (loopOrigin = 0; loopOrigin < data.origin_addresses.length; loopOrigin += 1) {
                    for (loopDest = 0; loopDest < data.destination_addresses.length; loopDest += 1) {
                        distanceMatrix[data.origin_addresses[loopOrigin]][data.destination_addresses[loopDest]] = data.rows[loopOrigin][loopDest];
                    }
                }
                // console.log(data);
            });
        }
    }

    // $.getJSON("signDomains.json", function (data) {
    //     signDomains = data;
    //     $.getJSON("signs.geojson", function (data) {
    //         signData = data;
    //         $.each(signData.features, function (key, item) {
    //             var signDataRow = '';
    //             $.each(fieldsWanted, function (fwKey, fwItem) {
    //                 signDataRow += '<td>';
    //                 if (fwItem in fieldDomainLink) {
    //                     signDataRow += signDomains[fieldDomainLink[fwItem]][item.properties[fwItem]];
    //                 } else if (fwItem === 'SignType2') {
    //                     signDataRow += signDomains[signTypeLink[item.properties['SignType']]][item.properties[fwItem]];
    //                 } else {
    //                     signDataRow += item.properties[fwItem];
    //                 }
    //                 signDataRow += '</td>';
    //             });
    //             $('<tr>').html(signDataRow).appendTo('#signs tbody');
    //         });

    //         $("#signs").tablesorter({theme: 'blue', widgets: ["zebra"]});

    //         $.getJSON("signAttachments.json", function (data) {
    //             signAttachments = data;
    //             $('#signs tbody tr td:last-child').each(function () {
    //                 var i,
    //                     signId = $(this).html(),
    //                     signFile,
    //                     imgHtml = '';

    //                 for (i = 0; i < signAttachments.length; i += 1) {
    //                     if ((signAttachments[i].relId).toLowerCase() === signId) {
    //                         signFile = 'ATT' + signAttachments[i].attId + '_' + encodeURIComponent(signAttachments[i].attName);
    //                         console.log("match " + signId);
    //                         console.log("\t" + signFile);
    //                         if (imgHtml !== '') {
    //                             imgHtml += '<br>';
    //                         }
    //                         imgHtml += '<a target="_blank" href="images/signs-1024/' + signFile + '"><img src="images/signs-256/' + signFile + '"></a>';
    //                     }
    //                 }

    //                 $(this).html(imgHtml);
    //             });
    //         });

    //     });
    // });
});
