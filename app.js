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
        // Handle scientific functions like sin(), cos(), sqrt(), etc.
        let expression = display.value;
        
        // Replace functions with JavaScript equivalents
        expression = expression.replace(/sqrt\(/g, "Math.sqrt(");
        expression = expression.replace(/\^/g, "**");
        expression = expression.replace(/pi/g, "Math.PI");
        expression = expression.replace(/e/g, "Math.E");

        // Evaluate the expression
        display.value = eval(expression);
    } catch (error) {
        display.value = 'fuck u it wrong'; // If the expression is invalid
    }
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
