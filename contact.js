// Handle contact form submission
const contactForm = document.getElementById('contactForm');
const contactMessage = document.getElementById('contactMessage');

contactForm.addEventListener('submit', function(e){
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if(!name || !email || !message){
    contactMessage.textContent = "Please fill in all required fields.";
    contactMessage.style.color = "red";
    return;
  }

  // Success message
  contactMessage.textContent = `Thank you, ${name}! Your message has been sent. We will get back to you shortly.`;
  contactMessage.style.color = "#0B3D91";

  contactForm.reset();
});
