let gridContainer = document.querySelector("#grid-container");
let startButton = document.querySelector("#start-button");

function rgbColor() {
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    return `rgb(${red}, ${blue}, ${green})`
}

startButton.addEventListener("click", () => {
    gridContainer.innerHTML = "";
    let numberOfSquares = +prompt("Please enter the number of squares (1 - 100)");
    let totalNumberOfSquares = numberOfSquares**2;
    let squareWidth = 800/numberOfSquares;
    for (let step = 1; step <= totalNumberOfSquares; step++) {
        let container = document.createElement("div");
        container.classList.add("container");
        container.style.width = squareWidth+"px";
        container.style.height = squareWidth+"px";
        let color = rgbColor();
        container.addEventListener("mouseover", () => container.style.backgroundColor = color);
        gridContainer.appendChild(container);
    }
    gridContainer.setAttribute("style", "border: dotted 2px red");
});

