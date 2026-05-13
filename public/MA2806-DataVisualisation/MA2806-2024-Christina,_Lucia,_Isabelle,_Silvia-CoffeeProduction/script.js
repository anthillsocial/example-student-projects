document.addEventListener("DOMContentLoaded", function() {
  // Initialize GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  // Animate all elements with class 'animate-text'
  gsap.utils.toArray(".animate-section").forEach((element) => {
    gsap.fromTo(element,
      { opacity: 0, y: 30 }, // Start state
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // When top of element hits 80% of viewport
          toggleActions: "play none none none"
        }
      }
    );
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Popup functionality
  const researchButtons = document.querySelectorAll(".research-btn");
  const closeButtons = document.querySelectorAll(".close-btn");
  const popups = document.querySelectorAll(".research-popup");
  
  // Show popup
  researchButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const popupId = btn.getAttribute("data-research");
      document.getElementById(popupId).classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent scrolling
    });
  });
  
  // Close popup
  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".research-popup").classList.remove("active");
      document.body.style.overflow = ""; // Re-enable scrolling
    });
  });
  
  // Close when clicking outside
  popups.forEach(popup => {
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });
});



