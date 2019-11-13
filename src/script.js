function showTemperature(response) {
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;
  let sky = document.querySelector("#sky");
  sky.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = response.data.wind.speed;
  console.log(response);
}

let apiKey = "71f687cf35794567462cfbc034ffcc9d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=sydney&units=metric&appid=${apiKey}`;
axios.get(`${apiUrl}`).then(showTemperature);
