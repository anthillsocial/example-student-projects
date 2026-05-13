// HELPER FUNCTIONS TO GENERATE RANDOM DATA

// This function gives a single random number between a min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// This function creates an array of random numbers
function generateRandomData(length, min, max) {
  return Array.from({ length }, () => getRandomNumber(min, max));
}

// CHART 1: MISSED APPOINTMENTS 
// Bar chart showing how many appointments were missed either from no-shows or tech issues
const missedAppointmentsCtx = document.getElementById('missedAppointmentsChart').getContext('2d');
new Chart(missedAppointmentsCtx, {
  type: 'bar',
  data: {
    labels: ['MRI', 'CT Scan', 'Ultrasound', 'X-Ray', 'Mammogram'],
    datasets: [
      {
        label: 'Missed Due to No Show',
        data: generateRandomData(5, 5, 30),
        backgroundColor: 'rgba(255, 99, 132, 0.7)'
      },
      {
        label: 'Missed Due to Technical Issues',
        data: generateRandomData(5, 1, 10),
        backgroundColor: 'rgba(54, 162, 235, 0.7)'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: { enabled: true },
      legend: { position: 'top' }
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true, beginAtZero: true }
    }
  }
});

// CHART 2: PATIENT FEEDBACK 
// Radar chart showing positive and negative patient feedback across categories
const patientFeedbackCtx = document.getElementById('patientFeedbackRadarChart').getContext('2d');
new Chart(patientFeedbackCtx, {
  type: 'radar',
  data: {
    labels: ['Ease of Booking', 'Staff Friendliness', 'Facility Cleanliness', 'Wait Times', 'Overall Experience'],
    datasets: [
      {
        label: 'Positive Feedback',
        data: generateRandomData(5, 70, 100),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Negative Feedback',
        data: generateRandomData(5, 0, 30),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: { enabled: true },
      legend: { position: 'top' }
    }
  }
});

// CHART 3: WAITING TIMES BY IMAGING
// Bubble chart showing wait times and scan volume for different types
const waitingTimesCtx = document.getElementById('waitingTimesBubbleChart').getContext('2d');
new Chart(waitingTimesCtx, {
  type: 'bubble',
  data: {
    datasets: [
      {
        label: 'MRI',
        data: [{ x: 1, y: getRandomNumber(20, 60), r: getRandomNumber(5, 15) }],
        backgroundColor: 'rgba(255, 99, 132, 0.7)'
      },
      {
        label: 'CT Scan',
        data: [{ x: 2, y: getRandomNumber(20, 60), r: getRandomNumber(5, 15) }],
        backgroundColor: 'rgba(54, 162, 235, 0.7)'
      },
      {
        label: 'Ultrasound',
        data: [{ x: 3, y: getRandomNumber(10, 40), r: getRandomNumber(3, 10) }],
        backgroundColor: 'rgba(75, 192, 192, 0.7)'
      },
      {
        label: 'X-Ray',
        data: [{ x: 4, y: getRandomNumber(5, 25), r: getRandomNumber(2, 8) }],
        backgroundColor: 'rgba(153, 102, 255, 0.7)'
      },
      {
        label: 'Mammogram',
        data: [{ x: 5, y: getRandomNumber(5, 25), r: getRandomNumber(2, 8) }],
        backgroundColor: 'rgba(255, 206, 86, 0.7)'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw.y} mins`;
          }
        }
      }
    },
    scales: {
      x: { title: { display: true, text: 'Imaging Type' } },
      y: { title: { display: true, text: 'Waiting Time (Minutes)' } }
    }
  }
});

// CHART 4: IMAGING PERFORMANCE
// Bubble chart used like a heatmap to show scan performance per day
const performanceHeatmapCtx = document.getElementById('performanceHeatmapChart').getContext('2d');
new Chart(performanceHeatmapCtx, {
  type: 'bubble',
  data: {
    datasets: [
      { label: 'Monday', data: [{ x: 1, y: getRandomNumber(5, 15), r: getRandomNumber(10, 20) }], backgroundColor: 'rgba(255, 99, 132, 0.7)' },
      { label: 'Tuesday', data: [{ x: 2, y: getRandomNumber(10, 20), r: getRandomNumber(15, 25) }], backgroundColor: 'rgba(54, 162, 235, 0.7)' },
      { label: 'Wednesday', data: [{ x: 3, y: getRandomNumber(7, 17), r: getRandomNumber(12, 22) }], backgroundColor: 'rgba(75, 192, 192, 0.7)' },
      { label: 'Thursday', data: [{ x: 4, y: getRandomNumber(8, 18), r: getRandomNumber(13, 23) }], backgroundColor: 'rgba(153, 102, 255, 0.7)' },
      { label: 'Friday', data: [{ x: 5, y: getRandomNumber(12, 25), r: getRandomNumber(20, 30) }], backgroundColor: 'rgba(255, 206, 86, 0.7)' }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw.y} scans`;
          }
        }
      }
    },
    scales: {
      x: { title: { display: true, text: 'Day of the Week' } },
      y: { title: { display: true, text: 'Performance Metrics (Scans Completed)' } }
    }
  }
});

