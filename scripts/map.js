function setInteractive(map) {
    var provider = map.getBaseLayer().getProvider();
    var style = provider.getStyle();
    var changeListener = (evt) => {
        if (style.getState() === H.map.Style.State.READY) {
            style.removeEventListener('change', changeListener);
            style.setInteractive(['places', 'places.populated-places'], true);
            provider.addEventListener('tap', onTap);
        }
    };
    style.addEventListener('change', changeListener);
}

async function discoverShaurmaResponse(pos) {
    let url = `https://discover.search.hereapi.com/v1/discover?at=${pos.coords.latitude},${pos.coords.longitude}&limit=2&q=%D1%88%D0%B0%D1%83%D1%80%D0%BC%D0%B0&apiKey=vIJaolIu9ITrdsSc-wdsC9DidhCcytNc0-rEQ99HMR4`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
}
var platform = new H.service.Platform({
    'apikey': 'vIJaolIu9ITrdsSc-wdsC9DidhCcytNc0-rEQ99HMR4'
});
var defaultLayers = platform.createDefaultLayers();

window.addEventListener('resize', () => map.getViewPort().resize());

var map = new H.Map(
    document.getElementById('map'),
    defaultLayers.vector.normal.map, {
        zoom: 10,
        center: {
            lat: 55.644466,
            lng: 37.395744,
        },
        pixelRatio: window.devicePixelRatio || 1
    });

async function addMarkersToMap(pos) {
    let data = await discoverShaurmaResponse(pos);
    console.log(data.items);
    for (var i = 0; i < data.items.length; i++) {
        map.addObject(new H.map.Marker({
            lat: data.items[i].position.lat,
            lng: data.items[i].position.lng
        }));
        console.log(data.items[i].position.lng);
    }
}

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var ui = H.ui.UI.createDefault(map, defaultLayers);

const successcallback = (pos) => {
    map.setCenter({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
    });
    addMarkersToMap(pos);
};

const errorcallback = (e) => {
    console.log(e);
};

navigator.geolocation.getCurrentPosition(successcallback, errorcallback);
window.onload = function () {
    setInteractive(map);
}