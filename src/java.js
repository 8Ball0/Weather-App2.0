

function updateWeather(response){
    let tempOriginal = document.querySelector("#current-weather-number-id")
    let temperature = Math.round(response.data.temperature.current);
    let titleOriginal = document.querySelector("#city-title");
    let conditions = document.querySelector("#weather-conditions");
    let currentConditions = response.data.condition.description;
    let humidity = document.querySelector("#humidity");
    let winds = document.querySelector("#winds")

    tempOriginal.innerHTML = temperature;
    titleOriginal.innerHTML = response.data.city
    conditions.innerHTML = currentConditions;
    humidity.innerHTML = response.data.temperature.humidity;
    winds.innerHTML = response.data.wind.speed
  
}

function lookupCityInfo(city){
    apiKey = "4tbcf6d8oa89ad8e3f7bdb3c1fa0deb0"
    apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(updateWeather)
}

function changeCity(event){
    event.preventDefault();
    let titleChange = document.querySelector("#search-form-id");
    let titleOriginal = document.querySelector("#city-title");
    lookupCityInfo(titleChange.value);
}

 let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);


