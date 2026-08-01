// ==============================
// LOADER
// ==============================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 1000);

    }, 1800);

});

// ==============================
// LOVE LETTER
// ==============================

const message = `

My Love ❤️,

Happy Girlfriend Day!

Every day with you feels like a beautiful dream.

Your smile makes my world brighter,
your laugh makes my heart happier,
and your love makes my life complete.

Thank you for being by my side.

No matter where life takes us,
I'll always choose you.

I love you more than words can ever describe.

Forever Yours ❤️

`;

const typingText = document.getElementById("typingText");
const startBtn = document.getElementById("startBtn");
const letter = document.getElementById("letter");
const music = document.getElementById("bgMusic");

let index = 0;

startBtn.onclick = () => {

    music.play().catch(() => {});

    document.getElementById("hero").style.display = "none";

    letter.classList.remove("hidden");

    letter.scrollIntoView({
        behavior: "smooth"
    });

    typeLetter();

};

function typeLetter() {

    if (index < message.length) {

        typingText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter, 40);

    } else {

        setTimeout(() => {

            document.getElementById("gallery").scrollIntoView({
                behavior: "smooth"
            });

        }, 2000);

    }

}

// ==============================
// FLOATING HEARTS
// ==============================

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random()*100+"vw";
    heart.style.top = "-20px";
    heart.style.fontSize = (15+Math.random()*25)+"px";
    heart.style.animation = "fall 8s linear forwards";
    heart.style.zIndex = "2";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,500);

// ==============================
// Heart Animation
// ==============================

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-50px) rotate(0deg);

opacity:1;

}

100%{

transform:translateY(110vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);
// ===============================
// PHOTO POPUP
// ===============================

const photos = document.querySelectorAll(".photo img");

const popup = document.getElementById("popup");

const popupImg = document.getElementById("popupImg");

const closePopup = document.getElementById("closePopup");

photos.forEach(photo => {

    photo.onclick = () => {

        popup.style.display = "flex";

        popupImg.src = photo.src;

    };

});

closePopup.onclick = () => {

    popup.style.display = "none";

};

popup.onclick = (e)=>{

    if(e.target==popup){

        popup.style.display="none";

    }

};
// ===============================
// REASON CARD ANIMATION
// ===============================

const cards = document.querySelectorAll(".reason-card");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        card.style.transform="scale(1.1)";

        setTimeout(()=>{

            card.style.transform="";

        },250);

    });

});
// ===============================
// TIMELINE ANIMATION
// ===============================

const timelineItems = document.querySelectorAll(".timeline-item");

function revealTimeline(){

    timelineItems.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealTimeline);

revealTimeline();
// =================================
// LOVE BUTTON
// =================================

const loveBtn = document.getElementById("loveBtn");

loveBtn.onclick = () => {

    for(let i=0;i<120;i++){

        setTimeout(createConfetti,i*20);

    }

};

// =================================
// CONFETTI
// =================================

function createConfetti(){

    const c=document.createElement("div");

    c.className="confetti";

    c.style.left=Math.random()*100+"vw";

    c.style.background=`hsl(${Math.random()*360},100%,60%)`;

    c.style.width=(6+Math.random()*8)+"px";

    c.style.height=c.style.width;

    document.body.appendChild(c);

    setTimeout(()=>{

        c.remove();

    },5000);

}