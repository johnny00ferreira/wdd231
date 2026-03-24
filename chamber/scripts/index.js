// WEATHER API
const apiKey = "f068518c62e84b4c3e029e7d25735c51";
const lat = -7.12; // João Pessoa
const lon = -34.86;

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("temp").textContent = `Temperature: ${data.list[0].main.temp}°C`;
    document.getElementById("desc").textContent = data.list[0].weather[0].description;

    const forecast = document.getElementById("forecast");
    forecast.innerHTML = "";

    for (let i = 8; i <= 24; i += 8) {
        const item = data.list[i];
        const p = document.createElement("p");
        p.textContent = `Day ${i / 8}: ${item.main.temp}°C`;
        forecast.appendChild(p);
    }
}

getWeather();


// SPOTLIGHTS (JSON)
const membersURL = "data/members.json";

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();

    const filtered = data.members.filter(m => m.level === "Gold" || m.level === "Silver");

    const random = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

    const cards = document.getElementById("cards");

    random.forEach(member => {
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${member.name}</h3>
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit</a>
            <p>${member.level}</p>
        `;

        cards.appendChild(div);
    });
}

getMembers();


const menuBtn = document.getElementById("menu");
const navMenu = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});