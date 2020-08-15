
const displayBox = document.querySelector('#display');
const numberBtns = Array.from(document.querySelectorAll('.numbers>button'));
const operatorBtns = Array.from(document.querySelectorAll('.operators>button'));
const clearBtn = document.querySelector('#btnClear');
const equalBtn = document.querySelector('#btnEqual');
const deciBtb = document.querySelector('#btnDeci');

numberBtns.forEach(button => button.addEventListener("click", addToDisplay)); 
operatorBtns.forEach(button => button.addEventListener("click", addToDisplay));
equalBtn.addEventListener("click", equals);
clearBtn.addEventListener("click", clearDisplay);

let operand1 = '';
let operand2 = '';
let operator = '';
let total = '';
let temp = '';
let lastButtonPushed;


function addToDisplay(e){
    let button = (e.target.innerText);
    
    if (operator == '' && button >=0 && button <= 9|| button == "."){
        displayBox.textContent += button;
    }else if (lastButtonPushed === operator){
        displayBox.textContent = '';
        if (button >=0 && button <= 9|| button == ".")  displayBox.textContent = button; lastButtonPushed = button;
    }else if(button >=0 && button <= 9|| button == "."){
        displayBox.textContent += button;
    }else if (button == '+' || button == '-' || button == '/' || button == '*'){
        if (operator == ''){
            operand1 = displayBox.textContent; console.log(operand1);
            operator = button; console.log(operator);
        }else if (operator !== ''){
            operand2 = displayBox.textContent; console.log(operand2);
            operate(operand1, operator, operand2);
            operand1 = displayBox.textContent; console.log(operand1);
            operator = button; console.log(operator);
            temp = '';
            operand2 = temp;
        }  
    }
    lastButtonPushed = button;
}



function equals(){
    operand2 = displayBox.textContent; console.log(operand2);
    operate(operand1, operator, operand2);
    operand1 = displayBox.textContent; console.log(operand1);
    operand2 = '';
    operator = '';
}


function clearDisplay(){
    displayBox.textContent = " ";
    total = '';
    operand1 = '';
    operand2 = '';
    operator = '';
    temp = '0';
}


function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}



function operate(num1, op, num2) {
    total = 0;
    switch(op) {
        case '+':
            total += add(num1, num2);
            displayBox.textContent = total;
            break;
        case '-':
            total += subtract(num1, num2);
            displayBox.textContent = total;
            break;
        case '*':
            total += multiply(num1, num2);
            displayBox.textContent = total;
            break;
        case '/':
            total += divide(num1, num2);
            displayBox.textContent = total;
            break;
    }
    console.log(total);
}
