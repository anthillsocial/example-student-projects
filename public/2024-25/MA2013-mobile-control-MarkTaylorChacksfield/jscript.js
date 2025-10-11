
function appSlidePhone(){
    document.getElementById("phone-outline").style.translate = "-110% 5%";
    clearScreen();
    document.getElementById("scroll-div").style.transform = "translate(250px, 30px)";
    document.getElementById("scroll-div").style.opacity = "1";
}
function homeFunct(){
    isInCamApp = false;
    document.getElementById("phone-outline").style.translate = "0 5%";
    document.getElementById("screen").style.backgroundColor = "lightskyblue";
    addHomeScreen();
    document.getElementById("scroll-div").style.transform = "translate(800px, 30px)";
    document.getElementById("scroll-div").style.opacity = "0";
    document.getElementById("game").style.transform = "translateY(-10000px)";
    document.getElementById("calc-container").style.transform = "translate(0, -10000px)";
    document.getElementById("scrolly-top").style.translate = "0 -5000%";
    ringtone.pause();
    call.pause();
    // isGetCall = false;
}

function clearScreen(){
    //I've left these commented out because I feel like its slightly more realistic, you can still be on the home screen whilst someone's calling you
    // ringtone.pause();
    // call.pause();
    isInCamApp = false;
    document.getElementById("game").style.transform = "translateY(-10000px)";
    document.getElementById("calc-container").style.transform = "translate(0, -10000px)";
    document.getElementById("scrolly-top").style.translate = "0 -5000%";
    //code taken from: https://www.geeksforgeeks.org/how-to-clear-the-content-of-a-div-using-javascript/
    let screen = document.getElementById("screen");
    while(screen.firstChild){
        screen.removeChild(screen.firstChild);
    }

    return null;
}

function addHomeScreen(){
    //code taken from: https://stackoverflow.com/questions/584751/inserting-html-into-a-div
    //any other better ways? e.g. React?
    // isInCamApp = false;
    // camPosY = -1000;
    document.getElementById("screen").innerHTML = '<div id="app-container"><div class="app" id="app1" onclick="app1()"></div><div class="app" id="app2" onclick="app2()"></div><div class="app" id="app3" onclick="app3()"></div><div class="app" id="app4" onclick="app4()"></div><div class="app" id="app5" onclick="app5()"></div><div class="app" id="app6" onclick="app6()"></div><div class="app" id="app7" onclick="app7()"></div><div class="app" id="app8" onclick="app8()"></div><div class="app" id="app9" onclick="app9()"></div><div class="app" id="app10" onclick="app10()"></div></div><div id="important-apps-container"><div class="important-apps" style="background-color: green;" id="impApp1" onclick="iApp1()"></div><div class="important-apps" style="background-color: green;" id="impApp2" onclick="iApp2()"></div><div class="important-apps" style="background-color: green;" id="impApp3" onclick="iApp3()"></div><div class="important-apps" style="background-color: green;" id="impApp4" onclick="iApp4()"></div></div>';
}

function light_dark(){
    let element = document.body;
    element.classList.toggle("dark-mode")
}

let orientation = 0;
function rotatePhone(){
    let phone = document.getElementById("phone-outline");
    orientation += 90; 
    phone.style.transform = "rotate(-"+orientation+"deg)";
    if(orientation === 360){
        orientation = 0;
    }
}


            //  APP SCREEN INTERFACES   //


function app1(){ //deconstructing
    clearScreen();
    // appSlidePhone();
    document.getElementById("screen").style.backgroundColor = "white";
    document.getElementById("screen").innerHTML =
    `<div id="decon-container">
        <h1>Deconstructing the phone</h1>
        <img src="misc-images/deconstructed phone.png" alt="a diagram of a phone deconstructed"> vvv Look down vvv
        <a href="https://www.youtube.com/watch?v=T6hVaCXFrgo" target="blank_"><img src="misc-images/everything on this table your phone can do.png" alt="a picture with devices which have the combined capabilities that your phone can do"></a>
        <img src="misc-images/deconstructed real phone.jpg" alt="a real image of an old school phone deconstructed">
        <img src="misc-images/Apple-to-android_disassembled-framed-gifts_nerdy-desk-setup-12.webp" alt="a real image of an iPhone deconstructed (from yanko design)">
    </div>`;

    // document.getElementById("scroll-div").innerHTML =
    // `<h1 style="line-height: 0;">DECONSTRUCTING THE PHONE</h1><br><br>
    // <div class="info-box">The phone is composed of multiple components all packed into 1 singular device</div>
    // <div class="info-box">...</div>
    // `;
}

