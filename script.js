let gridContainer = document.querySelector("#grid-container");

for (let step = 1; step < 17; step++) {
    let container = document.createElement("div");
    container.textContent = `I'm number ${step}`;
    container.classList.add("container");
    container.addEventListener("mouseover", () => container.classList.add("hover"));
    gridContainer.appendChild(container);
}