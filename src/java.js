

function cityLookup(city){
   let apiKey = "4tbcf6d8oa89ad8e3f7bdb3c1fa0deb0";
   let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
   axios.get(apiURL).then(updateWeather)

}

function changeCity(event){
    event.preventDefault();
    let cityInput = document.querySelector("#search-form-id");
    let title = document.querySelector("#city-title");
    title.innerHTML = cityInput.value;
    cityLookup(cityInput.value)
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);
