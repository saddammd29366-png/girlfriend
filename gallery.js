// ==========================
// IMAGE POPUP
// ==========================

const cards = document.querySelectorAll(".card img");
const viewer = document.getElementById("viewer");
const bigImage = document.getElementById("bigImage");
const close = document.getElementById("close");

if (cards.length && viewer && bigImage && close) {

    cards.forEach((img) => {

        img.addEventListener("click", () => {

            viewer.style.display = "flex";
            bigImage.src = img.src;

        });

    });

    close.addEventListener("click", () => {

        viewer.style.display = "none";
        bigImage.src = "";

    });

    viewer.addEventListener("click", (e) => {

        if (e.target === viewer) {

            viewer.style.display = "none";
            bigImage.src = "";

        }

    });

}

// ==========================
// NEXT PAGE BUTTON
// ==========================

const timelineBtn = document.getElementById("timelineBtn");

if (timelineBtn) {

    timelineBtn.onclick = function () {

        window.location.href = "timeline.html";

    };

}

// ==========================
// MUSIC BUTTON
// ==========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {

    music.volume = 0.5;

    music.play().catch(() => {});

    musicBtn.innerHTML = "⏸️";

    musicBtn.onclick = function () {

        if (music.paused) {

            music.play();
            musicBtn.innerHTML = "⏸️";

        } else {

            music.pause();
            musicBtn.innerHTML = "🎵";

        }

    };

}

// ==========================
// FLOATING FLOWERS
// ==========================

function createFlower() {

    const flower = document.createElement("div");

    flower.className = "petal";
    flower.innerHTML = "🌸";

    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.top = "-30px";

    flower.style.animationDuration =
        (6 + Math.random() * 4) + "s";

    document.body.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 10000);

}

setInterval(createFlower, 600);
