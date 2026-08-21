const localized = (ru, en, uz) => ({ ru, en, uz });

const productInterface = {
  ru: {
    skipContent: "К содержанию",
    homeLabel: "Kinoxona — на главную",
    openMenu: "Открыть меню",
    mainNavigation: "Основная навигация",
    navStore: "Магазин",
    navIdea: "Идея",
    navCinema: "В кинотеатр",
    backStoreShort: "Store",
    backStore: "Вернуться в коллекцию",
    galleryLabel: "Галерея товара",
    pilotStatus: "Пилотная модель",
    comingSoon: "Скоро",
    chooseOption: "Выберите размер",
    sizeGuide: "Размерная сетка",
    addToCart: "Положить в корзину",
    cartNote: "Корзина пока работает как заглушка. Покупка станет доступна после утверждения тиража и запуска магазина.",
    materialLabel: "Материал",
    formatLabel: "Формат",
    productionLabel: "Производство",
    productionValue: "Планируется в Ташкенте",
    deliveryLabel: "Доставка",
    deliveryValue: "Условия объявим перед запуском",
    aboutObject: "О предмете",
    footerCopy: "Концепт магазина. Финальные модели, наличие и даты запуска будут объявлены отдельно.",
    oneSize: "Один размер"
  },
  en: {
    skipContent: "Skip to content",
    homeLabel: "Kinoxona — home",
    openMenu: "Open menu",
    mainNavigation: "Main navigation",
    navStore: "Store",
    navIdea: "Idea",
    navCinema: "Cinema",
    backStoreShort: "Store",
    backStore: "Back to collection",
    galleryLabel: "Product gallery",
    pilotStatus: "Pilot model",
    comingSoon: "Coming soon",
    chooseOption: "Choose a size",
    sizeGuide: "Size guide",
    addToCart: "Add to cart",
    cartNote: "The cart is a placeholder for now. Purchasing will open once the edition and store launch are confirmed.",
    materialLabel: "Material",
    formatLabel: "Format",
    productionLabel: "Production",
    productionValue: "Planned in Tashkent",
    deliveryLabel: "Delivery",
    deliveryValue: "Terms will be announced before launch",
    aboutObject: "About the object",
    footerCopy: "Store concept. Final products, availability and launch dates will be announced separately.",
    oneSize: "One size"
  },
  uz: {
    skipContent: "Asosiy qismga o‘tish",
    homeLabel: "Kinoxona — bosh sahifa",
    openMenu: "Menyuni ochish",
    mainNavigation: "Asosiy navigatsiya",
    navStore: "Do‘kon",
    navIdea: "G‘oya",
    navCinema: "Kinoteatrga",
    backStoreShort: "Store",
    backStore: "To‘plamga qaytish",
    galleryLabel: "Mahsulot galereyasi",
    pilotStatus: "Sinov modeli",
    comingSoon: "Tez orada",
    chooseOption: "O‘lchamni tanlang",
    sizeGuide: "O‘lchamlar jadvali",
    addToCart: "Savatga qo‘shish",
    cartNote: "Savat hozircha namuna sifatida ishlaydi. Tiraj va do‘kon ishga tushishi tasdiqlangach, xarid qilish mumkin bo‘ladi.",
    materialLabel: "Material",
    formatLabel: "Format",
    productionLabel: "Ishlab chiqarish",
    productionValue: "Toshkentda ishlab chiqarish rejalashtirilgan",
    deliveryLabel: "Yetkazib berish",
    deliveryValue: "Shartlar ishga tushishdan oldin e’lon qilinadi",
    aboutObject: "Buyum haqida",
    footerCopy: "Do‘kon konsepti. Yakuniy modellar, mavjudlik va ishga tushirish sanalari alohida e’lon qilinadi.",
    oneSize: "Bir o‘lcham"
  }
};

