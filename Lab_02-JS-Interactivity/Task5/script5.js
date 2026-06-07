function validateForm() {
    // Clear previous errors and success messages
    clearErrors();

    // 1. Get Values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const password = document.getElementById('password').value;

    let isValid = true;

    // 2. Individual Validation Rules
    
    // Name Check
    if (name === "") {
        showError("nameError", "Name cannot be empty");
        isValid = false;
    }

    // Email Check (must contain @)
    if (!email.includes("@")) {
        showError("emailError", "Enter a valid email containing @");
        isValid = false;
    }

    // Age Check (18-60)
    if (isNaN(age) || age < 18 || age > 60) {
        showError("ageError", "Age must be between 18 and 60");
        isValid = false;
    }

    // Password Check (min 6 chars)
    if (password.length < 6) {
        showError("passwordError", "Password must be at least 6 characters");
        isValid = false;
    }

    // 3. Successful Validation
    if (isValid) {
        // BOM Confirm dialog
        const proceed = confirm("Everything looks correct! Do you want to submit?");
        
        if (proceed) {
            document.getElementById('success-msg').textContent = "Registration Successful! ✅";
            
            // Bonus: Additional Interaction
            setTimeout(() => {
                const feedback = prompt("How was your experience today? (Excellent/Good/Bad)");
                alert(`Thank you for your "${feedback}" feedback!`);
            }, 500);
        }
    }
}

// Helper function to display error messages in the DOM
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

// Helper function to reset all error messages
function clearErrors() {
    const errors = document.querySelectorAll('.error-msg');
    errors.forEach(err => err.textContent = "");
    document.getElementById('success-msg').textContent = "";
}