// Function to add a color box based on a specific input ID
function addColorBox(inputId) {
    const inputElement = document.getElementById(inputId);
    const colorValue = inputElement.value.trim();

    if (colorValue === "") {
        alert("Please enter a color name or hex code!");
        return;
    }

    // 1. Create a new div element
    const newBox = document.createElement("div");
    
    // 2. Set styles and content
    newBox.className = "color-box";
    newBox.style.backgroundColor = colorValue;
    newBox.textContent = colorValue;

    // 3. Append to the container
    document.getElementById("box-container").appendChild(newBox);

    // Clear input after adding
    inputElement.value = "";
    
    // Update browser info every time a box is added
    displayBrowserInfo();
}

// Function to clear all boxes
function clearBoxes() {
    const container = document.getElementById("box-container");
    container.innerHTML = ""; // Removes all child elements
}

// Bonus: Using BOM (Browser Object Model) objects
function displayBrowserInfo() {
    const infoDiv = document.getElementById("browser-info");
    
    // Get window dimensions and browser name
    const w = window.innerWidth;
    const h = window.innerHeight;
    const platform = navigator.platform;

    infoDiv.innerHTML = `
        <strong>Browser Stats (BOM):</strong><br>
        Window Size: ${w}px x ${h}px | Platform: ${platform}
    `;
}

// Initialize browser info on page load
window.onload = displayBrowserInfo;