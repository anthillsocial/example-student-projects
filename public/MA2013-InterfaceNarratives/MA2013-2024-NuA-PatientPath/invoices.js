// SETUP PATIENT DATA
const patients = [
  "John Doe", "Jane Smith", "Michael Brown", "Emily Davis",
  "William Johnson", "Olivia Wilson", "James Taylor", "Sophia Martinez"
];

const services = ["MRI Scan", "CT Scan", "Ultrasound", "Consultant Meeting", "Blood Test"];
const statuses = ["Not Paid", "Paid", "Paid Half", "Complications"];

// Function to get a random number between two values
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// BUILD INVOICE TABLE
function populateInvoiceTable() {
  const tableBody = document.querySelector("#invoiceTable tbody");

  patients.forEach(patient => {
    const row = document.createElement("tr");

    // Name cell with tooltip
    const nameCell = document.createElement("td");
    nameCell.innerHTML = `
      <span class="tooltip">${patient}
        <span class="tooltiptext">⚠️ Escalated patient. Handle carefully.</span>
      </span>
    `;
    row.appendChild(nameCell);

    // Random service
    const service = services[getRandomNumber(0, services.length - 1)];
    const serviceCell = document.createElement("td");
    serviceCell.textContent = service;
    row.appendChild(serviceCell);

    // Random payment amount
    const amount = getRandomNumber(50, 10000);
    const amountCell = document.createElement("td");
    amountCell.textContent = `£${amount}`;
    row.appendChild(amountCell);

    // Random status
    const status = statuses[getRandomNumber(0, statuses.length - 1)];
    const statusCell = document.createElement("td");
    statusCell.textContent = status;

    // Color based on status
    statusCell.style.color =
      status === "Not Paid" ? "red" :
      status === "Paid Half" ? "orange" :
      status === "Paid" ? "green" : "blue";
    row.appendChild(statusCell);

    // Notes field (textarea)
    const notesCell = document.createElement("td");
    const notesInput = document.createElement("textarea");
    notesInput.className = "notes";
    notesCell.appendChild(notesInput);
    row.appendChild(notesCell);

    // Action buttons: Retry and Dispute
    const actionCell = document.createElement("td");
    const retryBtn = document.createElement("button");
    retryBtn.textContent = "Retry Payment";
    retryBtn.onclick = () => triggerAction("retry", patient);

    const disputeBtn = document.createElement("button");
    disputeBtn.textContent = "Dispute";
    disputeBtn.style.marginLeft = "5px";
    disputeBtn.onclick = () => triggerAction("dispute", patient);

    actionCell.appendChild(retryBtn);
    actionCell.appendChild(disputeBtn);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
  });
}

// REALITY MESSAGES
const invoiceAlerts = [
  "😡 John Doe: Why am I charged £200 for missing my appointment?!",
  "❌ Insurance Declined: Jane Smith's ultrasound not covered.",
  "⚠️ Billing Error: Michael Brown charged twice for blood test.",
  "💬 Admin Notice: Recover £10,000+ overdue or risk cuts.",
  "📢 Complaint Filed: Incorrect invoice sent to William Johnson.",
  "🔄 Discrepancy: MRI billed but CT actually performed.",
  "🛑 Insurance flagged Sophia Martinez: Claim rejected.",
  "📉 Finance Alert: Department shortfall due to unpaid scans."
];

const financeNotices = [
  "📣 Finance Office: We're £6,700 short in collections.",
  "💸 Urgent: Recover patient balances or lose grant funding.",
  "⚠️ Internal Audit: Overdue invoices flagged this morning.",
  "📝 Director Message: All scans must be paid by Friday."
];

// Show a popup message from the invoice alerts
function showInvoiceOverlay() {
  const overlay = document.getElementById('invoiceOverlay');
  const text = document.getElementById('overlayText');
  const msg = invoiceAlerts[Math.floor(Math.random() * invoiceAlerts.length)];
  text.textContent = msg;
  overlay.classList.add('show');
  setTimeout(() => overlay.classList.remove('show'), 6000);
}

// Show a notification from finance
function showInvoiceNotification() {
  const note = document.getElementById("invoiceNotification");
  const text = document.getElementById("notificationText");
  text.textContent = financeNotices[Math.floor(Math.random() * financeNotices.length)];
  note.classList.add("show");
  setTimeout(() => note.classList.remove("show"), 7000);
}

// BUTTON ACTIONS 
function triggerAction(type, patientName) {
  const overlay = document.getElementById('invoiceOverlay');
  const text = document.getElementById('overlayText');

  if (type === "retry") {
    const messages = [
      `💳 Retry Failed: Payment system timed out for ${patientName}.`,
      `✅ Payment Reprocessed for ${patientName}. Awaiting confirmation.`,
      `❌ Card declined for ${patientName}.`,
    ];
    text.textContent = messages[Math.floor(Math.random() * messages.length)];
  } else if (type === "dispute") {
    const messages = [
      `📩 Dispute filed for ${patientName}. Review pending.`,
      `⚠️ Cannot dispute: No documentation from ${patientName}.`,
      `⏳ Dispute in progress for ${patientName}. Expected resolution: 5 days.`,
    ];
    text.textContent = messages[Math.floor(Math.random() * messages.length)];
  }

  overlay.classList.add("show");
  setTimeout(() => overlay.classList.remove("show"), 6000);
}

// RUN FUNCTIONS WHEN PAGE LOADS
document.addEventListener("DOMContentLoaded", () => {
  populateInvoiceTable(); // Fill the invoice table
  setInterval(showInvoiceOverlay, 7000); // Show reality popups
  setInterval(showInvoiceNotification, 12000); // Show finance notices
});

// PATIENT TRANSCRIPT SIMULATION 
document.addEventListener("DOMContentLoaded", () => {
  const transcript = [
    "📞 Transcript — Call #3021",
    "🧑‍🦰 Patient: \"£480?! You people are ridiculous!\"",
    "👩‍💼 Admin: \"This is the charge for the missed MRI scan, sir.\"",
    "🧑‍🦰 Patient: \"No one told me it would cost that much!\"",
    "👩‍💼 Admin: \"It’s in the signed intake form. Would you like to dispute it?\""
  ];

  const overlay = document.getElementById("transcriptOverlay");
  const box = document.getElementById("transcriptBox");

  // Show the transcript after 4 seconds
  setTimeout(() => {
    overlay.classList.remove("hidden");
    transcript.forEach((line, i) => {
      setTimeout(() => {
        const p = document.createElement("p");
        p.textContent = line;
        box.appendChild(p);
      }, i * 1500);
    });

    // Hide the transcript popup after it finishes
    setTimeout(() => {
      overlay.classList.add("hidden");
      box.innerHTML = "";
    }, transcript.length * 1500 + 1500);
  }, 4000);
});
