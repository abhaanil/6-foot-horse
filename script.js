// Curtain + clap
const revealBtn = document.getElementById("revealBtn");
const card = document.getElementById("card");
const clap = document.getElementById("clapSound");

revealBtn.addEventListener("click", () => {
    clap.currentTime = 0;
    clap.play();
    card.classList.add("slide-up");
});

// Buttons
const shoppingBtn = document.getElementById("shoppingBtn");
const daddyBtn = document.getElementById("daddyBtn");
const sadBtn = document.getElementById("sadBtn");

// Media
const shoppingVideo = document.getElementById("shoppingVideo");
const daddySound = document.getElementById("daddySound");
const gudgulyaSound = document.getElementById("gudgulyaSound");

// Horse images
const horse = document.getElementById("horseImg");
const horseSad = document.getElementById("horseSadImg");

// ---------- HELPERS ----------

function stopVideo() {
    shoppingVideo.pause();
    shoppingVideo.currentTime = 0;
    shoppingVideo.style.opacity = "0";
    shoppingVideo.style.pointerEvents = "none";
}

function stopDaddyAudio() {
    daddySound.pause();
    daddySound.currentTime = 0;
}

function stopGudgulyaAudio() {
    gudgulyaSound.pause();
    gudgulyaSound.currentTime = 0;
}

function stopAllMedia() {
    stopVideo();
    stopDaddyAudio();
    stopGudgulyaAudio();
}

function showNormalHorse() {
    horse.style.opacity = "1";
    horseSad.style.opacity = "0";
}

function showSadHorse() {
    horse.style.opacity = "0";
    horseSad.style.opacity = "1";
}

// ---------- ACTIONS ----------

// SHOPPING
shoppingBtn.addEventListener("click", () => {
    stopAllMedia();
    showNormalHorse();

    shoppingVideo.style.opacity = "1";
    shoppingVideo.style.pointerEvents = "auto";
    shoppingVideo.play();
});

shoppingVideo.addEventListener("ended", stopVideo);

// DADDY
daddyBtn.addEventListener("click", () => {
    stopAllMedia();
    showNormalHorse();

    daddySound.play();
});

// GUDGULYA
sadBtn.addEventListener("click", () => {
    stopAllMedia();
    showSadHorse();

    gudgulyaSound.play();
});
