// Slider variables
const slider_track = document.getElementById('slider_track');
const slider_totalSlides = slider_track.children.length;
let slider_index = 0; //Math.floor(slider_totalSlides / 2);
const slider_slideWidth = slider_track.children[0].offsetWidth;
const doorSound = new Audio('project assets/door3.mp3');  
doorSound.preload = 'auto';  
doorSound.volume = 0.5;
document.querySelector('.cleft').style.visibility = slider_index === 0 ? 'hidden' : 'visible';

// Update slider position
function slider_update() {
  const offset = slider_index * slider_slideWidth;
  slider_track.style.transform = `translateX(-${offset}px)`;

  // Hide/show arrows based on position
  document.querySelector('.cleft').style.visibility = slider_index === 0 ? 'hidden' : 'visible';
  document.querySelector('.cright').style.visibility = slider_index === (slider_totalSlides - 3) ? 'hidden' : 'visible';
}
// Next and Prev functions
function slider_next() {
  if (slider_index < slider_totalSlides - 1) {
    slider_index = Math.min(slider_index + 3, slider_totalSlides - 1);
    slider_update();
  }
}

function slider_prev() {
  if (slider_index > 0) {
    slider_index = Math.max(slider_index - 3, 0);
    slider_update();
  }
}

// Modal functions
function slider_openModal(e, url) {
  e.preventDefault();
  document.getElementById('slider_modalFrame').src = url;
  document.getElementById('slider_modal').style.display = 'flex';
 // Prevent default link behavior (e.g., navigating)  
 
        // Play the sound  
        doorSound.play().catch(error => {  
            console.error('Error playing sound:', error);  
        });  
         
}

function slider_closeModal() {
  document.getElementById('slider_modal').style.display = 'none';
  document.getElementById('slider_modalFrame').src = '';
}

function start(){
  let splash = document.getElementById("splash");
  splash.addEventListener("transitionend", () =>{
    document.getElementById("bgm").play();
    splash.remove();
  })
  splash.classList.add("hide");

}
// Close modal when clicking background
document.getElementById('slider_modal').addEventListener('click', function(e) {
  if (e.target === this) slider_closeModal();
});

document.querySelectorAll('[type="color"]').forEach(($input) => {
  $input.addEventListener("change", (e) => {
    document
      .querySelector(".scroller")
      .style.setProperty(`--${$input.getAttribute("id")}`, $input.value);
  });
});
// Initialise
slider_update();

