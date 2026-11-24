// PAGE NAVIGATION

function nextPage(pageNumber) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + pageNumber)
        .classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// CUTE QUESTION

function answer(button) {

    const answerText = document.getElementById("answerText");

    const messages = [
        "Correct answer! 😌💜",
        "Obviously, you! 🥹💗",
        "Best answer ever! ✨"
    ];

    answerText.innerText =
        messages[Math.floor(Math.random() * messages.length)];

    answerText.style.animation = "fadeIn 0.5s";
}


// REASONS

const reasons = [

    {
        title: "Your Heart 💗",
        text: "You have a beautiful heart, even on the days you don't realize it."
    },

    {
        title: "Your Smile 🌷",
        text: "Your smile makes everything feel a little less stressful."
    },

    {
        title: "Your Existence 🧸",
        text: "The world became a little better for me when you became a part of it."
    },

    {
        title: "Our Memories ✨",
        text: "All our random talks, laughter and stupid moments are some of my favorite memories."
    },

    {
        title: "Just Because 💜",
        text: "You deserve love, happiness, peace and everything beautiful in this universe."
    }

];

let reasonIndex = 0;


function changeReason() {

    reasonIndex++;

    if (reasonIndex >= reasons.length) {
        reasonIndex = 0;
    }

    document.getElementById("reasonTitle")
        .innerText = reasons[reasonIndex].title;

    document.getElementById("reasonText")
        .innerText = reasons[reasonIndex].text;

}


// FINAL CELEBRATION

function celebrate() {

    document.getElementById("finalMessage")
        .innerText = "Your wish is on its way... ✨💜";

    for (let i = 0; i < 35; i++) {

        createHeart();

    }

}


// FLOATING HEARTS

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const heartSymbols = ["💜", "💗", "✨", "💕", "🌸"];

    heart.innerText =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    document.querySelector(".floating-hearts")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}


// CONTINUOUS FLOATING HEARTS

setInterval(createHeart, 700);