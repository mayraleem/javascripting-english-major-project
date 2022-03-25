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

/*let circle;
circle = L.circle(washingtonSquarePark, bobstLibrary, {radius: 100,
                                                      color: "#859900",
                                                      fillColor: "#cb4b16",
                                                      opacity: 0.9,
                                                      fillOpacity: 0.25}
          ).addTo(firstMap);

let brooklynMuseum, brooklynMuseumMarker;
brooklynMuseum = L.latLng(40.6712, -73.9639);
brooklynMuseumMarker = L.marker(brooklynMuseum).bindPopup("This is the Brooklyn Museum.").addTo(firstMap);

let circle;
circle = L.circle(brooklynMuseum, {radius: 150,
                                    color: "#ff008c",
                                    fillColor: "#859900",
                                    opacity: 0.9,
                                    fillOpacity: 0.25}
            ).addTo(firstMap);
                            */  
                                
