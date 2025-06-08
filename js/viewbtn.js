document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project-image");

    projectCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.querySelector(".overlay").style.opacity = "1";
        });

        card.addEventListener("mouseleave", () => {
            card.querySelector(".overlay").style.opacity = "0";
        });
    });
});
