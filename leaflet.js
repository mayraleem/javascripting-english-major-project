let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
firstMap.setView([40.737461, -73.946611], 12);

let bobstLibrary, bobstLibraryMarker, washingtonSquarePark, washingtonSquareParkMarker, brooklynMuseum, brooklynMuseumMarker, theMet, theMetMarker, moma, momaMarker, barrioMuseo, barrioMuseoMarker;
bobstLibrary = L.latLng(40.729444, -73.997222);
bobstLibraryMarker = L.marker(bobstLibrary).bindPopup("This is Bobst Library.").addTo(firstMap);
washingtonSquarePark = L.latLng(40.730833, -73.9975);
washingtonSquareParkMarker = L.marker(washingtonSquarePark).bindPopup("This is Washington Square Park.").addTo(firstMap);
brooklynMuseum = L.latLng(40.6712, -73.9636);
brooklynMuseumMarker = L.marker(brooklynMuseum).bindPopup("This is the Brooklyn Museum.").addTo(firstMap);
theMet = L.latLng(40.7794, -73.9632);
theMetMarker = L.marker(theMet).bindPopup("This is the Metropolitan Museum of Art.").addTo(firstMap);
moma = L.latLng(40.7614, -73.9776);
momaMarker = L.marker(moma).bindPopup("This is the Museum of Modern Art.").addTo(firstMap);
barrioMuseo = L.latLng(40.7931, -73.9514);
barrioMuseoMarker = L.marker(barrioMuseo).bindPopup("This is Museo del Barrio.").addTo(firstMap);

      let circle;
      circle = L.circle(bobstLibrary, {radius: 100,
                                 color: "#859900",
                                 fillColor: "#cb4b16",
                                 opacity: 0.9,
                                 fillOpacity: 0.25}
              ).addTo(firstMap);
   /*   let circle;
      circle = L.circle(washingtonSquarePark, {radius: 100,
                                               color: "#859900",
                                               fillColor: "#cb4b16",
                                               opacity: 0.9,
                                               fillOpacity: 0.25}
              ).addTo(firstMap);
*/
                                
