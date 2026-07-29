const message = `Happy Girlfriend Day ❤️

Thank you for being the most beautiful part of my life.

Every smile of yours makes my heart feel lighter.

Every conversation with you becomes one of my favorite memories.

You inspire me to become a better person every day.

No matter where life takes us,
I hope we keep creating beautiful memories together.

You are special.
You are appreciated.
You are deeply loved.

Happy Girlfriend Day.

❤️`;

const typing = document.getElementById("typing");

let i = 0;

function typeLetter(){

if(i < message.length){

typing.innerHTML += message.charAt(i);

i++;

setTimeout(typeLetter,35);

}

}

typeLetter();

document.getElementById("nextBtn").onclick=()=>{

location.href="gallery.html";

};

setInterval(()=>{

const s=document.createElement("div");

s.className="sparkle";

s.innerHTML="✨";

s.style.left=Math.random()*100+"vw";

s.style.bottom="-30px";

s.style.animationDuration=(4+Math.random()*3)+"s";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},7000);

},400);
const music=document.getElementById("bgMusic");
const btn=document.getElementById("musicBtn");

btn.onclick=()=>{

if(music.paused){

music.play();
btn.innerHTML="⏸️";

}else{

music.pause();
btn.innerHTML="🎵";

}

};