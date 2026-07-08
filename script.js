const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupMessage = document.getElementById("popupMessage");
const popupActionButton = document.getElementById("popupActionButton");
const closePopupButton = document.getElementById("closePopupButton");

const startJourneyButton = document.getElementById("startJourneyButton");
const mapJourneyButton = document.getElementById("mapJourneyButton");
const previewRouteButton = document.getElementById("previewRouteButton");
const reachedSafelyButton = document.getElementById("reachedSafelyButton");
const sosButton = document.getElementById("sosButton");
const quickSosButton = document.getElementById("quickSosButton");
const bigSosButton = document.getElementById("bigSosButton");
const cancelSosButton = document.getElementById("cancelSosButton");
const needHelpButton = document.getElementById("needHelpButton");
const lateButton = document.getElementById("lateButton");
const backDashboardButton = document.getElementById("backDashboardButton");
const notificationButton = document.getElementById("notificationButton");
const profileButton = document.getElementById("profileButton");

const activeJourneyCount = document.getElementById("activeJourneyCount");
const journeyStatusText = document.getElementById("journeyStatusText");
const timerText = document.getElementById("timerText");
const sosTimer = document.getElementById("sosTimer");

let timerInterval;
let remainingSeconds = 1116;
let sosInterval;
let sosSeconds = 3;

function showPopup(title, message, buttonText = "Close") {
  popupTitle.textContent = title;
  popupMessage.textContent = message;
  popupActionButton.textContent = buttonText;
  popup.classList.remove("hidden");
}

function closePopup() {
  popup.classList.add("hidden");
}

function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
}

function startCountdown() {
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    if (remainingSeconds > 0) {
      remainingSeconds--;
      timerText.textContent = formatTime(remainingSeconds);
    } else {
      clearInterval(timerInterval);
      journeyStatusText.textContent =
        "Arrival confirmation is pending. Please confirm that you are safe.";
    }
  }, 1000);
}

function startJourney() {
  activeJourneyCount.textContent = "3";
  journeyStatusText.textContent =
    "Journey started. Live route tracking and arrival timer are active.";

  startCountdown();

  showPopup(
    "Journey Started",
    "Your SafeReach demo journey is now active. In the final project, trusted contacts will receive your live location and expected arrival time."
  );
}

function reachedSafely() {
  clearInterval(timerInterval);

  journeyStatusText.textContent =
    "Safe arrival confirmed. Trusted contacts have been notified.";

  showPopup(
    "You Reached Safely!",
    "Your safe arrival has been confirmed successfully. This is a demo notification for trusted contacts."
  );
}

function startSosCountdown() {
  clearInterval(sosInterval);
  sosSeconds = 3;
  sosTimer.textContent = "3.0 sec";

  sosInterval = setInterval(() => {
    sosSeconds -= 0.1;

    if (sosSeconds <= 0) {
      clearInterval(sosInterval);
      sosTimer.textContent = "Alert Sent";

      showPopup(
        "SOS Alert Sent",
        "A simulated emergency alert has been sent to your trusted contacts with your last known location."
      );

      return;
    }

    sosTimer.textContent = `${sosSeconds.toFixed(1)} sec`;
  }, 100);
}

function cancelSos() {
  clearInterval(sosInterval);
  sosSeconds = 3;
  sosTimer.textContent = "3.0 sec";

  showPopup(
    "SOS Cancelled",
    "The emergency alert countdown has been cancelled."
  );
}

function openSosPopup() {
  showPopup(
    "SOS Emergency Help",
    "For this demo, press the large SOS circle to start a three-second emergency alert countdown."
  );
}

document.querySelectorAll("[data-popup]").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.popup;

    showPopup(
      name,
      `${name} is ready as a clickable demo module. We will build its full page after completing the dashboard.`
    );
  });
});

startJourneyButton.addEventListener("click", startJourney);
mapJourneyButton.addEventListener("click", startJourney);
previewRouteButton.addEventListener("click", startJourney);

reachedSafelyButton.addEventListener("click", reachedSafely);

sosButton.addEventListener("click", openSosPopup);
quickSosButton.addEventListener("click", openSosPopup);
bigSosButton.addEventListener("click", startSosCountdown);
cancelSosButton.addEventListener("click", cancelSos);

needHelpButton.addEventListener("click", () => {
  showPopup(
    "Help Request",
    "A simulated help request has been created. In the final version, this will alert trusted contacts and show nearby safe locations."
  );
});

lateButton.addEventListener("click", () => {
  journeyStatusText.textContent =
    "User is safe but running late. Trusted contacts have been updated.";

  showPopup(
    "Status Updated",
    "Your trusted contacts have been informed that you are safe but delayed."
  );
});

backDashboardButton.addEventListener("click", () => {
  showPopup(
    "Dashboard",
    "You are already on the SafeReach dashboard."
  );
});

notificationButton.addEventListener("click", () => {
  showPopup(
    "Notifications",
    "You have 2 demo notifications: a route safety update and a trusted-contact reminder."
  );
});

profileButton.addEventListener("click", () => {
  showPopup(
    "Profile",
    "Profile settings will include avatar selection, gender preference, trusted contacts, and emergency settings."
  );
});

popupActionButton.addEventListener("click", closePopup);
closePopupButton.addEventListener("click", closePopup);

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    closePopup();
  }
});