function app2(){ //gender
    clearScreen();
    appSlidePhone();
    document.getElementById("screen").style.backgroundColor = "black";
    document.getElementById("screen").innerHTML = `<div id="gender-container">
    <h1 style="color: rgb(21, 102, 207)">Gender:</h1><h2 style="color: rgb(233, 114, 213); line-height: 0;">Control & The Phone</h2><br><br>
    <img style=" max-width: 195px;" src="social-relations-media/image-cheerful-man-woman-using-260nw-1222674277.jpeg">
    <br><a target="blank_" href="https://www.gsma.com/r/wp-content/uploads/2024/05/The-Mobile-Gender-Gap-Report-2024.pdf?utm_source=website&utm_medium=button&utm_campaign=gender-gap-2024#:~:text=The%20gender%20gap%20in%20smartphone%20ownership%20narrowed%20slightly%20from%2015,do%20not%20own%20a%20smartphone." style="color: rgb(21, 102, 207);">Women less likely to own mobile phones</a><br><br>
    <img style="border: solid white 2px; max-width: 265px;" src="social-relations-media/working-class-person-and-cell-phone.jpg">
    <p style="color: rgb(233, 114, 213);">Phones allow for more control independance for women in developing countries</p><br><br>
    <br>
    </div>`;

    document.getElementById("scroll-div").innerHTML =
    `<h1 style="line-height: 0;">GENDER</h1><br><br>
    <div class="info-box">Phone access has been an EXTREMELY important interface for female <strong>freedom and independence</strong> in the developing world<br><br>
    <div class="info-box">Owning a phone for these people has allowed for:
        <ul>
            <li>Financial independence</li>
            <li>Employment</li>
            <li>Better family health and education</li>
            <li>Access to the internet, government services and information</li>
        </ul>
    <br>You can read more about it in <a href="https://www.weforum.org/stories/2016/04/how-mobile-phones-are-changing-womens-lives/#:~:text=In%20Bangladesh%2C%20for%20example%2C%20we,to%2045%20percent%20in%20Niger.">this article</a> which details even more on how women have benefitted from mobile ownership<br><br><img src="https://assets.weforum.org/article/image/large_MkZA4RUPlhpexRJu55-cSZDx35_OsgVJku2lEhK-Wmg.jpg" alt="woman holding phone in field" style="max-width: 250px; border: white solid 2px;">
    <br><br><br>Or <a href="https://www.ox.ac.uk/news/2020-06-08-mobile-phones-empower-women-developing-world-oxford-study#:~:text=According%20to%20the%20lead%20author,skill%20development%2C%20especially%20among%20women.&text='These%20measures%20can%20forge%20a,at%20www.digitalgendergaps.org.">this study/article</a> which looked at the relationship between mobile access and many indicators linked to global sustainable development in over 200 countries<br><br><img src="https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/shutterstock_1411460102%20%281%29.jpg?itok=SJJ9RLwK" alt="happy woman holding ohone and contactless machine" style="max-width: 250px; border: solid white 2px;">
    </div>
    </div>
    <div class="info-box">The mobile gender gap has narrowed for the 1st time this year since 2020.<br><br><a href="https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/blog/the-mobile-gender-gap-report-2024/">GSMA mobile gender gap</a></div>
    <div class="info-box">Women are now 15% less likely than men in LMICs (Low-mid income countries) to use mobile internet<br><br>LMICs are the only countries that have seen any progress in 2024 however</div>
    <div class="info-box">A greater proportion of people still think its important for men to use the mobile internet. (GSMA 2024 report)</div>
    <div class="info-box"><strong>The GSMA</strong> details that the gender gap is reportedly due to a range of social, economic and cultural barriers women face:<br>
        <ul>
            <li>Awareness</li>
            <li>Affordability</li>
            <li>Literacy</li>
            <li>Digital skills</li>
            <li>Safety</li>
            <li>Security concerns</li>
        </ul>
    </div>
    <div class="info-box">They also found that mobile phone access has been associated with lower gender inequalities and a lower mother/child mortality</div>
    <div class="info-box">Problematic phone use is found to have been greater in girls then boys <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9096133/#:~:text=Preliminary%20Analyses,with%20problematic%20mobile%20phone%20use.">in this study</a></div>
    <div class="info-box">Some stats about men and their phones... <br><br><img style="max-width: 300px; border: solid 2px white;" src="https://media.istockphoto.com/id/1388644810/photo/happy-caucasian-young-man-using-smart-phone-cellphone-for-calls-social-media-mobile.jpg?s=612x612&w=0&k=20&c=yDQ9bsnRb-diOKvUQDJ6pklSmiHE3-QmSP-L8FuL2vc=" alt="man on a phone"></div>
    <div class="info-box">33% of men use their phones more for gaming vs 44% for women according to <a href="https://www.uswitch.com/mobiles/studies/mobile-statistics/#:~:text=Mobile%20phone%20stats%20covering%20frequency,mobile%20phones%20to%20make%20calls.">uswitch</a></div>
    <div class="info-box">According to <a href="https://www.directlinegroup.co.uk/en/news/brand-news/2016/men-just-can_t-leave-their-phones-alone.html">this study</a> male participants spent 66% more time talking on their phones than the female participants.</div>
    <div class="info-box">Phones here have been a significantly important tool allowing for women in developing countries to gain more independence. </div>
    `;
}

