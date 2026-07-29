const cards = document.querySelectorAll(".card img");

const viewer = document.getElementById("viewer");

const big = document.getElementById("bigImage");

const close = document.getElementById("close");

cards.forEach(img=>{

img.onclick=()=>{

viewer.style.display="flex";

big.src=img.src;

}

});

close.onclick=()=>{

viewer.style.display="none";

};

viewer.onclick=(e)=>{

if(e.target===viewer)

viewer.style.display="none";

};

document.getElementById("timelineBtn").onclick=()=>{

location.href="timeline.html";

};

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(5+Math.random()*4)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},9000);

},500);
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