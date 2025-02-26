// Get the display element
const display = document.getElementById('display');

// Memory variable
let memory = 0;

// Append values to the display
function appendToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Clear the last entry (CE)
function clearEntry() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        // Replace '^' with '**' for exponentiation
        let expression = display.value.replace("^", "**");
        // Evaluate the expression in the display
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error'; // If the expression is invalid
    }
}

// Square Root function (√)
function squareRoot() {
    try {
        let value = parseFloat(display.value);
        if (value < 0) {
            display.value = 'Error'; // Square root of a negative number is not a real number
        } else {
            display.value = Math.sqrt(value);
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Memory Add (M+)
function memoryAdd() {
    memory += parseFloat(display.value);
}

// Memory Subtract (M-)
function memorySubtract() {
    memory -= parseFloat(display.value);
}

// Memory Recall (MR)
function memoryRecall() {
    display.value = memory;
}

// Memory Clear (MC)
function memoryClear() {
    memory = 0;
    display.value = '';
}
