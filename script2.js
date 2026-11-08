let city = "Toronto";
const apiURL = `https://api.open-meteo.com/v1/forecast?latitude=43.65&longitude=-79.34&hourly=temperature_2m&current=temperature_2m,is_day,precipitation,rain,snowfall,showers,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m`;

fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        let temp = data.current.temperature_2m;

        document.querySelector("#temp_T").textContent = temp;

});