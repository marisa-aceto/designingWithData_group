let city = "Rome";
const apiURL = `https://api.open-meteo.com/v1/forecast?latitude=41.90&longitude=12.49&hourly=temperature_2m&current=temperature_2m,is_day,precipitation,rain,snowfall,showers,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m`;
r_skyline = document.getElementById("r_skyline");
clouds = document.getElementsByClassName("clouds");
rome = document.getElementById("rome");
text = document.getElementsByClassName("t_text");
rainfall = document.getElementById("rainfall");
weatherBox = document.getElementById("weatherBox_T");
outfit = document.getElementById("outfit_T");
weatherBox2 = document.getElementById("weatherBox_T2");


fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {


        console.log(data)

        let temp = data.current.temperature_2m;
        let daytime = data.current.is_day;
        let cloudy = data.current.cloud_cover;
        let rainy = data.current.rain;

        document.querySelector("#temp_T").textContent = temp;

        document.querySelector("#cloud_T").textContent = cloudy;


        if (daytime == 1) {
            document.querySelector("#day_T").textContent = "day time";
            r_skyline.style.backgroundImage = "url(images/daysky.jpg)";
            r_skyline.style.backgroundRepeat = "no-repeat";
            text[0].style.color = "black";
            text[1].style.color = "black";
            text[2].style.color = "black";
            text[3].style.color = "black";
            text[4].style.color = "black";
        }
        else if (daytime == 0) {
            document.querySelector("#day_T").textContent = "night time";
            r_skyline.style.backgroundImage = "url(images/nightsky.jpg)";
            r_skyline.style.backgroundRepeat = "no-repeat";
            r_skyline.style.filter = "brightness(0.5)";
            text[0].style.color = "white";
            text[1].style.color = "white";
            text[2].style.color = "white";
            text[3].style.color = "white";
            text[4].style.color = "white";
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
            rainfal.style.opacity = "0.5";
            rainfall.style.animation = "rainMove 2s infinite"
        }
        else if (rainy <=20) {
            rainfal.style.opacity = "0.75";
            rainfall.style.animation = "rainMove 1.5s infinite"
        }
        else {
            rainfal.style.opacity = "1";
            rainfall.style.animation = "rainMove 0.75s infinite"
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

window.addEventListener("scroll", function() {
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
