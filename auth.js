// ===============================
// 🔐 Demo authentication (browser-only)
// Accounts live in this browser's localStorage. There is no server yet,
// so this is for demonstration only — not real security.
// ===============================
const Auth = (() => {
  const USERS_KEY = "ts_users";
  const SESSION_KEY = "ts_session";

  function read(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch (e) {
      return fallback;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  }

  async function hash(text) {
    if (window.crypto && crypto.subtle) {
      const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
      return Array.from(new Uint8Array(buf))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    }
    return btoa(unescape(encodeURIComponent(text))); // fallback for non-secure contexts
  }

  const normalizeEmail = (email) => email.trim().toLowerCase();

  async function register({ name, email, password, area, phone }) {
    const users = read(USERS_KEY, {});
    const key = normalizeEmail(email);
    if (users[key]) return { ok: false, error: "err_email_taken" };
    if (password.length < 6) return { ok: false, error: "err_password_short" };
    users[key] = { name: name.trim(), email: key, area, phone, passwordHash: await hash(password) };
    write(USERS_KEY, users);
    write(SESSION_KEY, { email: key });
    return { ok: true, user: users[key] };
  }

  async function login(email, password) {
    const users = read(USERS_KEY, {});
    const user = users[normalizeEmail(email)];
    if (!user || user.passwordHash !== (await hash(password))) {
      return { ok: false, error: "err_login_failed" };
    }
    write(SESSION_KEY, { email: user.email });
    return { ok: true, user };
  }

  function logout() {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch (e) {}
  }

  function currentUser() {
    const session = read(SESSION_KEY, null);
    if (!session) return null;
    return read(USERS_KEY, {})[session.email] || null;
  }

  // Swap Login/Register buttons for a greeting + Logout when signed in
  function renderNavbar() {
    const box = document.getElementById("nav-auth");
    if (!box) return;
    const user = currentUser();
    if (!user) return;

    document.querySelectorAll(".hero-cta").forEach((el) => (el.hidden = true));
    box.innerHTML = "";
    const hi = document.createElement("span");
    hi.className = "nav-greeting";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-ghost btn-sm";
    btn.addEventListener("click", () => {
      logout();
      window.location.href = "index.html";
    });
    box.append(hi, btn);

    const update = () => {
      hi.textContent = typeof t === "function" ? t("greeting", { name: user.name }) : user.name;
      btn.textContent = typeof t === "function" ? t("logout") : "Logout";
    };
    update();
    document.addEventListener("languageChange", update);
  }

  // Mobile menu toggle
  function setupMenu() {
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("nav-menu");
    if (!toggle || !menu) return;
    const setOpen = (open) => {
      menu.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };
    toggle.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
    setupMenu();
  });

  return { register, login, logout, currentUser };
})();
