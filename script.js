// =========== SELECTORS =================

const container = document.querySelector(".container");
const button = document.querySelector("button");

// =========== Get Square Number =============

button.addEventListener("click", () => {
  let getSqrNumbers = +prompt("How many squares per row?");
  // console.log(typeof getSqrNumbers);
  if (!getSqrNumbers) {
  } else if (getSqrNumbers <= 0 || getSqrNumbers > 100) {
    alert("Number must be between 1 and 100");
  } else {
    createSqr(getSqrNumbers);
  }
});

// ====== CREATE SQUARE =======
function createSqr(num) {
  container.innerHTML = "";
  for (let i = 0; i < num * num; i++) {
    const sqrDiv = document.createElement("div");
    sqrDiv.setAttribute("class", "sqrDiv");
    // sqrDiv.style.width = `${960 / num}px`;
    // sqrDiv.style.height = `${960 / num}px`;
    let red = randomColor();
    let green = randomColor();
    let blue = randomColor();
    sqrDiv.setAttribute(
      "style",
      `background-color:rgba(${red}, ${green}, ${blue});
      opacity: 0.1;
      width: ${960 / num}px;
      height: ${960 / num}px;
      `
    );

    // Darken on each hover by 10%
    sqrDiv.addEventListener("mouseover", (e) => {
      let opacity = +e.target.style.opacity;
      if (opacity < 1) {
        e.target.style.opacity = opacity + 0.1;
      }
    });

    container.appendChild(sqrDiv);
  }
}

// Randomize rgb squares
function randomColor() {
  return Math.floor(Math.random() * 255) + 1;
}