function app3(){ //settings
    clearScreen();
    // appSlidePhone();
    document.getElementById("screen").innerHTML = ''
    document.getElementById("screen").innerHTML = `<div style="color: white; font-family: sans-serif; background-color: rgb(51, 56, 66); padding: 5px; height: 477px;">
    <h1>Settings:</h1>
    Light/Dark-mode:<button style="display: block;" onclick="light_dark()">Switch</button><br>
    Notifications:<button style="display: block;" onclick="muteNotifications();">Mute</button><br>
    <!-- Stop sliding info:<button style="display: block;" onclick="noSlidePhone();">Stop</button>  couldn't figure out how to stop the slide without it messing about with other stuff, would be good to have in for more immersion however I don't think it's majorly necessary to have for the apps the slide is there for-->
    </div>`;
}


function app4(){ //calculator
    clearScreen();
    // document.getElementById("screen")
    // appSlidePhone();
    document.getElementById("calc-container").style.transform = "translateY(0)";
}

function app5(){ //news-politics
    clearScreen();
    appSlidePhone();
    document.getElementById("screen").innerHTML =
    `<div id="pol-news-container">
    <h1 id="pol-news-h">News</h1>
    <a href="https://blog.kaymera.com/industry-news-and-articles/politics-election-times-and-cell-phone-spying" target=”_blank” style="text-decoration: none; font-weight: bold; font-family: sans-serif; font-size: 15px;"><div class="pn-article" id="article-1"><div style="background-color: #ffffff; height: 65px; border-radius: 0 0 30px 30px; transform: translateY(85px); opacity: 0.9;">Politics, Election Times and Cell Phone Spying<p style="font-size: 11px; text-align: right; margin-right: 20px;">Maryna Gaidak</p></div></div></a>
    <a href="https://www.pewresearch.org/short-reads/2017/09/27/most-americans-think-the-government-could-be-monitoring-their-phone-calls-and-emails/" target=”_blank” style="text-decoration: none; font-weight: bold; font-family: sans-serif; font-size: 15px;"><div class="pn-article" id="article-2"><div style="background-color: #ffffff; height: 65px; border-radius: 0 0 30px 30px; transform: translateY(85px); opacity: 0.9;">Government monitoring phone calls and emails?<p style="font-size: 11px; text-align: right; margin-right: 20px;">Kenneth Olmstead</p></div></div></a>
    <a href="https://www.penguin.co.uk/articles/2019/04/paul-mason-on-artificial-intelligence-and-machine-control" target=”_blank” style="text-decoration: none; font-weight: bold; font-family: sans-serif; font-size: 15px;"><div class="pn-article" id="article-3"><div style="background-color: #ffffff; height: 65px; border-radius: 0 0 30px 30px; transform: translateY(85px); opacity: 0.9;">Governments controlling us through phone algorithms<p style="font-size: 11px; text-align: right; margin-right: 20px;">Paul Mason</p></div></div></a>
    <a href="https://sites.bu.edu/cmcs/2018/12/06/mobile-internets-effects-on-political-participation/" target=”_blank” style="text-decoration: none; font-weight: bold; font-family: sans-serif; font-size: 15px;"><div class="pn-article" id="article-4"><div style="background-color: #ffffff; height: 65px; border-radius: 0 0 30px 30px; transform: translateY(85px); opacity: 0.9;">Mobile internet's effects on political participation<p style="font-size: 11px; text-align: right; margin-right: 20px;">blog kayamera</p></div></div></a>
    <a href="https://www.cambridge.org/core/journals/american-political-science-review/article/abs/technology-and-collective-action-the-effect-of-cell-phone-coverage-on-political-violence-in-africa/E81CFF7B9CB576D612E6D3ECDAF493C4" target=”_blank” style="text-decoration: none; font-weight: bold; font-family: sans-serif; font-size: 15px;"><div class="pn-article" id="article-5"><div style="background-color: #ffffff; height: 65px; border-radius: 0 0 30px 30px; transform: translateY(85px); opacity: 0.9;">Effect of Phone Coverage on Political Violence in Africa<p style="font-size: 11px; text-align: right; margin-right: 20px;">Jan H. Pierskalla & Florian M Hollenbach</p></div></div></a>
    <a href="https://journals.sagepub.com/doi/abs/10.1111/j.1467-9256.2008.00314.x" target=”_blank” style="text-decoration: none; font-weight: bold; font-family: sans-serif; font-size: 15px;"><div class="pn-article" id="article-6"><div style="background-color: #ffffff; height: 65px; border-radius: 0 0 30px 30px; transform: translateY(85px); opacity: 0.9;">Mobile Phones as Democratic Tools<p style="font-size: 11px; text-align: right; margin-right: 20px;">Heike Hermanns</p></div></div></a>
    <a href="https://oe.tradoc.army.mil/2023/08/10/smart-phones-playing-prominent-role-in-russia-ukraine-war/" target=”_blank” style="text-decoration: none; font-weight: bold; font-family: sans-serif; font-size: 15px;"><div class="pn-article" id="article-7"><div style="background-color: #ffffff; height: 65px; border-radius: 0 0 30px 30px; transform: translateY(85px); opacity: 0.9;">Smart Phones Playing Prominent Role in Russia-Ukraine War<p style="font-size: 11px; text-align: right; margin-right: 20px;">Kevin Freese</p></div></div></a>
    </div>`;

    document.getElementById("scroll-div").innerHTML =
    `<h1 style="line-height: 0;">NEWS/POLITICS</h1><br><br>
    <div class="info-box">Phones act as an interface for multiple purposes relating to politics/news.<br><br>The points here are summarised but view the articles to find more info.</div>
    <div class="info-box">Firstly, they provide an interface for more effective propoganda campaigns.
        <ul>
            <li>Mobile phones allow for more intimate communication between the candidates and everyone else, such as their supporters or stakeholders</li><br>
            <li>Also a major increase in computational propoganda</li>
        </ul>
        <div class="info-box">Also allows for more effective political espionage
            <ul>
                <li>Fake reporting</li>
                <li>Cyber attacks</li>
                <li>Manipulative ads</li>
            </ul>
            <br>
            <a href="https://blog.kaymera.com/industry-news-and-articles/politics-election-times-and-cell-phone-spying" style="color: lightblue">This article</a> mentions sophisticated malware such as 'Pegasus' or Russia reportedly using automated bots to 'trigger disagreements and division in different conversational topics.
        </div>
    </div>
    <div class="info-box"><strong>Governments/powerful businesses</strong> collaborate with phone company employees <em>to spy</em> on and target political opponents<br><br><a style="color: lightblue;" href="https://www.pewresearch.org/short-reads/2017/09/27/most-americans-think-the-government-could-be-monitoring-their-phone-calls-and-emails/">13% of US citizens</a> don't believe the government monitors our phones at all.</div>
    <div class="info-box">Because phones are so personal, they become a major point of risk for politicians<br><br>This article shows <a href="https://www.bbc.co.uk/news/uk-politics-63442813" style="color: lightblue;">Liz Truss being hacked and the worry about phone security:<img style="translate: 50% 0; display: block; border: white solid 2px; max-width: 250px;" src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/4D78/production/_127423891_gettyimages-1171028999.jpg.webp" alt="image of Liz truss in a car"></a></div>
    <div class="info-box">The mobile internet has also deepend our society, opening new channels of communication and contributing to the incivility of users</strong></div>
    <div class="info-box">Phones have allowed for more realistic depictions of war to be shown. On site citizen journalism has been made so much more effective.<br><br>This interfaces phones as a tool for justice.<br><br>However <a href="https://www.cambridge.org/core/journals/american-political-science-review/article/abs/technology-and-collective-action-the-effect-of-cell-phone-coverage-on-political-violence-in-africa/E81CFF7B9CB576D612E6D3ECDAF493C4">In this article</a> it says that phone coverage during war in Africa has actually caused MORE chances of violence conflict</div>
    <div class="info-box">In the Ukraine-Russia war, smartphones have been used a lot also:
        <ul>
            <li>They have improved situational awareness & drastically improved the powers of commanders</li>
            <li>Ukraine has used smartphone apps to mitigate Russian unmanned arial systems</li>
            <li>Phones have enabled geospatial crisis monitoring, allowing for live awareness maps of Russia's invasions and other global crisis</li>
            <li>Russia has used off-road exploring app AlpineQuest GPS (a free app you can download on androids) to locate Ukrainian equipment positions/units and identify attack routes</li>
            <li>Soldiers can use smart phones <strong>to detect the acoustic signature of bullets</li>, triangulate the position of a gun and then launch a counter attack</li>
        </ul><br>
        This type of technology has existed for ages but smartphones have completely optimised it.
    </div>
    <div class="info-box"><strong>Phones here are tools of war.</strong></div>
    `;
}

