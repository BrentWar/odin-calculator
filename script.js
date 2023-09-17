function add(lhs, rhs) {
    return +lhs + +rhs;
}

function subtract(lhs, rhs) {
    return lhs - rhs;
}

function multiply(lhs, rhs) {
    return lhs * rhs;
}

function divide(lhs, rhs) {
    return lhs / rhs;
}

function operate(lhs, op, rhs) {
    switch (op) {
        case "+":
            return add(lhs, rhs);
            break;
        case "-":
            return subtract(lhs, rhs);
            break;
        case "x":
            return multiply(lhs, rhs);
            break;
        case "/":
            return divide(lhs, rhs);
            break;
    }
}




let operator = "";
let firstNumber = "";
let secondNumber = "";
let focus = 0;

let display = document.querySelector(".display");

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("mouseenter", function() {
        button.classList.add("hover");
    });
    button.addEventListener("mouseleave", function() {
        button.classList.remove("hover");
    });

    button.addEventListener("mousedown", function() {
        button.classList.add("click");
    });
    button.addEventListener("mouseup", function() {
        button.classList.remove("click");
    });

    button.addEventListener("click", function() {
        
        if (button.textContent === "c") {
            firstNumber = "";
            secondNumber = "";
            focus = 0;
            operator = "";
            display.textContent = "";

        }
        else if (focus === 0) {
            if (!(button.textContent === " + " || button.textContent === " - " || button.textContent === " x " || button.textContent === " / ")) {
                if (button.textContent !== " = ") {
                    firstNumber += button.textContent;
                    display.textContent += button.textContent;
                }
            }
            else {
                focus = 1;
                operator = button.textContent.charAt(1);
                display.textContent += button.textContent;
            }
        }
        else if (focus === 1) {
            if (button.textContent === " = " && secondNumber !== "") {
                if (operator === "/" && secondNumber === "0") {
                    alert("That's not allowed");
                    firstNumber = "";
                    secondNumber = "";
                    focus = 0;
                    operator = "";
                    display.textContent = "";

                }
                else {
                    display.textContent = Math.round(operate(firstNumber, operator, secondNumber) * 10000) / 10000;
                    firstNumber = display.textContent;
                    secondNumber = "";
                    operator = "";
                    focus = 0;
                }
            } 
            else if (secondNumber !== "" && (button.textContent === " + " || button.textContent === " - " || button.textContent === " x " || button.textContent === " / ")) {
                if (operator === "/" && secondNumber === "0") {
                    alert("That's not allowed");
                    firstNumber = "";
                    secondNumber = "";
                    focus = 0;
                    operator = "";
                    display.textContent = "";

                }
                else {
                    display.textContent = Math.round(operate(firstNumber, operator, secondNumber) * 10000) / 10000;
                    firstNumber = display.textContent;
                    secondNumber = "";
                    operator = button.textContent.charAt(1);
                    display.textContent += button.textContent;
                    focus = 1;
                }
            }
            else if (!(button.textContent === " = " || button.textContent === " + " || button.textContent === " - " || button.textContent === " x " || button.textContent === " / ")) {
                secondNumber += button.textContent;
                display.textContent += button.textContent;
            }
        }
    
    
    });

});
