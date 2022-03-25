let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
firstMap.setView([40.730833, -73.9975], 16);

let bobstLibrary, bobstLibraryMarker, washingtonSquarePark, washingtonSquareParkMarker;
bobstLibrary = L.latLng(40.729444, -73.997222);
bobstLibraryMarker = L.marker(bobstLibrary).bindPopup("This is Bobst Library.").addTo(firstMap);
washingtonSquarePark = L.latLng(40.730833, -73.9975);
washingtonSquareParkMarker = L.marker(washingtonSquarePark).bindPopup("This is Washington Square Park.").addTo(firstMap);

let circle;
circle = L.circle(bobstLibrary, {radius: 200,
                                 color: "#859900",
                                 fillColor: "#cb4b16",
                                 opacity: 0.9,
                                 fillOpacity: 0.25}
          ).addTo(firstMap);
let circle;
circle = L.circle(washingtonSquarePark, {radius: 200,
                                         color: "#859900",
                                         fillColor: "#cb4b16",
                                         opacity: 0.9,
                                         fillOpacity: 0.25}
          ).addTo(firstMap);

/*let brooklynMuseum, brooklynMuseumMarker, theMet, theMetMarker, moma, momaMarker;
brooklynMuseum = L.latLng(40.6712, -73.9639);
brooklynMuseumMarker = L.marker(brooklynMuseum).bindPopup("This is the Brooklyn Museum.").addTo(firstMap);
theMet = L.latLng(40.7794, -73.9632);
theMetMarker = L.marker(theMet).bindPopup("This is the Metropolitan Museum of Art, AKA, The Met.").addTo(firstMap);
moma = L.latLng(40.7614, -73.9776);
momaMarker = L.marker(moma).bindPopup("This is the Museum of Modern Art.").addTo(firstMap);

let circle;
circle = L.circle(brooklynMuseum, theMet, moma, {radius: 150,
                                    color: "#ff008c",
                                    fillColor: "#859900",
                                    opacity: 0.9,
                                    fillOpacity: 0.25}
            ).addTo(firstMap);
*/
                                