let srcArray = ['social-app-1-images/cat1.png', 'social-app-1-images/cat2.png', 'social-app-1-images/cat3.png', 'social-app-1-images/cat4.png', 'social-app-1-images/cat5.png', 'social-app-1-images/cat6.png', 'social-app-1-images/dog1.png', 'social-app-1-images/dog2.png', 'social-app-1-images/dog3.png', 'social-app-1-images/dog4.png', 'social-app-1-images/dog5.png', 'social-app-1-images/dog6.png'];
function app6(){ //social media
    clearScreen();
    // appSlidePhone();
    //I initially had a comment button and I wanted the user to be able to 'post' comments but I didn't get round to figuring it out
    document.getElementById("screen").innerHTML = '<div style="background-color: rgb(79, 16, 79); height: 487px; transform: translate(0, 0);"><div id="likey-logo"><strong>LIKEY</strong></div><div id="post-pos"><img id="ran-img" src="social-app-1-images/dog2.png"></div><div id="LCD-container"><div class="circle-button-socials" id="button-like" onclick="likeButton()"><3</div><!--<div class="circle-button-socials" id="button-comment">[...]</div>--><div class="circle-button-socials" id="button-dislike" onclick="getRandomImage()">:(</div></div></div>'
    getRandomImage();
}

function iApp2(){ //camera
    clearScreen();
    // appSlidePhone();
    isInCamApp = true;
    document.getElementById("screen").style.backgroundColor = "black";
    //add camera not available text
    document.getElementById("screen").innerHTML = '<div id="camAppBorder1"><button onclick="invertFilter()">INVERT</button><button onclick="grayFilter()">GRAY</button><button onclick="blurFilter()">BLUR</button></div><div id="camAppBorder2"><div id="camButton" onclick="takePhoto()"></div></div>'
}
function takePhoto(){
    save(canvas, "selfie.jpg")
}
function invertFilter(){
    if(invFilter === true){
        invFilter = false;
    }else{
        invFilter = true;
    }
}
function grayFilter(){
    if(gryFilter === true){
        gryFilter = false;
    }else{
        gryFilter = true;
    }
}
function blurFilter(){
    if(blrFilter === true){
        blrFilter = false;
    }else{
        blrFilter = true;
    }
}

