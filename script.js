/* ===== Gemzo Car Rental - site script ===== */

/* ---------- Settings: edit these ---------- */
const WHATSAPP_NUMBER = "970595552277"; // bookings go to this WhatsApp (0595552277)
const DEFAULT_LANG = "ar";              // "ar" or "en"

/* ---------- Fleet: edit cars and photos here ----------
   category: suv | convertible | sedan
   transmission: automatic | manual      fuel: gasoline | diesel | hybrid
   image: a file in images/cars/                                            */
const FLEET = [
  { id: "g63",              name: "Mercedes-AMG G63",          category: "suv",         transmission: "automatic", fuel: "gasoline", seats: 5, image: "images/cars/g63.jpg" },
  { id: "range-rover-svr",  name: "Range Rover Sport SVR",     category: "suv",         transmission: "automatic", fuel: "gasoline", seats: 5, image: "images/cars/range-rover-svr.jpg" },
  { id: "range-rover",      name: "Range Rover Sport",         category: "suv",         transmission: "automatic", fuel: "gasoline", seats: 5, image: "images/cars/range-rover-blue.jpg" },
  { id: "range-rover-svr-white", name: "Range Rover Sport SVR (White)", category: "suv", transmission: "automatic", fuel: "gasoline", seats: 5, image: "images/cars/range-rover-svr-white.jpg" },
  { id: "bmw-x5", name: "BMW X5", category: "suv", transmission: "automatic", fuel: "hybrid", seats: 5, image: "images/cars/bmw-x5.jpg" },
  { id: "jeep-rubicon", name: "Jeep Wrangler Rubicon", category: "suv", transmission: "automatic", fuel: "gasoline", seats: 5, image: "images/cars/jeep-rubicon.jpg" },
  { id: "hyundai-santafe", name: "Hyundai Santa Fe", category: "suv", transmission: "automatic", fuel: "gasoline", seats: 7, image: "images/cars/hyundai-santafe.jpg" },
  { id: "kia-stonic", name: "Kia Stonic", category: "suv", transmission: "automatic", fuel: "gasoline", seats: 5, image: "images/cars/kia-stonic.jpg" },
  { id: "e-class-cabrio",   name: "Mercedes E-Class Cabriolet",category: "convertible", transmission: "automatic", fuel: "gasoline", seats: 4, image: "images/cars/e-class-cabrio.jpg" },
  { id: "c-class-cabrio",   name: "Mercedes C-Class Cabriolet",category: "convertible", transmission: "automatic", fuel: "gasoline", seats: 4, image: "images/cars/c-class-cabrio.jpg" },
  { id: "m4-g83",           name: "BMW M4 Convertible",        category: "convertible", transmission: "automatic", fuel: "gasoline", seats: 4, image: "images/cars/m4-g83.jpg" },
  { id: "m4-f83",           name: "BMW M4 Convertible (F83)",  category: "convertible", transmission: "automatic", fuel: "gasoline", seats: 4, image: "images/cars/m4-cabrio.jpg" },
  { id: "bmw-4-cabrio",     name: "BMW 4 Series Convertible",  category: "convertible", transmission: "automatic", fuel: "gasoline", seats: 4, image: "images/cars/bmw-4-cabrio.jpg" },
  { id: "c-class-cabrio-white", name: "Mercedes C-Class Cabriolet (White)", category: "convertible", transmission: "automatic", fuel: "gasoline", seats: 4, image: "images/cars/c-class-cabrio-white.jpg" },
  { id: "bmw-4-cabrio-red", name: "BMW 4 Series Convertible (Red Interior)", category: "convertible", transmission: "automatic", fuel: "gasoline", seats: 4, image: "images/cars/bmw-4-cabrio-red.jpg" },
  { id: "bmw-4-cabrio-night", name: "BMW 4 Series Convertible (Tan Interior)", category: "convertible", transmission: "automatic", fuel: "gasoline", seats: 4, image: "images/cars/bmw-4-cabrio-night.jpg" },
  { id: "bmw-5",            name: "BMW 5 Series",              category: "sedan",       transmission: "automatic", fuel: "gasoline", seats: 5, image: "images/cars/bmw-5.jpg" },
  { id: "c-class-sedan", name: "Mercedes C-Class", category: "sedan", transmission: "automatic", fuel: "gasoline", seats: 5, image: "images/cars/c-class-sedan.jpg" },
  { id: "mercedes-cla", name: "Mercedes CLA", category: "sedan", transmission: "automatic", fuel: "gasoline", seats: 5, image: "images/cars/mercedes-cla.jpg" },
  { id: "nissan-sentra", name: "Nissan Sentra", category: "sedan", transmission: "automatic", fuel: "gasoline", seats: 5, image: "images/cars/nissan-sentra-white.jpg",
    colors: [
      { key: "white", hex: "#f2f2f2", image: "images/cars/nissan-sentra-white.jpg" },
      { key: "grey",  hex: "#6b6d70", image: "images/cars/nissan-sentra-grey.jpg" },
      { key: "red",   hex: "#a3121c", image: "images/cars/nissan-sentra-red.jpg" }
    ] },
  { id: "kia-cerato", name: "Kia Cerato", category: "sedan", transmission: "automatic", fuel: "gasoline", seats: 5, image: "images/cars/kia-cerato.jpg" },
  { id: "hyundai-accent", name: "Hyundai Accent", category: "sedan", transmission: "automatic", fuel: "gasoline", seats: 5, image: "images/cars/hyundai-accent.jpg" }
];

