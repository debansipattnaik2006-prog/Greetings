const quoteButton = document.getElementById("quoteButton");

const quoteText = document.getElementById("quoteText");

const openButton = document.getElementById("openButton");

const createButton = document.getElementById("createButton");

const newGreetingButton = document.getElementById("newGreetingButton");


const openingScreen = document.getElementById("openingScreen");

const personalizeScreen = document.getElementById("personalizeScreen");

const greetingScreen = document.getElementById("greetingScreen");


const recipientName = document.getElementById("recipientName");

const customMessage = document.getElementById("customMessage");
const photoInput = document.getElementById("photoInput");

const displayPhoto = document.getElementById("displayPhoto");

const photoContainer = document.getElementById("photoContainer");

const displayName = document.getElementById("displayName");

const displayMessage = document.getElementById("displayMessage");


/* =========================
   OPEN BUTTON
========================= */

openButton.addEventListener("click", function () {

    openingScreen.classList.add("hidden");

    personalizeScreen.classList.remove("hidden");

});


/* =========================
   CREATE GREETING
========================= */

createButton.addEventListener("click", function () {

    const name = recipientName.value.trim();

    const message = customMessage.value.trim();
    const photo = photoInput.files[0];

    if (name === "") {

        alert("Please enter a name 💕");

        return;
    }


    displayName.textContent = name;


    if (message !== "") {

        displayMessage.textContent = message;

    }

    if (photo) {

        const photoURL = URL.createObjectURL(photo);

        displayPhoto.src = photoURL;

        photoContainer.classList.remove("hidden");

    }
    personalizeScreen.classList.add("hidden");

    greetingScreen.classList.remove("hidden");

});


/* =========================
   CREATE ANOTHER GREETING
========================= */

newGreetingButton.addEventListener("click", function () {

    greetingScreen.classList.add("hidden");

    personalizeScreen.classList.remove("hidden");

});
/* =========================
   QUOTE CHANGER
========================= */

const quotes = [
    "✨ Little moments can hold the biggest memories. ✨",

    "🌸 May your days be filled with little reasons to smile. 🌸",

    "🦋 Some moments become memories before we even realize it. 🦋",

    "💗 You deserve all the beautiful things life has to offer. 💗",

    "🌷 Keep blooming at your own pace. 🌷",

    "✨ There is something beautiful about simply being you. ✨"
];


let quoteIndex = 0;


quoteButton.addEventListener("click", function () {

    quoteIndex++;

    if (quoteIndex >= quotes.length) {
        quoteIndex = 0;
    }

    quoteText.style.opacity = "0";

    setTimeout(function () {

        quoteText.textContent = quotes[quoteIndex];

        quoteText.style.opacity = "1";

    }, 300);

});