//vvv also trying to get random image for likey app vvv

// let form = document.getElementById("form");

// form.addEventListener('submit', function(event){
//     event.preventDefault();

//     let url = 'https://picsum.photos/200'
//     let ranImg = document.getElementById("ran-img") 
//     ranImg.src = url;

// })

function getRandomImage(){
    // let url = "https://loremflickr.com/200/200/monkey";
    // $("#ran-img").attr("src", url);

    // let buttons = document.getElementsByClassName("circle-button-socials")
    // buttons.addEventListener('click', function(event){
    //     event.preventDefault()

    // });
    // let url = 'https://picsum.photos/200'
    // let ranImg = document.getElementById("ran-img")
    // ranImg.src = url;

    // if(document.getElementById("ran-img").src === ""){
    //     document.getElementById("ran-img").src = "https://picsum.photos/200";
    // }else{
    //     clearCurrentImage()
    // }

    //must refresh page each time to be able to get new image
    //tutorial uses forms, should do the same?
    //make it so onclick it resubmits a new url
    // clearCurrentImage();

    // imgEl = document.postPos.appendChild(document.createElement("img"))
    // imageEl.setAttribute("src", "https://picsum.photos/200");


    // document.postPos.appendChild(document.createElement("img").innerHTML = '<img src="https://picsum.photos/200">';
    //append child doc.create element(""), set attributees
    //make it so it generates an image over at first, constantly getting new images
    //the if an image is already there, clear that post before adding in a new one

    // document.getElementById("myPicture").src = myPix

    //    ^^^ Me trying to use online api service to take images from the web, various tutorials were also used to try and make this code work but it only generated 1 image at best ^^^
    
    let randomImage = Math.floor(Math.random()*srcArray.length);
    document.getElementById("ran-img").src = srcArray[randomImage];

}
function likeButton(){
    // document.getElementById("post-pos").style.transform = "translateY: 20px"; //i wanted to try and animate it like in tinder (when you like the image goes to the left)
    getRandomImage();
}

