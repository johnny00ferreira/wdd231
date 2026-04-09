const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

const params = new URLSearchParams(window.location.search);
const results = document.getElementById("results");

if (results) {
    results.innerHTML = `
        <p><strong>Owner Name:</strong> ${params.get("owner") || ""}</p>
        <p><strong>Service Type:</strong> ${params.get("service") || ""}</p>
        <p><strong>Service Date:</strong> ${params.get("service-date") || ""}</p>
        <p><strong>Mileage:</strong> ${params.get("mileage") || ""} km</p>
        <p><strong>Notes:</strong> ${params.get("notes") || ""}</p>
    `;
}