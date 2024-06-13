// timer start

const countdowns = document.querySelectorAll(".countdown");
countdowns.forEach((countdown) => {
  let endDate = new Date(countdown.getAttribute("data-date"));
  let upgradeTime = endDate - Date.now();

  var seconds = upgradeTime / 1000;

  const timer = () => {
    let days = Math.floor(seconds / 24 / 60 / 60);
    let hoursLeft = Math.floor(seconds - days * 86400);
    let hours = Math.floor(hoursLeft / 3600);
    let minutesLeft = Math.floor(hoursLeft - hours * 3600);
    let minutes = Math.floor(minutesLeft / 60);
    let remainingSeconds = Math.floor(seconds) % 60;
    function pad(n) {
      return n < 10 ? "0" + n : n;
    }
    countdown.innerHTML =
      "<span>" +
      pad(hours) +
      "<strong>:</strong>" +
      "</span>" +
      "<span>" +
      pad(minutes) +
      "<strong>:</strong>" +
      "</span>" +
      "<span>" +
      pad(remainingSeconds) +
      "</span>";
    if (seconds == 0) {
      clearInterval(countdownTimer);
      countdown.innerHTML = "Completed";
    } else {
      seconds--;
    }
  };
  let countdownTimer = setInterval(timer, 1000);
});

// timer end

// footer timer

let day = document.querySelector(".days");
let hour = document.querySelector(".hours");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");

function setCountdown() {
  // Set countdown date
  let countdownDate = new Date("Jan 8, 2024 18:40:25").getTime();

  // Update countdown every second
  let updateCount = setInterval(function () {
    // Get today's date and time
    let todayDate = new Date().getTime();

    // Get distance between now and countdown date
    let distance = countdownDate - todayDate;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display values in html elements
    day.textContent = days;
    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;

    // if countdown expires
    if (distance < 0) {
      clearInterval(updateCount);
    }
  }, 1000);
}

setCountdown();
