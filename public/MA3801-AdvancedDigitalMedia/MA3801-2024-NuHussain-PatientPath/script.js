// This function adds the header content to the webpage
function printHeader() {
    let text = `
    <h1><a href="index.html">Patient Path</a></h1>
    `;
    // Finds the element with ID "header" and inserts the header text into it
    document.getElementById('header').innerHTML = text;
}

// This function adds the footer content to the webpage
function printFooter() {
    let text = `
    <p>&copy; Patient Path - Your Hospital Imaging Solution</p>
    `;
    // Finds the element with ID "myfooter" and inserts the footer text into it
    document.getElementById('myfooter').innerHTML = text;
}

// This runs once the page has fully loaded
// It automatically adds the header and footer to the page
document.addEventListener('DOMContentLoaded', () => {
    printHeader();
    printFooter();
});

