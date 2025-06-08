document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".projects .stagger-item");
    const seeMoreBtn = document.querySelector(".see-more-btn");
    
    let cardsToShow = 6; // Initial number of cards visible
    const increment = 3; // Cards to show each click
  
    function showCards() {
      projectCards.forEach((card, index) => {
        if (index < cardsToShow) {
          card.style.display = "block";
    
          // Force reflow to ensure hover effects reset cleanly
          void card.offsetWidth;
    
          // Re-add the 'reveal' class if needed to restart animation (optional)
          const innerCard = card.querySelector('.project-card');
          if (innerCard) {
            innerCard.classList.remove("reveal");
            void innerCard.offsetWidth;
            innerCard.classList.add("reveal");
          }
    
        } else {
          card.style.display = "none";
        }
      });
    
      // Hide button if all cards are shown
      if (cardsToShow >= projectCards.length) {
        seeMoreBtn.style.display = "none";
      } else {
        seeMoreBtn.style.display = "inline-block";
      }
    }
    
  
    // Initial load
    showCards();
  
    // Load more cards on click
    seeMoreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      cardsToShow += increment;
      showCards();
    });
  });
  