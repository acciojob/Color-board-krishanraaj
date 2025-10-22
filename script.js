const container = document.getElementById('container');

// Set container size to hold 800 squares in grid
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(40, 25px)';
container.style.gridTemplateRows = 'repeat(20, 25px)';
container.style.gap = '2px';
container.style.width = '1020px';  // 40*25 + gaps
container.style.height = '520px';  // 20*25 + gaps

// Create 800 squares
for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  // Set initial color
  square.style.backgroundColor = 'rgb(29, 29, 29)';
  square.style.width = '25px';
  square.style.height = '25px';
  square.style.transition = 'background-color 0.5s ease';

  // Hover effect
  square.addEventListener('mouseenter', () => {
    square.style.backgroundColor = getRandomColor();

    // Revert back after 1 second
    setTimeout(() => {
      square.style.backgroundColor = 'rgb(29, 29, 29)';
    }, 1000);
  });

  container.appendChild(square);
}

// Function to generate random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
