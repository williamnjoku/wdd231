const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const weatherContainer = document.querySelector('.weather-container');

const lat = 6.53; 
const lon = 3.37;
const apiKey = 'cb005fb8a0154aa1ba03dd29bd738213';

const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(currentURL);
    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    displayCurrentWeather(data);
  } catch (error) {
    console.error('Current weather error:', error);
  }
}

function displayCurrentWeather(data) {
  const temp = data.main.temp.toFixed(1);
  const iconCode = data.weather[0].icon;
  const desc = data.weather[0].description;
  const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  currentTemp.innerHTML = `Temperature is: ${temp}&deg;C`;
  weatherIcon.setAttribute('src', iconURL);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

async function getForecast() {
  try {
    const response = await fetch(forecastURL);
    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    displayForecast(data);
  } catch (error) {
    console.error('Forecast error:', error);
  }
}

function displayForecast(data) {
  const forecastList = document.querySelector('#forecast-list');
  forecastList.innerHTML = ''; 

  const forecasts = data.list.filter(f => f.dt_txt.includes('12:00:00')).slice(0, 3);

  forecasts.forEach(item => {
    const date = new Date(item.dt_txt);
    const day = date.toLocaleDateString(undefined, { weekday: 'short' });
    const temp = item.main.temp.toFixed(1);
    const desc = item.weather[0].description;
    const icon = item.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <h4>${day}</h4>
      <img src="${iconURL}" alt="${desc}">
      <p>${temp}&deg;C</p>
      <p class="desc">${desc}</p>
    `;

    forecastList.appendChild(listItem);
  });
}


getWeather();
getForecast();
