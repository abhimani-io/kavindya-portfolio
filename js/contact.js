/* ============================================================
   CONTACT.JS — Contact Form Validation & Submission
   Portfolio Website | Kavindya
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput    = document.getElementById('field-name');
  const emailInput   = document.getElementById('field-email');
  const subjectInput = document.getElementById('field-subject');
  const messageInput = document.getElementById('field-message');
  const submitBtn    = document.getElementById('submit-btn');
  const formSuccess  = document.getElementById('form-success');
  const formContent  = document.getElementById('form-content');

  const errorEls = {
    name:    document.getElementById('error-name'),
    email:   document.getElementById('error-email'),
    subject: document.getElementById('error-subject'),
    message: document.getElementById('error-message'),
  };

  function showError(field, msg) {
    const input = { name: nameInput, email: emailInput, subject: subjectInput, message: messageInput }[field];
    const err = errorEls[field];
    if (input) input.classList.add('error');
    if (err) { err.textContent = msg; err.classList.add('visible'); }
  }

  function clearError(field) {
    const input = { name: nameInput, email: emailInput, subject: subjectInput, message: messageInput }[field];
    const err = errorEls[field];
    if (input) input.classList.remove('error');
    if (err) { err.textContent = ''; err.classList.remove('visible'); }
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Real-time validation on blur
  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (!input) return;
    input.addEventListener('blur', () => {
      const field = input.id.replace('field-', '');
      validateField(field, input.value.trim());
    });
    input.addEventListener('input', () => {
      const field = input.id.replace('field-', '');
      clearError(field);
    });
  });

  function validateField(field, value) {
    switch (field) {
      case 'name':
        if (!value)           { showError('name', 'Please enter your name.'); return false; }
        if (value.length < 2) { showError('name', 'Name must be at least 2 characters.'); return false; }
        clearError('name'); return true;
      case 'email':
        if (!value)                { showError('email', 'Please enter your email address.'); return false; }
        if (!validateEmail(value)) { showError('email', 'Please enter a valid email address.'); return false; }
        clearError('email'); return true;
      case 'subject':
        if (!value)           { showError('subject', 'Please enter a subject.'); return false; }
        if (value.length < 3) { showError('subject', 'Subject must be at least 3 characters.'); return false; }
        clearError('subject'); return true;
      case 'message':
        if (!value)            { showError('message', 'Please enter your message.'); return false; }
        if (value.length < 20) { showError('message', 'Message must be at least 20 characters.'); return false; }
        clearError('message'); return true;
      default:
        return true;
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name    = nameInput?.value.trim()    || '';
    const email   = emailInput?.value.trim()   || '';
    const subject = subjectInput?.value.trim() || '';
    const message = messageInput?.value.trim() || '';

    // Validate all
    const valid = [
      validateField('name', name),
      validateField('email', email),
      validateField('subject', subject),
      validateField('message', message),
    ].every(Boolean);

    if (!valid) return;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12a9 9 0 11-6.219-8.56"/>
      </svg>
      Sending…
    `;

    try {
      // Send to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE', // <-- Replace this with your actual access key
          name: name,
          email: email,
          subject: subject,
          message: message
        })
      });

      const result = await response.json();

      if (response.status === 200) {
        // Show success
        formContent.style.display = 'none';
        formSuccess.classList.add('visible');
      } else {
        console.error('Error sending message:', result.message);
        alert('Failed to send message: ' + result.message);
      }
    } catch (error) {
      console.error('Network Error:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      submitBtn.disabled = false;
    }

    // Reset after delay
    setTimeout(() => {
      form.reset();
      formContent.style.display = '';
      formSuccess.classList.remove('visible');
      submitBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
        Send Message
      `;
    }, 5000);
  });

});

/* Spinner animation */
const style = document.createElement('style');
style.textContent = `
  @keyframes spin { to { transform: rotate(360deg); } }
  .spin { animation: spin 0.8s linear infinite; }
`;
document.head.appendChild(style);
