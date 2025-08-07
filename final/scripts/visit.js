document.addEventListener("DOMContentLoaded", () => {
  const messageDiv = document.getElementById("visit-message");
  const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  let message = "";

  if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const daysPassed = Math.floor((now - Number(lastVisit)) / MILLISECONDS_IN_A_DAY);
    if (daysPassed === 0) {
      message = "Back so soon! Awesome!";
    } else if (daysPassed === 1) {
      message = "You last visited 1 day ago.";
    } else {
      message = `You last visited ${daysPassed} days ago.`;
    }
  }

  messageDiv.textContent = message;
  localStorage.setItem("lastVisit", now.toString());
});