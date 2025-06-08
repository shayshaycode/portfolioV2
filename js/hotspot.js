document.addEventListener("DOMContentLoaded", () => {
    const hotspots = document.querySelectorAll(".hotspot");
    const infoBox = document.getElementById("hotspot-info-box");
  
    hotspots.forEach(hotspot => {
      hotspot.addEventListener("mouseover", (e) => {
        const info = hotspot.getAttribute("data-info");
        infoBox.textContent = info;
        infoBox.style.top = (hotspot.offsetTop + 40) + "px";
        infoBox.style.left = hotspot.offsetLeft + "px";
        infoBox.classList.remove("hidden");
      });
  
      hotspot.addEventListener("mouseout", () => {
        infoBox.classList.add("hidden");
      });
    });
  });
  