/* ---------- Translations ---------- */
const I18N = {
  en: {
    "nav.home": "Home", "nav.fleet": "Fleet", "nav.about": "About", "nav.booking": "Booking", "nav.contact": "Contact", "nav.faq": "FAQ",
    "hero.title1": "Drive With", "hero.title2": "Luxury & Confidence",
    "hero.text": "Premium car rental services in Ramallah with affordable prices and exceptional customer service.",
    "hero.book": "Book Now", "hero.whatsapp": "WhatsApp Us",
    "hl.1t": "Full Insurance", "hl.1d": "Every car is insured and licensed",
    "hl.2t": "Fast Reply", "hl.2d": "We answer quickly on WhatsApp",
    "hl.3t": "Wedding Cars", "hl.3d": "Luxury cars for your big day",
    "hl.4t": "Fast Booking", "hl.4d": "Book in minutes on WhatsApp",
    "fleet.title": "Premium Fleet", "fleet.sub": "Luxury SUVs, convertibles and sedans for weddings, special occasions and trips.", "fleet.all": "All",
    "cat.suv": "SUV", "cat.convertible": "Convertible", "cat.sedan": "Sedan",
    "spec.automatic": "Automatic", "spec.manual": "Manual", "spec.gasoline": "Gasoline", "spec.diesel": "Diesel", "spec.hybrid": "Hybrid",
    "spec.seats": "Seats", "spec.ac": "A/C", "color.white": "White", "color.grey": "Grey", "color.red": "Red", "wa.color": "Color", "card.book": "Book Now",
    "about.title": "About Gemzo", "about.badge": "Ramallah's trusted car rental",
    "about.p1": "Gemzo Car Rental is a car rental company based in Ein Misbah, Ramallah. We offer a clean, modern and well-maintained fleet for personal trips, business travel, weddings and visitors to Palestine.",
    "about.p2": "Our goal is simple: a great car, a fair price and fast, friendly service from the first message to the moment you return the keys.",
    "about.s1": "Happy customers", "about.s2": "Cars in the fleet", "about.s3": "Working hours",
    "about.c1": "Clean, sanitized cars checked before every rental", "about.c2": "Cars ready for weddings and special occasions", "about.c3": "Flexible pickup and return times",
    "book.title": "Book Your Car", "book.sub": "Fill in the form and we'll receive your request directly on WhatsApp. We confirm availability within minutes.",
    "book.s1t": "Choose a car", "book.s1d": "Pick from our fleet and your dates.",
    "book.s2t": "Send on WhatsApp", "book.s2d": "Your request opens in WhatsApp, ready to send.",
    "book.s3t": "Pick up and drive", "book.s3d": "Bring your ID and driving license. That's it.",
    "form.name": "Full name", "form.namePh": "Your name", "form.phone": "Phone number", "form.car": "Car", "form.chooseCar": "Choose a car",
    "form.pickup": "Pickup date", "form.return": "Return date",
    "form.notes": "Notes", "form.notesPh": "Anything we should know?", "form.submit": "Send Booking on WhatsApp",
    "form.err": "Please fill in your name, phone, car and dates.", "form.errDates": "The return date must be after the pickup date.",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "What do I need to rent a car?", "faq.a1": "A valid ID card or passport and a valid driving license. A deposit may be required depending on the car.",
    "faq.q2": "What is the minimum age to rent?", "faq.a2": "Drivers must be at least 21 years old with a license held for at least one year. Some luxury cars require 25+.",
    "faq.q3": "Is insurance included?", "faq.a3": "Yes. All our cars are licensed and insured. Ask us about extra coverage options.",
    "faq.q4": "How do I book a car?", "faq.a4": "Fill in the booking form on this page or message us on WhatsApp. We confirm availability within minutes, then you pick up the car from our office in Ein Misbah.",
    "faq.q5": "Do you offer weekly or monthly rentals?", "faq.a5": "Yes. Longer rentals get special prices. Message us on WhatsApp for an offer.",
    "faq.q6": "How do I pay?", "faq.a6": "Cash or bank transfer when you pick up the car. Contact us for other payment methods.",
    "contact.title": "Contact Us", "contact.phone": "Call us", "contact.wa": "WhatsApp", "contact.address": "Address",
    "contact.addr": "Ramallah - Ein Misbah - Main Street - Bastami Complex",
    "contact.hours": "Working hours", "contact.hoursVal": "Every day, 10:00 AM - 5:00 PM", "contact.directions": "Get Directions",
    "footer.about": "Premium car rental in Ramallah. Luxury SUVs, convertibles and wedding cars.",
    "footer.links": "Quick Links", "footer.contact": "Contact", "footer.fb": "Follow us on Facebook", "footer.rights": "All rights reserved.",
    "wa.intro": "Hello Gemzo, I'd like to book a car:", "wa.name": "Name", "wa.phone": "Phone", "wa.car": "Car",
    "wa.from": "From", "wa.to": "To", "wa.days": "Days", "wa.loc": "Pickup", "wa.notes": "Notes",
    "lang.btn": "AR", "title": "Gemzo Car Rental | Ramallah"
  },
  ar: {
    "nav.home": "الرئيسية", "nav.fleet": "السيارات", "nav.about": "من نحن", "nav.booking": "الحجز", "nav.contact": "تواصل معنا", "nav.faq": "الأسئلة الشائعة",
    "hero.title1": "قُد بكل", "hero.title2": "فخامة وثقة",
    "hero.text": "خدمات تأجير سيارات مميزة في رام الله بأسعار مناسبة وخدمة عملاء استثنائية.",
    "hero.book": "احجز الآن", "hero.whatsapp": "راسلنا واتساب",
    "hl.1t": "تأمين شامل", "hl.1d": "جميع السيارات مؤمنة ومرخصة",
    "hl.2t": "رد سريع", "hl.2d": "نرد عليك بسرعة على الواتساب",
    "hl.3t": "سيارات أعراس", "hl.3d": "سيارات فخمة ليومكم المميز",
    "hl.4t": "حجز سريع", "hl.4d": "احجز خلال دقائق عبر الواتساب",
    "fleet.title": "أسطول السيارات", "fleet.sub": "سيارات جيب فاخرة وسيارات مكشوفة وسيدان للأعراس والمناسبات والرحلات.", "fleet.all": "الكل",
    "cat.suv": "جيب", "cat.convertible": "مكشوفة", "cat.sedan": "سيدان",
    "spec.automatic": "أوتوماتيك", "spec.manual": "عادي", "spec.gasoline": "بنزين", "spec.diesel": "ديزل", "spec.hybrid": "هايبرد",
    "spec.seats": "مقاعد", "spec.ac": "مكيف", "color.white": "أبيض", "color.grey": "رمادي", "color.red": "أحمر", "wa.color": "اللون", "card.book": "احجز الآن",
    "about.title": "من نحن", "about.badge": "شركة تأجير السيارات الموثوقة في رام الله",
    "about.p1": "جمزو لتأجير السيارات شركة تأجير سيارات مقرها عين مصباح في رام الله. نوفر أسطولاً نظيفاً وحديثاً ومُعتنى به للرحلات الشخصية ورحلات العمل والأعراس وزوار فلسطين.",
    "about.p2": "هدفنا بسيط: سيارة ممتازة، سعر عادل، وخدمة سريعة وودودة من أول رسالة حتى تسليم المفتاح.",
    "about.s1": "عميل سعيد", "about.s2": "سيارة في الأسطول", "about.s3": "ساعات الدوام",
    "about.c1": "سيارات نظيفة ومعقمة يتم فحصها قبل كل تأجير", "about.c2": "سيارات جاهزة للأعراس والمناسبات", "about.c3": "مرونة في مواعيد الاستلام والإرجاع",
    "book.title": "احجز سيارتك", "book.sub": "املأ النموذج وسيصلنا طلبك مباشرة على الواتساب. نؤكد التوفر خلال دقائق.",
    "book.s1t": "اختر السيارة", "book.s1d": "اختر من أسطولنا وحدد التواريخ.",
    "book.s2t": "أرسل عبر واتساب", "book.s2d": "يُفتح طلبك في واتساب جاهزاً للإرسال.",
    "book.s3t": "استلم وانطلق", "book.s3d": "أحضر الهوية ورخصة القيادة فقط.",
    "form.name": "الاسم الكامل", "form.namePh": "اسمك", "form.phone": "رقم الهاتف", "form.car": "السيارة", "form.chooseCar": "اختر السيارة",
    "form.pickup": "تاريخ الاستلام", "form.return": "تاريخ الإرجاع",
    "form.notes": "ملاحظات", "form.notesPh": "هل هناك ما يجب أن نعرفه؟", "form.submit": "أرسل الحجز عبر واتساب",
    "form.err": "يرجى تعبئة الاسم ورقم الهاتف والسيارة والتواريخ.", "form.errDates": "يجب أن يكون تاريخ الإرجاع بعد تاريخ الاستلام.",
    "faq.title": "الأسئلة الشائعة",
    "faq.q1": "ما الذي أحتاجه لاستئجار سيارة؟", "faq.a1": "هوية سارية أو جواز سفر ورخصة قيادة سارية. قد يُطلب تأمين (عربون) حسب نوع السيارة.",
    "faq.q2": "ما هو الحد الأدنى للعمر؟", "faq.a2": "يجب ألا يقل عمر السائق عن 21 عاماً ومضى على رخصته سنة على الأقل. بعض السيارات الفاخرة تتطلب 25 عاماً فأكثر.",
    "faq.q3": "هل التأمين مشمول؟", "faq.a3": "نعم، جميع سياراتنا مرخصة ومؤمنة. اسألنا عن خيارات التغطية الإضافية.",
    "faq.q4": "كيف أحجز سيارة؟", "faq.a4": "عبّي نموذج الحجز بهالصفحة أو راسلنا على الواتساب. منأكدلك التوفر خلال دقائق، وبتستلم السيارة من مكتبنا في عين مصباح.",
    "faq.q5": "هل لديكم تأجير أسبوعي أو شهري؟", "faq.a5": "نعم، الإيجارات الطويلة لها أسعار خاصة. راسلنا على الواتساب للحصول على عرض.",
    "faq.q6": "كيف يتم الدفع؟", "faq.a6": "نقداً أو بتحويل بنكي عند استلام السيارة. تواصل معنا لطرق دفع أخرى.",
    "contact.title": "تواصل معنا", "contact.phone": "اتصل بنا", "contact.wa": "واتساب", "contact.address": "العنوان",
    "contact.addr": "رام الله - عين مصباح - الشارع الرئيسي - مجمع البسطامي",
    "contact.hours": "ساعات العمل", "contact.hoursVal": "يومياً من 10:00 صباحاً حتى 5:00 مساءً", "contact.directions": "احصل على الاتجاهات",
    "footer.about": "تأجير سيارات مميز في رام الله. سيارات جيب فاخرة وسيارات مكشوفة وسيارات أعراس.",
    "footer.links": "روابط سريعة", "footer.contact": "تواصل", "footer.fb": "تابعنا على فيسبوك", "footer.rights": "جميع الحقوق محفوظة.",
    "wa.intro": "مرحباً جمزو، أرغب بحجز سيارة:", "wa.name": "الاسم", "wa.phone": "الهاتف", "wa.car": "السيارة",
    "wa.from": "من", "wa.to": "إلى", "wa.days": "عدد الأيام", "wa.loc": "الاستلام", "wa.notes": "ملاحظات",
    "lang.btn": "EN", "title": "جمزو لتأجير السيارات | رام الله"
  }
};

