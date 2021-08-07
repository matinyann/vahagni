const getWeather = () => {
    let loc = "Vahagni";
    let key = "7368340352a0cbf09db0aa0339ec3830";
    fetch('https:api.openweathermap.org/data/2.5/weather?q=' + loc + '&appid=' + key)
        .then(function (response) { return response.json() })
        .then(function (data) {
            placeItems(data);
        });

    this.placeItems = (data) => {
        const wrapper = document.querySelector("#wrapper");
        const location = wrapper.querySelectorAll("#location");
        const celsius = document.querySelectorAll("#c");
        const weatherIcon = document.querySelectorAll("#weather_icon");
        const main = document.querySelectorAll("#main");
        const desc = document.querySelectorAll("#description");

        location.forEach(e => e.innerHTML = data.name);
        celsius.forEach(e => e.innerHTML = (data.main.temp - 278.15).toFixed(2) + " &degC &nbsp" );
        main.forEach(e => e.innerHTML = data.weather[0].main + ", &nbsp");
        desc.forEach(e => e.innerHTML = data.weather[0].description);
        weatherIcon.forEach(e => e.setAttribute("src", `http://openweathermap.org/img/w/${data.weather[0].icon}.png`));
    }

    
}
getWeather()