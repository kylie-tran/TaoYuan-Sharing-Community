document.addEventListener("DOMContentLoaded", () => {
  // ====== Helpers ======
  const $ = (sel) => document.querySelector(sel);
  const lang = () => (typeof getCurrentLang === "function" ? getCurrentLang() : "en");
  const loc = (v, l = lang()) => (v == null ? "" : typeof v === "string" ? v : v[l] || v.en || "");
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const icon = (id, cls = "icon") => `<svg class="${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;
  const catOf = (id) => CATEGORIES.find((c) => c.id === id) || CATEGORIES[CATEGORIES.length - 1];

  function load(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch (e) {
      return fallback;
    }
  }
  function save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  }

  const todayISO = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };
  const daysSince = (iso) => Math.max(0, Math.round((new Date(todayISO()) - new Date(iso)) / 86400000));
  function postedLabel(iso) {
    const n = daysSince(iso);
    if (n === 0) return t("posted_today");
    if (n === 1) return t("posted_yesterday");
    return t("posted_days", { n });
  }
  const safeUrl = (u) => (/^https?:\/\//i.test(u || "") ? u : "");

  let toastTimer;
  function toast(text) {
    const el = $("#toast");
    el.textContent = text;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => (el.hidden = true), 3500);
  }

  // ====== Data ======
  const USER_ITEMS = "ts_items";
  const REQUESTS = "ts_requests";
  const userItems = () => load(USER_ITEMS, []);
  const allItems = () => [...userItems(), ...SEED_ITEMS];

  const state = { q: "", cat: "all", district: "", sort: "newest" };

  // ====== Selects (districts, categories) ======
  function fillDistrictSelect(sel, firstKey) {
    const current = sel.value;
    sel.innerHTML =
      `<option value="">${esc(t(firstKey))}</option>` +
      DISTRICTS.map((d) => `<option value="${d}">${esc(t("district_" + d))}</option>`).join("");
    sel.value = current;
  }

  function fillCategorySelect(sel) {
    const current = sel.value;
    sel.innerHTML =
      `<option value="">${esc(t("select_placeholder"))}</option>` +
      CATEGORIES.map((c) => `<option value="${c.id}">${c.icon} ${esc(t("cat_" + c.id))}</option>`).join("");
    sel.value = current;
  }

  function renderSelects() {
    fillDistrictSelect($("#hero-district"), "all_districts");
    fillDistrictSelect($("#filter-district"), "all_districts");
    fillDistrictSelect($("#share-district"), "select_placeholder");
    fillCategorySelect($("#share-category"));
  }

  // ====== Category chips ======
  function renderChips() {
    const items = allItems();
    const chips = [{ id: "all", icon: "" }, ...CATEGORIES];
    $("#category-chips").innerHTML = chips
      .map((c) => {
        const count = c.id === "all" ? items.length : items.filter((i) => i.cat === c.id).length;
        const active = state.cat === c.id;
        return `<button type="button" class="chip${active ? " active" : ""}" data-cat="${c.id}" aria-pressed="${active}">
          ${c.icon ? `<span aria-hidden="true">${c.icon}</span>` : ""}${esc(t("cat_" + c.id))}
          <span class="chip-count">${count}</span></button>`;
      })
      .join("");
  }

  $("#category-chips").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    state.cat = btn.dataset.cat;
    renderChips();
    renderItems();
  });

  // ====== Items grid ======
  function mediaHTML(item, cls) {
    const cat = catOf(item.cat);
    const src = safeUrl(item.img);
    const tile = `<div class="media-tile ${cls}" style="--tile:${cat.color}"><span aria-hidden="true">${cat.icon}</span></div>`;
    return src ? `<img class="${cls}" src="${esc(src)}" alt="" loading="lazy" data-fallback="${esc(tile)}" />` : tile;
  }

  function matches(item) {
    if (state.cat !== "all" && item.cat !== state.cat) return false;
    if (state.district && item.district !== state.district) return false;
    if (state.q) {
      const q = state.q.toLowerCase();
      const hay = ["en", "zh"]
        .map((l) => [loc(item.name, l), loc(item.desc, l), loc(item.pickup, l), t("district_" + item.district, {}, l), t("cat_" + item.cat, {}, l)].join(" "))
        .join(" ")
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  }

  function sorted(items) {
    const l = lang();
    const copy = [...items];
    if (state.sort === "name") copy.sort((a, b) => loc(a.name, l).localeCompare(loc(b.name, l), l === "zh" ? "zh-Hant" : "en"));
    else if (state.sort === "oldest") copy.sort((a, b) => a.posted.localeCompare(b.posted));
    else copy.sort((a, b) => b.posted.localeCompare(a.posted));
    return copy;
  }

  function renderItems() {
    const user = Auth.currentUser();
    const items = sorted(allItems().filter(matches));
    $("#results-count").textContent = t(items.length === 1 ? "results_count_one" : "results_count", { n: items.length });
    $("#empty-state").hidden = items.length > 0;

    $("#items-grid").innerHTML = items
      .map((item) => {
        const cat = catOf(item.cat);
        const mine = user && item.ownerEmail === user.email;
        return `<li>
          <button type="button" class="item-card" data-id="${esc(item.id)}">
            <div class="item-media">
              ${mediaHTML(item, "item-img")}
              <span class="badge badge-cat">${cat.icon} ${esc(t("cat_" + item.cat))}</span>
              ${mine ? `<span class="badge badge-mine">${esc(t("your_listing"))}</span>` : ""}
            </div>
            <div class="item-body">
              <h3>${esc(loc(item.name))}</h3>
              <p class="item-meta">${icon("i-pin", "icon icon-sm")}${esc(t("district_" + item.district))}</p>
              <div class="item-footer">
                <span class="badge badge-cond cond-${esc(item.condition)}">${esc(t("cond_" + item.condition))}</span>
                <span class="item-time">${esc(postedLabel(item.posted))}</span>
              </div>
            </div>
          </button>
        </li>`;
      })
      .join("");
  }

  // Replace broken images with the category tile
  document.addEventListener(
    "error",
    (e) => {
      const img = e.target;
      if (img.tagName === "IMG" && img.dataset.fallback) img.outerHTML = img.dataset.fallback;
    },
    true
  );

  $("#items-grid").addEventListener("click", (e) => {
    const card = e.target.closest(".item-card");
    if (card) openItem(card.dataset.id);
  });

  // ====== Filters ======
  const filterQ = $("#filter-q");
  filterQ.addEventListener("input", () => {
    state.q = filterQ.value.trim();
    renderItems();
  });
  $("#filter-district").addEventListener("change", (e) => {
    state.district = e.target.value;
    renderItems();
  });
  $("#filter-sort").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderItems();
  });
  $("#clear-filters").addEventListener("click", () => {
    Object.assign(state, { q: "", cat: "all", district: "" });
    filterQ.value = "";
    $("#filter-district").value = "";
    renderChips();
    renderItems();
  });

  $("#hero-search").addEventListener("submit", (e) => {
    e.preventDefault();
    state.q = $("#hero-q").value.trim();
    state.district = $("#hero-district").value;
    filterQ.value = state.q;
    $("#filter-district").value = state.district;
    renderItems();
    $("#items").scrollIntoView({ behavior: "smooth" });
  });

  // ====== Item dialog ======
  const itemDialog = $("#item-dialog");
  let openId = null;

  function fillItemDialog() {
    const item = allItems().find((i) => i.id === openId);
    if (!item) return itemDialog.close();
    const cat = catOf(item.cat);
    const user = Auth.currentUser();
    const requested = user && (load(REQUESTS, {})[user.email] || []).includes(item.id);
    const mine = user && item.ownerEmail === user.email;

    $("#item-media").innerHTML = mediaHTML(item, "dialog-img");
    $("#item-badges").innerHTML = `<span class="badge badge-cat">${cat.icon} ${esc(t("cat_" + item.cat))}</span>`;
    $("#item-title").textContent = loc(item.name);
    $("#item-desc").textContent = loc(item.desc);
    $("#item-condition").textContent = t("cond_" + item.condition);
    $("#item-district").textContent = t("district_" + item.district);
    $("#item-pickup").textContent = loc(item.pickup);
    $("#item-donor").textContent = loc(item.donor);
    $("#item-posted").textContent = new Date(item.posted).toLocaleDateString(lang() === "zh" ? "zh-TW" : "en-GB", {
      year: "numeric", month: "long", day: "numeric",
    });

    const actions = $("#item-actions");
    if (!user) {
      actions.innerHTML = `<a class="btn btn-primary" href="login.html">${esc(t("request_login"))}</a>`;
    } else if (mine) {
      actions.innerHTML = `<span class="muted">${esc(t("own_item"))}</span>
        <button type="button" class="btn btn-danger" id="delete-item">${esc(t("delete_item"))}</button>`;
    } else if (requested) {
      actions.innerHTML = `<button type="button" class="btn btn-primary" disabled>${esc(t("request_already"))}</button>`;
    } else {
      actions.innerHTML = `<button type="button" class="btn btn-primary" id="request-item">${esc(t("request_btn"))}</button>`;
    }
  }

  function openItem(id) {
    openId = id;
    $("#item-message").textContent = "";
    $("#item-message").className = "form-message";
    fillItemDialog();
    itemDialog.showModal();
  }

  $("#item-actions").addEventListener("click", (e) => {
    const user = Auth.currentUser();
    if (!user) return;
    if (e.target.id === "request-item") {
      const all = load(REQUESTS, {});
      all[user.email] = [...(all[user.email] || []), openId];
      save(REQUESTS, all);
      const item = allItems().find((i) => i.id === openId);
      fillItemDialog();
      const msg = $("#item-message");
      msg.className = "form-message success";
      msg.textContent = t("request_sent", { donor: loc(item.donor) });
    }
    if (e.target.id === "delete-item") {
      save(USER_ITEMS, userItems().filter((i) => !(i.id === openId && i.ownerEmail === user.email)));
      itemDialog.close();
      refreshAll();
    }
  });

  // ====== Share dialog ======
  const shareDialog = $("#share-dialog");
  const shareForm = $("#share-form");

  function openShare() {
    const user = Auth.currentUser();
    $("#share-login").hidden = !!user;
    shareForm.hidden = !user;
    if (user && !$("#share-district").value && user.area) {
      $("#share-district").value = String(user.area).toLowerCase();
    }
    shareDialog.showModal();
  }

  document.querySelectorAll(".share-open").forEach((b) => b.addEventListener("click", openShare));

  $("#share-category").addEventListener("change", (e) => {
    $("#share-food-note").hidden = e.target.value !== "food";
  });

  shareForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = Auth.currentUser();
    if (!user) return;
    const val = (id) => $(id).value.trim();
    const item = {
      id: "u" + Date.now(),
      cat: val("#share-category"),
      condition: val("#share-condition"),
      district: val("#share-district"),
      posted: todayISO(),
      img: safeUrl(val("#share-image")),
      name: val("#share-name"),
      desc: val("#share-desc"),
      pickup: val("#share-pickup"),
      donor: user.name,
      ownerEmail: user.email,
    };
    save(USER_ITEMS, [item, ...userItems()]);
    shareForm.reset();
    $("#share-food-note").hidden = true;
    shareDialog.close();
    Object.assign(state, { q: "", cat: "all", district: "", sort: "newest" });
    filterQ.value = "";
    $("#filter-district").value = "";
    $("#filter-sort").value = "newest";
    refreshAll();
    toast(t("share_success"));
    $("#items").scrollIntoView({ behavior: "smooth" });
  });

  // Close buttons + click on backdrop for both dialogs
  document.querySelectorAll("dialog").forEach((dlg) => {
    dlg.querySelectorAll(".dialog-close, .dialog-cancel").forEach((b) => b.addEventListener("click", () => dlg.close()));
    dlg.addEventListener("click", (e) => {
      if (e.target === dlg) dlg.close();
    });
  });
  itemDialog.addEventListener("close", () => (openId = null));

  // ====== Events ======
  function upcomingEvents() {
    const today = todayISO();
    return EVENTS.filter((ev) => ev.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  }

  function renderEvents() {
    const l = lang();
    const locale = l === "zh" ? "zh-TW" : "en-GB";
    const events = upcomingEvents();
    $("#no-events").hidden = events.length > 0;
    $("#events-grid").innerHTML = events
      .map((ev) => {
        const d = new Date(ev.date + "T00:00:00");
        const month = d.toLocaleDateString(locale, { month: "short" });
        const weekday = d.toLocaleDateString(locale, { weekday: "long" });
        return `<li class="event-card">
          <div class="event-media">
            <img src="${esc(ev.img)}" alt="" loading="lazy"
                 data-fallback="${esc('<div class="media-tile event-img" style="--tile:#fde3cf"><span aria-hidden="true">📅</span></div>')}" class="event-img" />
            <span class="badge badge-free">${esc(t("event_free"))}</span>
          </div>
          <div class="event-body">
            <div class="event-date" aria-hidden="true"><span>${esc(month)}</span><strong>${d.getDate()}</strong></div>
            <div>
              <h3>${esc(loc(ev.title))}</h3>
              <p class="event-desc">${esc(loc(ev.desc))}</p>
              <p class="item-meta">${icon("i-clock", "icon icon-sm")}<span><time datetime="${ev.date}">${esc(weekday)}</time> · ${esc(ev.time)}</span></p>
              <p class="item-meta">${icon("i-pin", "icon icon-sm")}<span>${esc(loc(ev.place))}, ${esc(t("district_" + ev.district))}</span></p>
            </div>
          </div>
        </li>`;
      })
      .join("");
  }

  // ====== Top sharers ======
  function renderDonors() {
    const max = Math.max(...TOP_SHARERS.map((d) => d.count));
    $("#donor-list").innerHTML = TOP_SHARERS.map((d, i) => `
      <li>
        <span class="rank rank-${i + 1}">${i + 1}</span>
        <div class="donor-info">
          <div class="donor-row">
            <strong>${esc(loc(d.name))}</strong>
            <span>${esc(t("donations", { n: d.count }))}</span>
          </div>
          <div class="donor-sub">${esc(t("district_" + d.district))}</div>
          <div class="bar"><span style="width:${Math.round((d.count / max) * 100)}%"></span></div>
        </div>
      </li>`).join("");
  }

  // ====== Stats ======
  function renderStats() {
    $("#stat-items").textContent = allItems().length;
    $("#stat-events").textContent = upcomingEvents().length;
    $("#stat-categories").textContent = CATEGORIES.length;
  }

  // ====== Init + language sync ======
  function refreshAll() {
    renderSelects();
    renderChips();
    renderItems();
    renderEvents();
    renderDonors();
    renderStats();
    if (openId && itemDialog.open) fillItemDialog();
  }

  refreshAll();
  document.addEventListener("languageChange", refreshAll);
});
