<script>
// Function to calculate hours, minutes, and seconds from total seconds
function calculateTime() {
    const time = parseInt(document.getElementById('timeInput').value);
    if (isNaN(time) || time < 0) {
        document.getElementById('result').innerText = "Please enter a valid positive number.";
        return;
    }
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    document.getElementById('result').innerText = `${hours} hours, ${minutes} minutes, and ${seconds} seconds.`;
}

// Function to start a countdown timer
function startCountdown() {
    let countdown = parseInt(document.getElementById('countdownInput').value);
    if (isNaN(countdown) || countdown < 0) {
        document.getElementById('countdownDisplay').innerText = "Please enter a valid positive number.";
        return;
    }

    const display = document.getElementById('countdownDisplay');
    display.innerText = `${countdown} seconds remaining.`;

    const timer = setInterval(() => {
        countdown--;
        if (countdown <= 0) {
            clearInterval(timer);
            display.innerText = "Time's up!";
        } else {
            display.innerText = `${countdown} seconds remaining.`;
        }
    }, 1000);
}
</script>