function updateCountdown() {
    const countdownDate = new Date("2023-11-18 00:00:00").getTime();
    const currentDate = new Date().getTime();

    const difference = countdownDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + " gün " + hours + " saat " + minutes + " dakika " + seconds + " saniye";

    if (difference <= 0) {
        document.getElementById("countdown-text").innerHTML = "Samsun'a çıktık!";
        document.getElementById("countdown").style.display = "none";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();