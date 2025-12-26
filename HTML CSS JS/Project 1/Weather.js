let APIURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let APIKEY = "e0636f71c487c3ab40bc18ac677fa589";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");

let Weather_Icon = document.querySelector(".weather-icon");

async function checkWeatherDeatils(city) {
  const response = await fetch(APIURL + city + `&appid=${APIKEY}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const Parsed_data = await response.json();
    console.log(Parsed_data);
    document.querySelector(".city").innerHTML = Parsed_data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(Parsed_data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = Parsed_data.wind.speed + "Km/h";
    document.querySelector(".humidity").innerHTML =
      Parsed_data.main.humidity + "%";

    if (Parsed_data.weather[0].main == "Clear") {
      Weather_Icon.src = "images/clear.png";
    } else if (Parsed_data.weather[0].main == "Clouds") {
      Weather_Icon.src = "images/clouds.png";
    } else if (Parsed_data.weather[0].main == "Rain") {
      Weather_Icon.src = "images/rain.png";
    } else if (Parsed_data.weather[0].main == "Drizzle") {
      Weather_Icon.src = "images/drizzle.png";
    } else if (Parsed_data.weather[0].main == "Mist") {
      Weather_Icon.src = "images/mist.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeatherDeatils(searchBox.value);
});
