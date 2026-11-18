document.addEventListener("DOMContentLoaded", () => {
  const lang = () => (typeof getCurrentLang === "function" ? getCurrentLang() : "en");
  const dictFor = (l) => i18nText[l] || i18nText.en;
  // Smaller, compressed Unsplash images load much faster than the originals
  const sized = (url, w) => `${url}w=${w}&auto=format&fit=crop&q=70`;

  // Show a soft placeholder if an image fails to load
  function withFallback(img, emoji) {
    img.addEventListener("error", () => {
      img.replaceWith(Object.assign(document.createElement("div"), {
        className: "img-fallback",
        textContent: emoji,
      }));
    }, { once: true });
    return img;
  }

  // ====== Upcoming Events Slider ======
  const eventsSlider = document.getElementById("events-slider");

  const eventsData = [
    { key: "event1", emoji: "🍱", img: "https://plus.unsplash.com/premium_photo-1754341357839-a11120163778?" },
    { key: "event2", emoji: "📚", img: "https://images.unsplash.com/photo-1591171550305-7faf12e39a27?" },
    { key: "event3", emoji: "👕", img: "https://plus.unsplash.com/premium_photo-1676587710768-3c36f6aa9fdd?" },
    { key: "event4", emoji: "🧸", img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?" },
  ];

  function buildEvents() {
    if (!eventsSlider) return;
    eventsSlider.innerHTML = "";

    // Two copies so auto-scroll can loop seamlessly; the copy is hidden from screen readers
    [...eventsData, ...eventsData].forEach((e, i) => {
      const card = document.createElement("article");
      card.className = "item";
      card.dataset.eventKey = e.key;
      if (i >= eventsData.length) card.setAttribute("aria-hidden", "true");

      const img = withFallback(Object.assign(document.createElement("img"), {
        src: sized(e.img, 600), alt: "", loading: "lazy",
      }), e.emoji);

      card.innerHTML = `
        <span class="badge" data-i18n-event-badge></span>
        <div class="text-below">
          <h3 data-i18n-event-title></h3>
          <p data-i18n-event-info></p>
        </div>`;
      card.prepend(img);
      eventsSlider.appendChild(card);
    });
  }

  function updateEventsLang(l) {
    if (!eventsSlider) return;
    const dict = dictFor(l);
    eventsSlider.querySelectorAll(".item").forEach((card) => {
      const key = card.dataset.eventKey;
      card.querySelector("[data-i18n-event-title]").textContent = dict[`${key}_title`] || "";
      card.querySelector("[data-i18n-event-info]").textContent = dict[`${key}_info`] || "";
      card.querySelector("[data-i18n-event-badge]").textContent = dict.event_badge || "";
    });
  }

  // Auto-scroll: pauses on hover/focus, stops for users who prefer reduced motion
  let scrollPos = 0;
  let paused = false;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function loopWidth() {
    return eventsSlider.scrollWidth / 2;
  }

  function startAutoScroll() {
    if (!eventsSlider || reduceMotion) return;
    ["mouseenter", "focusin", "touchstart"].forEach((ev) =>
      eventsSlider.addEventListener(ev, () => (paused = true), { passive: true }));
    ["mouseleave", "focusout"].forEach((ev) =>
      eventsSlider.addEventListener(ev, () => {
        paused = false;
        scrollPos = eventsSlider.scrollLeft;
      }));
    eventsSlider.addEventListener("touchend", () => {
      setTimeout(() => {
        paused = false;
        scrollPos = eventsSlider.scrollLeft;
      }, 2000);
    });

    (function step() {
      if (!paused && !document.hidden) {
        scrollPos += 0.6;
        if (scrollPos >= loopWidth()) scrollPos -= loopWidth();
        eventsSlider.scrollLeft = scrollPos;
      }
      requestAnimationFrame(step);
    })();
  }

  function addEventSliderButtons() {
    const wrapper = eventsSlider && eventsSlider.parentElement;
    if (!wrapper) return;

    const makeBtn = (dir, label, symbol) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `slider-btn ${dir}`;
      btn.textContent = symbol;
      btn.dataset.i18nAria = label;
      btn.setAttribute("aria-label", typeof t === "function" ? t(label) : label);
      btn.addEventListener("click", () => {
        const card = eventsSlider.querySelector(".item");
        const stepPx = card ? card.offsetWidth + 15 : 300;
        let target = eventsSlider.scrollLeft + (dir === "left" ? -stepPx : stepPx);
        if (target < 0) target += loopWidth();
        if (target >= loopWidth()) target -= loopWidth();
        scrollPos = target;
        eventsSlider.scrollLeft = target;
      });
      wrapper.appendChild(btn);
    };
    makeBtn("left", "prev", "◀");
    makeBtn("right", "next", "▶");
  }

  // ====== Hot Items + Modal ======
  const newList = document.getElementById("new-items-list");
  const modal = document.getElementById("item-modal");
  const modalImg = document.getElementById("modal-img");
  const modalClose = document.getElementById("modal-close");
  const modalFields = ["name", "area", "description", "donor", "pickup"];
  let openItem = null;
  let lastFocused = null;

  const itemsData = [
    { key: "item1", emoji: "🍽️", img: "https://images.unsplash.com/photo-1677591276151-e11ed2e307c6?" },
    { key: "item2", emoji: "📚", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?" },
    { key: "item3", emoji: "🧥", img: "https://images.unsplash.com/photo-1711527124424-463764d8d8e5?" },
    { key: "item4", emoji: "🍎", img: "https://images.unsplash.com/photo-1719274868535-9f4af7296306?" },
  ];

  function fillModal(item, l) {
    const dict = dictFor(l);
    const values = {
      name: dict[`${item.key}_name`],
      area: "📍 " + (dict[`${item.key}_area`] || ""),
      description: dict[`${item.key}_desc`],
      donor: dict[`${item.key}_donor`],
      pickup: dict[`${item.key}_pickup`],
    };
    modalFields.forEach((f) => {
      document.getElementById(`modal-${f}`).textContent = values[f] || "";
    });
    modalImg.alt = values.name || "";
  }

  function openModal(item) {
    lastFocused = document.activeElement;
    openItem = item;
    modalImg.hidden = false;
    modalImg.onerror = () => (modalImg.hidden = true);
    modalImg.src = sized(item.img, 900);
    fillModal(item, lang());
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modalClose.focus();
  }

  function closeModal() {
    modal.hidden = true;
    openItem = null;
    document.body.classList.remove("modal-open");
    if (lastFocused) lastFocused.focus();
  }

  function buildItems() {
    if (!newList) return;
    newList.innerHTML = "";

    itemsData.forEach((item) => {
      const li = document.createElement("li");
      li.dataset.itemKey = item.key;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "item-card";
      const img = withFallback(Object.assign(document.createElement("img"), {
        src: sized(item.img, 400), alt: "", loading: "lazy",
      }), item.emoji);
      btn.append(img);
      btn.insertAdjacentHTML("beforeend",
        `<strong data-i18n-item-name></strong><span data-i18n-item-area></span>`);
      btn.addEventListener("click", () => openModal(item));

      li.appendChild(btn);
      newList.appendChild(li);
    });
  }

  function updateItemsLang(l) {
    if (!newList) return;
    const dict = dictFor(l);
    newList.querySelectorAll("li").forEach((li) => {
      const key = li.dataset.itemKey;
      li.querySelector("[data-i18n-item-name]").textContent = dict[`${key}_name`] || "";
      li.querySelector("[data-i18n-item-area]").textContent = "📍 " + (dict[`${key}_area`] || "");
    });
    if (openItem) fillModal(openItem, l);
  }

  if (modal && modalClose) {
    modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (modal.hidden) return;
      if (e.key === "Escape") closeModal();
      // Keep keyboard focus inside the dialog
      if (e.key === "Tab") {
        e.preventDefault();
        modalClose.focus();
      }
    });
  }

  // ====== Init + language sync ======
  buildEvents();
  buildItems();
  addEventSliderButtons();
  startAutoScroll();

  updateEventsLang(lang());
  updateItemsLang(lang());

  document.addEventListener("languageChange", (e) => {
    const l = (e.detail && e.detail.lang) || "en";
    updateEventsLang(l);
    updateItemsLang(l);
  });
});
