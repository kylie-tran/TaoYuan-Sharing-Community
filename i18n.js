// ===============================
// 🌏 全站語言資料 (English / 繁體中文)
// ===============================
const i18nText = {
  en: {
    // ---- Site & navigation ----
    site_title: "Taoyuan Sharing Community",
    page_title_home: "Taoyuan Sharing Community — Free items shared by neighbours",
    home: "Home",
    nav_items: "Items",
    nav_events: "Events",
    nav_how: "How it works",
    nav_about: "About",
    menu: "Menu",
    login: "Log in",
    register: "Sign up",
    logout: "Log out",
    greeting: "Hi, {name}",
    close: "Close",

    // ---- Hero ----
    hero_eyebrow: "Taoyuan's community sharing platform",
    welcome_title: "Give what you don't need. Find what you do.",
    welcome_mission:
      "Free food, clothes, books and household items shared by neighbours across Taoyuan's 13 districts.",
    search_placeholder: "Search items, e.g. jacket, rice cooker",
    all_districts: "All districts",
    search_btn: "Search",
    cta_share: "Share an item",
    stat_items: "Items available",
    stat_districts: "Districts covered",
    stat_events: "Upcoming events",
    stat_categories: "Categories",

    // ---- How it works ----
    how_title: "How it works",
    how_sub: "Sharing takes less than a minute — and it's always free.",
    how1_title: "Post your item",
    how1_text: "Describe it, choose a category and set a pickup spot near you.",
    how2_title: "Get a request",
    how2_text: "Neighbours who need it send a request. You decide who receives it.",
    how3_title: "Meet and share",
    how3_text: "Hand it over at a public pickup spot. No fees, no selling — just sharing.",

    // ---- Items ----
    items_title: "Available items",
    items_sub: "Everything here is free. Request an item and the donor will contact you.",
    filter_search_label: "Search items",
    filter_district_label: "District",
    filter_sort_label: "Sort",
    cat_all: "All",
    cat_food: "Food",
    cat_clothes: "Clothes",
    cat_books: "Books",
    cat_furniture: "Furniture",
    cat_household: "Household",
    cat_kids: "Kids & toys",
    cat_others: "Others",
    sort_newest: "Newest first",
    sort_oldest: "Oldest first",
    sort_name: "Name (A–Z)",
    results_count: "{n} items found",
    results_count_one: "1 item found",
    no_results: "No items match your search. Try another keyword, category or district.",
    clear_filters: "Clear filters",
    cond_new: "New",
    cond_like_new: "Like new",
    cond_good: "Good",
    posted_today: "Today",
    posted_yesterday: "Yesterday",
    posted_days: "{n} days ago",
    your_listing: "Your listing",

    // ---- Item detail ----
    detail_condition: "Condition",
    detail_district: "District",
    detail_pickup: "Pickup location",
    detail_donor: "Shared by",
    detail_posted: "Posted",
    request_btn: "Request this item",
    request_login: "Log in to request",
    request_sent: "Request sent! {donor} will contact you by email.",
    request_already: "You've already requested this item.",
    own_item: "This is your listing.",
    delete_item: "Remove listing",

    // ---- Share form ----
    share_title: "Share an item",
    share_intro: "Listings are free. Please only share items that are clean and safe to use.",
    share_name: "Item name",
    share_name_ph: "e.g. Children's winter coat",
    share_category: "Category",
    share_condition: "Condition",
    share_district: "District",
    share_desc: "Description",
    share_desc_ph: "Size, brand, quantity, expiry date…",
    share_pickup: "Pickup location",
    share_pickup_ph: "e.g. Zhongli Station, north exit",
    share_image: "Photo URL (optional)",
    share_submit: "Publish item",
    share_cancel: "Cancel",
    share_login_needed: "Please log in or sign up to share an item.",
    share_success: "Thank you! Your item is now listed.",
    share_food_note: "Food must be unopened and within its expiry date.",

    // ---- Events ----
    events_title: "Upcoming events",
    events_sub: "Join a sharing day near you. All events are free and open to everyone.",
    event_free: "Free",
    no_events: "No upcoming events right now — check back soon.",

    // ---- Community ----
    donor_board: "Top sharers",
    donor_sub: "Neighbours who shared the most this year",
    donations: "{n} items",
    donor_footer: "Thank you for every act of kindness 💕",
    about_title: "About Taoyuan Sharing",
    about_content:
      "Taoyuan Sharing Community is a local, non-profit platform that helps people give new life to items they no longer need. Instead of throwing things away, we connect donors with neighbours who can use them — creating a cycle of kindness across Taoyuan.",
    mission_title: "Our mission",
    mission_content:
      "To build a sustainable and caring city where sharing replaces waste, and every unused item finds a new home.",
    faq_title: "Frequently asked questions",
    qa1_q: "Who can join the community?",
    qa1_a: "Anyone living or working in Taoyuan who wants to share or receive items.",
    qa2_q: "How do I donate an item?",
    qa2_a: "Sign up, click “Share an item”, fill in the details and publish. Neighbours can then request it.",
    qa3_q: "Is everything really free?",
    qa3_a: "Yes. Selling is not allowed — every item is given away free of charge.",
    qa4_q: "What can't I share?",
    qa4_a: "Opened or expired food, medicine, weapons, and anything illegal or unsafe.",
    qa5_q: "How do I stay safe when meeting?",
    qa5_a: "Meet in public places such as stations, libraries or community centers, preferably during the day.",

    // ---- CTA & footer ----
    cta_title: "Have something you no longer need?",
    cta_text: "Give it a second life — someone in Taoyuan is looking for it.",
    footer_about:
      "A non-profit community platform connecting neighbours in Taoyuan to share instead of waste.",
    footer_explore: "Explore",
    footer_account: "Account",
    footer_contact: "Contact",
    footer_feedback: "Send feedback on GitHub",
    footer_rights: "© 2026 Taoyuan Sharing Community.",
    footer_demo: "Demo version: accounts and listings are saved only in your browser.",

    // ---- Districts ----
    district_taoyuan: "Taoyuan", district_zhongli: "Zhongli", district_pingzhen: "Pingzhen",
    district_bade: "Bade", district_yangmei: "Yangmei", district_luzhu: "Luzhu",
    district_dayuan: "Dayuan", district_guishan: "Guishan", district_daxi: "Daxi",
    district_guanyin: "Guanyin", district_xinwu: "Xinwu", district_longtan: "Longtan",
    district_fuxing: "Fuxing",
    select_placeholder: "-- Please select --",

    // ---- Login ----
    login_page_title: "Log in — Taoyuan Sharing Community",
    login_heading: "Welcome back",
    login_sub: "Log in to request and share items.",
    login_email_label: "Email",
    login_password_label: "Password",
    login_button: "Log in",
    login_no_account: "Don’t have an account?",
    go_register: "Sign up",
    back_home: "← Back to home",

    // ---- Register ----
    register_page_title: "Sign up — Taoyuan Sharing Community",
    register_heading: "Create your account",
    register_sub: "Join neighbours across Taoyuan who share instead of waste.",
    reg_name_label: "Your name",
    reg_password_label: "Password",
    reg_area_label: "Your district",
    reg_email_label: "Email",
    reg_phone_label: "Phone number",
    register_button: "Create account",
    register_have_account: "Already have an account?",
    go_login: "Log in",
    password_hint: "At least 6 characters",

    // ---- Auth messages ----
    err_email_taken: "This email is already registered. Please log in instead.",
    err_password_short: "Password must be at least 6 characters.",
    err_login_failed: "Incorrect email or password.",
    ok_registered: "Welcome to Taoyuan Sharing Community, {name}! Redirecting…",
    ok_logged_in: "Welcome back, {name}! Redirecting…",
    demo_notice: "Demo mode: accounts are saved only in this browser.",
  },

  zh: {
    // ---- Site & navigation ----
    site_title: "桃園共享社區",
    page_title_home: "桃園共享社區 — 鄰里免費物資分享平台",
    home: "首頁",
    nav_items: "物資",
    nav_events: "活動",
    nav_how: "如何運作",
    nav_about: "關於我們",
    menu: "選單",
    login: "登入",
    register: "註冊",
    logout: "登出",
    greeting: "嗨，{name}",
    close: "關閉",

    // ---- Hero ----
    hero_eyebrow: "桃園在地共享平台",
    welcome_title: "把用不到的，送給用得到的人",
    welcome_mission: "桃園 13 區鄰居互相分享的免費食物、衣物、書籍與生活用品。",
    search_placeholder: "搜尋物資，例如：外套、電子鍋",
    all_districts: "所有地區",
    search_btn: "搜尋",
    cta_share: "分享物資",
    stat_items: "可索取物資",
    stat_districts: "服務地區",
    stat_events: "近期活動",
    stat_categories: "物資分類",

    // ---- How it works ----
    how_title: "如何運作",
    how_sub: "一分鐘就能完成分享，而且永遠免費。",
    how1_title: "刊登物品",
    how1_text: "描述物品、選擇分類，並設定你附近的面交地點。",
    how2_title: "收到申請",
    how2_text: "有需要的鄰居會送出索取申請，由你決定送給誰。",
    how3_title: "面交分享",
    how3_text: "在公共場所交付物品。不收費、不買賣，只有分享。",

    // ---- Items ----
    items_title: "可索取物資",
    items_sub: "這裡的物資全部免費。送出索取申請，捐贈者會與你聯絡。",
    filter_search_label: "搜尋物資",
    filter_district_label: "地區",
    filter_sort_label: "排序",
    cat_all: "全部",
    cat_food: "食物",
    cat_clothes: "衣物",
    cat_books: "書籍",
    cat_furniture: "家具",
    cat_household: "生活用品",
    cat_kids: "兒童與玩具",
    cat_others: "其他",
    sort_newest: "最新刊登",
    sort_oldest: "最早刊登",
    sort_name: "名稱排序",
    results_count: "共 {n} 件物資",
    results_count_one: "共 1 件物資",
    no_results: "找不到符合的物資，請換個關鍵字、分類或地區試試。",
    clear_filters: "清除篩選",
    cond_new: "全新",
    cond_like_new: "近全新",
    cond_good: "良好",
    posted_today: "今天",
    posted_yesterday: "昨天",
    posted_days: "{n} 天前",
    your_listing: "你的刊登",

    // ---- Item detail ----
    detail_condition: "物品狀況",
    detail_district: "地區",
    detail_pickup: "面交地點",
    detail_donor: "分享者",
    detail_posted: "刊登時間",
    request_btn: "申請索取",
    request_login: "登入後即可申請",
    request_sent: "已送出申請！{donor} 會透過電子郵件與你聯絡。",
    request_already: "你已申請過這件物資。",
    own_item: "這是你刊登的物資。",
    delete_item: "下架物資",

    // ---- Share form ----
    share_title: "分享物資",
    share_intro: "刊登完全免費。請只分享乾淨、安全可使用的物品。",
    share_name: "物品名稱",
    share_name_ph: "例如：兒童冬季外套",
    share_category: "分類",
    share_condition: "物品狀況",
    share_district: "地區",
    share_desc: "描述",
    share_desc_ph: "尺寸、品牌、數量、有效期限…",
    share_pickup: "面交地點",
    share_pickup_ph: "例如：中壢車站北站出口",
    share_image: "照片網址（選填）",
    share_submit: "刊登物資",
    share_cancel: "取消",
    share_login_needed: "請先登入或註冊，才能分享物資。",
    share_success: "謝謝你！物資已成功刊登。",
    share_food_note: "食物須未開封且在有效期限內。",

    // ---- Events ----
    events_title: "近期活動",
    events_sub: "參加你附近的分享活動，所有活動皆免費開放。",
    event_free: "免費",
    no_events: "目前沒有近期活動，請稍後再來看看。",

    // ---- Community ----
    donor_board: "分享排行榜",
    donor_sub: "今年分享最多的鄰居",
    donations: "{n} 件",
    donor_footer: "感謝每一份善意 💕",
    about_title: "關於桃園共享社區",
    about_content:
      "桃園共享社區是一個在地的非營利平台，幫助大家為用不到的物品找到新主人。我們不把東西丟掉，而是連結捐贈者與需要的鄰居，讓善意在桃園持續流動。",
    mission_title: "我們的使命",
    mission_content: "打造一座永續、有溫度的城市，讓分享取代浪費，讓每一件閒置物品都能找到新的家。",
    faq_title: "常見問題",
    qa1_q: "誰可以加入這個社群？",
    qa1_a: "只要住在或在桃園工作、想分享或需要物資的朋友，都歡迎加入。",
    qa2_q: "我要怎麼捐贈物品？",
    qa2_a: "註冊後點選「分享物資」，填寫資料並刊登，鄰居就能提出申請。",
    qa3_q: "真的完全免費嗎？",
    qa3_a: "是的。平台禁止買賣，所有物資都是免費贈送。",
    qa4_q: "哪些東西不能分享？",
    qa4_a: "已開封或過期的食物、藥品、武器，以及任何違法或不安全的物品。",
    qa5_q: "面交時如何確保安全？",
    qa5_a: "請約在車站、圖書館或活動中心等公共場所，並盡量選擇白天。",

    // ---- CTA & footer ----
    cta_title: "有用不到的東西嗎？",
    cta_text: "讓它展開第二段旅程——桃園有人正在尋找它。",
    footer_about: "一個非營利社區平台，連結桃園鄰居，以分享取代浪費。",
    footer_explore: "探索",
    footer_account: "帳號",
    footer_contact: "聯絡我們",
    footer_feedback: "在 GitHub 提供意見",
    footer_rights: "© 2026 桃園共享社區",
    footer_demo: "示範版本：帳號與刊登資料只會儲存在你的瀏覽器中。",

    // ---- Districts ----
    district_taoyuan: "桃園區", district_zhongli: "中壢區", district_pingzhen: "平鎮區",
    district_bade: "八德區", district_yangmei: "楊梅區", district_luzhu: "蘆竹區",
    district_dayuan: "大園區", district_guishan: "龜山區", district_daxi: "大溪區",
    district_guanyin: "觀音區", district_xinwu: "新屋區", district_longtan: "龍潭區",
    district_fuxing: "復興區",
    select_placeholder: "-- 請選擇 --",

    // ---- Login ----
    login_page_title: "登入 — 桃園共享社區",
    login_heading: "歡迎回來",
    login_sub: "登入後即可申請與分享物資。",
    login_email_label: "電子郵件",
    login_password_label: "密碼",
    login_button: "登入",
    login_no_account: "還沒有帳號嗎？",
    go_register: "立即註冊",
    back_home: "← 回到首頁",

    // ---- Register ----
    register_page_title: "註冊 — 桃園共享社區",
    register_heading: "建立你的帳號",
    register_sub: "加入桃園各地以分享取代浪費的鄰居們。",
    reg_name_label: "姓名",
    reg_password_label: "密碼",
    reg_area_label: "所在地區",
    reg_email_label: "電子郵件",
    reg_phone_label: "電話",
    register_button: "建立帳號",
    register_have_account: "已經有帳號了嗎？",
    go_login: "前往登入",
    password_hint: "至少 6 個字元",

    // ---- Auth messages ----
    err_email_taken: "此電子郵件已註冊，請直接登入。",
    err_password_short: "密碼至少需要 6 個字元。",
    err_login_failed: "電子郵件或密碼錯誤。",
    ok_registered: "歡迎加入桃園共享社區，{name}！正在跳轉…",
    ok_logged_in: "歡迎回來，{name}！正在跳轉…",
    demo_notice: "示範模式：帳號只會儲存在這個瀏覽器中。",
  },
};

