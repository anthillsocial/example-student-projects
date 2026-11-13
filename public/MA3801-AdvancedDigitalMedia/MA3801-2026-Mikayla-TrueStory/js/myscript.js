/*jslint vars: true, vars: define, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $, JSLINT, brackets, alert, document, TweenMax, Linear, ScrollMagic, jQuery, window, scrolldelay, clearTimeout, setTimeout */
// define images
var scrollAmount = document.body['clientHeight'];
var windowAmount = $(window).height()
var fromTopPx1 = (windowAmount * 7);
var fromTopPx2 = (windowAmount * 6);
var fromTopPx3 = (windowAmount * 5);
var fromTopPx4 = (windowAmount * 4);
var fromTopPx5 = (windowAmount * 3);
var fromTopPx6 = (windowAmount * 2);
var fromTopPx7 = (windowAmount);


$(document).ready(function() {
    if ($("#splashscreen").is(":visible")) {
        jQuery('html').removeClass('one');
    }
});

/*BackgroundChange*/

$(document).ready(function() {
    jQuery(window).scroll(function(){
        var scrolledFromtop = jQuery(window).scrollTop();
        if ((scrolledFromtop >= fromTopPx7) && (scrolledFromtop < fromTopPx6)) {
            jQuery('html').addClass('seven');
        }else{
            jQuery('html').removeClass('seven');
        }
    });
});

$(document).ready(function() {
    jQuery(window).scroll(function(){
        var scrolledFromtop = jQuery(window).scrollTop();
        if ((scrolledFromtop > fromTopPx6) && (scrolledFromtop < fromTopPx5)) {
            jQuery('html').addClass('six');
        }else{
            jQuery('html').removeClass('six');
        }
    });
});

$(document).ready(function() {
    jQuery(window).scroll(function(){
        var scrolledFromtop = jQuery(window).scrollTop();
        if ((scrolledFromtop > fromTopPx5) && (scrolledFromtop < fromTopPx4)) {
            jQuery('html').addClass('five');
        }else{
            jQuery('html').removeClass('five');
        }
    });
});

$(document).ready(function() {
    jQuery(window).scroll(function(){
        var scrolledFromtop = jQuery(window).scrollTop();
        if ((scrolledFromtop > fromTopPx4) && (scrolledFromtop < fromTopPx3)) {
            jQuery('html').addClass('four');
        }else{
            jQuery('html').removeClass('four');
        }
    });
});

$(document).ready(function() {
    jQuery(window).scroll(function(){
        var scrolledFromtop = jQuery(window).scrollTop();
        if ((scrolledFromtop > fromTopPx3) && (scrolledFromtop < fromTopPx2)) {
            jQuery('html').addClass('three');
        }else{
            jQuery('html').removeClass('three');
        }
    });
});

$(document).ready(function() {
    jQuery(window).scroll(function(){
        var scrolledFromtop = jQuery(window).scrollTop();
        if ((scrolledFromtop > fromTopPx2) && (scrolledFromtop < fromTopPx1)) {
            jQuery('html').addClass('two');
        }else{
            jQuery('html').removeClass('two');
        }
    });
});

$(document).ready(function() {
    jQuery(window).scroll(function(){
        var scrolledFromtop = jQuery(window).scrollTop();
        if(scrolledFromtop > fromTopPx1){
            jQuery('html').addClass('one');
        }else{
            jQuery('html').removeClass('one');
        }
    });
});

function scrolljump()
{
    $('a[href^="#"]').on('click', function(event) {

        var target = $(this.getAttribute('href'));

        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 2500);
        }

    });
}

scrolljump();

function clicked()
{
    $("#new-btn").click(function () {
        $(document.body).on('disappear', '.animatedParent', function(e, $affected) {
            if(!$(this).hasClass('animateOnce')){
                $(this).find('.animated').removeClass('go');
            }
        });
    });
}

clicked();

function splash()
{
    
    $('#splashscroll').click(function () {
        $(this).parent('#splashscreen').fadeOut(500);
        $("html, body").animate({"scrollTop":scrollAmount},10);       
          
    });
}

splash();

function fixednav()
{
    $('#stories-fixed').show();
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll <= 200) {
            $('#stories-fixed').hide();
        } else {
            $('#stories-fixed').show();
        }
    });
}

fixednav();


document.getElementById('typebtn').addEventListener('click',function(event){
  // array with texts to type in typewriter
  var dataText = [ "In the winter of 2016, nearly one thousand horses stood malnourished and freezing in an overcrowded wild horse sanctuary in South Dakota.", "Spearheaded by an online community of thousands, the largest equine rescue mission in the history of the United States was implemented with urgency.", "907 horses were rescued and transported across the country.", "Explore and share the story of 'The Hallelujah Horses' below."];
  var posts = ["first", "second", "third", "fourth"];
  var c = 0;
  var x = "";
  
   function displaypost() {
    if (c < posts.length) {
        x = posts[c++];
    }
    document.getElementById(x).style.display = "block";
    }   
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
      displaypost();
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
        
    }
  }
  // start the text animation
  setTimeout(function() {
      StartTextAnimation(0)
  }, 5000);
    
});


function show(id) {
    document.getElementById(id).style.display = "block";
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

function showtimeline() {
    var x = document.getElementById("timeline");
    var y = document.getElementById("about");
    var z = document.getElementById("photos");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        x.style.display = "none";
    }
    
    document.getElementById('timelinebutton').style.borderBottom = "3px solid #6c9099";
    document.getElementById('aboutbutton').style.borderBottom = "none";
    document.getElementById('photosbutton').style.borderBottom = "none";
}

function showabout() {
    var y = document.getElementById("timeline");
    var x = document.getElementById("about");
    var z = document.getElementById("photos");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none"; 
        
    } else {
        x.style.display = "none";
    }
    
    document.getElementById('aboutbutton').style.borderBottom = "3px solid #6c9099";
    document.getElementById('photosbutton').style.borderBottom = "none";
    document.getElementById('timelinebutton').style.borderBottom = "none";
}

function showphotos() {
    var y = document.getElementById("timeline");
    var z = document.getElementById("about");
    var x = document.getElementById("photos");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";  
    } else {
         x.style.display = "none";
    }
    
    document.getElementById('photosbutton').style.borderBottom = "3px solid #6c9099";
    document.getElementById('aboutbutton').style.borderBottom = "none";
    document.getElementById('timelinebutton').style.borderBottom = "none";
}


