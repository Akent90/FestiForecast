const holidayApiKey = 'f219ccee11c84093ac709d7de3de5010';
const weatherApiKey = 'b15a810c1209f985b7d2e24e97487aab';
const holidayApiBaseUrl = 'https://holidays.abstractapi.com/v1/';

const inputLocation = document.getElementById('inputLocation');
const inputCountryCode = document.getElementById('inputCountryCode');
const submitButton = document.getElementById('submitButton');
const holidayContainer = document.getElementById('holidaySection');
const weatherContainer = document.getElementById('weatherSection');

function fetchHolidayData(countryCode) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0');

    const holidayApiUrl = `${holidayApiBaseUrl}?api_key=${holidayApiKey}&country=${countryCode}&year=${year}&month=${month}&day=${day}`;

    fetch(holidayApiUrl)
    .then(response => response.json())
    .then(data => {
        if (data && data.length > 0) {
            displayHolidays(data);
        } else {
            holidayContainer.innerHTML = '<p>No holidays found for this location and date.</p>';
        }
    })
    .catch(error => console.error('Error fetching holiday data: ', error));
    holidayContainer.innerHTML = '<p>Error fetching holiday data.</p>';
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
    weatherTemp.textContent = `Temperature: ${weatherData.main.temp} °C`;

    weatherCard.appendChild(weatherCity);
    weatherCard.appendChild(weatherTemp);

    weatherContainer.appendChild(weatherCard);
}
//event listener for weather and holiday api to show
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var city = inputLocation.value;
    var countryCode = inputCountryCode.value.trim();

    if (!city || !countryCode) {
        alert("Please enter both a city and country code.");
      
    var input = inputValue.value;
    var inputValue =JSON.parse(localStorage.getItem("location"));

    if (input === "") {
        alert("Please select a location.")

        localStorage.setItem("submitButton", "date");
        renderLastRegistered();
    }
};

//event listener for cards
weatherSection.addEventListener("click", function(event) {
    event.preventDefault();
console.log("hello")
    var input = weatherSection.value;
})
    var input = inputLocation.value;

    if (input === "") {
        alert("Please select a location.")
        return;
    }

    localStorage.setItem("inputLocation", city);
    localStorage.setItem("inputCountryCode", countryCode);

    fetchWeatherData(city);
    fetchHolidayData(countryCode);
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
