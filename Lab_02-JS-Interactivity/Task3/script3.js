// Function to mark an individual task as complete
function markComplete(textId) {
    const element = document.getElementById(textId);
    // Toggle the 'completed' class defined in our CSS
    element.classList.toggle('completed');
}

// Function to remove a task from visibility
function removeTask(itemId) {
    const item = document.getElementById(itemId);
    // Dynamically change visibility using DOM style property
    item.style.display = "none";
}

// Requirement: Use a loop to style all tasks the same way
function applyBatchStyle() {
    // Select all elements with the class 'task-text'
    const allTasks = document.querySelectorAll('.task-text');

    // Loop through the collection
    for (let i = 0; i < allTasks.length; i++) {
        allTasks[i].style.fontWeight = "bold";
        allTasks[i].style.color = "#0056b3";
        allTasks[i].style.borderLeft = "4px solid #0056b3";
        allTasks[i].style.paddingLeft = "10px";
    }
    
    console.log("Loop completed: Styles applied to all tasks.");
}