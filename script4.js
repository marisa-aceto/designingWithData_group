let city = "Beijing";
const apiURL = `https://api.open-meteo.com/v1/forecast?latitude=39.90&longitude=116.40&hourly=temperature_2m&current=temperature_2m,is_day,precipitation,rain,snowfall,showers,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m`;
b_skyline = document.getElementById("b_skyline");
clouds = document.getElementsByClassName("clouds");

fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {


        console.log(data)

        let temp = data.current.temperature_2m;
        let daytime = data.current.is_day;
        let cloudy = data.current.cloud_cover;

        document.querySelector("#temp_B").textContent = temp;

        document.querySelector("#cloud_B").textContent = cloudy;


        if (daytime == 1) {
            document.querySelector("#day_B").textContent = "day time";
            b_skyline.style.backgroundImage = "url(images/daysky.jpg)";
            b_skyline.style.backgroundRepeat = "no-repeat";
        }
        else if (daytime == 0) {
            document.querySelector("#day_B").textContent = "night time";
            b_skyline.style.backgroundImage = "url(images/nightsky.jpg)";
            b_skyline.style.backgroundRepeat = "no-repeat";
        }


        if (cloudy <= 25) {
            clouds[0].style.opacity = "0.75";

        }
        else if (cloudy <= 50) {
            clouds[0].style.opacity = "0.75";
            clouds[1].style.opacity = "0.75";
        }

        else if (cloudy <= 75) {
            clouds[0].style.opacity = "0.75";
            clouds[1].style.opacity = "0.75";
            clouds[2].style.opacity = "0.75";
        }
        else {
            clouds[0].style.opacity = "0.75";
            clouds[1].style.opacity = "0.75";
            clouds[2].style.opacity = "0.75";
            clouds[3].style.opacity = "0.75";
        }


});

for (let cloud = 0; cloud < clouds.length; cloud++) {
    clouds[cloud].style.top = Math.random() * 10 + "%";
    clouds[cloud].style.left = Math.random() * 100 + "%";
    clouds[cloud].style.height = Math.random() * 250 + "px";
}