function app7(){ //race
    clearScreen();
    appSlidePhone();
    document.getElementById("screen").style.backgroundColor = "black";
    document.getElementById("screen").innerHTML = `<div id="race-container">
    <h1 style="color: rgb(101, 50, 21)">Race:</h1><h2 style="color: rgb(101, 50, 21); line-height: 0;">Control & The Phone</h2><br><br>
    <img style=" max-width: 195px;" src="social-relations-media/Rotating_earth_animated_transparent.gif">
    <p style="color: rgba(255, 255, 255, 0.622);">The mobile phone has allowed for cultures across the world to communicate with one another</p><br><br>
    <img style="border: solid white 2px; max-width: 265px;" src="social-relations-media/210414200721-restricted-02-false-facial-recognition-match-nijeer-parks-story.webp">
    <p style="color: rgba(255, 255, 255, 0.622);">Police used an image of the suspect taken from a fake driver's license left at the scene (left) to run a facial recognition scan. It returned a "high profile comparison" to Nijeer Parks (right)<br><br><strong><em><a style="color: white; text-decoration: none;" href="https://edition.cnn.com/2021/05/09/us/techno-racism-explainer-trnd/index.html">Technoracism<a></em></strong></p><br><br>
    <img style="border: solid white 2px; max-width: 265px;" src="social-relations-media/istockphoto-1575561896-612x612.jpg">
    <p style="color: rgba(255, 255, 255, 0.622);">The police used the phone and social media to survey BLM protests and activists</p><br><br>
    </div>`;

    document.getElementById("scroll-div").innerHTML =
    `<h1 style="line-height: 0;">RACE</h1><br><br>
    <div class="info-box"><strong><a href="https://edition.cnn.com/2021/05/09/us/techno-racism-explainer-trnd/index.html">Technoracism</a></strong><br><br> Racial injustice is baked into some of the technology we encounter every day.<br><br>
        <div class="info-box">At least dates back to 2019</div>
    </div>
    <div class="info-box">Currently, technology is shaped by the information we feed it.Tech therefore discriminates when it doesn't intend to<br><br><em>“Feed a bunch of racist data, collected from a long racist history … and what you get is a racist system that treats the racism that’s put into it as the truth.”</em><br><a href="https://edition.cnn.com/2021/05/09/us/techno-racism-explainer-trnd/index.html">Read more here</a></div>
    <div class="info-box">Relying on these devices to automate/control the population when they're feeding from racist databases puts many innocents at risk<br><br></div>
    <div class="info-box">Marketing companies use AI to categorise phone users based on demographics such as race (and gender).
    <div class="info-box">e.g. Mobilewalla<br><img src="social-relations-media/mobilewalla-data-collection-race.png" alt="highlighted detailing use of data taken from BLM protest" style="max-width: 300px;"><br><a href="https://www.forbes.com/sites/zakdoffman/2020/06/26/secretive-phone-tracking-company-publishes-location-data-on-black-lives-matter-protesters/#:~:text=Following%20Black%20Lives%20Matter%20protests,a%20sense%20of%20social%20responsibility.%E2%80%9D">read more here</a></div>
    </div>
    <div class="info-box">Mobile phones have made it easier than ever to stay connected. People upload their personal information on social media all the time.<br><br>Police have used Twitter/X <a href="culawreview.org/journal/social-media-surveillance-of-the-black-lives-matter-movement-and-the-right-to-privacy">to monitor BLM protesters</a> 'to arrest participants or quell protests'<br><br>Black american community members are now concerned about their privacy rights</div>
    <div class="info-box">Phones have allowed for power to be given back to people of color, giving them a voice and strengthening community. <br><br> Phones have also been fundamental in exposing racism in the justice system, e.g. with George Floyd.
        <div class="info-box">
            <a href="https://www.independent.co.uk/voices/george-floyd-darnella-frazier-video-b1864564.html">article about George Floyd</a><br><img style="max-width: 270px; border: solid white 2px;" src="https://static.independent.co.uk/2021/04/21/08/newFile-5.jpg?quality=75&width=1250&crop=3%3A2%2Csmart&auto=webp" alt="image of Darnella Frazier & the George Floyd incident"><br><em style="font-size: 10px;">"Darnella Frazier captured a video of police killing George Floyd when she was just 17 years old, <strong>which quickly brought the death to the attention of the world.</strong>"</em><br><br>"Many now proclaim confidently that filming police encounters — whether via cellphone or an officer’s body camera — leads to clear and consistent change."
        </div>
        <br>
        Frazier used her phone to record this and present this to the world, this shows how phones can be a tool for justice.
        <br><br>
    </div>
    <div class="info-box">Phones have given people of colour a chance to express their creativity, e.g. <a href="https://www.youtube.com/watch?v=D25NrAQZLng">These nigerian teenagers</a> that make sci-fi films.<br><br><a href="https://www.youtube.com/@thecritics001"> Here is there channel!</a>
    <br><img style="max-width: 290px;" src="social-relations-media/nigerian-sci-fi-teens.png" alt="teenagers in nigeria who are using their phones to create sci-fi films"><br><br>They have gotten very popular and have been noticed by Nollywood film producer Kemi Adetiba. <br><br>
    </div>
    <div class="info-box">Phones have had an important use here in giving people a voice</div>
    `;

}

function app8(){ //game
    clearScreen();
    // appSlidePhone();
    document.getElementById("game").style.transform = "translateY(0)";
}

function app9(){
    document.getElementById("scrolly-top").style.translate = "0 -5%";
}

