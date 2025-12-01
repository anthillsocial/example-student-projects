
// Reality Popups for Appointment Errors

// List of fake but realistic booking system problems
const issueMessages = [
  "❌ Staff Schedule Error: Cannot verify availability.",
  "⚠️ System Delay: Booking server not responding.",
  "🛑 Double-Booking Detected in MRI at 10:30 AM.",
  "📉 High Risk of No-Show: 3 cancellations in the past hour.",
  "🧾 Corrupted Patient Record: Missing EMPI or DOB.",
  "🔁 Booking System Timeout: Changes may not be saved.",
  "🚫 Imaging Room Conflict: CT and X-ray booked simultaneously.",
  "📤 Failed to sync with billing system. Retry required."
];

// Show one of the above messages randomly in a popup
function showRandomRealityIssue() {
  const overlay = document.getElementById("popupOverlay");
  const messageBox = document.getElementById("popupMessage");

  const randomIssue = issueMessages[Math.floor(Math.random() * issueMessages.length)];
  messageBox.textContent = randomIssue;

  overlay.classList.remove("hidden");
  overlay.classList.add("show");

  // Hide after 5 seconds
  setTimeout(() => {
    overlay.classList.remove("show");
    overlay.classList.add("hidden");
  }, 5000);
}

// Allow the popup to be closed manually (if needed)
function closePopup() {
  const overlay = document.getElementById("popupOverlay");
  overlay.classList.remove("show");
  overlay.classList.add("hidden");
}

// Scrolling System Alert Banner

// List of alerts shown in a scrolling text bar
const alertMessages = [
  "⚠️ System delay: Syncing with NHS servers...",
  "❗ MRI double-booking detected!",
  "📢 Network congestion may affect bookings.",
  "🚧 Maintenance scheduled during peak hours.",
  "⚠️ Some appointments may not be saved properly."
];

let alertIndex = 0;

// Change the alert message every 10 seconds
setInterval(() => {
  alertIndex = (alertIndex + 1) % alertMessages.length;
  document.getElementById("alertText").textContent = alertMessages[alertIndex];
}, 10000);

// Patient Complaint Popups

// List of fake patient complaints to show as popups
const complaints = [
  "I’ve been waiting over an hour and no one called me!",
  "This is my third time trying to book, your system keeps crashing!",
  "The email confirmation never arrived.",
  "I was charged twice for one scan!",
  "My appointment was cancelled without notice!"
];

// Show a random patient complaint in a box
function showComplaintBox() {
  const box = document.getElementById("complaintBox");
  const text = document.getElementById("complaintBoxText");

  text.textContent = complaints[Math.floor(Math.random() * complaints.length)];
  box.classList.remove("hidden");

  // Hide the complaint after 6 seconds
  setTimeout(() => {
    box.classList.add("hidden");
  }, 6000);
}

// Simulated Phone Call Conversation

// Conversation shown as a message banner
const phoneScript = [
  "📞 Patient: Hi, I'd like to book an MRI appointment.",
  "👩‍⚕️ Admin: Of course. Do you have a referral letter from your GP?",
  "📞 Patient: Uh... no, I don't.",
  "👩‍⚕️ Admin: I’m afraid we can't book without a referral letter. Please contact your GP.",
  "📞 Patient: Oh… okay, I’ll try that. Thanks.",
  "👩‍⚕️ Admin: No problem. Let us know when you have it!"
];

let phoneIndex = 0;

// Display the phone call messages one by one
function simulatePhoneCallConversation() {
  const banner = document.getElementById("phoneCallConversation");
  const textDisplay = document.getElementById("phoneText");

  banner.classList.remove("hidden");
  phoneIndex = 0;
  textDisplay.textContent = "";

  const interval = setInterval(() => {
    if (phoneIndex < phoneScript.length) {
      textDisplay.textContent += phoneScript[phoneIndex] + "\n";
      phoneIndex++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        banner.classList.add("hidden");
      }, 4000);
    }
  }, 2500); // Each line appears every 2.5 seconds
}

// Run Everything When Page Loads

window.addEventListener("DOMContentLoaded", () => {
  // Start showing reality issues immediately
  showRandomRealityIssue();
  setInterval(showRandomRealityIssue, 10000);

  // Show a complaint every 20 seconds
  setInterval(showComplaintBox, 20000);

  // Start and repeat phone call simulation
  simulatePhoneCallConversation();
  setInterval(simulatePhoneCallConversation, 50000);
});
