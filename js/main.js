const countdown = document.querySelector(".countdown");

// Set Launch Date (ms)
const launchDate = new Date("May 12, 2019 13:00:00").getTime();

// Update every second
const intv = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();

  // Get distance from now to launchDate
  const distance = launchDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${minutes}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
  `;

  // If launch date passed
  if (distance < 0) {
    clearInterval(intv);
    // Style output
    countdown.style.color = "#17a2b8";
    countdown.innerHTML = "LAUNCHED";
  }
}, 1000);
