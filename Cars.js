const cartBtn=document.getElementById('cart-btn');
const cartContent = document.querySelector('.cart');
let display = document.querySelector('.display');
let nav = document.querySelector('.navbar-links');
cartBtn.addEventListener('click', () => {
  cartContent.style.display = cartContent.style.display === 'block' ? 'none' : 'block';
});

display.addEventListener('click', ()=>{
  nav.classList.toggle('clear')
});

var buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    var imageSrc = document.querySelectorAll('.car-img')[index].getAttribute('src');
    var cartDiv = document.querySelector('.cart');
    var imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.classList.add('imag');
    var con = document.createElement('div');
       con.classList.add('dif');
        con.appendChild(imageElement);
        var mark = document.createElement('button');
    mark.classList.add('mark');
    mark.classList.add('but')
    mark.innerHTML='Buy';
    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.classList.add('but')
    remove.innerHTML='Cancel';

    con.appendChild(mark);
    con.appendChild(remove);
    cartDiv.appendChild(con);
    
    var but = document.querySelectorAll('.but')
    but.forEach(function(button, index) {
  button.addEventListener('click', function() {
    // ...

    mark.addEventListener('click', function() {
      con.remove();
    });

    remove.addEventListener('click', function() {
      con.remove();
    });

    
  });
});
  })});
  
  
  let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000); // Change slides every 3 seconds (adjust duration as needed)
}