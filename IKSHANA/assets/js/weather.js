const city = document.getElementById('city-input');
const flag = document.getElementById('flag');




showWeatherData = (weatherData) => {
    document.getElementById("city-name").innerText = weatherData.name
    document.getElementById("weather-type").innerText = weatherData.weather[0].main
    document.getElementById("temp").innerText = (weatherData.main.temp)
    document.getElementById("min-temp").innerText = ( weatherData.wind.speed)
    document.getElementById("max-temp").innerText =( weatherData.main.humidity)
  

  }
  
  
const searchCity=async()=>{
     let response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=13d5064c52b8bfa87d6e36bca9454e3c&units=metric`)
     let data=await response.json()
     showWeatherData(data)
}
