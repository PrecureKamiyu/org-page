// entire file content ...
// ... goes in between

function addHideTocButton() {
  const tocElement = document.getElementById('table-of-contents');
  const h2Element = tocElement.querySelector('h2');
  const button = document.createElement('button');
  button.textContent = 'Hide TOC';
  let isHidden = false;
  button.addEventListener('click', () => {
    if (!isHidden) {
      tocElement.style.display = 'none';
      isHidden = true;
      button.textContent = 'Show TOC';
    } else {
      tocElement.style.display = 'block';
      isHidden = false;
      button.textContent = 'Hide TOC';
    }
  });
  h2Element.insertAdjacentElement('afterend', button);
}

// ... goes in between
// entire file content ...
