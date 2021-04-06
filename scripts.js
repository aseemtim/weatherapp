let cityName = 'sydney';
let weather = document.getElementById('weather');
let temp = document.getElementById('tempValue');
let humidity = document.getElementById('humidityValue');
let pressure = document.getElementById('pressureValue');
let gif = document.querySelector('img');
let form = document.querySelector('form')

async function getWeather() {
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b5d209875bb6f3608c6d42b2f6609e31`, {mode: 'cors'});
    const weatherData = await weatherResponse.json();
    weather.innerHTML = weatherData.weather[0].main;
    if(weather.innerHTML==='Haze') {
        weather.innerHTML='Hazy';
    }
    if(weather.innerHTML==='Clouds') {
        weather.innerHTML='Cloudy'
    }
    temp.innerHTML = weatherData.main.temp;
    humidity.innerHTML = weatherData.main.humidity;
    pressure.innerHTML = weatherData.main.pressure;
    const giphyResponse = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=uFPJwairW2T1z1QRQCj0c9MsZKDwkVyb&s=${weather.innerHTML}`, {mode: 'cors'});
    const giphyData = await giphyResponse.json();
    gif.src = giphyData.data.images.original.url;
}

getWeather();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    cityName = document.getElementById('cityName').value;
    getWeather();
})