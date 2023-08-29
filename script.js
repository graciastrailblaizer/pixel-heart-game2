const pixelHeart = document.querySelector('.pixel-heart');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
let score = 0;
let speed = 1000; // Initial speed in milliseconds
let timeLeft = 30; // Initial time in seconds

pixelHeart.addEventListener('click', () => {
    if (timeLeft > 0) {
        score++;
        scoreDisplay.textContent = score;
        increaseSpeed();
        movePixelHeart();
    }
});

function movePixelHeart() {
    const maxX = window.innerWidth - pixelHeart.clientWidth;
    const maxY = window.innerHeight - pixelHeart.clientHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    pixelHeart.style.left = newX + 'px';
    pixelHeart.style.top = newY + 'px';
}

function increaseSpeed() {
    // Decrease speed by 50 milliseconds every time score increases by 5
    if (score % 5 === 0) {
        speed -= 50;
    }
}

function updateTimer() {
    timerDisplay.textContent = `Time: ${timeLeft}s`;

    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateTimer, 1000); // Update the timer every 1 second
    } else {
        endGame();
    }
}

function endGame() {
    pixelHeart.style.display = 'none'; // Hide the heart when the game ends
    alert(`Game Over!\nYour Score: ${score}`);
}

// Function to speed up the game every 10 seconds
function speedUpGame() {
    setTimeout(() => {
        if (timeLeft > 0) {
            speed -= 50;
            setTimeout(speedUpGame, 10000); // Speed up every 10 seconds
        }
    }, 10000);
}

// Initial movement of the pixel heart
movePixelHeart();

// Start moving the pixel heart at intervals
setInterval(movePixelHeart, speed);

// Start the timer and speed-up function
updateTimer();
speedUpGame();
