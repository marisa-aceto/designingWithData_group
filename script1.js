let city = "Toronto";
const apiURL = `http://api.weatherstack.com/current?access_key=b7e374e76090001d88f4a8d7bb121a58&query=${city}`;

fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        let temp = data.current.temperature;

        document.querySelector("#temp_T").textContent = temp;

});