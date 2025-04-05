
let search=document.querySelector('.search');

document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active');
}

document.getElementById('productsBtn').addEventListener('click', () => {
    document.getElementById('product').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('comboBtn').addEventListener('click', () => {
    document.getElementById('combo').scrollIntoView({ behavior: 'smooth' });
});
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'cart.html';
}
