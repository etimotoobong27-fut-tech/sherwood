// Handle form submission
const form = document.getElementById('admissionsForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Simple validation (HTML already ensures required fields)
  const fullName = form.fullName.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const childName = form.childName.value.trim();
  const level = form.level.value;

  if (!fullName || !email || !phone || !childName || !level) {
    formMessage.textContent = "Please fill in all required fields.";
    formMessage.style.color = "red";
    return;
  }

  // Show success message
  formMessage.textContent = `Thank you, ${fullName}! Your application for ${childName} (${level}) has been submitted.`;
  formMessage.style.color = "#0B3D91";

  // Reset form
  form.reset();
});
