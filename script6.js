let city = "Vienna";
const apiURL = `https://api.open-meteo.com/v1/forecast?latitude=48.2085&longitude=16.3721&hourly=is_day,temperature_2m,wind_speed_10m,wind_direction_10m,weather_code,precipitation,rain,snowfall,cloud_cover&daily=weather_code,precipitation_sum,rain_sum,snowfall_sum,wind_direction_10m_dominant&timezone=auto&forecast_days=3&models=geosphere_seamless`;

v_skyline = document.getElementById("v_skyline");
clouds = document.getElementsByClassName("clouds");
vienna = document.getElementById("vienna");
text = document.getElementsByClassName("t_text");
rainfall = document.getElementById("rainfall");
weatherBox = document.getElementById("weatherBox_T");
outfit = document.getElementById("outfit_T");
weatherBox2 = document.getElementById("weatherBox_T2");

fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {


        console.log(data)

        let temp = data.hourly.temperature_2m[0];
        let daytime = data.hourly.is_day[0];
        let cloudy = data.hourly.cloud_cover[0];
        let rainy = data.hourly.rain[0];


        document.querySelector("#temp_T").textContent = temp;

        document.querySelector("#cloud_T").textContent = cloudy;


        if (daytime == 1) {
            document.querySelector("#day_T").textContent = "day time";
            v_skyline.style.backgroundImage = "url(images/daysky.jpg)";
            v_skyline.style.backgroundRepeat = "no-repeat";
            text[0].style.color = "navyblue";
            text[1].style.color = "navyblue";
            text[2].style.color = "navyblue";
            text[3].style.color = "navyblue";
            text[4].style.color = "navyblue";
            weatherBox.style.color = "navyblue";
        }
        else if (daytime == 0) {
            document.querySelector("#day_T").textContent = "night time";
            v_skyline.style.backgroundImage = "url(images/nightsky.jpg)";
            v_skyline.style.backgroundRepeat = "no-repeat";
            v_skyline.style.filter = "brightness(0.5)";
            text[0].style.color = "lightblue";
            text[1].style.color = "lightblue";
            text[2].style.color = "lightblue";
            text[3].style.color = "lightblue";
            text[4].style.color = "lightblue";
            weatherBox.style.color = "navyblue";
        }


        if (cloudy <= 25) {
            clouds[0].style.opacity = "0.2";

        }
        else if (cloudy <= 50) {
            clouds[0].style.opacity = "0.5";
            clouds[1].style.opacity = "0.75";
        }

        else if (cloudy <= 75) {
            clouds[0].style.opacity = "0.75";
            clouds[1].style.opacity = "0.5";
            clouds[2].style.opacity = "0.75";
        }
        else {
            clouds[0].style.opacity = "0.75";
            clouds[1].style.opacity = "0.75";
            clouds[2].style.opacity = "0.75";
            clouds[3].style.opacity = "0.75";
        }

        document.querySelector("#rain_T").textContent = rainy;

        if (rainy == 0) {
            rainfall.style.opacity = "0";
        }
        else if (rainy <= 2.5) {
            rainfall.style.opacity = "0.5";
            rainfall.style.animation = "rainMove 2s infinite";
        }
        else if (rainy <= 20) {
            rainfall.style.opacity = "0.75";
            rainfall.style.animation = "rainMove 1.5s infinite";
        }
        else {
            rainfall.style.opacity = "1";
            rainfall.style.animation = "rainMove 0.75s infinite";
        }

        if (temp >= 16) {
            document.querySelector("#outfit_inside_T").textContent = "shorts, t-shirts, and dresses!";
        }

        else if (temp >= 5) {
            document.querySelector("#outfit_inside_T").textContent = "a light jacket, sweaters, and jeans";
        }

        else {
            document.querySelector("#outfit_inside_T").textContent = "a heavy jacket, hats, and gloves";
        }


    });

for (let cloud = 0; cloud < clouds.length; cloud++) {
    clouds[cloud].style.top = Math.random() * 10 + "%";
    clouds[cloud].style.left = Math.random() * 80 + "%";
    clouds[cloud].style.height = Math.random() * 100 + "%";
}

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        weatherBox.classList.add("show");
    }
    else {
        weatherBox.classList.remove("show");
    }

    if (window.scrollY > 400) {
        weatherBox2.classList.add("show");
    }
    else {
        weatherBox2.classList.remove("show");
    }
});


