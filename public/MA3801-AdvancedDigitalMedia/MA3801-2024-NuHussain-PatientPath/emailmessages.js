// Display selected email content
function viewEmail(subject, body) {
  // Update the email viewer with the selected subject and body
  document.getElementById('emailSubject').textContent = subject;
  document.getElementById('emailBody').textContent = body;

  // Show a warning reality if the email subject contains "update"
  if (subject.toLowerCase().includes("update")) {
    showReality("🕐 This email was viewed 4 days late.");
  }
}

// Compose and add a new email
function composeEmail() {
  // Ask the user for subject and body text
  const subject = prompt('Enter the email subject:');
  const body = prompt('Enter the email body:');

  // If both fields are filled, add the new email
  if (subject && body) {
    alert(`Email composed successfully!\nSubject: ${subject}\nBody: ${body}`);

    // Add new email as a button in the email list
    const emailList = document.getElementById('emailList').querySelector('ul');
    const newEmail = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = subject;

    // When clicked, the email appears in the viewer
    button.onclick = () => viewEmail(`Subject: ${subject}`, body);
    newEmail.appendChild(button);
    emailList.appendChild(newEmail);
  } else {
    alert('Email subject and body are required!');
  }
}

// Send a message in the message section
function sendMessage() {
  const input = document.getElementById('messageInput');
  const list = document.getElementById('messageList').querySelector('ul');
  const msg = input.value.trim(); // remove extra spaces

  if (msg) {
    // Add the new message to the message list
    const li = document.createElement('li');
    li.innerHTML = `<strong>You:</strong> ${msg}`;
    list.appendChild(li);
    input.value = '';

    // Randomly show a patient/staff communication issue
    const patientRealities = [
      "🚨 Escalated patient message — URGENT tone detected.",
      "❓ Patient question unclear — missing scan details.",
      "⛔ Message replied to wrong thread — not relevant.",
      "📎 Missing attachment — CT scan not included.",
      "📭 Patient followed up 4 times — no reply in thread.",
      "🧠 Consultant thread inactive for 72hrs.",
      "⚠️ Conflicting replies: Radiologist said 'urgent', consultant marked 'routine'."
    ];
    
    // Only show a reality message ~70% of the time
    if (Math.random() < 0.7) {
      showReality(patientRealities[Math.floor(Math.random() * patientRealities.length)]);
    }
  } else {
    alert('Please enter a message before sending.');
  }
}

// Create a warning popup message
function showReality(text) {
  const warn = document.createElement("div");
  warn.className = "msg-warning";
  warn.textContent = text;

  // Add the warning to the communication area
  document.getElementById("commWarnings").appendChild(warn);

  // Remove the warning after 7 seconds
  setTimeout(() => warn.remove(), 7000);
}
// Show system issues when the page loads
window.onload = () => {
  const commLog = [
    "🔁 Message to 'Dr. Allen' sent twice with no acknowledgment.",
    "🚨 Internal message sent to patient by mistake.",
    "⏱ Nurse group ignored flagged message for 8 hours.",
    "📢 Consultant replied to wrong thread — confusion escalated."
  ];

  // Display each message one at a time
  commLog.forEach((msg, i) => {
    setTimeout(() => showReality(msg), i * 2500 + 1500);
  });
}
