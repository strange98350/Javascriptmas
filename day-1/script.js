// Get references to DOM elements
const itemInput = document.getElementById('item-input');
const addItemButton = document.getElementById('add-item-button');
const shoppingList = document.getElementById('shopping-list');
const listArr = [];

// Function to check item is not duplicate
function checkDuplicate() {
    // Normalize the input by trimming spaces and collapsing multiple spaces
    const itemText = itemInput.value.trim().replace(/\s+/g, ' ');

    // Check if the item is already in the list (case insensitive)
    const duplicate = listArr.some((gift) => {
        // Normalize existing list items as well
        return gift.toLowerCase().trim().replace(/\s+/g, ' ') === itemText.toLowerCase();
    });

    // If the item is not a duplicate, add it to the list
    if (!duplicate && itemText !== '') {
        listArr.push(itemText); // Add the item to the array
        renderList(); // Render the updated list
    } else if (itemText === '') {
        alert("Please enter a valid item.");
    } else {
        alert("This item is already on your list!");
    }
}

// Function to render the list
function renderList() {
    shoppingList.innerHTML = ''; // Clear the existing list
    listArr.forEach((gift, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = gift; // Display the item exactly as entered

        // Create Edit Button
        const editButton = document.createElement('button');
        editButton.textContent = '✏️'; // Edit symbol
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', () => editItem(index));

        // Create Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'; // Delete symbol
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => deleteItem(index));

        // Append buttons to the list item
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        // Append list item to the shopping list
        shoppingList.appendChild(listItem);
    });

    itemInput.value = ''; // Clear the input field
}

// Function to edit an item
function editItem(index) {
    const editedItem = prompt("Edit the item:", listArr[index]);
    if (editedItem !== null && editedItem.trim() !== '') {
        // Normalize and update the item
        listArr[index] = editedItem.trim().replace(/\s+/g, ' ');
        renderList(); // Render the updated list
    }
}

// Function to delete an item
function deleteItem(index) {
    const confirmed = confirm("Are you sure you want to delete this item?");
    if (confirmed) {
        listArr.splice(index, 1); // Remove the item from the array
        renderList(); // Render the updated list
    }
}

// Add event listener to button
addItemButton.addEventListener('click', checkDuplicate);

// Allow adding items by pressing Enter key
itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkDuplicate();
    }
});
