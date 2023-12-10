const cartBtn = document.getElementById('cart-btn');
const cartContent = document.querySelector('.cart');
let display = document.querySelector('.display');
let nav = document.querySelector('.navbar-links');
cartBtn.addEventListener('click', () => {
  cartContent.style.display = cartContent.style.display === 'block' ? 'none' : 'block';
});

display.addEventListener('click', ()=>{
  nav.classList.toggle('clear')
})