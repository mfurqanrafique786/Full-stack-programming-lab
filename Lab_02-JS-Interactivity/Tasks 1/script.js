// 1. Store correct answers in variables
const answer1 = "JavaScript";
const answer2 = "script";
const answer3 = "No";

function checkQuiz() {
    // Initialize score
    let score = 0;

    // 2. Get values from the DOM
    const user1 = document.getElementById('q1').value.trim();
    const user2 = document.getElementById('q2').value.trim();
    const user3 = document.getElementById('q3').value.trim();

    // 3. Logic to check each answer individually
    if (user1.toLowerCase() === answer1.toLowerCase()) {
        score++;
    }
    
    if (user2.toLowerCase() === answer2.toLowerCase()) {
        score++;
    }

    if (user3.toLowerCase() === answer3.toLowerCase()) {
        score++;
    }

    // 4. Display results dynamically
    const display = document.getElementById('result-display');
    
    // 5. Conditional messages based on score
    if (score === 3) {
        display.textContent = `Excellent! Score: ${score}/3 🎉`;
        display.style.color = "green";
    } else if (score >= 1) {
        display.textContent = `Good effort! Score: ${score}/3`;
        display.style.color = "orange";
    } else {
        display.textContent = `Try again! Score: ${score}/3 ❌`;
        display.style.color = "red";
    }
}

// 6. Reset function to clear inputs and results
function resetQuiz() {
    document.getElementById('q1').value = "";
    document.getElementById('q2').value = "";
    document.getElementById('q3').value = "";
    document.getElementById('result-display').textContent = "";
}