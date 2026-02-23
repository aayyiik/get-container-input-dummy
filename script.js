let inputValue = "";

function formatToday() {
    const today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yy = String(today.getFullYear()).slice(-2);

    return dd + mm + yy;
}

function press(num) {
    if (inputValue.length < 6) {
        inputValue += num;
        updateDisplay();
    }
}

function clearInput() {
    inputValue = inputValue.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    let masked = inputValue.padEnd(6, "•");
    document.getElementById("display").textContent = masked;
}

function checkPassword() {

    const correctPassword = "220226";

    if (inputValue === correctPassword) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("birthdayContent").classList.remove("hidden");

        typeEffect(message, "typingText", 25, function() {
            const title = document.getElementById("finalTitle");
            const text = document.getElementById("finalText");

            title.classList.remove("hidden");
            text.classList.remove("hidden");

            title.classList.add("fade-in");
            text.classList.add("fade-in");
        });

    } else {
        alert("Password salah 😢");
        inputValue = "";
        updateDisplay();
    }
}




const message = `HBD yaaa 🎂✨

Semoga di level umur yang baru (dan makin dewasa ini 😌) kamu makin waras, makin chill, makin ngerti maunya kamu apa, dan berani dengerin kata hati kamu sendiri.

Semoga nggak terlalu maksain diri terus-terusan, rezekinya ngalir (boleh lah 1T 🤭), sehat terus, dan hal-hal kecil yang bikin kamu seneng makin sering kejadian.

Semoga kamu bisa lebih damai sama diri sendiri, nggak terlalu keras, dan makin peka sama hal-hal baik di sekitar kamu. 

Semoga banyak hal baik datang ke kamu dan kamu dikelilingi orang orang yang baik.

Pokoknya semoga tahun ini kamu upgrade, tapi nggak kehilangan versi kamu yang sekarang.

Stay good, stay kind, stay gold.
Jangan makin nyebelin ya 😌✨
Happy birthday 🥳`;


function typeEffect(text, elementId, speed = 25, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = "";

    function typing() {
        if (i < text.length) {
            const char = text.charAt(i);
            element.innerHTML += char === "\n" ? "<br>" : char;
            i++;
            setTimeout(typing, speed);
        } else {
            if (callback) callback();
        }
    }

    typing();
}


