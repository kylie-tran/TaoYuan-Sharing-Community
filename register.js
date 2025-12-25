document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("reg-name");
    const name = nameInput ? nameInput.value : "";

    alert(`🩵 Welcome to Taoyuan Sharing Community, ${name}!`);
    form.reset();
  });
});
