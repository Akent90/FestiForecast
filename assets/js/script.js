const holidayApiKey = 'eeda4a344e9748fe94ca5ff4241cef15';
const weatherApiKey = 'b15a810c1209f985b7d2e24e97487aab';
const holidayApiBaseUrl = 'https://holidays.abstractapi.com/v1/';

const inputLocation = document.getElementById('inputLocation');
const submitButton = document.getElementById('submitButton');
const holidayContainer = document.getElementById('holidaySection');
const currentWeatherDiv = document.getElementById('currentWeather');
const forecastDiv = document.getElementById('forecast');
const countries = [
    { code: "AD", name: "Andorra" },
    { code: "AE", name: "United Arab Emirates" },
    { code: "AF", name: "Afghanistan" },
    { code: "AG", name: "Antigua and Barbuda" },
    { code: "AI", name: "Anguilla" },
    { code: "AL", name: "Albania" }, 
    { code: "AM", name: "Armenia" },
    { code: "AO", name: "Angola" }, 
    { code: "AQ", name: "Antarctica" },
    { code: "AR", name: "Argetina" }, 
    { code: "AS", name: "American Samoa" }, 
    { code: "AT", name: "Austria" }, 
    { code: "AU", name: "Australia" }, 
    { code: "AW", name: "Aruba" }, 
    { code: "AX", name: "Åland Islands" }, 
    { code: "AZ", name: "Azerbaijan" }, 
    { code: "BA", name: "Bosnia and Herzegovina" }, 
    { code: "BB", name: "Barbados" }, 
    { code: "BD", name: "Bangladesh" }, 
    { code: "BE", name: "Belgium" }, 
    { code: "BF", name: "Burkina Faso" }, 
    { code: "BG", name: "Bulgaria" }, 
    { code: "BH", name: "Bahrain" }, 
    { code: "BI", name: "Burundi" }, 
    { code: "BJ", name: "Benin" },
    { code: "BL", name: "Saint Barthélemy" }, 
    { code: "BM", name: "Bermuda" }, 
    { code: "BN", name: "Brunei Darussalam" }, 
    { code: "BO", name: "Bolivia" }, 
    { code: "BQ", name: "Bonaire, Sint Eustatius and Saba" }, 
    { code: "BR", name: "Brazil" }, 
    { code: "BS", name: "Bahamas" }, 
    { code: "BT", name: "Bhutan" }, 
    { code: "BV", name: "Bouvet Island" }, 
    { code: "BW", name: "Botswana" }, 
    { code: "BY", name: "Belarus" }, 
    { code: "BZ", name: "Belize" }, 
    { code: "CA", name: "Canada" }, 
    { code: "CC", name: "Cocos (Keeling) Islands" }, 
    { code: "CD", name: "Congo, Democratic Rupublic of the" }, 
    { code: "CF", name: "Central African Republic" },
    { code: "CG", name: "Congo" }, 
    { code: "CH", name: "Switzerland" }, 
    { code: "CI", name: "Côte d'Ivoire" }, 
    { code: "CK", name: "Cook Islands" }, 
    { code: "CL", name: "Chile" }, 
    { code: "CM", name: "Cameroon" }, 
    { code: "CN", name: "China" }, 
    { code: "CO", name: "Colombia" }, 
    { code: "CR", name: "Costa Rica" }, 
    { code: "CU", name: "Cuba" }, 
    { code: "CV", name: "Cabo Verde" }, 
    { code: "CW", name: "Curaçao" }, 
    { code: "CX", name: "Christmas Isalnd" }, 
    { code: "CY", name: "Cyprus" }, 
    { code: "CZ", name: "Czechia" }, 
    { code: "DE", name: "Germany" }, 
    { code: "DJ", name: "Djibouti" }, 
    { code: "DK", name: "Denmark" }, 
    { code: "DM", name: "Dominica" }, 
    { code: "DO", name: "Dominican Republic" }, 
    { code: "DZ", name: "Algeria" }, 
    { code: "EC", name: "Ecuador" }, 
    { code: "EE", name: "Estonia" }, 
    { code: "EG", name: "Egypt" }, 
    { code: "EH", name: "Western Sahara" }, 
    { code: "ER", name: "Eritea" }, 
    { code: "ES", name: "Spain" }, 
    { code: "ET", name: "Ethipoia" }, 
    { code: "FI", name: "Finland" }, 
    { code: "FJ", name: "Fiji" }, 
    { code: "FK", name: "Falkland Islands (Malvinas)" }, 
    { code: "FM", name: "Micronesia (Federated States of)" }, 
    { code: "FO", name: "Faroe Islands" }, 
    { code: "FR", name: "France" }, 
    { code: "GA", name: "Gabon" }, 
    { code: "GB", name: "United Kingdom of Great Britain and Noerthern Ireland" }, 
    { code: "GD", name: "Grenada" }, 
    { code: "GE", name: "Georgia" }, 
    { code: "GF", name: "French Guiana" }, 
    { code: "GG", name: "Guernsey" }, 
    { code: "GH", name: "Ghana" }, 
    { code: "GI", name: "Gibraltar" }, 
    { code: "GL", name: "Greenland" },
    { code: "GM", name: "Gambia" }, 
    { code: "GN", name: "Guinea" }, 
    { code: "GP", name: "Guadeloupe" }, 
    { code: "GQ", name: "Equatorial Guinea" }, 
    { code: "GR", name: "Greece" }, 
    { code: "GS", name: "South Georgia and the South Sandwich Islands" }, 
    { code: "GT", name: "Guatemala" }, 
    { code: "GU", name: "Guam" }, 
    { code: "GW", name: "Guinea-Bissau" }, 
    { code: "GY", name: "Guyana" }, 
    { code: "HK", name: "Hong Kong" }, 
    { code: "HM", name: "Heard Isalnd and McDonald Islands" }, 
    { code: "HN", name: "Honduras" }, 
    { code: "HR", name: "Croatia" }, 
    { code: "HT", name: "Haiti" }, 
    { code: "HU", name: "Hungary" }, 
    { code: "ID", name: "Indonesia" }, 
    { code: "IE", name: "Ireland" }, 
    { code: "IL", name: "Israel" }, 
    { code: "IM", name: "Isle of Man" }, 
    { code: "IN", name: "India" }, 
    { code: "IO", name: "British Indian Ocean Territory" }, 
    { code: "IQ", name: "Iraq" }, 
    { code: "IR", name: "Iran (Islamic Republic of)" }, 
    { code: "IS", name: "Iceland" }, 
    { code: "IT", name: "Italy" }, 
    { code: "JE", name: "Jersey" }, 
    { code: "JM", name: "Jamaica" }, 
    { code: "JO", name: "Jordan" }, 
    { code: "JP", name: "Japan" }, 
    { code: "KE", name: "Kenya" }, 
    { code: "KG", name: "Kyrgyzstan" }, 
    { code: "KH", name: "Cambodia" }, 
    { code: "KI", name: "Kiribati" }, 
    { code: "KM", name: "Comoros" }, 
    { code: "KP", name: "Korea (Democratic People's Republic of" }, 
    { code: "KR", name: "Korea, Republic of" }, 
    { code: "KW", name: "Kuwait" }, 
    { code: "KY", name: "Cayman Islands" }, 
    { code: "KZ", name: "Kazakhstan" }, 
    { code: "LA", name: "Lao People's Democratic Republic" }, 
    { code: "LB", name: "Lebanon" }, 
    { code: "LC", name: "Saint Lucia" }, 
    { code: "LI", name: "Liechtenstein" }, 
    { code: "LK", name: "Sri Lanka" }, 
    { code: "LR", name: "Liberia" }, 
    { code: "LS", name: "Lesotho" }, 
    { code: "LT", name: "Lithuania" }, 
    { code: "LU", name: "Luxembourg" }, 
    { code: "LV", name: "Latvia" }, 
    { code: "LY", name: "Libya" }, 
    { code: "MA", name: "Morocco" }, 
    { code: "MC", name: "Monaco" }, 
    { code: "MD", name: "Moldova, Republic of" }, 
    { code: "ME", name: "Montenegro" }, 
    { code: "MF", name: "Saint Martin" }, 
    { code: "MG", name: "Madagascar" }, 
    { code: "MH", name: "Marshall Islands" }, 
    { code: "MK", name: "North Macedonia" }, 
    { code: "ML", name: "Mali" }, 
    { code: "MM", name: "Myanmar" }, 
    { code: "MN", name: "Mongolia" }, 
    { code: "MO", name: "Macao" }, 
    { code: "MP", name: "Northern Mariana Isalnds" }, 
    { code: "MQ", name: "Martinique" }, 
    { code: "MR", name: "Mauritania" }, 
    { code: "MS", name: "Montserrat" }, 
    { code: "MT", name: "Malta" }, 
    { code: "MU", name: "Mauritius" }, 
    { code: "MV", name: "Maldives" }, 
    { code: "MW", name: "Malawi" }, 
    { code: "MX", name: "Mexico" }, 
    { code: "MY", name: "Malaysia" }, 
    { code: "MZ", name: "Mozambique" }, 
    { code: "NA", name: "Namibia" }, 
    { code: "NC", name: "New Caledonia" }, 
    { code: "NE", name: "Niger" }, 
    { code: "NF", name: "Norfolk Island" }, 
    { code: "NG", name: "Nigeria" }, 
    { code: "NI", name: "Nicaragua" }, 
    { code: "NL", name: "Netherlands, Kingdom of the" }, 
    { code: "NO", name: "Norway" }, 
    { code: "NP", name: "Nepal" }, 
    { code: "NR", name: "Nauru" }, 
    { code: "NU", name: "Niue" }, 
    { code: "NZ", name: "New Zealand" }, 
    { code: "OM", name: "Oman" }, 
    { code: "PA", name: "Panama" }, 
    { code: "PE", name: "Peru" }, 
    { code: "PF", name: "French Polynesia" }, 
    { code: "PG", name: "Papua New Guinea" }, 
    { code: "PH", name: "Philippines" }, 
    { code: "PK", name: "Pakistan" }, 
    { code: "PL", name: "Poland" }, 
    { code: "PM", name: "Saint Pierre and Miquelon" }, 
    { code: "PN", name: "Pitcairn" }, 
    { code: "PR", name: "Puerto Rico" }, 
    { code: "PS", name: "Palestine, State of" }, 
    { code: "PT", name: "Portugal" }, 
    { code: "PW", name: "Palau" }, 
    { code: "PY", name: "Paraguay" }, 
    { code: "QA", name: "Qatar" }, 
    { code: "RE", name: "Réunion" }, 
    { code: "RO", name: "Romania" }, 
    { code: "RS", name: "Serbia" }, 
    { code: "RU", name: "Russian Federation" }, 
    { code: "RW", name: "Rwanda" }, 
    { code: "SA", name: "Saudi Arabia" }, 
    { code: "SB", name: "Solomon Islands" }, 
    { code: "SC", name: "Seychelles" }, 
    { code: "SD", name: "Sudan" }, 
    { code: "SE", name: "Sweden" }, 
    { code: "SG", name: "Singapore" }, 
    { code: "SH", name: "Saint Helena, Ascension and Tristan da Cunha" }, 
    { code: "SI", name: "Slovenia" }, 
    { code: "SJ", name: "Svalbard and Jan Mayen" }, 
    { code: "SK", name: "Slovakia" }, 
    { code: "SL", name: "Sierra Leone" }, 
    { code: "SM", name: "San Marino" }, 
    { code: "SN", name: "Senegal" }, 
    { code: "SO", name: "Somalia" }, 
    { code: "SR", name: "Suriname" }, 
    { code: "SS", name: "South Sudan" }, 
    { code: "ST", name: "Sao Tome and Principe" }, 
    { code: "SV", name: "El Salvador" }, 
    { code: "SX", name: "Sint Maarten" }, 
    { code: "SY", name: "Syrian Arab Republic" }, 
    { code: "SZ", name: "Eswatini" }, 
    { code: "TC", name: "Turks and Caicos Islands" }, 
    { code: "TD", name: "Chad" }, 
    { code: "TF", name: "French Southern Territories" }, 
    { code: "TG", name: "Togo" }, 
    { code: "TH", name: "Thailand" }, 
    { code: "TJ", name: "Tajikistan" }, 
    { code: "TK", name: "Tokelau" }, 
    { code: "TL", name: "Timor-Leste" }, 
    { code: "TM", name: "Turkmenistan" }, 
    { code: "TN", name: "Tunisia" }, 
    { code: "TO", name: "Tonga" }, 
    { code: "TR", name: "Türkiye" }, 
    { code: "TT", name: "Trinidad and Tobago" }, 
    { code: "TV", name: "Tuvalu" }, 
    { code: "TW", name: "Taiwan, Province of China" }, 
    { code: "TZ", name: "Tanzania, United Republuc of" }, 
    { code: "UA", name: "Ukraine" }, 
    { code: "UG", name: "Uhanda" }, 
    { code: "UM", name: "United States Minor Outlying Islands" }, 
    { code: "US", name: "United States of America" },
    { code: "UY", name: "Uruguay" }, 
    { code: "UZ", name: "Uzbekistan" }, 
    { code: "VA", name: "Holy See" }, 
    { code: "VC", name: "Saint Vincent and the Grenadines" }, 
    { code: "VE", name: "Venezuela (Bolivarian Republic of)" }, 
    { code: "VG", name: "Virgin Islands (British)" }, 
    { code: "VI", name: "Virgin Islands (U.S.)" }, 
    { code: "VN", name: "Viet Nam" }, 
    { code: "VU", name: "Vanuatu" }, 
    { code: "WF", name: "Wallis and Futuna" }, 
    { code: "WS", name: "Samoa" }, 
    { code: "YE", name: "Yemen" }, 
    { code: "YT", name: "Mayotte" }, 
    { code: "ZA", name: "South Africa" }, 
    { code: "ZM", name: "Zambia" }, 
    { code: "ZW", name: "Zimbabwe" }, 
];

