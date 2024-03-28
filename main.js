
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([-43.534757, 172.629441], 11);
L.control.scale().addTo(map);


// REPLACE THIS BLOCK OF CODE WITH YOUR MAPBOX CODE
const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/gdmckenzie/clu1oko6p025v01pt5a4q22l7/tiles/{z}/{x}/{y}?/access_token=pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA', {
    maxZoom: 19,
    tileSize: 512,
    zoomOffset: -1,
    attribution: '&copy; OpenStreetMap &amp; MapBox'
}).addTo(map);
// END REPLACE BLOCK



// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.
const marker1 = L.marker([-43.468678, 172.678653]).addTo(map)
	.bindPopup('Bottle Lake Forest Park.');

const marker2 = L.marker([-43.528436, 172.598391]).addTo(map)
	.bindPopup('Riccarton house and bush.');

const marker3 = L.marker([-43.489398, 172.695143]).addTo(map)
	.bindPopup('Travis Wetland Forest Park.');

const marker4 = L.marker([-43.511126, 172.732391]).addTo(map)
	.bindPopup('New Brighton.').openPopup();



// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'Green',
		fillOpacity: 0.3,
	});
geojsonLayer.addTo(map);




// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([
		[-43.485245, 172.606727],
		[-43.430110, 172.568106],
		[-43.468430, 172.467069],
		[-43.441662, 172.574975],
                [-43.488427, 172.604863]


	],{
		color: 'sky blue',
		fillColor: '#f03',
                fillOpacity: 0.5,
                weight: 1 
	}).addTo(map).bindPopup('Biking routes.');




// END OF DOCUMENT