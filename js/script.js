// entire file content ...
// ... goes in between

function addHideTocButton() {
  const tocElement = document.getElementById('table-of-contents');
  const listElement = tocElement.querySelector('ul');
  const button = document.createElement('button');
  button.textContent = 'Hide TOC';
  let isHidden = false;
  button.addEventListener('click', () => {
    if (!isHidden) {
      listElement.style.display = 'none';
      isHidden = true;
      button.textContent = 'Show TOC';
    } else {
      listElement.style.display = 'block';
      isHidden = false;
      button.textContent = 'Hide TOC';
    }
  });
  const h2Element = tocElement.querySelector('h2');
  h2Element.insertAdjacentElement('afterend', button);
}

window.onload = addHideTocButton;

// ... goes in between
// entire file content ...