function app10(){ //social class
    clearScreen();
    appSlidePhone();
    document.getElementById("screen").style.backgroundColor = "grey";
    document.getElementById("screen").innerHTML = `<div id="s-class-container">
    <h1 style="color: rgb(67, 207, 21)">Social Class:</h1><h2 style="color: rgb(222, 163, 14); line-height: 0;">Control & The Phone</h2><br><br>
    <img style=" max-width: 195px;" src="social-relations-media/phones-in-school.jpeg">
    <a href="https://lordslibrary.parliament.uk/mobile-phones-in-schools-mandating-a-ban/#:~:text=Researchers%20at%20King's%20College%20London,schools%20that%20allowed%20phone%20use." style="color: rgb(207, 21, 21);">KCL found that students in schools which banned phones had lower achievement</a><br><br>
    <img style="border: solid white 2px; max-width: 265px;" src="social-relations-media/old man phone user.jpg">
    <a href="https://www.sciencedirect.com/science/article/pii/S0747563221001060" style="color: rgb(52, 233, 224);">Social media and news reading are the most prominent use areas for older adults</a><br><br>
    </div>`;

    document.getElementById("scroll-div").innerHTML =
    `<h1 style="line-height: 0;">SOCIAL CLASS</h1><br><br>
    <div class="info-box">Hope has an impact on phone usage as seen <a href="https://www.tandfonline.com/doi/full/10.2147/PRBM.S455939#:~:text=Therefore%2C%20based%20on%20the%20theory,smartphone%20dependence%20in%20university%20students.">in this study</a> with uni students<br><br>Positive perceptions and hopeful attitudes alleviate dependency on smartphones.<br><br>Was also found that a 'less percieved social mobility' was linked with greater smartphone dependence.
        <div class="info-box">This recontextualises the general negative perceptions of social media, viewing it more like a self-fulfilling prophecy?<br><br>Supports how phone is almost controlling you to stay on it by getting stuck in a loop of negativity?</div>
        <br><br>So in terms of the phone, the more positive you are the less likely you are to be controlled by the phone?
    </div>
    <div class="info-box">
    This study reminds me of the recent <strong><em>hopecore</em></strong> trend which had taken over
        <br><br>
        Hopecore is a trend which encourages people to seek the joy and positivity of life.
        <br><br>
        <img style="max-width: 300px; border: white solid 2px;" src="https://i1.sndcdn.com/artworks-uC3h1DJ6tpWlGuSM-8OAvXg-t500x500.jpg" alt="image example of hopecore">
        <img style="max-width: 300px; border: white solid 2px;" src="https://i1.sndcdn.com/artworks-1bXLayv5bydAmBkS-YUHq3g-t500x500.jpg" alt="another image example of hopecore"><br><br>
    This could be the internet realising its reputation as a place of negativity and trying to educate people to be better?<br><br>
    All linking back to the study which gets people out of the mindless control of their phones.<br>
    </div>
    <div class="info-box">82% of American adults felt that when people use their cellphones in social gatherings, it hurts the conversation more than it helps <a href="https://www.pewresearch.org/internet/2015/08/26/chapter-4-phone-use-in-social-gatherings/">found here</a>
        Is this just because they're older and didn't grow up with phones?
        <br><br>
        The same study found that older adults are more bothered by phones used at social gatherings<br><br>
        But 89% of phone owners still used their phones during their most recent social activity???
    </div>
    <div class="info-box">Based on the last 2 studies, it looks like <strong>theres a theme of enjoying yourself more by getting of of the phone.</strong> But as the last piece of research shows, people still use their phones when they disagree with using them <br><br>This both shows the power phones have over us as well as the desire to be free from its control.</div>
    <div class="info-box">Phones are greatly optimised as interfaces for communication and can help with socially isolated groups connect</div>
    <div class="info-box">Its also good for building community within classes, for example I know neighbourhoods which have group chats to more effectively perform neighbourhood watch schemes.</div>
    <div class="info-box">This is what google's AI had to say about <em>'social class control and mobile phones'</em>
    <br><br>
    <img style="max-width: 400px; border: solid white 2px;" src="social-relations-media/ai-overview-google-social-class.png" alt="google ai text review of social class">
    <br><br>
    It also linked <a href="https://journals.sagepub.com/doi/10.1177/1461444818765154#:~:text=Notably%2C%20the%20researchers%20consider%20social,Tsetsi%20and%20Rains%2C%202017).">this study</a> to a lot of its points.
    </div>
    <div class="info-box">There is now better communication in general, anyone in any class can communicate with one another. <br><br> However there is a decrease in face-to-face social interaction & privacy concerns.<br><br>Phones are a clear interface for communication, <strong>but are they also a step in eliminating social classism/bias?</strong> On a technical level, as long as you understand how phones/computers etc. work, could you not expose anyone no matter what class (depending on their privacy)?
    <br><br>
    These are just my thoughts.</div>
    `;
}

