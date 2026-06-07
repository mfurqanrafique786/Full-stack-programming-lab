function runCalculator() {
    // 1. Capture inputs and convert to numbers
    const val1 = parseFloat(document.getElementById('num1').value);
    const val2 = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('operator').value;
    const resultDisplay = document.getElementById('calc-result');

    // 2. Validation: Check if inputs are numbers
    if (isNaN(val1) || isNaN(val2)) {
        resultDisplay.textContent = "⚠️ Please enter both numbers.";
        resultDisplay.style.backgroundColor = "#fff3cd"; // Warning yellow
        resultDisplay.style.color = "#856404";
        return;
    }

    let result = 0;

    // 3. Calculation logic using conditional statements
    if (op === "add") {
        result = val1 + val2;
    } else if (op === "subtract") {
        result = val1 - val2;
    } else if (op === "multiply") {
        result = val1 * val2;
    } else if (op === "divide") {
        // Validation: Prevent division by zero
        if (val2 === 0) {
            resultDisplay.textContent = "❌ Cannot divide by zero!";
            resultDisplay.style.backgroundColor = "#f8d7da";
            resultDisplay.style.color = "#721c24";
            return;
        }
        result = val1 / val2;
    }

    // 4. Display result
    resultDisplay.textContent = "Result: " + result;

    // 5. Bonus: Color change based on result value
    if (result > 0) {
        resultDisplay.style.backgroundColor = "#d1ecf1"; // Light Blue for positive
        resultDisplay.style.color = "#0c5460";
    } else if (result < 0) {
        resultDisplay.style.backgroundColor = "#f8d7da"; // Light Red for negative
        resultDisplay.style.color = "#721c24";
    } else {
        resultDisplay.style.backgroundColor = "#e2e3e5"; // Gray for zero
        resultDisplay.style.color = "#383d41";
    }
}