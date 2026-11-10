let params = new URLSearchParams(window.location.search);

let latitude = params.get("latitude");
let longitude = params.get("longitude");
let div1 = document.getElementById("temp");
let div2 = document.getElementById("cloud");
let div3 = document.getElementById("rain");
let div4 = document.getElementById("snow");

let search = document.querySelector(".indexSearch");

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
    let snowy = data.current.snowfall;
    let daytime = data.current.is_day;

    if (daytime == 1) {
            search.style.backgroundImage = "url(images/daysky.jpg)";
            search.style.backgroundRepeat = "no-repeat";
        }
        else if (daytime == 0) {
            search.style.backgroundImage = "url(images/nightsky.jpg)";
            search.style.backgroundRepeat = "no-repeat";
        }

    if (temp >= 0) {
        div1.style.height = ((temp / 40) * 50) + (50) + "%";
        div1.style.background = "red";
    }
    else {
        div1.style.height = (-temp / 40) * 50 + "%";
        div1.style.background = "blue";
    }

    div2.style.height = cloudy + "%";
    div2.style.background = "darkgrey"
    div3.style.height = rainy + "%";
    div2.style.background = "lightblue"
    div4.style.height = snowy + "%";
    div2.style.background = "lightgreen"

    document.querySelector("#temp_Search").textContent = temp;
    document.querySelector("#cloud_Search").textContent = cloudy;
    document.querySelector("#rain_Search").textContent = rainy;
    document.querySelector("#snow_Search").textContent = snowy;

});

fetch(apiURL2)
.then(response => response.json())
.then(data => {

    console.log(data);

    let city = data.address.city;
    let country = data.address.country;

    document.querySelector("#place").textContent = city + ", " + country;

});