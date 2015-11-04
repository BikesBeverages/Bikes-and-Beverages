# User Stories

## Mandatory

* As a "commuter," I want to plan rides to one or more taprooms/brewpubs/distilleries ("destinations"), starting from and ending at an arbitrary location (like home), with the most efficient route plotted.
  * How do users set their start/end point? Geolocation?
  * Routes might be different each way (one-way streets, etc.)
  * Users can select the markers
  * Start with hardcoded

* As a commuter, I want to be able to do all of this from my small-screen device
  * Responsive, start small-screen; iOS, Android

* As a [whatever], I want to be able to customize my route.
* As a [whatever], I want to be able to add and remove destinations from my routes
* As a [whatever], I want to share my route with friends
  * Add a bookmark?
  * Short URLs?
* As a [whatever], I want to know if there are big hills in my routes so that I can avoid them.
* As a [distance] walker, I want to walk to do the same thing.
  * Should just be a parameter change for service calls; bigger UI implications?


## Optional

* As a biker, I want to get routes of an approximate distance from my home to various destinations back to my home (random generation)


* As a biker (or walker; "commuter"), I want to be able to see the shortest route between two taprooms/brewpubs/distilleries ("destinations").

## Notes

* Map should include zoom in/out
* Geolocation
* Return to home
* We need to define the extent (data and map limits)
* Panning
* Rotation
* Basemap, aerial imagery, hybrid? What are the layer options?
