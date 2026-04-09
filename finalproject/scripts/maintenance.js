const partsContainer = document.getElementById("parts-container");
const partDetails = document.getElementById("part-details");
const typeFilter = document.getElementById("typeFilter");
const totalItems = document.getElementById("total-items");
const averagePrice = document.getElementById("average-price");

let allParts = [];

async function getParts() {
    try {
        const response = await fetch("data/parts.json");

        if (!response.ok) {
            throw new Error("Could not load parts data.");
        }

        const data = await response.json();
        allParts = data.parts;

        populateFilter(allParts);
        displayParts(allParts);
        updateStats(allParts);

    } catch (error) {
        partsContainer.innerHTML = `<p>${error.message}</p>`;
    }
}

function populateFilter(parts) {
    const categories = [...new Set(parts.map(part => part.type))];

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        typeFilter.appendChild(option);
    });
}

function updateStats(parts) {
    totalItems.textContent = parts.length;

    const totalPrice = parts.reduce((sum, part) => sum + part.price, 0);
    const avg = parts.length ? (totalPrice / parts.length).toFixed(2) : 0;

    averagePrice.textContent = `$${avg}`;
}

function displayParts(parts) {
    partsContainer.innerHTML = "";

    parts.forEach(part => {
        const card = document.createElement("div");
        card.classList.add("part-card");
        card.setAttribute("tabindex", "0");

        card.innerHTML = `
            <h3>${part.name}</h3>
            <p><strong>Type:</strong> ${part.type}</p>
            <p><strong>Price:</strong> $${part.price}</p>
            <p><strong>Gain:</strong> ${part.gain}</p>
        `;

        card.addEventListener("click", () => displayPartDetails(part));

        card.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                displayPartDetails(part);
            }
        });

        partsContainer.appendChild(card);
    });
}

function displayPartDetails(part) {
    if (!partDetails) return; // evita erro

    partDetails.innerHTML = `
        <button id="closeModal">Close</button>
        <h2>${part.name}</h2>
        <p><strong>Type:</strong> ${part.type}</p>
        <p><strong>Price:</strong> $${part.price}</p>
        <p><strong>Gain:</strong> ${part.gain}</p>
        <p><strong>Description:</strong> ${part.description}</p>
    `;

    partDetails.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        partDetails.close();
    });
}

typeFilter.addEventListener("change", () => {
    const selectedType = typeFilter.value;

    if (selectedType === "all") {
        displayParts(allParts);
        updateStats(allParts);
        return;
    }

    const filteredParts = allParts.filter(part => part.type === selectedType);

    displayParts(filteredParts);
    updateStats(filteredParts);
});

getParts();