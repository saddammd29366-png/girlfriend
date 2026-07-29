const canvas=document.getElementById("confetti");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let pieces=[];

for(let i=0;i<180;i++){

pieces.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*8+3,

dx:(Math.random()-0.5)*3,

dy:Math.random()*3+2,

c:`hsl(${Math.random()*360},100%,70%)`

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

pieces.forEach(p=>{

ctx.fillStyle=p.c;

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fill();

p.x+=p.dx;

p.y+=p.dy;

if(p.y>canvas.height){

p.y=-10;

}

});

requestAnimationFrame(draw);

}

draw();

setInterval(()=>{

const heart=document.createElement("div");

heart.className="floating-heart";

heart.innerHTML=["❤️","💕","💖","💗"][Math.floor(Math.random()*4)];

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),8000);

},250);

window.onresize=()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

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