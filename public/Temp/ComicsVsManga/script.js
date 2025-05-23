var currIdx = 0;
var isTurning = false;

var pages = [
    { color: '#b7d0ea', img:"https://cdn.glitch.global/9c3bdab9-2275-494f-b512-2e862631f785/final-project-coverfr.jpg?v=1746418112621", text: "Aiden, Daniel, Joel, Oscar"},
    { color: '#b7d0ea', img:"https://cdn.glitch.global/9c3bdab9-2275-494f-b512-2e862631f785/physical-sales-analysisb.jpg?v=1746327134259", text: "Rate of Physical Sales Over Time"},
    { color: '#a8ccf0', img:"https://cdn.glitch.global/9c3bdab9-2275-494f-b512-2e862631f785/physical-sales-chartb.jpg?v=1746327141232", text: "Graph of Sales" },
    { color: '#b7d0ea', img:"https://cdn.glitch.global/9c3bdab9-2275-494f-b512-2e862631f785/digital-sales-engagementb.jpg?v=1746327120893", text: "Rate of Digital Sales Over time" },
    { color: '#a8ccf0', img:"https://cdn.glitch.global/9c3bdab9-2275-494f-b512-2e862631f785/digital-sales-chartb.jpg?v=1746327102773", text: "Graph of Digital Sales"  },
    { color: '#b7d0ea', img:"https://cdn.glitch.global/9c3bdab9-2275-494f-b512-2e862631f785/popularity-sales-text.jpg?v=1746525222153", text: "Does New Content affect popularity?" },
    { color: '#a8ccf0', img:"https://cdn.glitch.global/9c3bdab9-2275-494f-b512-2e862631f785/popularity-map.png?v=1746524953315", text: "Map Of Popularity" },
    { color: '#b7d0ea', img:"https://cdn.glitch.global/9c3bdab9-2275-494f-b512-2e862631f785/popularity%20vs%20sale%20%2B%20tabel.png?v=1746448331310", text: "Does Popularity Affect Sales?"},
    { color: '#a8ccf0', img:"https://cdn.glitch.global/9c3bdab9-2275-494f-b512-2e862631f785/Manga%20vs%20Comic.png?v=1746389685985", text: "Graph of Popularity" },
    { color: '#b7d0ea', img:"https://cdn.glitch.global/9c3bdab9-2275-494f-b512-2e862631f785/one-piece-graph.jpg?v=1746410695810", text: "Sales And Popularity Of One Piece" },
    { color: '#a8ccf0', img:"https://cdn.glitch.global/9c3bdab9-2275-494f-b512-2e862631f785/spider-man-graph.jpg?v=1746410720591", text: "Sales And Popularity Of Spider-Man" },
    { color: '#b7d0ea', img:"https://cdn.glitch.global/9c3bdab9-2275-494f-b512-2e862631f785/project-blurb.jpg?v=1746411348387", text: "Conclusion/Blurb" }
];

$(".card.right").click(turnRight);
$(".card.left").click(turnLeft);


//set up page colors
if (pages[currIdx]) $(".right .card__face--front").css('background', pages[currIdx].color);
if (pages[currIdx + 1]) $(".right .card__face--back").css('background', pages[currIdx + 1].color);
if (pages[currIdx + 2]) $("#next").css('background', pages[currIdx + 2].color);


//todo: add page colors
function turnRight() {
  if (!isTurning && !(currIdx >= pages.length - 1)){
    isTurning = true;   
    $(".card.right").css("zIndex", 3);
    //$(".card.right").removeClass('righthover');
    $(".card.right").toggleClass('is-flipped');
    $("#next").removeClass('hidden');
    
    if (currIdx + 2 >= pages.length){
      $("#next").addClass('hidden');
      $(".card.right").removeClass('hidden');
    }
    
    setBackgroundColors('right');
    
    setTimeout(() => { 
      $(".card.left").removeClass('hidden');
      pageRight();
      isTurning = false;   
      if (currIdx >= pages.length){
       $("#prev").removeClass('hidden');
      }
    }, 800);
  }
  
}

function turnLeft() {
  if (!isTurning && currIdx > 0){
    isTurning = true;
    $(".card.left").css("zIndex", 3);
    //$(".card.right").removeClass('lefthover');
    $(".card.left").toggleClass('is-flipped');   
    
    if (currIdx - 2 > 0){
      $("#prev").removeClass('hidden');
    } else {
      $("#prev").addClass('hidden');
    }
    
    setBackgroundColors('left');
    
    setTimeout(() => {
      $(".card.right").removeClass('hidden');
      pageLeft();
      isTurning = false;
    }, 800);
  }
}

