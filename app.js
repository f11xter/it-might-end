const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const itMightEndTime = new Date("Nov 4, 2031 09:13:00").getTime();

updateTime();

setInterval(() => {
  updateTime();
}, 1000);

// Custom cursor
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// TODO: add end handling
function updateTime() {
  const currentTime = new Date().getTime();
  const diff = itMightEndTime - currentTime;

  const length = String(Math.floor(diff / (1000 * 60 * 60 * 24))).length;

  days.textContent = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
  hours.textContent = String(Math.floor((diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))).padStart(length, '0');
  minutes.textContent = String(Math.floor((diff % (1000 * 60 * 60) / (1000 * 60)))).padStart(length, '0');
  seconds.textContent = String(Math.floor((diff % (1000 * 60) / 1000))).padStart(length, '0');
}