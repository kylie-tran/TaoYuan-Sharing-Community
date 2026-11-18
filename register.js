document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register-form");
  const msg = document.getElementById("form-message");
  if (!form) return;

  function show(type, key, vars) {
    msg.className = `form-message ${type}`;
    msg.textContent = t(key, vars);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const value = (id) => document.getElementById(id).value;

    const result = await Auth.register({
      name: value("reg-name"),
      password: value("reg-password"),
      area: value("reg-area"),
      email: value("reg-email"),
      phone: value("reg-phone"),
    });
    if (!result.ok) return show("error", result.error);

    show("success", "ok_registered", { name: result.user.name });
    setTimeout(() => (window.location.href = "index.html"), 1200);
  });
});
