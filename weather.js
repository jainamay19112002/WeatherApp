const weatherApi = {
        key: "18d018223aefcf2fc81e815af362d8b5",
        baseUrl: "https://api.openweathermap.org/data/2.5/weather",
    }
    //api.openweathermap.org / data / 2.5 / weather ? q = { city name } & appid = { API key }
const searchInputBox = document.getElementById('input-box')
searchInputBox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }
});

function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);
}

function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    let temperature = document.getElementById('temperature');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerHTML = `${weather.weather[0].main}`;

    if (weatherType.textContent == 'Sunny') {
        document.body.style.backgroundImage = "url('hot.jpg')";

    } else if (weatherType.textContent == 'Clear') {

        document.body.style.backgroundImage = "url('clear.jpg')";

    } else if (weatherType.textContent == 'Mist') {

        document.body.style.backgroundImage = "url('mist.jpg')";

    } else if (weatherType.textContent == 'Rain') {

        document.body.style.backgroundImage = "url('rain.jpeg')";

    } else if (weatherType.textContent == 'Snow') {

        document.body.style.backgroundImage = "url('snowfall.jpg')";

    } else if (weatherType.textContent == 'Thunderstorm') {

        document.body.style.backgroundImage = "url('thunderstorm.jpg')";

    } else if (weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('haze.jpg')";

    } else if (weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('cloudy.jpg')";

    } else if (weatherType.textContent == 'Fog') {

        document.body.style.backgroundImage = "url('fog.jpg')";
    }
}

// Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}