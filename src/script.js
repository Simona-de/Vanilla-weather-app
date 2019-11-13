function formatDate(timespamp) {
  let date = new date(timespamp);
  let hours = date.gethours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let mintues = date.getminuts();
  if (mintues < 10) {
    minutes = `0${minutes}`;
  }
  let days = ["sun", "mon", "tue", "wen", "thu", "fri", "sat"];
  let day = days[now.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function showTemperature(response) {
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let dateElement = document.querySelector("#date");

  let skyElement = document.querySelector("#sky");
  skyElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  console.log(response);
}

let apiKey = "71f687cf35794567462cfbc034ffcc9d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=sydney&units=metric&appid=${apiKey}`;
axios.get(`${apiUrl}`).then(showTemperature);
