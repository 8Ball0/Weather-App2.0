

function updateWeather(response){
    console.log(response.data.temperature.current);
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
    titleOriginal.innerHTML = titleChange.value;
    lookupCityInfo(titleChange.value);
}

 let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);


