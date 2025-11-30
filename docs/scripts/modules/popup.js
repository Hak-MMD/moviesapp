// Show popup with message + status
export function showPopup(message, status) {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popup-message");

  // Reset classes
  popup.className = "popup";

  // Apply status class
  if (status === "success") {
    popup.classList.add("success");
  } else if (status === "fail") {
    popup.classList.add("fail");
  }

  popupMessage.textContent = message;

  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
    popup.classList.add("hidden");
  }, 3000);
}
