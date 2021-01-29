const form = document.getElementById("addForm"); // tangkap form nya
const itemList = document.getElementById("items"); // tangkap ul nya
const filter = document.getElementById("filter");

// form submit event
form.addEventListener("submit", addItem);
// delete event
itemList.addEventListener("click", removeItem);
// filter event
filter.addEventListener("keyup", filterItems);

// create add item function
function addItem(e) {
  e.preventDefault();
  // get input value
  let newItem = document.getElementById("item").value;

  // create new li element
  const li = document.createElement("li");
  // add class
  li.className = "list-group-item";
  // add text note with input value
  li.appendChild(document.createTextNode(newItem));
  // create delete button element
  const deleteButton = document.createElement("button");
  // add class to delete button
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  // appendTextNode
  deleteButton.appendChild(document.createTextNode("X"));
  // inser button into li
  li.appendChild(deleteButton);
  // insert into ul
  itemList.appendChild(li);
}

// Remove Item Function
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// filter items
function filterItems(e) {
  // convert to lowercase
  let text = e.target.value.toLowerCase();
  // tangkap semua li dalam ul
  let items = itemList.getElementsByTagName("li");
  // convert to array
  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
