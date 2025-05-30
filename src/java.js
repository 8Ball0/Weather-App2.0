function changeCity(event){
    event.preventDefault();
    let cityInput = document.querySelector("#search-form-id");
    let title = document.querySelector("#city-title");
    title.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);
