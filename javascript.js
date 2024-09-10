
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  }

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

// Adds items to the DOM as a <li> element
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}<label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return; // skip this UNLESS it's an input element
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)

populateList(items, itemsList);

function deleteAll() {
  itemsList.innerHTML = `
    <li>Loading Tapas...</li>
  `
  localStorage.clear();
  items = [];
}

function checkAllFunction() {
  items.forEach(item => item.done = true);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function unCheckAllFunction() {
  items.forEach(item => item.done = false);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

const deleteButton = document.getElementById('delete-button');
const checkAll = document.getElementById('check-all-button');
const unCheckAll = document.getElementById('uncheck-all-button');

deleteButton.addEventListener('click', deleteAll)
checkAll.addEventListener('click', checkAllFunction)
unCheckAll.addEventListener('click', unCheckAllFunction)
