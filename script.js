
//let city = searchCity();
let APIKey = "a8e71c9932b20c4ceb0aed183e6a83bb";
getWeatherData = (city) =>{
   
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULLURL = `${URL}?q=${city}&appid=${APIKey}&units=imperial`;
  let userPromises = fetch(FULLURL);
  userPromises.then((response) =>{
     return response.json();
  }).then((resData) =>{
    showWeatherData(resData);
  }).catch((error) => {
    console.log("error");
  })
  }

searchCity = () =>{
 let city = document.getElementById('city-input').value
  getWeatherData(city);
}

showWeatherData = (weatherData) =>{
   document.getElementById('city-name').innerHTML = weatherData.name;
   document.getElementById('weather-type').innerHTML = weatherData.weather[0].main;
   document.getElementById('temp').innerHTML = weatherData.main.temp;
   document.getElementById('min-temp').innerHTML = weatherData.main.temp_min;
   document.getElementById('max-temp').innerHTML = weatherData.main.temp_max;
}