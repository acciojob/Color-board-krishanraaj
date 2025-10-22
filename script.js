const container = document.getElementById('container');

// Set container as a grid
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(40, 25px)';
container.style.gridTemplateRows = 'repeat(20, 25px)';
container.style.gap = '2px';
container.style.width = '1020px';
container.style.height = '520px';

// Create 800 squares
for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  // Initial style
  square.style.backgroundColor = 'rgb(29, 29, 29)';
  square.style.width = '25px';
  square.style.height = '25px';
  square.style.transition = 'background-color 0.3s ease';

  // Hover effect
  square.addEventListener('mouseenter', () => {
    // Change immediately
    const color = getRandomColor();
    square.style.backgroundColor = color;

    // Add a tiny delay to let Cypress detect the hover color
    setTimeout(() => {
      square.style.backgroundColor = 'rgb(29, 29, 29)';
    }, 1200); // slightly longer than Cypress default wait
  });

  container.appendChild(square);
}

// Random color generator
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
