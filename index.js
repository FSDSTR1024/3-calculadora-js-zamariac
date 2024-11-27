// inital value of screen is 0
// if button is a number display the number in the screen when clicked
// add any button whos value is a number / else an operator

const calculator = document.querySelector('.calculator');
const calculatorButtons = document.querySelector('.calculator-buttons');
const calculatorScreen = document.querySelector('#calculator-screen');
//Empty array to hold numbers
let buttonsClickedArray = [];

calculatorButtons.addEventListener('click', e =>{
    // click event on all buttons elements
    if (e.target.matches('button')) {
        // check to see if its operator or number using data-attr
        const button = e.target;
        const operator = button.dataset.operator; 
        // Dom manipulation
        const buttonValue = button.textContent;
        const displayNumbers = calculatorScreen.textContent;
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
        } else if (operator === 'equal') {
            console.log('calcular');
            buttonsClickedArray.push(calculatorScreen.textContent);
            console.log(buttonsClickedArray);
        } else if (operator === 'clear') {
            calculatorScreen.textContent = '0';
            buttonsClickedArray = [];
        } else {
            console.log(operator);
            buttonsClickedArray.push(calculatorScreen.textContent);
            buttonsClickedArray.push(operator);
            console.log(buttonsClickedArray);
            calculatorScreen.textContent = '0';
        }
    }


})


// Preguntar
// How would I write this OOP w class/constructs