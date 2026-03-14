const url = "data/members.json";
const container = document.querySelector("#members");

async function getMembers() {

    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data);

}

function displayMembers(members) {

    container.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("div");
        card.classList.add("member");

        card.innerHTML = `
<h3>${member.name}</h3>
<img src="${member.image}" alt="${member.name}">
<p>${member.address}</p>
<p>${member.phone}</p>
<p><a href="${member.website}" target="_blank">Visit Website</a></p>
<p>Membership: ${member.membership}</p>
`;

        container.appendChild(card);

    });

}

getMembers();

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
});

listButton.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
});