const productCatalog = {
  "screen-memory-posters": {
    code: "Print / 01",
    brand: "Kinoxona Archive",
    price: "от 90 000 UZS",
    options: ["A3", "A2"],
    gallery: ["assets/screening-sorrentino.jpg", "assets/screening-alisher-navoi.jpg", "assets/screening-breathless.jpg"],
    title: localized("Постеры «Память экрана»", "Screen Memory posters", "«Ekran xotirasi» posterlari"),
    description: localized(
      "Нумерованные репринты афиш прошедших показов на плотной бумаге с архивным штампом Kinoxona.",
      "Numbered reprints of past screening posters on heavyweight paper with a Kinoxona archive stamp.",
      "O‘tgan namoyishlar afishalarining qalin qog‘ozdagi, Kinoxona arxiv muhri tushirilgan raqamlangan qayta nashrlari."
    ),
    material: localized("Архивная бумага 250–300 г/м²", "250–300 gsm archival paper", "250–300 g/m² arxiv qog‘ozi"),
    format: localized("A3 или A2 · нумерованный тираж", "A3 or A2 · numbered edition", "A3 yoki A2 · raqamlangan tiraj"),
    storyTitle: localized("Афиша как память", "The poster as memory", "Afisha — xotira"),
    story: localized(
      "Каждая работа возвращает конкретный вечер Kinoxona: фильм, дату и визуальный язык показа. В галерее можно рассмотреть реальные афиши, которые войдут в серию.",
      "Each piece brings back a specific Kinoxona evening — its film, date and visual language. The gallery shows real posters planned for the series.",
      "Har bir ish Kinoxona’dagi muayyan kechani — film, sana va namoyishning vizual tilini qaytaradi. Galereyada turkumga kiradigan haqiqiy afishalarni ko‘rish mumkin."
    )
  },
  "kinoxona-tee": {
    code: "Wear / 02", brand: "Kinoxona", price: "280 000 UZS", options: ["XS", "S", "M", "L", "XL"],
    gallery: ["assets/store-kinoxona-tee.webp"],
    title: localized("Футболка «50 мест»", "50 Seats T-shirt", "«50 o‘rin» futbolkasi"),
    description: localized("Тяжёлый хлопок, свободный крой и знак камерного зала Kinoxona.", "Heavyweight cotton, relaxed cut and the mark of Kinoxona’s intimate auditorium.", "Qalin paxta, erkin bichim va Kinoxona kamerali zalining belgisi."),
    material: localized("Хлопок · 240 GSM", "Cotton · 240 GSM", "Paxta · 240 GSM"),
    format: localized("Свободный унисекс-крой", "Relaxed unisex fit", "Erkin uniseks bichim"),
    storyTitle: localized("Пятьдесят мест", "Fifty seats", "Ellik o‘rin"),
    story: localized("Небольшой зал становится знаком принадлежности к сообществу зрителей, которые остаются говорить о кино после титров.", "A small auditorium becomes a mark of belonging to the community that stays to talk after the credits.", "Kichik zal titrlardan keyin kino haqida suhbatlashish uchun qoladigan tomoshabinlar hamjamiyatining belgisiga aylanadi.")
  },
  "tfs-tee": {
    code: "Wear / 03", brand: "Tashkent Film School", price: "260 000 UZS", options: ["XS", "S", "M", "L", "XL"],
    gallery: ["assets/store-tfs-tee.webp"],
    title: localized("Футболка TFS", "TFS T-shirt", "TFS futbolkasi"),
    description: localized("Базовая футболка киношколы с учебной типографикой и фразой «Film is a school».", "A film-school essential with study typography and the phrase “Film is a school.”", "Kinomaktabning o‘quv tipografikasi va «Film is a school» iborasi tushirilgan asosiy futbolkasi."),
    material: localized("Хлопок · 220 GSM", "Cotton · 220 GSM", "Paxta · 220 GSM"),
    format: localized("Унисекс · прямой крой", "Unisex · straight fit", "Uniseks · to‘g‘ri bichim"),
    storyTitle: localized("Кино как школа", "Film as a school", "Kino — maktab"),
    story: localized("Вещь продолжает визуальный язык Tashkent Film School — рабочие пометки, типографику и идею непрерывного обучения через практику.", "The piece extends the visual language of Tashkent Film School: working marks, typography and continuous learning through practice.", "Buyum Tashkent Film School vizual tilini — ishchi belgilar, tipografika va amaliyot orqali uzluksiz o‘rganish g‘oyasini davom ettiradi.")
  },
  "sokrat-hoodie": {
    code: "Wear / 04", brand: "Kinoxona", price: "520 000 UZS", options: ["S", "M", "L", "XL"],
    gallery: ["assets/store-sokrat-hoodie.webp"],
    title: localized("Худи «Сократа, 10»", "10 Sokrat hoodie", "«Sokrat, 10» hudisi"),
    description: localized("Плотное чёрное худи с адресом кинотеатра и координатами Ташкента.", "A heavyweight black hoodie carrying the cinema address and Tashkent coordinates.", "Kinoteatr manzili va Toshkent koordinatalari tushirilgan qalin qora hudi."),
    material: localized("Хлопковый футер · 460 GSM", "Cotton fleece · 460 GSM", "Paxta futer · 460 GSM"),
    format: localized("Объёмный унисекс-крой", "Oversized unisex fit", "Keng uniseks bichim"),
    storyTitle: localized("Адрес встречи", "An address for meeting", "Uchrashuv manzili"),
    story: localized("Сократа, 10 — не просто адрес, а точка, где зритель встречается с фильмом и другим зрителем.", "10 Sokrat is more than an address: it is where viewers meet films and one another.", "Sokrat, 10 — shunchaki manzil emas, tomoshabin film va boshqa tomoshabin bilan uchrashadigan nuqta.")
  },
  "coordinates-cap": {
    code: "Wear / 05", brand: "Kinoxona", price: "190 000 UZS", options: ["ONE"],
    gallery: ["assets/store-cap-tote.webp"],
    title: localized("Кепка «Координаты»", "Coordinates cap", "«Koordinatalar» kepkasi"),
    description: localized("Шестипанельная кепка с маленькой вышивкой координат Kinoxona.", "A six-panel cap with small embroidered Kinoxona coordinates.", "Kinoxona koordinatalari kichik kashta bilan tushirilgan olti panelli kepka."),
    material: localized("Хлопковый твил", "Cotton twill", "Paxta tvil"),
    format: localized("Регулируемый ремешок", "Adjustable strap", "Sozlanadigan tasma"),
    storyTitle: localized("Точка на карте", "A point on the map", "Xaritadagi nuqta"),
    story: localized("Минимальный знак для тех, кто знает, где в Ташкенте смотреть кино внимательно.", "A minimal mark for those who know where to watch cinema attentively in Tashkent.", "Toshkentda kinoni diqqat bilan qayerda tomosha qilishni biladiganlar uchun minimal belgi.")
  },
  "film-ornament-tote": {
    code: "Object / 06", brand: "Kinoxona", price: "170 000 UZS", options: ["ONE"],
    gallery: ["assets/store-cap-tote.webp"],
    title: localized("Шопер «Кино и орнамент»", "Film & Ornament tote", "«Kino va naqsh» shopperi"),
    description: localized("Геометрия киноплёнки соединяется с ритмами узбекского иката.", "Film perforation geometry meets the rhythm of Uzbek ikat.", "Kinoplyonka geometriyasi o‘zbek ikati ritmlari bilan uchrashadi."),
    material: localized("Плотный локальный канвас", "Heavy local canvas", "Qalin mahalliy kanvas"),
    format: localized("38 × 42 см · длинные ручки", "38 × 42 cm · long handles", "38 × 42 sm · uzun tutqichlar"),
    storyTitle: localized("Новый ритм", "A new rhythm", "Yangi ritm"),
    story: localized("Предмет ищет современный язык для связи кинотехнологии и местной текстильной культуры — без буквального фольклора.", "The object finds a contemporary link between film technology and local textile culture without literal folklore.", "Buyum kino texnologiyasi va mahalliy to‘qimachilik madaniyati o‘rtasida to‘g‘ridan-to‘g‘ri folklorsiz zamonaviy aloqa izlaydi.")
  },
  "uzbek-cinema-print": {
    code: "Heritage / 07", brand: "Kinoxona Research", price: "120 000 UZS", options: ["A3", "A2"],
    gallery: ["assets/screening-alisher-navoi.jpg", "assets/screening-amateur-uzbek-cinema.jpg", "assets/screening-cotton-100.jpg"],
    title: localized("Принт «История узбекского кино»", "Uzbek Cinema History print", "«O‘zbek kinosi tarixi» printi"),
    description: localized("Печатная исследовательская серия о важных фильмах и визуальной культуре узбекского экрана.", "A research-led print series on key films and the visual culture of Uzbek cinema.", "O‘zbek kinosining muhim filmlari va vizual madaniyati haqidagi tadqiqotga asoslangan bosma turkum."),
    material: localized("Матовая архивная бумага · 250 GSM", "Matte archival paper · 250 GSM", "Mat arxiv qog‘ozi · 250 GSM"),
    format: localized("A3 или A2 · исследовательская серия", "A3 or A2 · research series", "A3 yoki A2 · tadqiqot turkumi"),
    storyTitle: localized("Архив без витрины", "An archive without glass", "Vitrinasiz arxiv"),
    story: localized("Первая работа посвящена фильму «Алишер Навои» 1947 года. В галерее афиша показана целиком, а следующие изображения намечают продолжение серии об истории местного кино.", "The first piece is devoted to the 1947 film Alisher Navoi. The gallery shows the full poster and previews future subjects in the local cinema history series.", "Birinchi ish 1947-yildagi «Alisher Navoiy» filmiga bag‘ishlangan. Galereyada afisha to‘liq ko‘rsatilgan, keyingi tasvirlar esa mahalliy kino tarixi turkumining davomiga ishora qiladi."
    )
  },
  "screen-memory-zine": {
    code: "Edition / 08", brand: "Kinoxona Archive", price: "150 000 UZS", options: ["ONE"],
    gallery: ["assets/store-screen-memory-cover.webp", "assets/store-screen-memory-spread-01.webp", "assets/store-screen-memory-spread-02.webp"],
    title: localized("Зин «Память экрана»", "Screen Memory zine", "«Ekran xotirasi» zini"),
    description: localized("96 страниц с фотографиями, афишами, заметками и разговорами первых сезонов Kinoxona.", "A 96-page collection of photographs, posters, notes and conversations from Kinoxona’s first seasons.", "Kinoxona’ning ilk mavsumlaridan suratlar, afishalar, qaydlar va suhbatlar jamlangan 96 sahifali nashr."),
    material: localized("Офсетная бумага и плотная обложка", "Offset paper and heavyweight cover", "Ofset qog‘ozi va qalin muqova"),
    format: localized("96 страниц · RU / EN / UZ", "96 pages · RU / EN / UZ", "96 sahifa · RU / EN / UZ"),
    storyTitle: localized("Что внутри", "What is inside", "Ichida nimalar bor"),
    story: localized("Это уже не условная обложка: галерея показывает реальные темы и развороты — первые премьеры, зал на 50 мест, афиши, заметки и разговоры после сеансов.", "This is no longer an empty cover concept. The gallery reveals actual spreads: early premieres, the 50-seat auditorium, posters, notes and post-screening conversations.", "Bu endi shartli muqova emas. Galereya haqiqiy mavzu va sahifalarni — ilk premyeralar, 50 o‘rinli zal, afishalar, qaydlar va namoyishdan keyingi suhbatlarni ko‘rsatadi."
    )
  },
  "sestra-tee": {
    code: "Wear / 09", brand: "SES TRA × Kinoxona", price: "290 000 UZS", options: ["XS", "S", "M", "L", "XL"],
    gallery: ["assets/store-sestra-tee-commerce.webp", "assets/store-sestra-tee-detail.webp", "assets/store-sestra-tee.webp"],
    title: localized("Футболка SES TRA", "SES TRA T-shirt", "SES TRA futbolkasi"),
    description: localized("Чёрная футболка свободного кроя с крупным розовым знаком независимого ташкентского продакшена.", "A relaxed black T-shirt with the large pink mark of the independent Tashkent production company.", "Mustaqil Toshkent prodakshnining katta pushti belgisi tushirilgan erkin bichimli qora futbolka."),
    material: localized("Плотный хлопок · 240 GSM", "Heavy cotton · 240 GSM", "Qalin paxta · 240 GSM"),
    format: localized("Oversize · унисекс", "Oversized · unisex", "Oversize · uniseks"),
    storyTitle: localized("Логотип как кадр", "The logo as a frame", "Logotip — kadr"),
    story: localized("Большая типографика работает как самостоятельное изображение. В галерее видны посадка, масштаб принта и фактура ткани крупным планом.", "The oversized typography works as an image in its own right. The gallery shows fit, print scale and fabric texture up close.", "Katta tipografika mustaqil tasvir sifatida ishlaydi. Galereyada bichim, print miqyosi va mato teksturasi yaqin ko‘rinishda namoyon bo‘ladi.")
  },
  "sestra-hoodie": {
    code: "Wear / 10", brand: "SES TRA × Kinoxona", price: "560 000 UZS", options: ["S", "M", "L", "XL"],
    gallery: ["assets/store-sestra-hoodie-commerce.webp", "assets/store-sestra-hoodie-detail.webp", "assets/store-sestra-hoodie.webp"],
    title: localized("Худи SES TRA", "SES TRA hoodie", "SES TRA hudisi"),
    description: localized("Плотное чёрное худи с крупным розовым знаком SES TRA на спине.", "A heavyweight black hoodie with an oversized pink SES TRA mark across the back.", "Orqasida katta pushti SES TRA belgisi bo‘lgan qalin qora hudi."),
    material: localized("Хлопковый футер · 460 GSM", "Cotton fleece · 460 GSM", "Paxta futer · 460 GSM"),
    format: localized("Объёмный крой · унисекс", "Oversized fit · unisex", "Keng bichim · uniseks"),
    storyTitle: localized("Главный титр", "The main title", "Bosh titr"),
    story: localized("Знак размещён на спине как большой титр фильма. Отдельные кадры показывают силуэт вещи и качество нанесения.", "The back mark is treated like a film’s main title. Separate images show the silhouette and print quality.", "Orqadagi belgi filmning bosh titridek joylashtirilgan. Alohida kadrlar siluet va bosma sifatini ko‘rsatadi.")
  },
  "sestra-tote": {
    code: "Object / 11", brand: "SES TRA × Kinoxona", price: "180 000 UZS", options: ["ONE"],
    gallery: ["assets/store-sestra-tote-commerce.webp", "assets/store-sestra-tote-detail.webp", "assets/store-sestra-tote.webp"],
    title: localized("Шопер SES TRA", "SES TRA tote", "SES TRA shopperi"),
    description: localized("Плотный натуральный канвас с крупным розовым логотипом SES TRA.", "Heavy natural canvas printed with the large pink SES TRA mark.", "Katta pushti SES TRA logotipi tushirilgan qalin tabiiy kanvas shopper."),
    material: localized("Натуральный канвас · 340 GSM", "Natural canvas · 340 GSM", "Tabiiy kanvas · 340 GSM"),
    format: localized("40 × 44 см · усиленные ручки", "40 × 44 cm · reinforced handles", "40 × 44 sm · mustahkamlangan tutqichlar"),
    storyTitle: localized("Носить производство", "Carry the production", "Prodakshnni olib yurish"),
    story: localized("Чистая форма и крупный знак делают шопер самостоятельным объектом. В деталях видны плетение канваса и усиленные швы.", "A clean shape and oversized mark make the tote an object in its own right. Detail images reveal the canvas weave and reinforced seams.", "Toza shakl va katta belgi shopperni mustaqil buyumga aylantiradi. Detallarda kanvas to‘qimasi va mustahkamlangan choklar ko‘rinadi.")
  },
  "sestra-cap": {
    code: "Wear / 12", brand: "SES TRA × Kinoxona", price: "210 000 UZS", options: ["ONE"],
    gallery: ["assets/store-sestra-cap-commerce.webp", "assets/store-sestra-cap-detail.webp", "assets/store-sestra-cap.webp"],
    title: localized("Кепка SES TRA", "SES TRA cap", "SES TRA kepkasi"),
    description: localized("Чёрная шестипанельная кепка с розовой вышивкой SES TRA.", "A black six-panel cap finished with pink SES TRA embroidery.", "Pushti SES TRA kashtasi tushirilgan qora olti panelli kepka."),
    material: localized("Хлопковый твил · вышивка", "Cotton twill · embroidery", "Paxta tvil · kashta"),
    format: localized("Шесть панелей · регулируемый размер", "Six panels · adjustable fit", "Olti panel · sozlanadigan o‘lcham"),
    storyTitle: localized("Маленький знак", "A small mark", "Kichik belgi"),
    story: localized("Вместо крупного принта — аккуратная вышивка. Галерея показывает реальную форму кепки, изгиб козырька и нить крупным планом.", "Instead of a large print, the cap uses precise embroidery. The gallery shows its true shape, curved brim and thread detail.", "Katta print o‘rniga aniq kashta ishlatilgan. Galereyada kepkaning haqiqiy shakli, soyabon egri chizig‘i va ip detallari ko‘rsatiladi.")
  }
};

