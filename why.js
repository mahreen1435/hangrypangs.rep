
// Define variables to store cart and product data
let cartItems = [];
let cartTotal = 0;

// Function to add a product to the cart
function addToCart(name, price) {
  // Add the product to the cart items
  cartItems.push({ name, price });
  
  // Update the cart total
  cartTotal += price;
  
  // Update the DOM to reflect the changes
  updateCart();
}

// Function to update the cart in the DOM
function updateCart() {
  // Get the cart and cart item elements from the DOM
  
  const cart = document.getElementById('cart');
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  
  // Clear the cart items element
  cartItemsElement.innerHTML = '';
  
  // Loop through the cart items and add them to the cart items element
  for (let item of cartItems) {
    const li = document.createElement('li');
    li.innerText = `${item.name}: \u20B9${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(li);
  }
  
  // Update the cart total element
  cartTotal = cartTotal * 0.3;
  cartTotalElement.innerText = cartTotal.toFixed(2);
}

function msg() {
alert(" your account has been created")
}




var email = document.getElementById("mail");

email.addEventListener("keyup", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
}
);


