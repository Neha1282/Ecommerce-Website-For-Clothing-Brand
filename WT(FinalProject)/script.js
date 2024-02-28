// Sample product data (you'd typically fetch this from a server)
const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 15.99 },
];

// Initialize cart
const cart = {
    items: [],
    total: 0,
};

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.parentNode.getAttribute('data-id');
            addToCart(productId);
        });
    });
});

function displayProducts() {
    const productsSection = document.querySelector('.products');
    productsSection.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.setAttribute('data-id', product.id);
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productsSection.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(product => product.id === parseInt(productId));
    if (product) {
        cart.items.push(product);
        cart.total += product.price;
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.querySelector('#cart-items');
    const cartTotal = document.querySelector('#cart-total');

    cartItems.innerHTML = '';
    cart.items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });

    cartTotal.textContent = cart.total.toFixed(2);
}
