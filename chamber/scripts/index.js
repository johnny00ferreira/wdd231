// WEATHER API
const apiKey = "f068518c62e84b4c3e029e7d25735c51";
const lat = -7.12;
const lon = -34.86;

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("temp").textContent =
            `Temperature: ${data.list[0].main.temp}°C`;

        document.getElementById("desc").textContent =
            data.list[0].weather[0].description;

        const forecast = document.getElementById("forecast");
        forecast.innerHTML = "";

        const days = ["Tomorrow", "Day 2", "Day 3"];

        for (let i = 0; i < 3; i++) {
            const item = data.list[(i + 1) * 8];
            const p = document.createElement("p");
            p.textContent = `${days[i]}: ${item.main.temp}°C`;
            forecast.appendChild(p);
        }

    } catch (error) {
        console.log("Weather error:", error);
    }
}

getWeather();


// SPOTLIGHTS
const membersURL = "data/members.json";

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        const data = await response.json();

        const filtered = data.members.filter(m =>
            m.level === "Gold" || m.level === "Silver"
        );

        const random = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

        const cards = document.getElementById("cards");

        random.forEach(member => {
            const div = document.createElement("div");

            div.innerHTML = `
                <h3>${member.name}</h3>
                <img src="${member.image}" alt="${member.name}">
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit</a>
                <p><strong>Level:</strong> ${member.level}</p>
            `;

            cards.appendChild(div);
        });

    } catch (error) {
        console.log("Members error:", error);
    }
}

getMembers();