function getWeather() {
    const location = document.getElementById("locationInput").value;
    const apiKey = "0a2c8ca87735433a936125532261502";

    if (location === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById("result").innerHTML = "City not found ❌";
            } else {
                const temp = data.current.temp_c;
                const condition = data.current.condition.text;

                document.getElementById("result").innerHTML = 
                    `🌍 ${data.location.name}<br>
                     🌡 Temperature: ${temp}°C<br>
                     ☁ Condition: ${condition}`;
            }
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "Error fetching data";
        });
}
