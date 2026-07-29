const music = document.getElementById("music");
const startBtn = document.getElementById("startBtn");

// Open next page
startBtn.addEventListener("click", () => {

    // Play music
    music.play().catch(() => {});

    // Fade effect
    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = "0";

    // Open next page
    setTimeout(() => {
        window.location.href = "letter.html";
    }, 1000);

});

// Floating Hearts
setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    const icons = ["❤️", "💕", "💖", "💗", "🌸"];

    heart.innerHTML = icons[Math.floor(Math.random() * icons.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heart.style.opacity = Math.random();

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}, 350);