// REALITY ALERTS
// Popups to simulate system/data problems
function showDataAlert(message) {
  const alert = document.createElement("div");
  alert.className = "data-log-style";
  alert.textContent = message;
  document.body.appendChild(alert);
  setTimeout(() => alert.remove(), 5000);
}

// OVERLAY TO SIMULATE A DISRUPTED DATA FEED 
function glitchCanvasTemporarily(chartId, reason) {
  const canvas = document.getElementById(chartId);
  const overlay = document.createElement("div");
  overlay.className = "glitch-overlay";
  overlay.innerHTML = `<p>${reason}</p>`;
  canvas.parentNode.appendChild(overlay);
  setTimeout(() => overlay.remove(), 5000);
}

// GLITCH ANIMATION ON CHARTS 
function flashGlitch(chartId) {
  const canvas = document.getElementById(chartId);
  canvas.classList.add("glitch-effect");
  setTimeout(() => canvas.classList.remove("glitch-effect"), 3000);
}

// STARTING POINT: Trigger All Effects on Load
window.onload = () => {
  setTimeout(() => showDataAlert("📉 Anomaly: MRI wait times dropped by 50% overnight."), 1000);
  setTimeout(() => showDataAlert("🕳 Missing data: No submissions for patients aged 75+."), 3000);
  setTimeout(() => showDataAlert("🟡 Feedback system shows only 5-star ratings. Suspicious."), 5000);
  setTimeout(() => showDataAlert("🛑 API connection to external CT scanner failed."), 7000);

  // Show chart glitch overlay
  setTimeout(() => glitchCanvasTemporarily("performanceHeatmapChart", "❌ Feed Disconnected"), 9000);

  // Add rating warning message
  const perfSection = document.querySelector("section:last-child");
  const stats = document.createElement("div");
  stats.className = "ratings-warning";
  stats.innerHTML = "<strong>⚠️ 97% of patients gave 5 stars — Check authenticity of feedback source.</strong>";
  perfSection.appendChild(stats);

  // Make all charts flash briefly
  ["missedAppointmentsChart", "patientFeedbackRadarChart", "waitingTimesBubbleChart"].forEach((id, i) => {
    setTimeout(() => flashGlitch(id), 4000 + i * 2000);
  });
};

// FAKE EXPORT & COMPARISON BUTTONS

// Export button
const downloadBtn = document.createElement("button");
downloadBtn.textContent = "📥 Export Analytics Data (CSV)";
downloadBtn.style.cssText = "margin:20px; padding:10px 15px; background:#004d99; color:#fff; border:none; font-weight:bold;";
document.querySelector("#mainRight").prepend(downloadBtn);
downloadBtn.addEventListener("click", () => {
  showDataAlert("❌ Export Failed: Data lock or permission denied.");
});

// Compare with external system button
const compareBtn = document.createElement("button");
compareBtn.textContent = "🔍 Compare With External System";
compareBtn.style.cssText = "margin:20px 0; padding:10px 15px; background:#6a1b9a; color:#fff; border:none; font-weight:bold;";
document.querySelector("#mainRight").prepend(compareBtn);
compareBtn.addEventListener("click", () => {
  showDataAlert("⚠️ External source mismatch: MRI No-shows reported 3x higher.");
});

// AUTO-UPDATE DATA TO LOOK DYNAMIC 
function mutateChartData() {
  const charts = Chart.instances;
  for (const chart of Object.values(charts)) {
    if (!chart.data || !chart.data.datasets) continue;

    chart.data.datasets.forEach(ds => {
      if (Array.isArray(ds.data)) {
        ds.data = ds.data.map(d => typeof d === "number" ? d + getRandomNumber(-3, 3) : d);
      } else if (typeof ds.data === "object") {
        ds.data = ds.data.map(point => ({ ...point, y: point.y + getRandomNumber(-3, 3) }));
      }
    });
    chart.update();
  }
}
setInterval(mutateChartData, 8000); // Refresh chart data every 8 seconds

// AUDIT MODE 
const banner = document.createElement('div');
banner.textContent = '🚨 AUDIT MODE ENABLED: Data under investigation.';
banner.style.cssText = "position:fixed; top:0; width:100%; background:red; color:white; text-align:center; padding:10px; font-weight:bold; font-size:18px; z-index:1000;";
document.body.appendChild(banner);

