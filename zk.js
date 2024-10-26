var targetDate = new Date("2027-06-14T00:00:00").getTime();
var targetDatea = new Date("2030-06-17T00:00:00").getTime();

// 更新倒计时函数
function updateCountdown() {
    var currentDate = new Date().getTime();
    var timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "中高考已经开始!";
        return;
    }

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // 更新页面上的倒计时
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}
function updateCountdowna() {
    var currentDatea = new Date().getTime();
    var timeLefta = targetDatea - currentDatea;

    if (timeLefta <= 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdowna").innerHTML = "中高考已经开始!";
        return;
    }

    var daysa = Math.floor(timeLefta / (1000 * 60 * 60 * 24));
    var hoursa = Math.floor((timeLefta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesa = Math.floor((timeLefta % (1000 * 60 * 60)) / (1000 * 60));
    var secondsa = Math.floor((timeLefta % (1000 * 60)) / 1000);

    // 更新页面上的倒计时
    document.getElementById("daysa").innerText = daysa.toString().padStart(2, '0');
    document.getElementById("hoursa").innerText = hoursa.toString().padStart(2, '0');
    document.getElementById("minutesa").innerText = minutesa.toString().padStart(2, '0');
    document.getElementById("secondsa").innerText = secondsa.toString().padStart(2, '0');
}
// 页面加载时开始倒计时
var countdownTimer = setInterval(updateCountdown, 1000);
var countdownTimera = setInterval(updateCountdowna, 1000);

// 页面加载时立即更新一次倒计时，避免首次加载时显示的是0
updateCountdown();
updateCountdowna();





