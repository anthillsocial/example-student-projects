
// Daily Inpatients Bar Chart

// Get the canvas element for the inpatients chart
const ctxInpatients = document.getElementById('inpatientsChart').getContext('2d');

// Create a bar chart showing the number of inpatients each day
const inpatientsChart = new Chart(ctxInpatients, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Number of Inpatients',
            data: [12, 19, 15, 20, 22, 18, 24], // Fake data
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true // Y-axis starts from 0
            }
        }
    }
});


// Randomized Scan Delay Banner

const delayMessages = [
    "⚠ MRI Scanner Delayed by 45 minutes...",
    "⚠ CT Scan results taking longer than usual...",
    "⚠ X-Ray machine under maintenance, expect delays...",
    "⚠ Network issues affecting report uploads...",
    "⚠ Power fluctuation may cause system delays..."
];

// Pick and display a new delay message every 5 seconds
function updateScanDelay() {
    document.querySelector("#alertBanner p").textContent = 
        delayMessages[Math.floor(Math.random() * delayMessages.length)];
}
updateScanDelay(); // Show one immediately on load
setInterval(updateScanDelay, 5000); // Repeat every 5 seconds


// Simulate Patient Complaints


const complaints = [
    "😡 Why is my scan taking so long?",
    "💰 I was charged incorrectly!",
    "👎 Staff was unhelpful today.",
    "😷 My appointment got cancelled without notice.",
    "⌛ I have been waiting for 2 hours!"
];

// Show a random complaint popup
function showComplaint() {
    const complaintPopup = document.getElementById("complaintPopup");
    document.getElementById("complaintMessage").textContent = 
        "Patient Complaint: " + complaints[Math.floor(Math.random() * complaints.length)];
    
    complaintPopup.style.display = "block";

    // Hide it after 4 seconds
    setTimeout(() => {
        complaintPopup.style.display = "none";
    }, 4000);
}

// First complaint appears quickly, then repeats
setTimeout(showComplaint, 3000);
setInterval(showComplaint, 10000);

// Simulate System Lag Effect

function triggerSystemLag() {
    const lagScreen = document.getElementById("systemLag");
    lagScreen.style.display = "block";

    setTimeout(() => {
        lagScreen.style.display = "none";
    }, 3000); // Show lag screen for 3 seconds
}

// First system lag after 5–10 seconds, then every 30 seconds
setTimeout(triggerSystemLag, Math.random() * 5000 + 5000);
setInterval(triggerSystemLag, 30000);

// Simulate Data Corruption in Charts

// Function to corrupt a single data point in a chart
function corruptChartData(chart) {
    let corruptIndex = Math.floor(Math.random() * chart.data.datasets[0].data.length);
    chart.data.datasets[0].data[corruptIndex] = 
        Math.random() > 0.5 ? 0 : chart.data.datasets[0].data[corruptIndex] * 1.5;
    chart.update(); // Update the chart visually
}

// First corruption starts after 5 seconds
setTimeout(() => {
    corruptChartData(inpatientsChart);
    corruptChartData(bookingOverviewChart);
}, 5000);

// Keep corrupting charts every 10 seconds
setInterval(() => {
    corruptChartData(inpatientsChart);
    corruptChartData(bookingOverviewChart);
}, 10000);

// Booking Overview Pie Chart

// Create a pie chart to show booking statuses
const ctxBooking = document.getElementById('bookingOverviewChart').getContext('2d');
const bookingOverviewChart = new Chart(ctxBooking, {
    type: 'pie',
    data: {
        labels: ['Completed', 'Pending', 'Cancelled'],
        datasets: [{
            label: 'Booking Status',
            data: [60, 25, 15], // Fake data
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
function floatRandomly(id) {
  const el = document.getElementById(id);
  function move() {
    el.style.top = Math.random() * window.innerHeight + 'px';
    el.style.left = Math.random() * window.innerWidth + 'px';
  }
  setInterval(move, 3000); // move every 3 seconds
  move(); // initial
}

window.onload = () => {
  floatRandomly("float1");
  floatRandomly("float2");
};



  

