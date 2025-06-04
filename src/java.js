

function updateWeather(response){
    let tempOriginal = document.querySelector("#current-weather-number-id")
    let temperature = Math.round(response.data.temperature.current);
    let titleOriginal = document.querySelector("#city-title");
    tempOriginal.innerHTML = temperature;
    titleOriginal.innerHTML = response.data.city
    console.log(temperature); 
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


