// Create a 'close' button and append it to each list item

// Add a 'done' symbol when clicking on a list item
var list = document.querySelector('ul');

list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
  if (ev.target.tagName === 'SPAN') {
    list.removeChild(ev.target.parentElement);
    // ev.target.parentElement.style.display = 'none';
  }
});

// Create a new list item when clicking on the 'Add' button
function newElement() {
  var li = document.createElement('li');
  var close = document.createElement('span');
  var inputValue = document.getElementById('myInput').value;
  var t = document.createTextNode(inputValue);
  close.innerText = 'X';
  close.className = 'remove';

  li.appendChild(t);
  li.appendChild(close);
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    list.appendChild(li);
  }
  document.getElementById('myInput').value = '';
}