function pageLeft(){
  currIdx -= 2;
  //if turning to first page, hide the left page
  //after the y rotation
  if (currIdx == 0){
      $(".card.left").addClass('hidden');
  }
  
  //next page now has the content of the current right page
  $("#next .content").remove();
  let rightBackFace = $(".right .card__face--back .content"); 
  $("#next").append(rightBackFace);
  
  //right page has the content of the current left page
  $(".right .card__face--front .content").remove();
  let leftBackFace = $(".left .card__face--back .content");
  let leftFrontFace = $(".left .card__face--front .content");
  $(".right .card__face--back").append(leftBackFace);
  $('.right .card__face--back').css('background', pages[currIdx].color);
  $(".right .card__face--front").append(leftFrontFace);
  
  //left page has content of previous page
  let prevContent = $("#prev .content")
  $(".left .card__face--front .content").remove();
  $(".left .card__face--front").append(prevContent);
  $(".left .card__face--back .content").remove();
  
  //create back face to left page
  if (currIdx - 2 >= 0){
    let leftImage = createPageContent(currIdx - 2);
    $(".left .card__face--back").append(leftImage);
  }
  
  //reattach the left page
  let cardClone = $(".card.left").clone();
  cardClone[0].classList.remove('is-flipped');
  cardClone[0].classList.remove('lefthover');
  cardClone[0].style.zIndex = 0;
  if (pages[currIdx - 1])
  cardClone.find('.card__face--front').css('background', pages[currIdx - 1].color);
  
  $(".card.left").remove();
  $(".scene").append(cardClone);
  cardClone.click(turnLeft);
  
  //create the previous page
  if (currIdx - 3 >= 0){
    let prevImage = createPageContent(currIdx - 3);
    $('#prev').append(prevImage);
    $('#prev').css('background', pages[currIdx - 3].color);
  } else {
    $("#prev").addClass('hidden');
  }
  
}

function pageRight(){
  currIdx+= 2;
  //if turning to the last page, hide the right page
  if (currIdx >= pages.length){
    $(".card.right").addClass('hidden')
  }
  //previous page now has content of the current left page
  $("#prev .content").remove();
  let leftFrontFace = $(".left .card__face--front .content"); 
  $("#prev").append(leftFrontFace);
  
  //left page has content of current right page
  $(".left .card__face--back .content").remove();
  $(".left .card__face--front .content").remove();
  let rightBackFace = $(".right .card__face--back .content");
  let rightFrontFace = $(".right .card__face--front .content");
  $(".left .card__face--back").append(rightBackFace);
  $(".left .card__face--front").css('background', pages[currIdx-1].color)
  $(".left .card__face--front").append(rightFrontFace);
  
  //right page now has content of next page
  let nextContent = $("#next .content")
  $(".right .card__face--back").append(nextContent);
  
  //create the back face of the right page (change the front face bc of transformY)
  $(".right .card__face--front .content").remove();
  if (currIdx + 1 < pages.length){
    let rightImage = createPageContent(currIdx + 1);
    $(".right .card__face--front").append(rightImage);
  }
  
  //reattach the right page
  let cardClone = $(".card.right").clone();
  cardClone[0].classList.add('is-flipped');
  cardClone[0].classList.remove('righthover');
  cardClone[0].style.zIndex = 0;
  if (pages[currIdx])
  cardClone.find('.card__face--back').css('background', pages[currIdx].color);
  $(".card.right").remove();
  $(".scene").append(cardClone);
  cardClone.click(turnRight);
  
  //create the next page
  if (currIdx + 2 < pages.length){
    let nextImage = createPageContent(currIdx + 2);
    $('#next').append(nextImage);
    $('#next').css('background', pages[currIdx + 2].color);
  }
  
}

function setBackgroundColors(direction){
  //currIdx indicates the left-most
  if (direction == 'right'){
    $(".right .card__face--back").css('background', pages[currIdx].color);
    $(".right .card__face--front").css('background', pages[currIdx+1].color);
    if (pages[currIdx+2])
      $(".left .card__face--front").css('background', pages[currIdx+2].color);
    if (pages[currIdx+3])
      $("#next").css('background', pages[currIdx+3].color);
  } else if (direction == 'left'){  
    $(".left .card__face--back").css('background', pages[currIdx - 2].color);
    $(".left .card__face--front").css('background', pages[currIdx - 1].color);
    if (pages[currIdx])
      $(".right .card__face--back").css('background', pages[currIdx].color);
    if (pages[currIdx - 3])
      $('#prev').css('background', pages[currIdx - 3].color);
  }
  
}

function createPageContent(idx){
  let div = document.createElement('div');
  let img = document.createElement('img');
  let p = document.createElement('p');
  
  div.classList.add('content');
  img.src = pages[idx].img;
  p.innerText = pages[idx].text;
  div.append(p);
  div.append(img);
  return div;
}

function showInformation(){
  if ($('#information').css('display') == 'none'){
    $('#information').css('display', 'flex');
  } else {
     $('#information').css('display', 'none');
  }
}