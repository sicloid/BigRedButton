async function showLove() {
    await fetchMessages();  // fetch tamamlanana kadar bekle
    for (let i = 0; i < 30; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    const symbols = ['❤️', '💖', '💗', '💕', '💓', '💝', '💘', '💌', '💟', '❣️', '💙', '💚', '💛', '💜'];
    const heartInterval = 100;
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    document.body.appendChild(heart);

    const size = Math.random() * 30 + 10;
    heart.style.fontSize = `${size}px`;
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = "100vh";
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    heart.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

function createMessage(text) {
    const message = document.createElement("div");
    message.classList.add("message");
    message.textContent = text;
    document.body.appendChild(message);

    message.style.left = `${Math.random() * 80 + 10}vw`;
    message.style.top = `${Math.random() * 80 + 10}vh`;

    setTimeout(() => {
        message.remove();
    }, 3000);
}

async function fetchMessages() {
    try {
        let response = await fetch('messages.txt');
        let data = await response.text();
        let messages = data.split("\n").filter(msg => msg.trim() !== "");
        let randomMessage = messages[Math.floor(Math.random() * messages.length)];
        createMessage(randomMessage);
    } catch (error) {
        console.error("Mesajlar yüklenirken hata oluştu:", error);
    }
}

