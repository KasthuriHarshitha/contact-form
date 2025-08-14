// Form validation and alert on submit
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill out all fields before sending.');
      return;
    }
  
    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    alert('Thank you for reaching out, ' + name + '!');
    this.reset();
  });
  