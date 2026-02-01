const container = document.getElementById('board');
const totalBoxes = 800;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i=0;i<6;i++){
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}

// Generate squares
for(let i=0;i<totalBoxes;i++){
  const div = document.createElement('div');
  div.classList.add('square');

  div.addEventListener('mouseenter', () => {
    const originalColor = div.style.backgroundColor || 'rgb(29, 29, 29)';
    div.style.backgroundColor = getRandomColor();

    // Revert after 1 second
    setTimeout(() => {
      div.style.backgroundColor = originalColor;
    }, 1000);
  });

  container.appendChild(div);
}
