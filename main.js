// SCROLL ANIMATION
const faders = document.querySelectorAll('.fade-up');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ACTIVE NAVBAR LINK ON SCROLL
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.main-nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if(pageYOffset >= sectionTop) current = section.getAttribute('id');
  });

  navLi.forEach(a => {
    a.classList.remove('active');
    if(a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});
