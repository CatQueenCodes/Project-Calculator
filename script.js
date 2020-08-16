
const displayBox = document.querySelector('#display');
const numberBtns = Array.from(document.querySelectorAll('.nmbrBtn'));
const operatorBtns = Array.from(document.querySelectorAll('.opBtn'));
const clearBtn = document.querySelector('#clearBtn');
const equalBtn = document.querySelector('#equalBtn');


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

function colorChange(e){
    e.target.style.background = 'rgb(169, 184, 38)';
}

function resetColor() {
    operatorBtns.forEach(button => button.style.background = 'rgb(145, 145, 153)');
}


function addToDisplay(e){
    let button = (e.target.innerText);
    
    if (operator == '' && button >=0 && button <= 9|| button == "."){
        displayBox.textContent += button;
    }else if (lastButtonPushed === operator){
        if (button >=0 && button <= 9|| button == "."){
            resetColor(); displayBox.textContent = button; 
        }else {
            false;
        }
    }else if(button >=0 && button <= 9|| button == "."){
        displayBox.textContent += button;
    }else if (button == '+' || button == '-' || button == '/' || button == '*'){
        colorChange(e);
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
    if (lastButtonPushed === operator){
        false;
    }else {
        operand2 = displayBox.textContent; console.log(operand2);
        operate(operand1, operator, operand2);
        operand1 = displayBox.textContent; console.log(operand1);
        operand2 = '';
        operator = '';
    }
    
}


function clearDisplay(){
    displayBox.textContent = " ";
    total = '';
    operand1 = '';
    operand2 = '';
    operator = '';
    temp = '0';
    numberBtns.forEach(button => button.addEventListener("click", addToDisplay));
    operatorBtns.forEach(button => button.addEventListener("click", addToDisplay));
    resetColor();
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
            if(num2 == '0') {
                displayBox.textContent =  `You can't divide by 0! Push Clear.`;
                numberBtns.forEach(button => button.removeEventListener("click", addToDisplay));
                operatorBtns.forEach(button => button.removeEventListener("click", addToDisplay));
                
           }else {
                total += divide(num1, num2);
                displayBox.textContent = total;
           }
            
            break;
    }
    console.log(total);
}
