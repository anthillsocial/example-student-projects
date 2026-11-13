  // This script page exists to run all script commands. This contains all the chart types such as
  // bar charts, dual bar, pie charts, etc. The data gets written here and then data.html runs a script
  // to fetch all the scripts from this page. This is also a great way of keeping our project and especially
  // the main data.html file clean, organised and modular. Easy to also locate and bugtest any code that might
  // not work individually when its seperated -   editor note (Ishmaam) //

// Dual Bar Chart Script
new Chart(document.getElementById('dualBarChart'), { //This essentially creates a new id tag for each chart types - allows for multiple different charts in the same page 
  type: 'bar',
  data: {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'], //Data Labels
    datasets: [
      {
        label: 'Indie Comics',
        data: [150, 180, 240, 290, 320, 350], //Data shown in sales (millions USD)
        backgroundColor: 'rgba(75, 192, 192, 0.7)'
      },
      {
        label: 'Mainstream Comics',
        data: [500, 480, 510, 495, 520, 530],
        backgroundColor: 'rgba(255, 99, 132, 0.7)'
      }
    ]
  },
  options: {
    responsive: true, //Enables interactivity - hover over bar chart for the data
    scales: {
      y: { beginAtZero: true } //Y Axis starts from 0 regardless of value
    }
  }
});

// Pie Chart Script
new Chart(document.getElementById('pieChart'), { //Pie Chart id tag
  type: 'pie',
  data: {
    labels: ['Superhero', 'Manga', 'Indie'], //Genre tags, superheroes being the most dominant genre in comics, manga being localised from Japan and then indie which covers different sub-genres
    datasets: [{
      data: [45, 30, 25],
      backgroundColor: ['#f87171', '#60a5fa', '#34d399']
    }]
  }
});

// Line Chart Script
new Chart(document.getElementById('lineChart'), { //Line Chart id 
  type: 'line',
  data: {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'Indie Comics Growth',
      data: [50, 60, 70, 90, 120, 180, 240, 290, 320, 350],
      borderColor: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      fill: true //allows the portion under the line in the line chart to be filled with colour. Aesthetic choice.
    }]
  },
  options: {
    responsive: true, //Interactive 
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Radar Chart Script
new Chart(document.getElementById('radarChart'), { //Unique id tag for Radar Chart
  type: 'radar',
  data: {
    labels: ['Sci-fi', 'Fantasy', 'Drama', 'Horror', 'Slice of Life'], //Subgenres within Indie Comics
    datasets: [{
      label: 'Indie Genre Reach',
      data: [70, 85, 65, 50, 60],
      backgroundColor: 'rgba(99, 102, 241, 0.2)',
      borderColor: '#6366f1'
    }]
  }
});

// Highcharts Map - Continental Sales.
Highcharts.mapChart('mapContainer', {
  chart: {
    map: 'custom/world-continents' //Script from Highcharts library
  },
  title: { text: 'Indie vs Mainstream Sales by Continent' },
  colorAxis: {
    dataClasses: [{
      from: 0,
      to: 200,
      color: '#fca5a5',
      name: 'Low'
    }, {
      from: 201,
      to: 400,
      color: '#fdba74',
      name: 'Medium'
    }, {
      from: 401,
      color: '#86efac',
      name: 'High'
    }]
  },
  series: [{
    name: 'Sales',
    data: [
      ['af', 200],  // Africa
      ['as', 500],  // Asia
      ['eu', 450],  // Europe
      ['na', 600],  // North America
      ['oc', 300],  // Oceania
      ['sa', 320]   // South America
    ],
    joinBy: ['hc-key', 'code'],
    states: {
      hover: {
        color: '#0ea5e9'
      }
    },
    tooltip: {
      pointFormat: '{point.name}: <b>{point.value}k comics</b>'
    }
  }]
});

  // I have tried to code the Highcharts map to show a global reach of Indie comics vs mainstream publishers but for some reason the map
  // would just not show up on the website. I have tried debugging this error a few times and there was no success. I also tried running this
  //script on data.html to see if that would make any difference and it did not. I think going forward it will definitely be a priority for me
  // to playtest this code more and see what the error was. My plan was to show a continent scale reach and then show a more local reach like the UK
  // - Editors Note (Ishmaam)//