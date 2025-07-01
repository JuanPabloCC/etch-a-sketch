let gridContainer = document.querySelector("#grid-container");
let startButton = document.querySelector("#start-button");

function rgbColor() {
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    return `rgb(${red}, ${blue}, ${green})`
}

function changeColor(div){
    div.target.style.backgroundColor = rgbColor();
}

startButton.addEventListener("click", () => {
    gridContainer.innerHTML = "";
    let numberOfSquares = +prompt("Please enter the number of squares (1 - 100)");
    let totalNumberOfSquares = numberOfSquares**2;
    let squareWidth = 800/numberOfSquares;
    for (let step = 1; step <= totalNumberOfSquares; step++) {
        let container = document.createElement("div");
        gridContainer.appendChild(container);
        container.style.width = squareWidth+"px";
        container.style.height = squareWidth+"px";
    }
    gridContainer.setAttribute("style", "border: dotted 2px red");
});

gridContainer.addEventListener("mousedown", () => {
    let gridChilds = gridContainer.querySelectorAll("div");
    gridChilds.forEach(child => child.addEventListener("mousemove", changeColor));
});

gridContainer.addEventListener("mouseup", () => {
    let gridChilds = gridContainer.querySelectorAll("div");
    gridChilds.forEach(child =>child.removeEventListener("mousemove", changeColor));
})