const productParams = new URLSearchParams(window.location.search);
const requestedProduct = productParams.get("id");
const productId = Object.hasOwn(productCatalog, requestedProduct) ? requestedProduct : "screen-memory-posters";
const product = productCatalog[productId];

const savedProductLanguage = localStorage.getItem("kinoxona-language");
let productLanguage = Object.hasOwn(productInterface, savedProductLanguage) ? savedProductLanguage : "ru";
let activeImage = 0;

const mainImage = document.querySelector("#product-image");
const imageCount = document.querySelector("#product-image-count");
const thumbnails = document.querySelector("#product-thumbnails");
const cartNote = document.querySelector("#product-cart-note");
const productMenuToggle = document.querySelector(".menu-toggle");
const productNav = document.querySelector(".main-nav");

function localValue(value) {
  return value?.[productLanguage] ?? value?.ru ?? "";
}

function selectProductImage(index) {
  activeImage = index;
  mainImage.src = product.gallery[index];
  mainImage.alt = `${localValue(product.title)} — ${index + 1}`;
  imageCount.textContent = `${String(index + 1).padStart(2, "0")} / ${String(product.gallery.length).padStart(2, "0")}`;
  document.querySelectorAll(".product-thumbnail").forEach((button, buttonIndex) => {
    const isActive = buttonIndex === index;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderGallery() {
  thumbnails.replaceChildren();
  product.gallery.forEach((source, index) => {
    const button = document.createElement("button");
    button.className = "product-thumbnail";
    button.type = "button";
    button.setAttribute("aria-label", `${localValue(product.title)} — ${index + 1}`);
    const image = document.createElement("img");
    image.src = source;
    image.alt = "";
    image.loading = "lazy";
    button.append(image);
    button.addEventListener("click", () => selectProductImage(index));
    thumbnails.append(button);
  });
  selectProductImage(Math.min(activeImage, product.gallery.length - 1));
}

function renderOptions() {
  const optionList = document.querySelector("#product-option-list");
  optionList.replaceChildren();
  product.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "product-option";
    button.type = "button";
    button.textContent = option === "ONE" ? productInterface[productLanguage].oneSize : option;
    button.classList.toggle("is-active", index === 0);
    button.setAttribute("aria-pressed", String(index === 0));
    button.addEventListener("click", () => {
      document.querySelectorAll(".product-option").forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");
    });
    optionList.append(button);
  });
}

function renderProduct() {
  document.querySelector("#product-code").textContent = product.code;
  document.querySelector("#product-brand").textContent = product.brand;
  document.querySelector("#product-title").textContent = localValue(product.title);
  document.querySelector("#product-description").textContent = localValue(product.description);
  document.querySelector("#product-price").textContent = product.price;
  document.querySelector("#product-material").textContent = localValue(product.material);
  document.querySelector("#product-format").textContent = localValue(product.format);
  document.querySelector("#product-story-title").textContent = localValue(product.storyTitle);
  document.querySelector("#product-story").textContent = localValue(product.story);
  document.title = `${localValue(product.title)} — Kinoxona Store`;
  document.querySelector('meta[name="description"]').setAttribute("content", localValue(product.description));
  renderGallery();
  renderOptions();
}

function setProductLanguage(language) {
  productLanguage = language;
  localStorage.setItem("kinoxona-language", language);
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = productInterface[language][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = productInterface[language][element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  cartNote.hidden = true;
  renderProduct();
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setProductLanguage(button.dataset.lang));
});

document.querySelector("#product-cart-button").addEventListener("click", () => {
  cartNote.textContent = productInterface[productLanguage].cartNote;
  cartNote.hidden = false;
});

document.querySelector("[data-i18n='sizeGuide']").addEventListener("click", () => {
  cartNote.textContent = productInterface[productLanguage].cartNote;
  cartNote.hidden = false;
});

productMenuToggle?.addEventListener("click", () => {
  const isOpen = productMenuToggle.getAttribute("aria-expanded") === "true";
  productMenuToggle.setAttribute("aria-expanded", String(!isOpen));
  productNav.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

productNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    productMenuToggle?.setAttribute("aria-expanded", "false");
    productNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
setProductLanguage(productLanguage);
