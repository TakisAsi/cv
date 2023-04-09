const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
scrollToTopBtn.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

const cards = document.querySelectorAll('#projects .card');

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    cards.forEach(c => {
      if (c !== card) {
        c.classList.add('blur');
      }
    });
  });
  
  card.addEventListener('mouseout', () => {
    cards.forEach(c => {
      c.classList.remove('blur');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('#contact form');
    var submitBtn = form.querySelector('button[type="submit"]');
  
    // Όταν η φόρμα υποβάλλεται, εκτελούμε τις ακόλουθες ενέργειες
    form.addEventListener('submit', function(event) {
      // Αποτρέπουμε την υποβολή της φόρμας
      event.preventDefault();
  
      // Απενεργοποιούμε το κουμπί υποβολής και αλλάζουμε το κείμενο του
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
  
      // Λαμβάνουμε τα δεδομένα της φόρμας και δημιουργούμε ένα νέο αντικείμενο FormData
      var formData = new FormData(form);
  
      // Χρησιμοποιούμε τη μέθοδο fetch για να στείλουμε τα δεδομένα στον εξυπηρετητή PHP
      fetch(form.action, {
        method: 'POST',
        body: formData
      })
      .then(function(response) {
        // Επανενεργοποιούμε το κουμπί υποβολής και επαναφέρουμε το αρχικό του κείμενο
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
  
        // Αν η αποστολή ήταν επιτυχής, εμφανίζουμε ένα μήνυμα επιτυχίας και επαναφορτώνουμε τη σελίδα
if (response.ok) {
    alert('Your message was sent successfully!');
    window.location.reload();
    }
    // Αν η αποστολή δεν ήταν επιτυχής, εμφανίζουμε ένα μήνυμα λάθους
    else {
    alert('There was a problem sending your message. Please try again later.');
    }
    })
    .catch(function(error) {
    // Επανενεργοποιούμε το κουμπί υποβολής και επαναφέρουμε το αρχικό του κείμενο
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
    // Εμφανίζουμε ένα μήνυμα λάθους
    alert('There was a problem sending your message. Please try again later.');
    
    });
    });
    });