function createCountryOptions() {
    const selectElement = document.createElement('select'); 
    selectElement.id = 'countrySelect'; 

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = `${country.name} (${country.code})`;
        selectElement.appendChild(option);
    });

    return selectElement;
}

const dropdown = createCountryOptions();
const inputSection = document.getElementById('inputSection');
inputSection.insertBefore(dropdown, submitButton);

function fetchCoordinates(cityName) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${weatherApiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const { lat, lon } = data[0];
                fetchWeather(lat, lon, cityName);
            } else {
                console.error('City not found');
            }
        })
        .catch(error => console.error('Error:', error));
}

function fetchWeather(lat, lon, cityName) {
    fetchCurrentWeather(lat, lon, cityName);
    fetchForecast(lat, lon);
}
 
function fetchCurrentWeather(lat, lon, cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayCurrentWeather(data))
        .catch(error => console.error('Error:', error));
}
 
function fetchForecast(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayForecast(data))
        .catch(error => console.error('Error:', error));
}
 
function displayCurrentWeather(data) {
    const date = new Date().toLocaleDateString();
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    currentWeatherDiv.innerHTML = `
        <h3>Current Weather in ${data.name} (${date})</h3>
        <img src="${iconUrl}" alt="Weather Icon">
        <p>Temperature: ${data.main.temp} °F</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} mph</p>
    `;
}
 