/* ---------- Icons ---------- */
const ICONS = {
  gear: '<svg viewBox="0 0 24 24"><path d="M3.5 15a9 9 0 1 1 17 0"/><path d="m12 13 4-5"/><circle cx="12" cy="13" r="1"/></svg>',
  fuel: '<svg viewBox="0 0 24 24"><path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16M3 21h13M4 10h11"/><path d="M15 8h2a2 2 0 0 1 2 2v6a1.5 1.5 0 0 0 3 0V9l-3-3"/></svg>',
  seats: '<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/></svg>',
  ac: '<svg viewBox="0 0 24 24"><path d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11"/><path d="m9 4 3 2 3-2M9 20l3-2 3 2"/></svg>'
};

let lang = "en";
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const t = (key) => (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;

/* ---------- Render fleet ---------- */
function renderFleet() {
  const grid = $("#fleetGrid");
  const activeFilter = ($(".filter.active") || {}).dataset?.filter || "all";
  grid.innerHTML = FLEET.map(car => `
    <article class="car-card reveal ${activeFilter !== "all" && activeFilter !== car.category ? "hide" : ""}" data-category="${car.category}">
      <div class="car-media">
        <img src="${car.image}" alt="${car.name}" loading="lazy" onerror="this.style.display='none'">
        <span class="price-badge">${t("cat." + car.category)}</span>
      </div>
      <div class="car-body">
        <span class="car-cat">${t("cat." + car.category)}</span>
        <h3 class="car-name">${car.name}</h3>
        ${car.colors ? `<div class="swatches">${car.colors.map((c, i) => `<button type="button" class="swatch${i === 0 ? " active" : ""}" style="background:${c.hex}" data-car="${car.id}" data-color="${c.key}" title="${t("color." + c.key)}" aria-label="${t("color." + c.key)}"></button>`).join("")}</div>` : ""}
        <ul class="car-specs">
          <li>${ICONS.gear}${t("spec." + car.transmission)}</li>
          <li>${ICONS.fuel}${t("spec." + car.fuel)}</li>
          <li>${ICONS.seats}${car.seats} ${t("spec.seats")}</li>
          <li>${ICONS.ac}${t("spec.ac")}</li>
        </ul>
        <a href="#booking" class="btn btn-primary" data-book="${car.id}"${car.colors ? ` data-color="${car.colors[0].key}"` : ""}>${t("card.book")}</a>
      </div>
    </article>`).join("");
  observeReveal();
}

function renderCarSelect() {
  const sel = $("#carSelect");
  const current = sel.value;
  sel.innerHTML = `<option value="">${t("form.chooseCar")}</option>` +
    FLEET.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
  sel.value = current;
}

/* ---------- Language ---------- */
function applyLang(newLang) {
  lang = newLang;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = t("title");
  $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  $("#langToggle").textContent = t("lang.btn");
  renderFleet();
  renderCarSelect();
  try { localStorage.setItem("gemzo-lang", lang); } catch (e) {}
}

/* ---------- Booking ---------- */
function getDays() {
  const f = $("#bookingForm");
  const a = f.pickup.value, b = f.return.value;
  if (!a || !b) return 0;
  return Math.round((new Date(b) - new Date(a)) / 86400000);
}
function setupBooking() {
  const f = $("#bookingForm");
  const today = new Date().toISOString().split("T")[0];
  f.pickup.min = today; f.return.min = today;

  f.addEventListener("input", (e) => {
    e.target.classList.remove("invalid");
    if (e.target.name === "car") f.dataset.color = "";
    if (e.target.name === "pickup" && f.pickup.value) f.return.min = f.pickup.value;
  });

  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const err = $("#formError");
    const required = ["name", "phone", "car", "pickup", "return"];
    let ok = true;
    required.forEach(n => { if (!f[n].value.trim()) { f[n].classList.add("invalid"); ok = false; } });
    if (!ok) { err.textContent = t("form.err"); err.hidden = false; return; }
    const days = getDays();
    if (days <= 0) { f.return.classList.add("invalid"); err.textContent = t("form.errDates"); err.hidden = false; return; }
    err.hidden = true;

    const car = FLEET.find(c => c.id === f.car.value);
    const lines = [
      t("wa.intro"),
      `• ${t("wa.name")}: ${f.name.value.trim()}`,
      `• ${t("wa.phone")}: ${f.phone.value.trim()}`,
      `• ${t("wa.car")}: ${car.name}${car.colors && f.dataset.color ? ` (${t("wa.color")}: ${t("color." + f.dataset.color)})` : ""}`,
      `• ${t("wa.from")}: ${f.pickup.value}`,
      `• ${t("wa.to")}: ${f.return.value}`,
      `• ${t("wa.days")}: ${days}`
    ];
    if (f.notes.value.trim()) lines.push(`• ${t("wa.notes")}: ${f.notes.value.trim()}`);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  });

  // Colour swatches switch the card photo
  document.addEventListener("click", (e) => {
    const sw = e.target.closest(".swatch");
    if (!sw) return;
    const card = sw.closest(".car-card");
    const car = FLEET.find(c => c.id === sw.dataset.car);
    const col = car.colors.find(c => c.key === sw.dataset.color);
    card.querySelector(".car-media img").src = col.image;
    card.querySelectorAll(".swatch").forEach(b => b.classList.toggle("active", b === sw));
    card.querySelector("[data-book]").dataset.color = col.key;
  });

  // "Book Now" on a car card pre-selects that car
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-book]");
    if (!btn) return;
    f.dataset.color = btn.dataset.color || "";
    f.car.value = btn.dataset.book;
    f.car.classList.remove("invalid");
  });
}

