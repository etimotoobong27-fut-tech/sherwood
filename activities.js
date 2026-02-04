// Animate activity cards on scroll
const activityCards = document.querySelectorAll('.activity-card');

function animateActivities() {
  const triggerBottom = window.innerHeight / 5 * 4;
  activityCards.forEach((card) => {
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

window.addEventListener('scroll', animateActivities);
window.addEventListener('load', animateActivities);
