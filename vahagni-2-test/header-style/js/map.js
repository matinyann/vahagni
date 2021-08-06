var pos = [40.9065, 44.6088];

function map() {

    var latLng = new google.maps.LatLng(pos[0], pos[1]);

    var mapOptions = {
        zoom: 15,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        center: latLng
    };

    map = new google.maps.Map(document.querySelector('#googlemaps'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', map);