// Set the target birthday (MM-DD format)
const birthdayMMDD = "08-29";

function updateClock() {
  const now = new Date();
  let thisYear = now.getFullYear();
  let target = new Date(`${thisYear}-${birthdayMMDD}T00:00:00`);

  // If the birthday already passed this year, set it for next year
  if (target < now) {
    target = new Date(`${thisYear + 1}-${birthdayMMDD}T00:00:00`);
  }

  const diff = Math.floor((target - now) / 1000);
  const hours = String(Math.floor(diff / 3600) % 24).padStart(2, "0");
  const minutes = String(Math.floor(diff / 60) % 60).padStart(2, "0");
  const seconds = String(diff % 60).padStart(2, "0");

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateClock, 1000);
updateClock();
