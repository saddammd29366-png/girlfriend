// =========================
// Image Gallery Viewer
// =========================

const cards = document.querySelectorAll(".card img");
const viewer = document.getElementById("viewer");
const big = document.getElementById("bigImage");
const close = document.getElementById("close");

if (cards.length && viewer && big && close) {

    cards.forEach(img => {

        img.addEventListener("click", () => {

            viewer.style.display = "flex";
            big.src = img.src;

        });

    });

    close.addEventListener("click", () => {

        viewer.style.display = "none";

    });

    viewer.addEventListener("click", (e) => {

        if (e.target === viewer) {

            viewer.style.display = "none";

        }

    });

}

// =========================
// Next Page Button
// =========================

const timelineBtn = document.getElementById("timelineBtn");

if (timelineBtn) {

    timelineBtn.addEventListener("click", () => {

        window.location.href = "timeline.html";

    });

}

// =========================
// Floating Petals
// =========================

setInterval(() => {

    const petal = document.createElement("div");

    petal.className = "petal";
    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (5 + Math.random() * 4) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 9000);

}, 500);

// =========================
// Music Player
// =========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (music.paused) {

            music.play();
            musicBtn.innerHTML = "⏸️";

        } else {

            music.pause();
            musicBtn.innerHTML = "🎵";

        }

    });

}
