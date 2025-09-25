//sound

//https://stackoverflow.com/questions/27412725/how-to-play-a-sound-at-random-time-in-javascript

let buzz = new Audio('sounds/phoneVibrateSFX_1.wav');
let ding = new Audio('sounds/phoneDingSFX.mp3');
ding.volume = 0.1;
let isMuted = false;
// setInterval(function () {
//     buzz.play();
// }, Math.random() * 5000);

(function loop() {
    // if(muteNoti === false){
        let rand = Math.round(Math.random() * (8000)) + 1000; // A random value between 3 and 500 seconds --> the 10000 is the max number, since Math.random() starts at 0, the +1000 is to make it start a second later?

        setTimeout(function() {
                buzz.play(); // Play the audio
                loop(); // Call the loop function again
        }, rand);
    // }
}());

(function loop2() {
    // if(muteNoti === false){
        let rand = Math.round(Math.random() * (8000)) + 1000; // A random value between 3 and 500 seconds --> the 10000 is the max number, since Math.random() starts at 0, the +1000 is to make it start a second later?

        let timeout2 = setTimeout(function() {
            ding.play(); // Play the audio
            if(!isMuted){
                showNotification();
            }
            loop2(); // Call the loop function again
        }, rand);
    // }
}());

// function showNotification(){
//     let phoneOutline = document.getElementById("phone-outline");
//     let notiDiv = document.createElement("div")
//     notiDiv.setAttribute("id", "noti")
//     notiDiv.innerHTML = '<div style="width: 40px; height: 40px; border-radius: 10px; background-color: red; transform: translate(5px, 0);"></div><div class="noti-textbox"><h4 class="noti-heading">Title/name</h4><p class="noti-text">lorem ipsum blah nlah</p></div>'
//     phoneOutline.append(notiDiv)
//     setTimeout(function(){phoneOutline.removeChild(notiDiv)}, 3000) //if I set this at 3000 or higher, the divs start to generate in the same place, fixed this by changing position to absolute in css, this is like how notifications work in real life (i.e. overlapping each other).
// }

function showNotification(){
    let phoneOutline = document.getElementById("phone-outline");
    
    let notiDiv1 = document.createElement("div");
    notiDiv1.setAttribute("id", "noti");
    notiDiv1.setAttribute("onclick", "iApp3()");
    notiDiv1.innerHTML = '<div style="width: 40px; height: 40px; border-radius: 10px; background-color: red; transform: translate(5px, 0);"><img style="width: 40px; height: 40px; border-radius: 10px;" src="app-icons/phone.png"></div><div class="noti-textbox"><h4 class="noti-heading">Jonathan</h4><p class="noti-text">You have 3 missed calls</p></div>';

    let notiDiv2 = document.createElement("div");
    notiDiv2.setAttribute("id", "noti");
    notiDiv2.setAttribute("onclick", "app9()");
    notiDiv2.innerHTML = '<div style="width: 40px; height: 40px; border-radius: 10px; background-color: navy; transform: translate(5px, 0);"><img style="width: 40px; height: 40px; border-radius: 10px;" src="app-icons/scrolly.png"></div><div class="noti-textbox"><h4 class="noti-heading">Scrolly</h4><p class="noti-text">Look at some more posts!</p></div>';

    let notiDiv3 = document.createElement("div");
    notiDiv3.setAttribute("id", "noti");
    notiDiv3.setAttribute("onclick", "app6()");
    notiDiv3.innerHTML = '<div style="width: 40px; height: 40px; border-radius: 10px; background-color: purple; transform: translate(5px, 0);"><img style="width: 40px; height: 40px; border-radius: 10px;" src="app-icons/likey.png"></div><div class="noti-textbox"><h4 class="noti-heading">Likey</h4><p class="noti-text">More pictures to like!</p></div>'

    let notiDiv4 = document.createElement("div");
    notiDiv4.setAttribute("id", "noti");
    notiDiv4.setAttribute("onclick", "app8()");
    notiDiv4.innerHTML = '<div style="width: 40px; height: 40px; border-radius: 10px; background-color: white; transform: translate(5px, 0);"><img style="width: 40px; height: 40px; border-radius: 10px;" src="app-icons/jumpy-game.png"></div><div class="noti-textbox"><h4 class="noti-heading">Jumpy block</h4><p class="noti-text">Can you do better now?</p></div>'

    let notiDiv5 = document.createElement("div");
    notiDiv5.setAttribute("id", "noti");
    notiDiv5.setAttribute("onclick", "app5()");
    notiDiv5.innerHTML = '<div style="width: 40px; height: 40px; border-radius: 10px; background-color: grey; transform: translate(5px, 0);"><img style="width: 40px; height: 40px; border-radius: 10px;" src="app-icons/news-politics.png"></div><div class="noti-textbox"><h4 class="noti-heading">News</h4><p class="noti-text">Top articles today</p></div>'
    
    let notiDivArray = [notiDiv1, notiDiv2, notiDiv3, notiDiv4, notiDiv5];
    let randIdx = Math.round(Math.random() * (notiDivArray.length-1)); // A random value between 0 and the div array length (-1 to be used as an index number)
    let notiIdx = randIdx; //save the random index into another index so it remains unchanging, might work without

    phoneOutline.append(notiDivArray[notiIdx])
    setTimeout(function(){/*phoneOutline.removeChild(notiDivId)*/ document.getElementById("noti").remove()}, 3000) //I got the ___.remove() code from: https://stackoverflow.com/questions/3387427/remove-element-by-id//with the original commented out code, if I set this at 3000 or higher, the divs start to generate in the same place, fixed this by changing position to absolute in css, this is like how notifications work in real life (i.e. overlapping each other). //now it doesn't remove the notifications fast enough so they build up which isn't good

    // let countNotiIds = document.querySelectorAll('#noti').length;
    // while(countNotiIds > 2){
    //     document.querySelectorAll('#test')[1].remove();
    // }
}

function muteNotifications(){
    // if(!muteNoti){
    //     muteNoti = true;
    // }else{
    //     muteNoti = false;
    //     // phoneOutline.removeChild(notiDiv)
    // }
    // console.log("notifications muted: "+muteNoti)
    if((ding.volume && buzz.volume) != 0){
        ding.volume = 0;
        buzz.volume = 0;
        isMuted = true;
        // document.getElementById("noti").style.zIndex = "-1000";
    }else{
        isMuted = false;
        ding.volume = 0.1;
        buzz.volume = 1;
        phoneOutline.removeChild(notiDivId)
        // document.getElementById("noti").style.zIndex = "100";
    }
}