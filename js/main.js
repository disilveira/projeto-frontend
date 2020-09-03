function helloWorld() {
    for (let i = 3; i > 0; i--) {
        console.log(i);
    }
    console.log('...');
    console.log('Hello World!');
}
helloWorld();

var x = document.getElementById("coordenadas");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
}
else { 
    x.innerHTML = "Navegador não suportado para Geolocalização."; 
}


function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    latlon = new google.maps.LatLng(lat, lon)
    mapholder = document.getElementById('mapa')
    mapholder.style.height = '80%';
    mapholder.style.width = '80%';

    var myOptions = {
        center: latlon, zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
    };

    var map = new google.maps.Map(document.getElementById("mapa"), myOptions);
    var marker = new google.maps.Marker({ position: latlon, map: map, title: "Você está Aqui!" });

    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "Usuário rejeitou a solicitação de Geolocalização."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Localização indisponível."
            break;
        case error.TIMEOUT:
            x.innerHTML = "A requisição expirou."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "Erro desconhecido."
            break;
    }
}