function displayForecast(data) {
    let forecastHTML = '<h3>5-Day Forecast</h3>';
    
    data.list.forEach((forecast, index) => {
        if (index % 8 === 0) {
            const date = new Date(forecast.dt_txt);
            const dateString = date.toLocaleDateString();
            const dataAttribute = date.toISOString().split('T')[0];

            forecastHTML += `
                <div class="forecast-day" data-date="${dataAttribute}">
                    <h4>${dateString}</h4>
                    <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="Weather Icon">
                    <p>Temp: ${forecast.main.temp} °F</p>
                    <p>Humidity: ${forecast.main.humidity}%</p>
                    <p>Wind Speed: ${forecast.wind.speed} mph</p>
                </div>
            `;
        }
    });

    forecastDiv.innerHTML = forecastHTML;

    document.querySelectorAll('.forecast-day').forEach(element => {
        element.addEventListener('click', function() {
            const selectedDate = this.getAttribute('data-date');
            const countryCode = document.getElementById('countrySelect').value;
            fetchHolidayDataForDate(countryCode, selectedDate);
        });
    });
}

function fetchHolidayDataForDate(countryCode, date) {
    const [year, month, day] = date.split('-');
    const holidayApiUrl = `${holidayApiBaseUrl}?api_key=${holidayApiKey}&country=${countryCode}&year=${year}&month=${month}&day=${day}`;

    fetch(holidayApiUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                displayHolidays(data);
            } else {
                holidayContainer.innerHTML = '<p>No holidays found for this date.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching holiday data: ', error);
            holidayContainer.innerHTML = '<p>Error fetching holiday data.</p>';
        });
}

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
        .catch(error => {
            console.error('Error fetching holiday data: ', error);
            holidayContainer.innerHTML = '<p>Error fetching holiday data.</p>';
        });
}
 
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
        .catch(error => {
            console.error('Error fetching holiday data: ', error);
            holidayContainer.innerHTML = '<p>Error fetching holiday data.</p>';
        });
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
        holidayCard.appendChild(holidayName);

        if (holiday.name_local) {
            const localName = document.createElement('p');
            localName.textContent = `Local Name: ${holiday.name_local}`;
            holidayCard.appendChild(localName);
        }

        if (holiday.description) {
            const description = document.createElement('p');
            description.textContent = `Description: ${holiday.description}`;
            holidayCard.appendChild(description);
        }

        const country = document.createElement('p');
        country.textContent = `Country: ${holiday.country}`;
        holidayCard.appendChild(country);

        const location = document.createElement('p');
        location.textContent = `Location: ${holiday.location}`;
        holidayCard.appendChild(location);

        const type = document.createElement('p');
        type.textContent = `Type: ${holiday.type}`;
        holidayCard.appendChild(type);

        const date = document.createElement('p');
        date.textContent = `Date: ${holiday.date}`;
        holidayCard.appendChild(date);

        const dayOfWeek = document.createElement('p');
        dayOfWeek.textContent = `Day of the Week: ${holiday.week_day}`;
        holidayCard.appendChild(dayOfWeek);

        holidayContainer.appendChild(holidayCard);
    });
}

