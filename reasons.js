const cards=document.querySelectorAll(".flip-card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("flipped");

});

});

document.getElementById("finalBtn").onclick=()=>{

location.href="final.html";

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