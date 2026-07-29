const memories=document.querySelectorAll(".memory");

function reveal(){

memories.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-120){

card.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

document.getElementById("nextPage").onclick=()=>{

location.href="reasons.html";

};
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