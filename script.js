const container = document.querySelector('.container');
  const SQUARES = 30 * 30 - 100;

  function getRandomColor() {
    const hex =
      '#' +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
    return hex;
  }

  for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('mouseenter', () => {
      const color = getRandomColor();
      square.style.background = color;
      setTimeout(() => {
        square.style.background = '#1d1d1d';
      }, 1000);
    });
  }