function openModal(message) {
    document.getElementById('modal-text').textContent = message;
    document.getElementById('modal').style.display = 'block';
}

document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault();
    const city = document.getElementById('inputLocation').value.trim();
    const countryCodeSelect = document.getElementById('countrySelect');
    const countryCode = countryCodeSelect ? countryCodeSelect.value : 'US';
    if (city) {
        fetchCoordinates(city);
    } else {
        openModal("Please enter a city name.");
    }
});

document.getElementById('dateSubmitButton').addEventListener('click', function(event) {
    event.preventDefault();
    const month = document.getElementById('inputMonth').value;
    const day = document.getElementById('inputDay').value;
    const year = document.getElementById('inputYear').value;
    const countryCode = document.getElementById('countrySelect').value;
    if (!month || !day || !year) {
        openModal("Please enter a valid date.");
    } else {
        fetchHolidayDataForDate(countryCode, `${year}-${month}-${day}`);
    }
});

function renderLastRegistered() {
    const lastCity = localStorage.getItem("inputLocation");
    const lastCountryCode = localStorage.getItem("inputCountryCode");
    if (lastCity) {
        inputLocation.value = lastCity;
    }
    if (lastCountryCode) {
        document.getElementById('countrySelect').value = lastCountryCode;
    }
}

renderLastRegistered();