var plag = document.getElementById('lat');
var plong = document.getElementById('long');

function getUserPosition() {
    let url;
    navigator.geolocation.getCurrentPosition((pos) => {
        let lat = pos.coords.latitude;
        let long = pos.coords.longitude;
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=22ba426f112d272ed0d0ca7ca48ef4b8`;
        fetchApi(url);
        plag.innerHTML = lat;
        plong.innerHTML = long;
    });
}

function fetchApi(url) {
    let city = document.querySelector('.city');
    let temp = document.querySelector('span');
    fetch(url)
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            let tempInCelsius = ((5 / 9) * (data.main.temp - 32)).toFixed(1);
            city.innerText = `Hoje a temperatura em ${data.name} é:`;
            temp.innerText = tempInCelsius;
        })
        .catch((err) => {
            city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
            temp.innerText = `-`;
        })
}

getUserPosition();