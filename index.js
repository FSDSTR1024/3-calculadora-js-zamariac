// inital value of screen is 0
// if button is a number display the number in the screen when clicked
// add any button whos value is a number / else an operator

const calculator = document.querySelector('.calculator');
const calculatorButtons = document.querySelector('.calculator-buttons');
const calculatorScreen = document.querySelector('#calculator-screen');
//Empty array to hold numbers
let buttonsClickedArray = [];

calculatorButtons.addEventListener('click', e =>{
    // Only calculates two numbers -- more than one set coming soon :)
    const calculate = () => {
        num1 = parseFloat(buttonsClickedArray[0]);
        operator = buttonsClickedArray[1];
        num2 = parseFloat(buttonsClickedArray[2]);
        // return console.log('calculate numbers', num1, operator, num2);
        switch (operator) {
            case 'sum':
                return num1 + num2;
            case 'subtract':
                return num1 - num2;
            case 'multiply':
                return num1 * num2;
            case 'divide': 
                return num1 / num2;
            default:
                return 'Error';
        }
    }
    
    // click event on all buttons elements
    if (e.target.matches('button')) {
        // check to see if its operator or number using data-attr
        const button = e.target;
        const operator = button.dataset.operator; 
        // Dom manipulation
        const buttonValue = button.textContent;
        const displayNumbers = calculatorScreen.textContent;
        console.log('im displayNumbers', displayNumbers);
        //check if screen is 0 concat numbers without operators
        if (!operator) {
            console.log('soy un numero!')
            if (displayNumbers === '0'){
                calculatorScreen.textContent = buttonValue;
            } else {
                calculatorScreen.textContent = displayNumbers.concat(buttonValue);
            } 
        } else if (operator === 'decimal') {
            calculatorScreen.textContent = displayNumbers + '.';
        } else if (operator === 'negative') {
            calculatorScreen.textContent = displayNumbers * -1;
        } else if (operator === 'percent') {
            calculatorScreen.textContent = displayNumbers / 100;
        } else if (operator === 'equal') {
            buttonsClickedArray.push(calculatorScreen.textContent);
            const result =  calculate();
            calculatorScreen.textContent = result;
            // console.log(buttonsClickedArray);
        } else if (operator === 'clear') {
            calculatorScreen.textContent = '0';
            buttonsClickedArray = [];
        } else {
            console.log(operator);
            buttonsClickedArray.push(calculatorScreen.textContent);
            buttonsClickedArray.push(operator);
            // console.log(buttonsClickedArray);
            calculatorScreen.textContent = '';
        }
    }


})


// Future:
// How would I write this OOP w class/constructs
// Future more than 2 operand:
// 3 posiciones en un array 3 x 2 = 6 toma la posicion de [0] 
// o todo de una operacion, luego PEMDAS.