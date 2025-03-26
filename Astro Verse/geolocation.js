document.addEventListener("DOMContentLoaded", function() {
    let locations = {
        "map-karachi": [24.8607, 67.0011], 
        "map-Islamabad": [33.6844, 73.0479], 
        "map-skardu": [35.3354, 75.5519],
        "map-quetta": [30.1798, 66.9750],
        "map-Hawaii, USA": [19.8206, -155.4681]
    };
    for (let id in locations) {
        let map = L.map(id).setView(locations[id], 10);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors"
        }).addTo(map);

        L.marker(locations[id]).addTo(map)
            .bindPopup(`<b>${id.replace("map-", "").toUpperCase()}</b>`)
            .openPopup();
    }
    map.on('popupopen', function () {
        map.setView(marker.getLatLng(), map.getZoom(), { animate: true });
    });

});


