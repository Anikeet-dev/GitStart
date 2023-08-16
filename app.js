// let form = document.getElementById('addForm');
// let itemList = document.getElementById('items');
// let filter = document.getElementById('filter');
// let list = document.getElementsByTagName('li');

// form.addEventListener('submit', addItem);
// itemList.addEventListener('click', removeItem);
// filter.addEventListener('keyup', filterItems);

// function addItem(e) {
//     e.preventDefault();

//     // Get new item.
//     let newItem = document.getElementById('item').value;
//     // let discription = document.getElementById('discription').value;

//     // Create new li element.
//     let li = document.createElement('li');

//     // Add class.
//     li.className = 'list-group-item';

//     // Add text to new li element.
//     li.appendChild(document.createTextNode(newItem));
//     console.log(li);
//     // li.appendChild(document.createTextNode(discription));

//     // Delete button for new li.
//     let deleteBtn = document.createElement('button');
//     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
//     deleteBtn.appendChild(document.createTextNode('X'));
//     li.appendChild(deleteBtn);
// }

// // Remove Item
// function removeItem(e) {
//     if (e.target.classList.contains('delete')) {
//         if (confirm('Are you sure?')) {
//             let li = e.target.parentElement;
//             itemList.removeChild(li);
//         }
//     }
// }

// // Filter Items
// function filterItems(e) {
//     var text = e.target.value.toLowerCase();
//     var items = itemList.getElementsByTagName('li');
//     Array.from(items).forEach(function(item) {
//         var itemName = item.firstChild.textContent;
//         if (itemName.toLowerCase().indexOf(text) != -1) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }


let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
let list = document.getElementsByTagName('li');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function addItem(e) {
    e.preventDefault();

    // Get new item.
    let newItem = document.getElementById('item').value;
    let discription = document.getElementById('discription').value;

    // Create new li element.
    let li = document.createElement('li');

    // Add class.
    li.className = 'list-group-item';

    // Add text to new li element.
    li.appendChild(document.createTextNode(newItem));
    //Add space between newItem and discription text
    li.appendChild(document.createTextNode(' '));
    //Append discription to new li element
    li.appendChild(document.createTextNode(discription));

    // Delete button for new li.
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    // Edit button for new li.
    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-light btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    itemList.appendChild(li);
    document.getElementById('item').value = ''; 
    document.getElementById('discription').value = ''; 
}

// Remove Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}