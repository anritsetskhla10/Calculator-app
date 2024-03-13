
//    theme changer

let style = document.querySelector('.style-change');
let ball = document.querySelector('.ball');

let currentThemeIndex = 0;
const themes = ["styletheme1.css", "styletheme2.css", "styletheme3.css"];

function styleChanger() {

    currentThemeIndex = (currentThemeIndex + 1) % themes.length;

    style.href = themes[currentThemeIndex];

    console.log(currentThemeIndex);
    console.log(style)
}

ball.addEventListener('click', styleChanger);



// calculator functionality



const numbers = Array.from(document.querySelectorAll(".number"));
const operators = Array.from(document.querySelectorAll(".operator"));
const deleteBtn = document.getElementById("delete");
const resetBtn = document.getElementById("reset");
const equalBtn = document.getElementById("equal");
const result = document.getElementById("result");
const dot = document.getElementById('dot');

let currentInput = "";

numbers.forEach(number => {
    number.addEventListener("click", () => {
      currentInput += number.textContent;
      updateResult();
    });
  });

  operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (operator.textContent === "x") {
            let sliced = currentInput.slice(0,-1);
            currentInput = sliced;
            currentInput += " * ";
        } else {
            if (currentInput !== "" && !isOperatorOrSpace(currentInput.slice(-1))) {
                currentInput += ` ${operator.textContent} `;
            } else if (currentInput !== "" && isOperatorOrSpace(currentInput.slice(-1))) {
                currentInput = currentInput.slice(0, -1) + operator.textContent + " ";
            }
        }
        updateResult();
    });
});

function isOperatorOrSpace(char) {
    return char === "+" || char === "-" || char === "*" || char === "/" || char === " ";
}

  dot.addEventListener("click", () => {
    if (!currentInput.includes(".")) {
      currentInput += ".";
      updateResult();
    }
  });
  

  deleteBtn.addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1);
    updateResult();
  });
  

  resetBtn.addEventListener("click", () => {
    currentInput = "";
    updateResult();
  });
  

  equalBtn.addEventListener("click", calculateResult);
  

  function updateResult() {
    result.textContent = currentInput;
  }
  

  function calculateResult() {
    try {
        if (currentInput.startsWith("0") && !currentInput.startsWith("0.")) {
            throw new Error("Error: Invalid input");
        }
        currentInput = eval(currentInput).toString();
        updateResult();
    } catch (error) {
      result.textContent = "Error";
    }
  }

