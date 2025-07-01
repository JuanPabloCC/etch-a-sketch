let gridContainer = document.querySelector("#grid-container");
let startButton = document.querySelector("#start-button");

startButton.addEventListener("click", () => {
    let numberOfSquares = +prompt("Please enter the number of squares (1 - 100)");
    let totalNumberOfSquares = numberOfSquares**2;
    let squareWidth = 800/numberOfSquares;
    for (let step = 1; step <= totalNumberOfSquares; step++) {
        let container = document.createElement("div");
        container.classList.add("container");
        container.style.width = squareWidth+"px";
        container.style.height = squareWidth+"px";
        container.addEventListener("mouseover", () => container.classList.add("hover"));
        gridContainer.appendChild(container);
    }
    gridContainer.setAttribute("style", "border: dotted 2px red");
});