// Run this when the page finishes loading
document.addEventListener("DOMContentLoaded", () => {
  // List of report-related problems to simulate
  const reportIssues = [
    "❌ Scan viewer failed to load. Try again later.",
    "⚠️ Report uploaded without conclusion section.",
    "📤 Report sent to wrong consultant. Undo not available.",
    "🚫 Unauthorized access attempt — blocked.",
    "⏳ Waiting on radiologist review — 5 days overdue.",
    "📎 PDF does not match final report notes.",
    "📨 Patient email: 'Why does this say possible ischemia?! What is that?'",
    "📣 Consultant: 'Still no access to Jake Day’s scan — this is urgent.'",
    "🧍‍♂️ Family requesting results — but patient asked not to share.",
    "🔄 Scan linked to wrong patient ID. Check EMPI number.",
    "🕐 Only 1 radiologist covering 72 scans. Expect delays."
  ];

  // This function shows a temporary message box on the screen
  function showPopup(message, type = "default") {
    const popup = document.createElement("div");
    popup.className = `report-popup ${type}`;
    popup.textContent = message;
    document.body.appendChild(popup);
    // Remove popup after 6 seconds
    setTimeout(() => popup.remove(), 6000);
  }

  // Show each of the report issues on a timer
  let delay = 1000;
  reportIssues.forEach(msg => {
    setTimeout(() => showPopup(msg), delay);
    delay += 3000;
  });

  // Randomly add a warning message to one patient profile
  const profiles = document.querySelectorAll('.patient-profile');
  const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];
  const redFlag = document.createElement('p');
  redFlag.textContent = '⚠️ Report Missing or Conflicting Versions Detected';
  redFlag.style.color = 'red';
  redFlag.style.fontWeight = 'bold';
  randomProfile.querySelector('.report-section').appendChild(redFlag);

  // Simulate a worried message from a patient
  setTimeout(() => {
    const chatBox = document.createElement("div");
    chatBox.className = "report-popup chat-message";
    chatBox.textContent = "📱 Patient Message: 'Why does this say I have an abnormality? Am I dying?!'";
    document.body.appendChild(chatBox);
    setTimeout(() => chatBox.remove(), 7000);
  }, 6000);

  // Simulate an angry message from a consultant
  setTimeout(() => {
    const docMsg = document.createElement("div");
    docMsg.className = "report-popup chat-message";
    docMsg.style.backgroundColor = "#004d99";
    docMsg.textContent = "🧑‍⚕️ Consultant: 'Still no access to this report? This is unacceptable.'";
    document.body.appendChild(docMsg);
    setTimeout(() => docMsg.remove(), 7000);
  }, 12000);

  // Add a "Resend Report" button
  const resendBtn = document.createElement("button");
  resendBtn.textContent = "Resend Report";
  resendBtn.style.margin = "20px 0";
  resendBtn.style.padding = "10px 15px";
  resendBtn.style.backgroundColor = "#0077cc";
  resendBtn.style.color = "#fff";
  resendBtn.style.border = "none";
  resendBtn.style.cursor = "pointer";

  // Place the button on the page under the heading
  const container = document.querySelector("#mainRight");
  container.insertBefore(resendBtn, container.children[1]);

  // Show error when button is clicked (to simulate a failure)
  resendBtn.addEventListener("click", () => {
    showPopup("❌ Resend failed. Connection timeout.");
  });

  // Add a warning banner at the top of the screen
  const banner = document.createElement("div");
  banner.textContent = "⚠️ URGENT: 3 reports flagged 'critical' still unreviewed.";
  banner.style.backgroundColor = "#ff3333";
  banner.style.color = "white";
  banner.style.padding = "10px";
  banner.style.textAlign = "center";
  banner.style.fontWeight = "bold";
  banner.style.position = "fixed";
  banner.style.top = "0";
  banner.style.left = "0";
  banner.style.width = "100%";
  banner.style.zIndex = "999";
  document.body.appendChild(banner);

  // Remove the banner after 10 seconds
  setTimeout(() => banner.remove(), 10000);
});
