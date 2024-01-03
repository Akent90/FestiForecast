const holidayApiKey = '52dd97a0-dca8-4f8a-bded-86b768341680';
const weatherApiKey = 'b15a810c1209f985b7d2e24e97487aab';

const inputLocation = document.getElementById('inputLocation');
const submitButton = document.getElementById('submitButton');
const holidayContainer = document.getElementById('holidaySection');
const weatherContainer = document.getElementById('weatherSection');

function fetchHolidayData(countryCode, year) {
    const holidayApi = 'https://holidayapi.com/v1/holidays?country=${countryCode}&year=${year}&pretty&key=${holidayApiKey}';

    fetch(holidayApiUrl)
    .then(response => response.json())
    .then(data => {
        displayHolidays(data.holidays);
    })
    .catch(error => console.error('Error fetching holiday data: ', error));
}