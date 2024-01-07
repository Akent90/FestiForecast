const holidayApiKey = 'f219ccee11c84093ac709d7de3de5010';
const weatherApiKey = 'b15a810c1209f985b7d2e24e97487aab';

const inputLocation = document.getElementById('inputLocation');
const inputCountryCode = document.getElementById('inputCountryCode');
const submitButton = document.getElementById('submitButton');
const holidayContainer = document.getElementById('holidaySection');
const weatherContainer = document.getElementById('weatherSection');

function fetchHolidayData(countryCode) {
    const year = new Date().getFullYear();
    const holidayApiUrl = `https://holidayapi.com/v1/holidays?country=${countryCode}&year=${year}&pretty&key=${holidayApiKey}`;

    fetch(holidayApiUrl)
    .then(response => response.json())
    .then(data => {
        displayHolidays(data.holidays);
    })
    .catch(error => console.error('Error fetching holiday data: ', error));
}

function fetchWeatherData(city) {
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=imperial`;

    fetch(weatherApiUrl)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => console.error('Error fetching weather data:', error));
}

function displayHolidays(holidays) {
    holidayContainer.innerHTML = '';

    if (holidays.length === 0) {
        holidayContainer.innerHTML = '<p>No holidays found for this location and year.</p>';
        return;
    }

    holidays.forEach(holiday => {
        const holidayCard = document.createElement('div');
        holidayCard.className = 'card';

        const holidayName = document.createElement('h3');
        holidayName.textContent = holiday.name;

        const holidayDate = document.createElement('p');
        holidayDate.textContent = `Date: ${holiday.date}`;

        holidayCard.appendChild(holidayName);
        holidayCard.appendChild(holidayDate);

        holidayContainer.appendChild(holidayCard);
    });
}

function displayWeather(weatherData) {
    weatherContainer.innerHTML = '';

    const weatherCard = document.createElement('div');
    weatherCard.className = 'card';

    const weatherCity = document.createElement('h3');
    weatherCity.textContent = weatherData.name;
    weatherCard.appendChild(weatherCity);

    const weatherTemp = document.createElement('p');
    weatherTemp.textContent = `Temperature: ${weatherData.main.temp} °F`;
    weatherCard.appendChild(weatherTemp);

    const condition = document.createElement('p');
    condition.textContent = `Condition: ${weatherData.weather[0].main} (${weatherData.weather[0].description})`;
    weatherCard.appendChild(condition);

    const humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    weatherCard.appendChild(humidity);

    const windSpeed = document.createElement('p');
    windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} mph`;
    weatherCard.appendChild(windSpeed);

    const visibility = document.createElement('p');
    visibility.textContent = `Visibility: ${weatherData.visibility / 1000} mi`;
    weatherCard.appendChild(visibility);

    weatherCard.appendChild(weatherTemp);

    weatherContainer.appendChild(weatherCard);
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var city = inputLocation.value;
    var countryCode = inputCountryCode ? inputCountryCode.value : '';

    if (!city) {
        alert("Please enter both a city.");
        return;
    }

    localStorage.setItem("inputLocation", city);
    localStorage.setItem("inputCountryCode", countryCode);

    fetchHolidayData(countryCode);
    fetchWeatherData(city);

});

function renderLastRegistered() {
    const lastCity = localStorage.getItem("inputLocation");
    const lastCountryCode = localStorage.getItem("inoutCountryCode");
    
    if (lastCity) {
        inputLocation.value = lastCity;
    }

    if (lastCountryCode) {
        inputCountryCode.value = lastCountryCode;
    }
}

renderLastRegistered();
