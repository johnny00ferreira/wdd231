const courses = [
    { code: "CSE110", credits: 2, completed: true },
    { code: "CSE111", credits: 2, completed: true },
    { code: "WDD130", credits: 3, completed: true },
    { code: "WDD131", credits: 3, completed: true },
    { code: "WDD231", credits: 3, completed: false },
];

const container = document.querySelector("#courses");

function displayCourses(list) {

    container.innerHTML = "";

    list.forEach(course => {

        const card = document.createElement("div");

        card.textContent = course.code;

        if (course.completed) {
            card.classList.add("completed");
        }
        container.appendChild(card);

    });

    const credits = list.reduce((total, course) => total + course.credits, 0);

    document.querySelector("#credits").textContent = credits;

}

displayCourses(courses);