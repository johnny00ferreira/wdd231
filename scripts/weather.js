const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=f068518c62e84b4c3e029e7d25735c51';

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log(data);

            displayResults(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}


function displayResults(data) {
    currentTemp.textContent = data.main.temp + "°C";

    const icon = data.weather[0].icon;
    const desc = data.weather[0].description;

    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = desc;

    captionDesc.textContent = desc;
}


apiFetch();