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
        case "*":
            return multiply(lhs, rhs);
            break;
        case "/":
            return divide(lhs, rhs);
            break;
    }
}

let operator = "";
let firstNumber;
let secondNumber;