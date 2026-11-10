let params = new URLSearchParams(window.location.search);

let latitude = params.get("latitude");
let longitude = params.get("longitude");

console.log(latitude);
console.log(longitude);

const apiURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m,is_day,precipitation,rain,snowfall,showers,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m`;
const apiURL2 = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=6af26698273a7978830551bxq8e6dad`

fetch(apiURL)
.then(response => response.json())
.then(data => {

    console.log(data);

    let temp = data.current.temperature_2m;
    let cloudy = data.current.cloud_cover;
    let rainy = data.current.rain;

});

fetch(apiURL2)
.then(response => response.json())
.then(data => {

    console.log(data);

    let city = data.address.city;
    let country = data.address.country;

    document.querySelector("#place").textContent = city + ", " + country;

});