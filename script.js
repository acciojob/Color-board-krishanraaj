const container = document.getElementById('board');
const totalBoxes = 800;

// Generate 800 squares
for (let i = 0; i < totalBoxes; i++) {
  const div = document.createElement('div');
  div.classList.add('square');

  // Hover effect: changes color temporarily
  div.addEventListener('mouseenter', () => {
    div.style.backgroundColor = getRandomColor();

    // Reset to original color after 1s
    setTimeout(() => {
      div.style.backgroundColor = 'rgb(29, 29, 29)';
    }, 1000);
  });

  container.appendChild(div);
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
