// ===============================
// 📦 Site content: categories, sample listings, events, top sharers
// Text fields are { en, zh }. Listings people post are stored in the browser.
// ===============================
const UNSPLASH = (id, w = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=70`;
const UNSPLASH_PLUS = (id, w = 600) =>
  `https://plus.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=70`;

const CATEGORIES = [
  { id: "food", icon: "🍎", color: "#fde3cf" },
  { id: "clothes", icon: "👕", color: "#dcecfb" },
  { id: "books", icon: "📚", color: "#e6e0fa" },
  { id: "furniture", icon: "🪑", color: "#efe4d6" },
  { id: "household", icon: "🏠", color: "#dff3e6" },
  { id: "kids", icon: "🧸", color: "#fde0ea" },
  { id: "others", icon: "✨", color: "#f1f1ec" },
];

const DISTRICTS = [
  "taoyuan", "zhongli", "pingzhen", "bade", "yangmei", "luzhu", "dayuan",
  "guishan", "daxi", "guanyin", "xinwu", "longtan", "fuxing",
];

const SEED_ITEMS = [
  {
    id: "s1", cat: "household", condition: "like_new", district: "taoyuan", posted: "2026-11-17",
    img: UNSPLASH("photo-1677591276151-e11ed2e307c6"),
    name: { en: "Colour dish set (6 pcs)", zh: "彩色餐盤組（6 件）" },
    desc: {
      en: "Japanese brand ceramic plates, used only a few times. No chips or cracks. Dishwasher safe.",
      zh: "日本品牌陶瓷餐盤，只用過幾次，無缺角或裂痕，可用洗碗機清洗。",
    },
    donor: { en: "Mr. Lin", zh: "林先生" },
    pickup: { en: "Taoyuan Station, front exit", zh: "桃園車站前站出口" },
  },
  {
    id: "s2", cat: "books", condition: "good", district: "pingzhen", posted: "2026-11-16",
    img: UNSPLASH("photo-1512820790803-83ca734da794"),
    name: { en: "Self-help book collection (8 books)", zh: "勵志書籍套組（8 本）" },
    desc: {
      en: "Eight self-help and personal growth books, mostly in Chinese. Well kept, a few notes in pencil.",
      zh: "八本勵志與個人成長書籍，大多為中文版，保存良好，少數頁面有鉛筆筆記。",
    },
    donor: { en: "Ms. Chen", zh: "陳小姐" },
    pickup: { en: "Pingzhen Library", zh: "平鎮圖書館" },
  },
  {
    id: "s3", cat: "clothes", condition: "good", district: "zhongli", posted: "2026-11-15",
    img: UNSPLASH("photo-1711527124424-463764d8d8e5"),
    name: { en: "Warm winter jacket (size M)", zh: "保暖冬季外套（M 號）" },
    desc: {
      en: "Padded navy jacket, men's size M. Washed and ready to wear for the cold season.",
      zh: "深藍色鋪棉外套，男生 M 號，已清洗乾淨，冬天即可穿。",
    },
    donor: { en: "Mr. Wang", zh: "王先生" },
    pickup: { en: "Zhongli Station, north exit", zh: "中壢車站北站出口" },
  },
  {
    id: "s4", cat: "food", condition: "new", district: "bade", posted: "2026-11-17",
    img: UNSPLASH("photo-1719274868535-9f4af7296306"),
    name: { en: "Box of fresh apples (about 5 kg)", zh: "新鮮蘋果一箱（約 5 公斤）" },
    desc: {
      en: "Fresh apples from a family farm — more than we can eat. Please pick up within 3 days.",
      zh: "家裡農場的新鮮蘋果，吃不完分享給大家，請於 3 天內取件。",
    },
    donor: { en: "Ms. Lee", zh: "李小姐" },
    pickup: { en: "Bade Activity Center", zh: "八德活動中心" },
  },
  {
    id: "s5", cat: "kids", condition: "good", district: "guishan", posted: "2026-11-14",
    img: "",
    name: { en: "Wooden building blocks (100 pcs)", zh: "木製積木（100 塊）" },
    desc: {
      en: "Natural wood blocks for ages 2+, in a storage box. All pieces included.",
      zh: "天然木製積木，適合 2 歲以上，附收納盒，零件齊全。",
    },
    donor: { en: "Mr. Tanaka", zh: "田中先生" },
    pickup: { en: "Guishan District Office", zh: "龜山區公所" },
  },
  {
    id: "s6", cat: "furniture", condition: "good", district: "luzhu", posted: "2026-11-12",
    img: "",
    name: { en: "Small bookshelf (3 shelves)", zh: "小型書櫃（三層）" },
    desc: {
      en: "White bookshelf, 60 × 30 × 90 cm. Light scratches on top. Bring a car for pickup.",
      zh: "白色書櫃，60 × 30 × 90 公分，上方有輕微刮痕，需自行開車載運。",
    },
    donor: { en: "Ms. Huang", zh: "黃小姐" },
    pickup: { en: "Nankan, near Luzhu Junior High", zh: "南崁，蘆竹國中附近" },
  },
  {
    id: "s7", cat: "household", condition: "like_new", district: "longtan", posted: "2026-11-11",
    img: "",
    name: { en: "Rice cooker (6 cups)", zh: "電子鍋（6 人份）" },
    desc: {
      en: "Works perfectly. We received a second one as a gift. Includes measuring cup and spatula.",
      zh: "功能完全正常，因收到禮物多出一台，附量杯與飯匙。",
    },
    donor: { en: "Mr. Chang", zh: "張先生" },
    pickup: { en: "Longtan Lake parking lot", zh: "龍潭大池停車場" },
  },
  {
    id: "s8", cat: "food", condition: "new", district: "yangmei", posted: "2026-11-13",
    img: "",
    name: { en: "Unopened rice & noodles pack", zh: "未開封白米與麵條組" },
    desc: {
      en: "2 kg bag of rice and 4 packs of dried noodles, all unopened. Best before March 2027.",
      zh: "白米 2 公斤一包與乾麵 4 包，全部未開封，有效期限至 2027 年 3 月。",
    },
    donor: { en: "Ms. Wu", zh: "吳小姐" },
    pickup: { en: "Yangmei Station", zh: "楊梅車站" },
  },
];

const EVENTS = [
  {
    date: "2026-12-06", time: "09:00 – 12:00", district: "taoyuan",
    img: UNSPLASH_PLUS("premium_photo-1754341357839-a11120163778"),
    title: { en: "Community Food Sharing Day", zh: "社區食物分享日" },
    place: { en: "Taoyuan Arts Plaza", zh: "桃園藝文廣場" },
    desc: { en: "Bring unopened food and take what you need.", zh: "帶來未開封的食物，帶走你需要的。" },
  },
  {
    date: "2026-12-13", time: "10:00 – 16:00", district: "zhongli",
    img: UNSPLASH("photo-1591171550305-7faf12e39a27"),
    title: { en: "Book Donation Drive", zh: "愛心書籍捐贈活動" },
    place: { en: "Zhongli Library", zh: "中壢圖書館" },
    desc: { en: "Children's books and textbooks especially welcome.", zh: "特別歡迎童書與教科書。" },
  },
  {
    date: "2026-12-20", time: "13:00 – 17:00", district: "pingzhen",
    img: UNSPLASH_PLUS("premium_photo-1676587710768-3c36f6aa9fdd"),
    title: { en: "Winter Clothes Swap", zh: "冬季舊衣交換日" },
    place: { en: "Pingzhen Activity Center", zh: "平鎮活動中心" },
    desc: { en: "Swap clean winter clothes, jackets and blankets.", zh: "交換乾淨的冬衣、外套與毛毯。" },
  },
  {
    date: "2027-01-10", time: "10:00 – 15:00", district: "bade",
    img: UNSPLASH("photo-1515488042361-ee00e0ddd4e4"),
    title: { en: "Toy Donation Week", zh: "玩具捐贈週" },
    place: { en: "Bade Activity Center", zh: "八德活動中心" },
    desc: { en: "Give toys a second home before the Lunar New Year.", zh: "在農曆新年前，讓玩具找到新主人。" },
  },
];

const TOP_SHARERS = [
  { name: { en: "Mr. Lin", zh: "林先生" }, district: "taoyuan", count: 25 },
  { name: { en: "Ms. Chen", zh: "陳小姐" }, district: "pingzhen", count: 18 },
  { name: { en: "Mr. Wang", zh: "王先生" }, district: "zhongli", count: 15 },
  { name: { en: "Ms. Lee", zh: "李小姐" }, district: "bade", count: 12 },
  { name: { en: "Mr. Tanaka", zh: "田中先生" }, district: "guishan", count: 9 },
];
