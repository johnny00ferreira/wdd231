import { places } from "../data/places.mjs";

const container = document.getElementById("cards");

// CREATE CARDS
places.forEach(place => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;

    container.appendChild(card);
});

// VISITOR MESSAGE (localStorage)
const messageContainer = document.getElementById("visitor-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    messageContainer.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const diff = now - lastVisit;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days < 1) {
        messageContainer.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        messageContainer.textContent = "Your last visit was 1 day ago.";
    } else {
        messageContainer.textContent = `Your last visit was ${days} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);