// Change header on scroll
window.onscroll = function() {
  if (window.scrollY >= 20 || window.pageYOffset >= 20) {
    document.getElementsByTagName('header')[0].classList.add('scroll');
  } else {
    document.getElementsByTagName('header')[0].classList.remove('scroll');
  }
};


// Open sidebar navigation (mobile)
var sidebarNav = document.querySelector('.sidebar-nav');

function openSidebar() {
  sidebarNav.classList.add('active');
}

function closeSidebar() {
  sidebarNav.classList.remove('active');
}

// Slider partners
var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide() {
  if(index < 0) {
    index = slides.length - 1;
  }
  
  if(index > slides.length - 1) {
    index = 0;
  }
  
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    dot[i].classList.remove('active');
  }
  
  slides[index].style.display = 'block';
  dot[index].classList.add('active');
  
  index++;
  
  setTimeout(changeSlide, 2000);
}

changeSlide();