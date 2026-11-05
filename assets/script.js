// Interaction simple : afficher / masquer le message de bienvenue.
const button = document.getElementById("toggle-message");
const message = document.getElementById("welcome-message");

button.addEventListener("click", () => {
  message.hidden = !message.hidden;
  const isVisible = !message.hidden;
  button.textContent = isVisible ? "Masquer le message" : "Afficher le message";
  button.setAttribute("aria-expanded", String(isVisible));
});
