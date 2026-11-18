document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const msg = document.getElementById("form-message");
  if (!form) return;

  function show(type, key, vars) {
    msg.className = `form-message ${type}`;
    msg.textContent = t(key, vars);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const result = await Auth.login(email, password);
    if (!result.ok) return show("error", result.error);

    show("success", "ok_logged_in", { name: result.user.name });
    setTimeout(() => (window.location.href = "index.html"), 1200);
  });
});
