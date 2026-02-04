// ================= Carousel =================
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(index) {
  if(index >= slides.length) slideIndex = 0;
  if(index < 0) slideIndex = slides.length -1;
  slides.forEach((slide) => slide.style.display = 'none');
  slides[slideIndex].style.display = 'block';
}

// Initial display
showSlide(slideIndex);

// Next / Prev Buttons
next.addEventListener('click', () => { slideIndex++; showSlide(slideIndex); });
prev.addEventListener('click', () => { slideIndex--; showSlide(slideIndex); });

// Auto-slide every 5 seconds
setInterval(() => { slideIndex++; showSlide(slideIndex); }, 5000);


// ================= Scroll Animations =================
const animateCards = document.querySelectorAll('.card, .value-card');
const mvPanels = document.querySelectorAll('.mv-panel');

function animateOnScroll() {
  const triggerBottom = window.innerHeight / 5 * 4;

  // Cards and value-cards
  animateCards.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if(elTop < triggerBottom){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });

  // Mission & Vision Panels
  mvPanels.forEach(panel => {
    const panelTop = panel.getBoundingClientRect().top;
    if(panelTop < triggerBottom){
      panel.style.opacity = 1;
      panel.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
