// main.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // Check if the user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = document.querySelectorAll('.reveal');
  
    // If reduced motion is preferred, immediately show elements
    if (prefersReducedMotion) {
      revealElements.forEach(el => el.classList.add('visible'));
      return;
    }
  
    const observerOptions = {
      threshold: 0.2  // trigger when 10% of the element is visible
    };
  
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // If you only want the effect once, unobserve the element:
          observer.unobserve(entry.target);
        } else {
          // Uncomment the next line if you want the effect to reverse when out of view:
          // entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);
  
    revealElements.forEach(el => {
      revealOnScroll.observe(el);
    });
  });

  
