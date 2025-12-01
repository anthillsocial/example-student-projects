// Track if the user is currently clocked in or on break
let clockedIn = false;
let onBreak = false;
let hoursWorked = 0;
const hourlyRate = 15;

// Function to clock in
function clockIn() {
  if (!clockedIn) {
    clockedIn = true;
    document.getElementById('clockStatus').innerText = 'Status: Clocked In';
    logScheduleUpdate('Clocked In');
  } else {
    alert('Already clocked in.');
  }
}

// Function to start a break
function startBreak() {
  if (clockedIn && !onBreak) {
    onBreak = true;
    document.getElementById('clockStatus').innerText = 'Status: On Break';
    logScheduleUpdate('Started Break');
  } else if (!clockedIn) {
    alert('You need to clock in first.');
  } else {
    alert('Already on a break.');
  }
}

// Function to end a break
function endBreak() {
  if (onBreak) {
    onBreak = false;
    document.getElementById('clockStatus').innerText = 'Status: Clocked In';
    logScheduleUpdate('Ended Break');
  } else {
    alert('You are not on a break.');
  }
}

// Function to clock out
function clockOut() {
  if (clockedIn) {
    clockedIn = false;
    hoursWorked += 8; // Simulate a full 8-hour shift
    document.getElementById('hoursWorked').innerText = hoursWorked;
    document.getElementById('totalPay').innerText = hoursWorked * hourlyRate;
    document.getElementById('clockStatus').innerText = 'Status: Clocked Out';
    logScheduleUpdate('Clocked Out');
  } else {
    alert('You are not clocked in.');
  }
}

// Show an overlay message when a holiday is requested and denied
function requestHoliday() {
  const overlay = document.getElementById('realityOverlay');
  const message = document.getElementById('overlayMessage');
  message.innerHTML = "📆 Holiday Request Submitted...<br><br>❌ Request Denied: No staff available to cover your shift.";
  overlay.classList.add("show");

  setTimeout(() => {
    overlay.classList.remove("show");
  }, 6000);
}

// Log scheduling events into the live update section
function logScheduleUpdate(message) {
  const updateList = document.getElementById('scheduleUpdates');
  const newUpdate = document.createElement('li');
  newUpdate.textContent = `${new Date().toLocaleTimeString()} - ${message}`;
  updateList.appendChild(newUpdate);
}

// List of realistic scheduling issues
const schedulingIssues = [
  "⚠️ Short-staffed: No radiologist available today.",
  "💰 Low Pay Warning: Staff pay below NHS standards.",
  "🕒 HR Error: Consultant scheduled back-to-back for 12 hours!",
  "📍 Location Unknown: Nurse Davis not checked in.",
  "📉 Burnout Risk: 5 consecutive night shifts."
];

// Randomly display one of the scheduling issues as an overlay
function showRealityOverlay() {
  const overlay = document.getElementById('realityOverlay');
  const message = document.getElementById('overlayMessage');
  const random = schedulingIssues[Math.floor(Math.random() * schedulingIssues.length)];
  message.textContent = random;
  overlay.classList.add("show");

  setTimeout(() => {
    overlay.classList.remove("show");
  }, 6000);
}

// Show the first overlay after page loads and continue showing one every 20 seconds
window.addEventListener('DOMContentLoaded', () => {
  showRealityOverlay();
  setInterval(showRealityOverlay, 20000);
});

// Show the holiday request form
function showHolidayForm() {
  document.getElementById('holidayForm').classList.remove('hidden');
}

// Hide the holiday request form
function closeHolidayForm() {
  document.getElementById('holidayForm').classList.add('hidden');
}

// Handle the holiday request form submission
function submitHolidayRequest() {
  const start = document.getElementById('holidayStart').value;
  const end = document.getElementById('holidayEnd').value;

  if (!start || !end) {
    alert("Please select both start and end dates.");
    return;
  }

  closeHolidayForm();

  const overlay = document.getElementById('realityOverlay');
  const message = document.getElementById('overlayMessage');
  message.innerHTML = `📅 Request: ${start} to ${end}<br><br>❌ Denied: No available staff to cover your shift.`;
  overlay.classList.add("show");

  setTimeout(() => {
    overlay.classList.remove("show");
  }, 6000);
}
