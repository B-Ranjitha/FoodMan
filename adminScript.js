// Admin credentials (for demo purposes only - should be handled server-side in real applications)
const adminEmail = "admin@example.com";
const adminPassword = "admin123";  // Strong password example

// Function to handle admin login
function login(event) {
    event.preventDefault();  // Prevent form from submitting and refreshing the page
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Check if the email and password match the admin credentials
    if (email === adminEmail && password === adminPassword) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'block'; // Show error message
    }
}

// Array to hold the items (this would be managed in a real app with a backend)
let items = [];

// Function to add a new item
function addItem() {
    const name = document.getElementById('item-name').value;
    const price = parseFloat(document.getElementById('item-price').value).toFixed(2);
    const imageUrl = document.getElementById('item-image-url').value;

    if (name && price && imageUrl) {
        // Add the item to the items array
        items.push({ name, price, imageUrl });
        displayItems();
        
        // Clear the form fields
        document.getElementById('item-name').value = '';
        document.getElementById('item-price').value = '';
        document.getElementById('item-image-url').value = '';
    } else {
        alert('Please fill in all fields');
    }
}

// Function to display the items on the page
function displayItems() {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';  // Clear the existing list
    
    items.forEach((item, index) => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');
        
        const itemImage = document.createElement('img');
        itemImage.src = item.imageUrl;
        itemCard.appendChild(itemImage);
        
        const details = document.createElement('div');
        details.classList.add('details');
        details.innerHTML = `<strong>${item.name}</strong><br>$${item.price}`;
        itemCard.appendChild(details);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.onclick = () => removeItem(index);
        itemCard.appendChild(deleteButton);
        
        itemList.appendChild(itemCard);
    });
}

// Function to remove an item
function removeItem(index) {
    items.splice(index, 1);
    displayItems();
}
