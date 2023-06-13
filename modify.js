var modifyButton = document.getElementById('modifyButton');
var targetElement = document.getElementById('targetElement');

modifyButton.addEventListener('click', function() {
  targetElement.classList.toggle('modified');

  if (targetElement.classList.contains('modified')) {
    targetElement.innerHTML = `
      <h2>Modified!</h2>
      <p>This is a modified paragraph.</p>
      <ul>
        <li>Modified Item 1</li>
        <li>Modified Item 2</li>
        <li>Modified Item 3</li>
        <li>Modified Item 4</li>
      </ul>
    `;
  } else {
    targetElement.innerHTML = `
      <h2>Hello, World!</h2>
      <p>This is a sample paragraph.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    `;
  }
});
