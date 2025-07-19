const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=cb005fb8a0154aa1ba03dd29bd738213';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 
      displayResults(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}


function displayResults(weatherData) {
  currentTemp.innerHTML = `${weatherData.main.temp}&deg;C`;

  const iconCode = weatherData.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', weatherData.weather[0].description);

  captionDesc.textContent = weatherData.weather[0].description;
}

apiFetch();
