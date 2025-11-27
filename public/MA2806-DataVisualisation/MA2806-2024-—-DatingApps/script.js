//gotta fic this - mad glitchy

// Get the background container element
const container = document.querySelector('.background-container');

let isDragging = false;
let startX;
let currentX;
let distanceMoved = 0;

// Function to handle the mouse down event (begin dragging)
container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX; // Stores the initial position
    container.style.transition = 'none'; // Disable transition while dragging
});

// Function to handle the mouse move event (while dragging)
window.addEventListener('mousemove', (e) => {
    if (isDragging) {
        currentX = e.clientX;
        distanceMoved = startX - currentX; // Calculate how far the container has moved
        container.style.transform = `translateX(-${distanceMoved}px)`; // Move the container with the mouse
    }
});

// Function to handle the mouse up event (stop dragging)
window.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        container.style.transition = 'transform 0.3s ease'; // Re-enable transition after drag
        if (distanceMoved > 300) { // Check if the container is far enough left (off-screen)
            window.location.href = 'fullprofile.html'; // Navigate to the new page
        } else {
            container.style.transform = 'translateX(0)'; // Reset the position if not far enough
        }
    }
});


//button events
function toggleModal(modalId) {
  const modal = document.getElementById(modalId);

  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    // First hide all other modals
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach(m => m.style.display = 'none');

    // Shows the selected modal
    modal.style.display = "block";
  }
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log("showSlides called with", n); // Debug

  let i;
  let slides = document.getElementsByClassName("slideshow");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  
}
