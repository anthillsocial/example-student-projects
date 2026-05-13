// data for the bar chart
const data = {
  2022: 12.61,
  2021: 11.52,
  2020: 11.11,
  2019: 10.77,
  2018: 10.23,
  2017: 9.54,
  2016: 9.3,
  2015: 8.88,
  2014: 8.4,
  2013: 7.76,
  2012: 7.1,
  2011: 6.52,
  2010: 5.86,
  2009: 5.43,
  2008: 5.31,
  2007: 5.02,
  2006: 4.76,
  2005: 4.57,
  2004: 4.39,
  2003: 4.24,
  2002: 4.14,
  2001: 4.12,
  2000: 3.91,
};

//data for the pie chart
const data2 = {
  Female: 11.0, //for females
  Male: 9.9, //for women
};

// array of the slices - the label for the charts
const continents = Object.keys(data);

const labels = Object.keys(data2);

const populations = [];
continents.forEach((continent) => {
  populations.push(data[continent]);
});

const populations2 = [];
labels.forEach((label) => {
  populations2.push(data2[label]); //shows the labels 
});

const bar = document.getElementById("barChart").getContext("2d");
const barChart = new Chart(bar, {
  type: "bar", // make it a bar chart
  data: {
    labels: continents, // use the array of continents as labels
    datasets: [
      {
        label: "Prices of Cigarettes (in pounds)",
        data: populations, // use the array of populations to draw bars
        backgroundColor: "rgba(252,182,119,1.000)", // make the bars translucent red
        borderColor: "rgba(0,0,0,1.000)", // make the borders of the bars opaque red
        borderWidth: 1, // set the border width to 1 pixel
      },
    ],
  },
  options: {
    // Set x and y axis labels
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true, //to see if its up
            labelString: "Price (in pounds)", //to show the prices
          },
          ticks: {
            beginAtZero: true, //so the code starts at 0
          },
        },
      ],
      xAxes: [
        {
          //starting at tge X axes
          scaleLabel: {
            display: true,
            labelString: "Years (2000-2022)", //where the years are starting and how they end
          },
        },
      ],
    },
  },
});

const pie = document.getElementById("pieChart").getContext("2d");
const pieChart = new Chart(pie, {
  type: "pie", // make it a pie chart
  data: {
    labels: labels, // use the array of continents to label each
    datasets: [
      {
        text: "Prices of Cigarettes (in pounds)", //for the prices of cigrettes
        data: populations2, // draws pie slices

        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)", //coulr of the bar chart.
        ],

        borderColor: [
          "rgba(0,0,0,1.000)", //colur of boarder
          "rgba(0,0,0,1.000)",
        ],

        borderWidth: 1, // setting border width to 1 frame
      },
    ],
  },
});

// Get the range slider element
var rangeSlider = document.getElementById("rangeSlider");

// to show the price
var priceElement = document.getElementById("price");

const prices = [
  "0",
  "26.60",
  "47.88",
  "79.80",
  "106.40",
  "133.00",
  "159.60",
  "186.20",
  "212.80",
  "239.40",
  "266.00",
]; //showing the prices of how much u can save

const array = [1.234, 5.6789, 0.1, 2.345]; // you can move it and see change each time, due to the constant array verible
const twoDecimalArray = array.map((num) => +num.toFixed(2));
console.log(twoDecimalArray);

//the price based on the slider value
function updatePrice(value) {
  //upades the prices each slide
  return prices[value]; //as the slider increases so does the prices
}

//makes 0 defult price
priceElement.innerHTML = updatePrice(rangeSlider.value);

//X-axis moves when the slider is used
rangeSlider.oninput = function () {
  priceElement.innerHTML = updatePrice(this.value);
};

// DOUGHNUT CHART DATASET
const xValues = [
  "Upper Respiratory Sites",
  "Trachea, Lung, Bronchus",
  "Pancreas",
  "Kidney and Renal Pelvis",//names of the disease
];
//the numerical values for each of the 4 diseases
const yValues = [61, 78, 21, 22];
//gives the colours for the doughnut chart
const barColors = [
  "#ab0046", //Upper Respiratory Sites
  "#fea8ff", //Trachea, Lung, Bronchus
  "#fafa00", //Pancreas
  "#3d1c00", //Kidney and Renal Pelvis
];

// references the myChart index from HTML
// This code is similar to the pie chart, except is creating a doughnut not a pie, hence why the type is doughnut.
new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues, //references the numerical values for the xValues
    datasets: [
      {
        backgroundColor: barColors, //references the barColors for the doughnut chart
        data: yValues, //references the numerical yValues above
      },
    ],
  },
  options: {
    title: {
      display: true, //makes sure the title is displayed - if set false, it won't
      text: "Smoking diseases doughnut chart", // Title of the doughnut chart
    },
  },
});

// Data for the line graph
var lineData = {
  labels: [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
  ], // Years
  datasets: [
    {
      label: "Number of Deaths",//title
      data: [
        78600, 78700, 78200, 78200, 77800, 79100, 77900, 77800, 77000, 74600,
      ], // Values
      fill: false,
      borderColor: "rgba(152, 36, 148, 1)", // Set the color for the line itself
      borderWidth: 2,//the width of the boarder
      pointBackgroundColor: "rgba(255, 255, 255, 1)", // Set the color for the data points (circles of the data)
      pointRadius: 4,//the raius of the hovering
      pointHoverRadius: 23,//you can hover your mouse and data shows. Shows the size
    },
  ],
};

// Configuration for the line graph
var lineConfig = {
  type: "line",
  data: lineData, //to set it as a line graph
  options: {
    title: {
      // display number of deaths
      display: true,
      text: "Number of Deaths", // Title of the graph
      fontSize: 20, //size of text (same comment applys for the Year and Number of Deaths text)
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true, //means it is true you want text to appear on dataset
            labelString: "Year", // Label for x-axis
            fontSize: 16, //showing size of text
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Number of Deaths", // Label for y-axis
            fontSize: 16, //showing font
          },
          ticks: {
            beginAtZero: false, //so data doesnt start at 0
            max: 80000, //setting the hight of graph
            min: 75000, //setting the highest point of the graph
            stepSize: 1000, //going up in 1000s
            callback: function (value, index, values) {
              return value / 1; // Convert y-axis values to thousands (or set it to actual value on max and min code)
            },
          },
        },
      ],
    },
    elements: {
      line: {
        tension: 0, //Sets the graph to be straight line. If this code is removed, the graph will be curved instead.
      },
    },
  },
};

// Create the line graph
var ctx = document.getElementById("myLineChart").getContext("2d");
var myLineChart = new Chart(ctx, lineConfig);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n)); //The slideIndex variable is a marker for which picture is currently being shown 
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// showing slides for the slideshow
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); //to set up the code for the picture sldies
  let dots = document.getElementsByClassName("dot"); // get data from class 'dot'
  if (n > slides.length) {
    slideIndex = 1;
  } // lenth of slider
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    // if slider is at 0 show the value as none
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); //showing the dots at the bottom
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
