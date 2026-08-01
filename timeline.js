// ======================
// Reveal animation
// ======================

const memories = document.querySelectorAll(".memory");

function reveal() {
    memories.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

// ======================
// Next Page Button
// ======================

const nextPage = document.getElementById("nextPage");

if (nextPage) {
    nextPage.addEventListener("click", () => {
        window.location.href = "reasons.html";
    });
}

// ======================
// Music Button
// ======================

const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

if (music && btn) {

    btn.addEventListener("click", () => {

        if (music.paused) {
            music.play();
            btn.innerHTML = "⏸️";
        } else {
            music.pause();
            btn.innerHTML = "🎵";
        }

    });

}
