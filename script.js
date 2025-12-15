let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    alert(`${name} added to cart`);
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
document.getElementById('cart-count').innerText = cart.length;
}

updateCartCount();