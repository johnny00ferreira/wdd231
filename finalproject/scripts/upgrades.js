const container = document.getElementById("parts-container");

async function loadParts() {
try {
const response = await fetch("data/parts.json");

if (!response.ok) {
throw new Error("Error loading data");
}

const data = await response.json();

displayParts(data.parts);

} catch (error) {
container.innerHTML = "<p>Failed to load parts.</p>";
}
}

function displayParts(parts) {
container.innerHTML = "";

parts.forEach(part => {
const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<h3>${part.name}</h3>
<p>${part.type}</p>
<p>$${part.price}</p>
`;

container.appendChild(card);
});
}

loadParts();