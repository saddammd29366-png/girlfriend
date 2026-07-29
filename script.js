const music = document.getElementById("music");
const startBtn = document.getElementById("startBtn");

startBtn.onclick = () => {

music.play();

document.body.style.opacity="0";

setTimeout(()=>{

window.location="letter.html";

},1200);

};

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=4+Math.random()*5+"s";

heart.style.opacity=Math.random();

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},300);
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