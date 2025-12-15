let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartItems = document.getElementById('cart-items');
let totalPrice = document.getElementById('total-price');

function displayCart() {
cartItems.innerHTML = '';
let total = 0;

cart.forEach((item, index) => {
total += item.price;

let div = document.createElement('div');
div.className = 'cart-item';
div.innerHTML = `
<h3>${item.name}</h3>
<p>₹${item.price}</p>
<button onclick="removeItem(${index})">Remove</button>
`;
cartItems.appendChild(div);
});

totalPrice.innerText = total;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

displayCart();