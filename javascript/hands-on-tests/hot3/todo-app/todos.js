// Get add item button and input field and error message
let addButton = document.getElementById('add-button');
let itemInput = document.getElementById('item-input');
let errorMessage = document.getElementById('errorMessage');

// Hide error message
errorMessage.style.display = 'none';

// Gets the list group
let listGroup =  document.getElementById('list-group');

// Creates an empty array to hold items
let itemsList = ['Rent a car', 'Go to the gym', 'Buy groceries', 'Walk the dog', 'Pay rent'];

// function that adds initial items to the list 
function renderList() {
    //Creates a list item and gives it a class name
    for (let i = 0; i < itemsList.length; i++) {
        // Creates a list item and gives it a class name
        let listItem  = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = itemsList[i];
        // Creates delete button
        let deleteButton = document.createElement('span');
        deleteButton.className = 'btn btn-danger';
        deleteButton.textContent = 'X';
        // Append delete button to list item
        listItem.appendChild(deleteButton);
        // Add item to the list every time it loops through
        listGroup.appendChild(listItem);
    }
}

renderList();

// Add event listener to the button
addButton.addEventListener('click', function() {
    if (itemInput.value === '') {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        let itemText = itemInput.value;
        itemsList.push(itemText);
        listGroup.textContent = '';
        renderList();  
    }

    // Clear the input field after adding each item
    itemInput.value = '';
})

// Add event listener to delete items
listGroup.addEventListener('click', function(event) {
    if (event.target.className === 'btn btn-danger') {
        let index = itemsList.indexOf(event.target.parentElement.textContent.slice(0, -1));
        
        if (index > -1) {
            itemsList.splice(index, 1);
        }

        listGroup.textContent = '';
        renderList();
    }
});