function iApp1(){ //internet
    clearScreen();
    appSlidePhone();
    document.getElementById("screen").style.backgroundColor = "white";
    document.getElementById("screen").innerHTML =
    `<div id="internet-container">
        <div id="net-elements">
            <h1 style="color: orange; font-size: 50px;">Boogle</h1>
            <input type="text" placeholder="Search..." style="width: 200px">
            <button style="margin-top: 10px;">Search</button>
        </div>    
    </div>`;

    document.getElementById("scroll-div").innerHTML =
    `<h1 style="line-height: 0;">THE INTERNET</h1><br><br>
    <div class="info-box">Mobile phone traffic takes up <a href="https://www.statista.com/topics/779/mobile-internet/#:~:text=Mobile%2Dfirst%20consumer%20markets,million%20in%20India%20in%202023.">60% of the web</a>
    </div>
    <div class="info-box">
        Having a search engine on our phones make it an extremely powerful tool. <br><br>It allows us to spend less time figuring out things as we can look up whatever exactly what we need in that exact moment.
    <br><br>
        <img style="max-width: 400px;" src="https://pureseo.com/wp-content/uploads/2022/05/how-to-use-search-effectively.jpg" alt="magnifying glass over google logo">
        <br><br><a href="https://www.theatlantic.com/magazine/archive/2008/07/is-google-making-us-stupid/306868/">is google making us stupid?</a><br>This article details how just as much as our searches optimise Google's ability to get information, Google also optimises us to seek the exact info we are looking for.
        <br><br>This can extend to how the phone controls us.<br><br>Since these mobile devices are generally almost always attatched to us, could you argue that the phone to a point is mediating this conditioning?
    </div>
    <div class="info-box">Mobile phones are a primary way of accessing the internet <a href="https://www.statista.com/topics/779/mobile-internet/#:~:text=Mobile%2Dfirst%20consumer%20markets,million%20in%20India%20in%202023.">in Asian and African markets</a></div>
    <div class="info-box">Internet on phones puts many business sectors at major risk (e.g. magazines/books) because they can just be pirated and seen for free
        <br><br><img src="https://web.archive.org/web/20090724092119/http://www.geocities.com/banco_de_desarrollo_logistico/pirate2.gif" alt="pirate flag">
    </div>
    <div class="info-box">Having the internet on our phones means we can have whatever information we want instantly.<br><br>Witht the portability of phones, <br><strong>the internet helps completes it as the ultimate interface for our world.</strong></div>
    `;
}

let ringtone = new Audio("phone-sounds/iPHONE RINGTONE CALLING SOUND EFFECT - YOUTUBE THING (youtube).mp3");
let call = new Audio("phone-sounds/stop-stealing-wifi.mp3");
// let isGetCall = false;
let isInCall = false;
function iApp3(){ //phone app
    clearScreen();
    // appSlidePhone();
    document.getElementById("screen").style.backgroundColor = "grey";
    document.getElementById("screen").innerHTML = `<div id="call-container">
    <div id="up-section">
        <h1 style="display: block;">Jonathan</h1>
        <div id="call-photo"></div>
    </div><br>
    <div id="call-section">
        <div id="end-call-button" onclick="homeFunct();"></div>
        <div id="accept-call-button" onclick="acceptCall();"></div>
    </div>
</div>`;
    // isInCall = false;
    // if(!isInCall){
        ringtone.play();
    // }
}
function acceptCall(){
    isInCall = true;
    document.getElementById("call-section").innerHTML = '<div id="end-call-button" onclick="homeFunct();"></div>';
    ringtone.pause();
    call.play();
    setTimeout(function() {
        call.play();
        homeFunct();
    }, 43000);
}
// (function loopRingtone() {
//     if(isGetCall){
//         let looping = setTimeout(function() {
//             ringtone.play();
//             loopRingtone(); // Call the loop function again
//         }, 1200);
//     }
// }());


function iApp4(){ //music
    clearScreen();
    // appSlidePhone();
    document.getElementById("screen").style.backgroundColor = "white";
    document.getElementById("screen").innerHTML =
    `<div id="music-container">
    <h1 style="font-family: sans-serif; background-color: hotpink; border-radius: 7px; color: white;">MUSIC</h1>
    <div id="song-container">
        <div class="song" id="song1"></div><audio controls src="songs/Bruno Mars - Calling all my lovelies.mp3"></audio>
        <div class="song" id="song2"></div><audio controls src="songs/fireforce-op-inferno.mp3"></audio>
        <div class="song" id="song3"></div><audio controls src="songs/Jackson 5 - I Want You Back (Lyric Video) - Classic Motown (youtube).mp3"></audio>
        <div class="song" id="song4"></div><audio controls src="songs/los-pollos-hermanos-knucks.mp3"></audio><br>
    </div>
    <div id="music-footer"><p style="font-size: 14px;;">If you want more songs, our subscription service is only £5.99 a month!</p></div>
    </div>`;
}