/* ---------- Filters ---------- */
function setupFilters() {
  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    $$(".filter").forEach(b => b.classList.toggle("active", b === btn));
    const f = btn.dataset.filter;
    $$(".car-card").forEach(card => card.classList.toggle("hide", f !== "all" && card.dataset.category !== f));
  });
}

/* ---------- Header, menu, active link ---------- */
function setupNav() {
  const header = $("#header"), nav = $("#nav"), btn = $("#menuBtn");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
  });
  $$(".nav-link").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open"); btn.classList.remove("open"); btn.setAttribute("aria-expanded", false);
  }));

  const sections = $$("section[id]");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) $$(".nav-link").forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => spy.observe(s));

  $("#langToggle").addEventListener("click", () => applyLang(lang === "en" ? "ar" : "en"));
}

/* ---------- Reveal animation ---------- */
let revealObserver;
function observeReveal() {
  if (!("IntersectionObserver" in window)) { $$(".reveal").forEach(el => el.classList.add("visible")); return; }
  revealObserver = revealObserver || new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); revealObserver.unobserve(en.target); } });
  }, { threshold: 0.12 });
  $$(".reveal:not(.visible)").forEach(el => revealObserver.observe(el));
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  $$(".section-head, .about-media, .about-text, .booking-info, .booking-form, .faq-item, .contact-card, .map-wrap").forEach(el => el.classList.add("reveal"));
  setupNav();
  setupFilters();
  setupBooking();
  let saved = DEFAULT_LANG;
  try { saved = localStorage.getItem("gemzo-lang") || DEFAULT_LANG; } catch (e) {}
  applyLang(saved);
});
