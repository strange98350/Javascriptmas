const calendarContainer = document.getElementById('calendar');

for (let i = 1; i <= 24; i++) {
  // Create a calendar box
  const box = document.createElement('div');
  box.className = 'calendar-box';
  box.tabIndex = 0; // Make it focusable for accessibility
  box.innerHTML = `
    <p>${i}</p>
    <i class="fas fa-gift"></i>
    <p>Open me!</p>
  `;

  // Add a click event to toggle "opened" state
  box.addEventListener('click', function () {
    if (box.classList.contains('opened')) {
      box.classList.remove('opened');
      box.querySelector('p:last-child').textContent = 'Open me!';
    } else {
      box.classList.add('opened');
      box.querySelector('p:last-child').textContent = 'Opened!';
    }
  });

  // Append the box to the container
  calendarContainer.appendChild(box);
}