// 取得目前語言
function getCurrentLang() {
  try {
    const lang = localStorage.getItem("lang");
    return lang && i18nText[lang] ? lang : "en";
  } catch (e) {
    return "en";
  }
}

// 取得翻譯文字（支援 {name} 這類變數）
function t(key, vars = {}, lang = getCurrentLang()) {
  const dict = i18nText[lang] || i18nText.en;
  let text = dict[key] ?? i18nText.en[key] ?? key;
  for (const [k, v] of Object.entries(vars)) text = text.replace(`{${k}}`, v);
  return text;
}

// ===============================
// 🌏 套用語言到所有 data-i18n
// ===============================
function applyLanguage(lang) {
  if (!i18nText[lang]) lang = "en";
  const dict = i18nText[lang];

  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";

  // 更新所有 data-i18n 元素（包含 <title>）
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  // 更新 placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  // 更新 aria-label
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    if (dict[key]) el.setAttribute("aria-label", dict[key]);
  });

  // 標示目前語言按鈕
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  try {
    localStorage.setItem("lang", lang);
  } catch (e) {}

  // 通知其他 JS（例如 index.js）語言已變更
  document.dispatchEvent(new CustomEvent("languageChange", { detail: { lang } }));
}

// ===============================
// 🌏 初始化語言 + 綁定按鈕
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
  applyLanguage(getCurrentLang());
});
