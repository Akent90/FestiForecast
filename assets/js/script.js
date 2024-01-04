<<<<<<< HEAD
//local storage, event listener, and alert
var inputValue = document.querySelector("#inputLocation");
var submitButton = document.querySelector("#submitButton")
=======
const holidayApiKey = '52dd97a0-dca8-4f8a-bded-86b768341680';
const weatherApiKey = 'b15a810c1209f985b7d2e24e97487aab';
>>>>>>> 6597d922c981773d9240769163695f534ddbb429

const inputLocation = document.getElementById('inputLocation');
const inputCountryCode = document.getElementById('inputCountryCode');
const submitButton = document.getElementById('submitButton');
const holidayContainer = document.getElementById('holidaySection');
const weatherContainer = document.getElementById('weatherSection');

function fetchHolidayData(countryCode) {
    const year = new Date().getFullYear();
    const holidayApi = `https://holidayapi.com/v1/holidays?country=${countryCode}&year=${year}&pretty&key=${holidayApiKey}`;

    fetch(holidayApiUrl)
    .then(response => response.json())
    .then(data => {
        displayHolidays(data.holidays);
    })
    .catch(error => console.error('Error fetching holiday data: ', error));
}

function fetchWeatherData(city) {
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;

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

    const weatherTemp = document.createElement('p');
    weatherTemp.textContent = `Temperature: ${weatherData.main.temp} °F`;

    weatherCard.appendChild(weatherCity);
    weatherCard.appendChild(weatherTemp);

    weatherContainer.appendChild(weatherCard);
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var input = inputLocation.value;

    if (!city || !countryCode) {
        alert("Please enter both a city and a country code.");
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
>>>>>>> 6597d922c981773d9240769163695f534ddbb429
