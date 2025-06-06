
function getDate(date){
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let days = ["Sunday", "Monday", "Tuesday ", " Wednesday", "Thursday ", " Friday ", "Satureday"];
    let day = days[date.getDay()]

    if (minutes < 10){
        minutes = `0${minutes}`;
    }

    return `${day} ${hours} : ${minutes}`
}


function updateWeather(response){
    let tempOriginal = document.querySelector("#current-weather-number-id")
    let temperature = Math.round(response.data.temperature.current);
    let titleOriginal = document.querySelector("#city-title");
    let conditions = document.querySelector("#weather-conditions");
    let currentConditions = response.data.condition.description;
    let humidity = document.querySelector("#humidity");
    let winds = document.querySelector("#winds")
    let time = document.querySelector("#time")
    let date = new Date(response.data.time * 1000)
    let icon = document.querySelector("#icon");


    tempOriginal.innerHTML = temperature;
    titleOriginal.innerHTML = response.data.city
    conditions.innerHTML = currentConditions;
    humidity.innerHTML = response.data.temperature.humidity;
    winds.innerHTML = response.data.wind.speed
    time.innerHTML = getDate(date)
    icon.innerHTML = `<img src = "${response.data.condition.icon_url}"></img>`
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


