const container = document.getElementById('board');
const totalBoxes = 800;

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Create 800 boxes
for(let i = 0; i < totalBoxes; i++) {
    const div = document.createElement('div');
    div.classList.add('square');

    // Hover effect
    div.addEventListener('mouseenter', () => {
        const randomColor = getRandomColor();
        div.style.backgroundColor = randomColor;

        // Reset to black after 1 second
        setTimeout(() => {
            div.style.backgroundColor = '#000';
        }, 1000);
    });

    container.appendChild(div);
}
