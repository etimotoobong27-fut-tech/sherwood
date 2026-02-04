// Animate news cards on scroll
const newsCards = document.querySelectorAll('.news-card');

function animateNews() {
  const triggerBottom = window.innerHeight / 5 * 4;
  newsCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom){
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
      if(card.dataset.delay){
        card.style.transitionDelay = card.dataset.delay + 'ms';
      }
    }
  });
}

window.addEventListener('scroll', animateNews);
window.addEventListener('load', animateNews);
