if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

/* ── Coming Soon Splash Kapatma ── */
(function () {
  const overlay = document.getElementById("splashOverlay");
  const cta = document.getElementById("splashCta");
  if (!overlay || !cta) return;

  // Body scroll'u kilitle
  document.body.style.overflow = "hidden";

  function dismissSplash() {
    overlay.classList.add("is-leaving");
    document.body.style.overflow = "";
    overlay.addEventListener("transitionend", () => {
      overlay.classList.add("is-hidden");
    }, { once: true });
  }

  cta.addEventListener("click", dismissSplash);
})();

const translations = {
  tr: {
    metaTitle: "NiveLine | Seçici erişim ve çok katmanlı güvenlik üzerine inşa edilmiş mesajlaşma platformu",
    metaDescription:
      "NiveLine; passkey destekli kimlik doğrulama, kontrollü kişi keşfi, mesaj istekleri ve rafine grup akışlarıyla modern iletişimde daha yüksek bir standart sunar.",
    "lang.groupLabel": "Dil seçimi",
    "nav.approach": "Yaklaşım",
    "nav.product": "Ürün",
    "nav.security": "Güvenlik",
    "nav.platforms": "İndir",
    "hero.eyebrow": "Seçici erişim ve çok katmanlı güvenlik üzerine inşa edildi",
    "hero.title": "Herkese açık değil. Seçtiğin kişilerle, güvenli, odaklanmış iletişim.",
    "hero.lead":
      "NiveLine; kimlerin size ulaşabileceğini, hesabınızın nasıl korunduğunu ve grup iletişiminin nasıl şekillendiğini tek bir bütünleşik ürün deneyiminde bir araya getirir.",
    "store.apple": "Download on the",
    "store.google": "Get it on",
    "hero.note1": "Şifresiz, donanım destekli kimlik doğrulama",
    "hero.note1.label": "Passkey Güvenliği",
    "hero.note2": "Mesaj istekleriyle yabancıya izinli erişim",
    "hero.note2.label": "İlk Temas Kontrolü",
    "hero.note3": "Siz davet etmeden kimse bulamaz",
    "hero.note3.label": "QR & Davet Kodu",
    "hero.note4": "Katılmadan önce içeriği ve üyeleri görün",
    "hero.note4.label": "Grup Önizlemesi",
    "band.item1": "Passkey destekli erişim",
    "band.item1.label": "Passkey",
    "band.item2": "Mesaj istekleriyle seçici ilk temas",
    "band.item2.label": "İlk Temas",
    "band.item3": "QR ve davet kodu ile kontrollü eşleşme",
    "band.item3.label": "QR & Davet",
    "band.item4": "Katılım öncesi grup önizlemesi",
    "band.item4.label": "Grup Önizleme",
    "band.item5": "Gizlilik tercihleriniz tamamen sizin kontrolünüzde",
    "band.item5.label": "Gizlilik",
    "band.item6": "iOS ve Android",
    "band.item6.label": "Platformlar",
    "story.eyebrow": "Yaklaşım",
    "story.title": "Erişimden grup iletişimine kadar her adım amaca uygun tasarlandı.",
    "story.body":
      "NiveLine; herkese açık bir mesajlaşma mantığı yerine kontrollü keşif, net arayüz hiyerarşisi ve güçlü bir güven altyapısı üzerine kuruludur.",
    "story.card1.title": "Seçici erişim mimarisi",
    "story.card1.body":
      "Her yeni sohbet davet, QR taraması veya mesaj isteği üzerinden başlar. İletişim, ilk andan itibaren yapısal bir filtreden geçer.",
    "story.card2.title": "Hesap güvenliğinde çok katmanlı koruma",
    "story.card2.body":
      "Passkey, e-posta doğrulama, Authenticator tabanlı 2FA ve kayıtlı cihaz yönetimi tek bir güven çerçevesi altında birlikte çalışır.",
    "story.card3.title": "Grup iletişiminde net ve bağlamlı başlangıç",
    "story.card3.body":
      "Önizleme, açıklama ve bağlam odaklı akış sayesinde grup deneyimi daha düzenli, daha anlaşılır ve daha güvenilir biçimde başlar.",
    "features.eyebrow": "Ürün",
    "features.title": "Sohbet, davet ve ayarlar tutarlı bir arayüz sistemi içinde birleşir.",
    "features.body":
      "Gerçek bir ürün hissi; yalnızca koyu temadan değil, ritim, boşluk, tipografi ve etkileşim kararlarının her ekranda tutarlı kalmasından doğar.",
    "features.panel1.kicker": "Bağlamsal mesajlaşma",
    "features.panel1.title": "Anket, etkinlik, konum ve duyurular konuşmanın organik bir parçası haline gelir.",
    "features.panel1.body": "İletişimi düz metinin ötesine taşır; içeriği ve bağlamı her zaman görünür kılar.",
    "features.panel2.kicker": "İlk temas akışı",
    "features.panel2.title": "Yeni bir kişiye ulaşmak, onay ve bağlam içeren ayrı bir ürün akışından geçer.",
    "features.panel2.body": "İstenmeyen iletişim gürültüsünü azaltır; ilişkileri daha temiz ve daha kasıtlı biçimde başlatır.",
    "features.panel3.kicker": "Arayüz sistemi",
    "features.panel3.title": "Ana ekran, sohbetler ve ayarlar aynı görsel disiplin ve ürün diliyle çalışır.",
    "features.panel3.body": "Tasarım tutarlılığı her bölümde korunur; kullanıcı deneyimi hiçbir zaman bölünmez.",
    "features.pill1": "iOS ve Android",
    "features.pill2": "Ücretsiz indirin",
    "features.pill3": "Premium deneyim",
    "features.mock.groupName": "Ürün Ekibi",
    "features.mock.groupMeta": "3 kişi · aktif",
    "features.mock.msg1": "Sunum için bir anket açayım mı?",
    "features.mock.msg2": "Tabii, etkinlik kartını da ekle 🗓",
    "features.mock.msg3": "Konum da paylaşabilirsin, çevrimiçi katılım için.",
    "features.mock.card1label": "Anket",
    "features.mock.card1title": "Lansman günü",
    "features.mock.card1meta": "Per / Cum",
    "features.mock.card2label": "Etkinlik",
    "features.mock.card2title": "Ürün tanıtımı",
    "features.mock.card2meta": "20:30 · Çevrimiçi",
    "features.mock.card3label": "Konum",
    "features.mock.card3title": "NiveLine Studio",
    "features.mock.card3meta": "Kadıköy · İstanbul",
    "features.mock.composerPlaceholder": "Bir mesaj yaz…",
    "features.mock.req1title": "Mesaj isteği",
    "features.mock.req1meta": "Onaylanmayı bekliyor…",
    "features.mock.req1badge": "Bekliyor",
    "features.mock.req2title": "Bağlantı kuruldu",
    "features.mock.req2meta": "Sohbet başladı",
    "features.mock.tab1": "Sohbetler",
    "features.mock.tab2": "Keşfet",
    "features.mock.tab3": "Gruplar",
    "features.mock.tab4": "Ayarlar",
    "features.showcaseLabel": "NiveLine'ı farklı kılan özellikler",
    "features.list1.title": "Passkey destekli kimlik doğrulama",
    "features.list1.body": "Parola olmadan, dokunuşla güvenli giriş.",
    "features.list2.title": "Mesaj istekleri sistemi",
    "features.list2.body": "Bilinmeyenlerden gelen mesajlar filtreli bekler.",
    "features.list3.title": "Etkinlik, anket ve konum kartları",
    "features.list3.body": "Sohbet içi zengin içerik türleri, tek ekranda.",
    "features.list4.title": "Story ve kısa süreli içerikler",
    "features.list4.body": "Uygulama diliyle uyumlu, 24 saatlik görünürlük.",
    "features.list5.title": "Grup önizleme ve katılım akışı",
    "features.list5.body": "Katılmadan önce grubu tanı, bilinçli karar ver.",
    "features.list6.title": "Gizlilik tercihleri kullanıcıda",
    "features.list6.body": "Okundu, son görülme ve önizleme; sizin kontrolünüzde.",
    "features.floatBadge1": "Uçtan uca şifreli",
    "features.floatBadge2": "Passkey korumalı",
    "features.phone.groupName": "NiveLine Grubu",
    "features.phone.groupMeta": "4 üye · aktif",
    "features.phone.msg1": "Bugünkü sunum için hazır mısın?",
    "features.phone.msg2": "Evet! Slaytları düzenledim ✅",
    "features.phone.msg3": "Harika, görüşürüz 🚀",
    "features.phone.eventTitle": "Ürün Lansman Sunumu",
    "features.phone.eventMeta": "Bugün · 20:30",
    "features.phone.composerPlaceholder": "Bir mesaj yaz…",
    "canvas.kicker": "Ürün akışı",
    "canvas.title": "Gerçek ürün hissi; net hiyerarşi, doğru boşluk ve sakin etkileşim tasarımıyla inşa edilir.",
    "canvas.tag": "Canlı ürün deneyimi",
    "canvas.chat1": "Sunum takvimi için hızlı bir anket açıyorum.",
    "canvas.chat2": "Etkinlik kartı ve konum bilgisini aynı mesaja ekledim.",
    "canvas.card1.label": "Anket",
    "canvas.card1.title": "Lansman tarihi",
    "canvas.card1.meta": "Perşembe / Cuma",
    "canvas.card2.label": "Etkinlik",
    "canvas.card2.title": "Ürün tanıtımı",
    "canvas.card2.meta": "20:30 · Çevrimiçi",
    "canvas.card3.label": "Konum",
    "canvas.card3.title": "NiveLine Studio",
    "canvas.card3.meta": "Kadıköy · İstanbul",
    "canvas.side1.kicker": "Story",
    "canvas.side1.title": "Kısa süreli görünürlük",
    "canvas.side1.body": "Durum paylaşımı, uygulama dilinden kopmadan akışın doğal bir parçası olarak kalır.",
    "canvas.side2.kicker": "İstekler",
    "canvas.side2.title": "Onaylı ilk temas",
    "canvas.side2.body": "İlk mesaj kabul edilmeden önce görünür, ancak kasıtlı biçimde sınırlı tutulur.",
    "canvas.side3.kicker": "Gizlilik",
    "canvas.side3.title": "Kullanıcı merkezli tercih kontrolü",
    "canvas.side3.body": "Okundu bildirimleri, son görülme ve mesaj önizleme ayarları tamamen kullanıcıya aittir.",
    "security.eyebrow": "Güvenlik",
    "security.title": "Erişim, cihaz yönetimi ve görünürlük tercihleri tek bir güven modeline bağlanır.",
    "security.body":
      "NiveLine'da güvenlik tek bir ekran veya tek bir vaade indirgenemez; hesabın tüm yaşam döngüsüne yayılan bütünsel bir tasarım kararıdır.",
    "security.list1": "Passkey, parola ve Authenticator tabanlı 2FA birlikte ve uyumlu biçimde desteklenir.",
    "security.list2": "Aktif cihaz oturumları izlenebilir; gerektiğinde uzaktan oturum sonlandırılabilir.",
    "security.list3": "Okundu bildirimleri, son görülme ve mesaj önizleme tercihleri kullanıcının kontrolünde kalır.",
    "security.list4": "Mesaj istekleri, engelleme ve raporlama araçları kötüye kullanımı birlikte sınırlar.",
    "security.list5": "Uçtan uca şifreleme altyapısı, cihaz bazlı anahtar yönetimiyle güçlendirilir.",
    "security.panelKicker": "Güven modeli",
    "security.panelTitle": "Kritik ayarlar her zaman görünür, anlaşılır ve kullanıcı kontrolündedir.",
    "security.stack1.label": "Kimlik",
    "security.stack1.value": "Passkey · Parola · 2FA",
    "security.stack2.label": "Cihazlar",
    "security.stack2.value": "Kayıt · Doğrulama · Oturum yönetimi",
    "security.stack3.label": "İletişim",
    "security.stack3.value": "İstek akışı · Engelleme · Raporlama",
    "security.stack4.label": "Gizlilik",
    "security.stack4.value": "Son görülme · Okundu · Önizleme",
    "security.chip1": "Uçtan uca şifreli",
    "security.chip2": "Seçici erişim",
    "security.chip3": "Tam kullanıcı kontrolü",
    "security.chip4": "Net tasarım",
    "download.eyebrow": "İndir",
    "download.title": "NiveLine yakında App Store ve Google Play'de.",
    "download.body":
      "Resmi mağaza bağlantıları yayına girdiğinde bu alan doğrudan App Store ve Google Play sayfalarına yönlenecek şekilde hazırlanmıştır.",
    "download.meta1": "iOS ve Android",
    "download.meta2": "TR · EN · ES",
    "footer.badge": "Rafine özel mesajlaşma deneyimi",
    "footer.supportLabel": "Destek",
    "footer.colProduct": "Ürün",
    "footer.colSupport": "İletişim",
    "footer.colPlatforms": "Platform",
    "footer.badge1": "Passkey güvenliği",
    "footer.badge2": "E2E şifreli",
    "footer.badge3": "iOS & Android",
    "footer.copy": "© {year} NiveLine. Tüm hakları saklıdır.",
    "splash.title": "Çok Yakında",
    "splash.sub": "Daha bilinçli bir mesajlaşma deneyimi yolda.",
    "splash.cta": "Keşfet",
    "splash.badge": "2026"
  },
  en: {
    metaTitle: "NiveLine | Modern messaging built on selective access and layered security",
    metaDescription:
      "NiveLine sets a more deliberate standard for modern communication with passkey-ready account security, selective discovery, message requests and refined group flows.",
    "lang.groupLabel": "Language selection",
    "nav.approach": "Approach",
    "nav.product": "Product",
    "nav.security": "Security",
    "nav.platforms": "Platforms",
    "hero.eyebrow": "Built on selective access and layered security",
    "hero.title": "Not open to everyone. Secure, focused communication with the people you choose.",
    "hero.lead":
      "NiveLine brings together who can reach you, how the account is protected and how group communication begins in one refined product experience.",
    "store.apple": "Download on the",
    "store.google": "Get it on",
    "hero.note1": "Password-free, hardware-backed authentication",
    "hero.note1.label": "Passkey Security",
    "hero.note2": "Strangers reach you only through approved requests",
    "hero.note2.label": "First Contact Control",
    "hero.note3": "No one finds you unless you invite them",
    "hero.note3.label": "QR & Invite Code",
    "hero.note4": "See the content and members before you join",
    "hero.note4.label": "Group Preview",
    "band.item1": "Passkey-ready access",
    "band.item1.label": "Passkey",
    "band.item2": "Selective first contact with requests",
    "band.item2.label": "First Contact",
    "band.item3": "Controlled matching through QR and invite codes",
    "band.item3.label": "QR & Invite",
    "band.item4": "Group previews before joining",
    "band.item4.label": "Group Preview",
    "band.item5": "High control over privacy preferences",
    "band.item5.label": "Privacy",
    "band.item6": "iOS and Android",
    "band.item6.label": "Platforms",
    "story.eyebrow": "Approach",
    "story.title": "Every step, from access to group flow, is designed with more intention.",
    "story.body":
      "Instead of open-ended messaging, NiveLine is built around controlled discovery, clear interface hierarchy and a stronger sense of trust.",
    "story.card1.title": "Selective access architecture",
    "story.card1.body":
      "A new conversation starts through an invite, a QR flow or a message request. Contact is filtered from the first moment.",
    "story.card2.title": "A layered approach to account security",
    "story.card2.body":
      "Passkeys, email verification, authenticator-based 2FA and device registration work together within a single trust model.",
    "story.card3.title": "A clearer start for group communication",
    "story.card3.body":
      "Previews, descriptions and context-first flows help group experiences begin in a cleaner and more understandable way.",
    "features.eyebrow": "Product",
    "features.title": "Chats, invites and settings belong to one consistent interface system.",
    "features.body":
      "A strong product feel is built not only with a dark theme, but with rhythm, spacing, typography and interaction decisions that stay coherent.",
    "features.panel1.kicker": "Contextual messaging",
    "features.panel1.title": "Polls, events, locations and announcements become part of the natural flow of conversation.",
    "features.panel1.body": "It takes communication beyond plain text and makes context visible.",
    "features.panel2.kicker": "First-contact flow",
    "features.panel2.title": "Reaching a new person goes through a dedicated product flow built around consent and context.",
    "features.panel2.body": "It reduces unwanted noise and starts interactions more cleanly.",
    "features.panel3.kicker": "Interface system",
    "features.panel3.title": "Home, chats and settings follow the same visual discipline.",
    "features.panel3.body": "The product language stays consistent across every surface, so the experience never feels fragmented.",
    "features.pill1": "iOS & Android",
    "features.pill2": "Free to download",
    "features.pill3": "Premium experience",
    "features.mock.groupName": "Product Team",
    "features.mock.groupMeta": "3 members · active",
    "features.mock.msg1": "Should I open a poll for the presentation?",
    "features.mock.msg2": "Sure, add the event card too 🗓",
    "features.mock.msg3": "You can also share the location for online attendance.",
    "features.mock.card1label": "Poll",
    "features.mock.card1title": "Launch day",
    "features.mock.card1meta": "Thu / Fri",
    "features.mock.card2label": "Event",
    "features.mock.card2title": "Product showcase",
    "features.mock.card2meta": "8:30 PM · Online",
    "features.mock.card3label": "Location",
    "features.mock.card3title": "NiveLine Studio",
    "features.mock.card3meta": "Kadikoy · Istanbul",
    "features.mock.composerPlaceholder": "Write a message…",
    "features.mock.req1title": "Message request",
    "features.mock.req1meta": "Waiting for approval…",
    "features.mock.req1badge": "Pending",
    "features.mock.req2title": "Connected",
    "features.mock.req2meta": "Conversation started",
    "features.mock.tab1": "Chats",
    "features.mock.tab2": "Explore",
    "features.mock.tab3": "Groups",
    "features.mock.tab4": "Settings",
    "features.showcaseLabel": "What makes NiveLine different",
    "features.list1.title": "Passkey-ready authentication",
    "features.list1.body": "Secure sign-in with a touch, no password needed.",
    "features.list2.title": "Message request system",
    "features.list2.body": "Messages from strangers wait in a filtered inbox.",
    "features.list3.title": "Event, poll and location cards",
    "features.list3.body": "Rich in-chat content types, all in one screen.",
    "features.list4.title": "Stories and short-lived content",
    "features.list4.body": "24-hour visibility, built into the product language.",
    "features.list5.title": "Group preview and join flow",
    "features.list5.body": "Learn about a group before joining, make an informed decision.",
    "features.list6.title": "Privacy stays with the user",
    "features.list6.body": "Read receipts, last seen and previews are yours to control.",
    "features.floatBadge1": "End-to-end encrypted",
    "features.floatBadge2": "Passkey protected",
    "features.phone.groupName": "NiveLine Group",
    "features.phone.groupMeta": "4 members · active",
    "features.phone.msg1": "Are you ready for today's presentation?",
    "features.phone.msg2": "Yes! Slides are polished ✅",
    "features.phone.msg3": "Great, see you there 🚀",
    "features.phone.eventTitle": "Product Launch Presentation",
    "features.phone.eventMeta": "Today · 8:30 PM",
    "features.phone.composerPlaceholder": "Write a message…",
    "canvas.kicker": "Product flow",
    "canvas.title": "A real product feel comes from clear hierarchy and calm interaction design.",
    "canvas.tag": "Live product feel",
    "canvas.chat1": "I am opening a quick poll for the presentation flow.",
    "canvas.chat2": "I attached the event card and location to the same message.",
    "canvas.card1.label": "Poll",
    "canvas.card1.title": "Launch day",
    "canvas.card1.meta": "Thursday / Friday",
    "canvas.card2.label": "Event",
    "canvas.card2.title": "Product presentation",
    "canvas.card2.meta": "8:30 PM, online",
    "canvas.card3.label": "Location",
    "canvas.card3.title": "NiveLine Studio",
    "canvas.card3.meta": "Kadikoy, Istanbul",
    "canvas.side1.kicker": "Stories",
    "canvas.side1.title": "Short-lived visibility",
    "canvas.side1.body": "Status sharing stays inside the product language instead of feeling disconnected from the rest of the app.",
    "canvas.side2.kicker": "Requests",
    "canvas.side2.title": "Approved first contact",
    "canvas.side2.body": "The first message is visible before approval, but it remains intentionally contained.",
    "canvas.side3.kicker": "Privacy",
    "canvas.side3.title": "User-centered preferences",
    "canvas.side3.body": "Read receipts, last seen and preview settings stay in the user's hands.",
    "security.eyebrow": "Security",
    "security.title": "Access, devices and visibility preferences are tied into one security model.",
    "security.body":
      "At NiveLine, security is not a single screen or a single claim; it is a product decision that spans the entire account lifecycle.",
    "security.list1": "Passkeys, passwords and authenticator-based 2FA are supported together.",
    "security.list2": "Device sessions can be monitored and remotely revoked when needed.",
    "security.list3": "Read receipts, last seen and message preview preferences remain user-controlled.",
    "security.list4": "Requests, blocking and reporting work together to limit misuse.",
    "security.list5": "End-to-end encryption is reinforced with a device-based key model.",
    "security.panelKicker": "Security model",
    "security.panelTitle": "Critical settings stay visible, understandable and under user control.",
    "security.stack1.label": "Identity",
    "security.stack1.value": "Passkey / Password / 2FA",
    "security.stack2.label": "Devices",
    "security.stack2.value": "Registration, verification, session control",
    "security.stack3.label": "Communication",
    "security.stack3.value": "Request flow, blocking, reporting",
    "security.stack4.label": "Privacy",
    "security.stack4.value": "Last seen, read receipts, previews",
    "security.chip1": "Encrypted",
    "security.chip2": "Selective",
    "security.chip3": "High control",
    "security.chip4": "Clear design",
    "download.eyebrow": "Platforms",
    "download.title": "NiveLine is coming soon to the App Store and Google Play.",
    "download.body":
      "This area is designed to route directly to the official store pages as soon as the live App Store and Google Play links are ready.",
    "download.meta1": "iOS and Android",
    "download.meta2": "TR / EN / ESP",
    "footer.badge": "Refined private messaging",
    "footer.supportLabel": "Support",
    "footer.colProduct": "Product",
    "footer.colSupport": "Contact",
    "footer.colPlatforms": "Platform",
    "footer.badge1": "Passkey security",
    "footer.badge2": "E2E encrypted",
    "footer.badge3": "iOS & Android",
    "footer.copy": "© {year} NiveLine. All rights reserved.",
    "splash.title": "Coming Soon",
    "splash.sub": "A more intentional messaging experience is on the way.",
    "splash.cta": "Explore",
    "splash.badge": "2025"
  },
  es: {
    metaTitle: "NiveLine | Mensajeria moderna construida sobre acceso selectivo y seguridad por capas",
    metaDescription:
      "NiveLine propone un estandar mas deliberado para la comunicacion moderna con seguridad de cuenta lista para passkeys, descubrimiento selectivo, solicitudes de mensaje y flujos de grupo refinados.",
    "lang.groupLabel": "Selector de idioma",
    "nav.approach": "Enfoque",
    "nav.product": "Producto",
    "nav.security": "Seguridad",
    "nav.platforms": "Plataformas",
    "hero.eyebrow": "Construido sobre acceso selectivo y seguridad por capas",
    "hero.title": "No abierto a todos. Comunicacion segura y enfocada con las personas que eliges.",
    "hero.lead":
      "NiveLine reune quien puede contactarte, como se protege la cuenta y como comienza la comunicacion en grupos dentro de una experiencia de producto refinada.",
    "store.apple": "Download on the",
    "store.google": "Get it on",
    "hero.note1": "Autenticacion sin contrasena respaldada por hardware",
    "hero.note1.label": "Seguridad Passkey",
    "hero.note2": "Los desconocidos te contactan solo con tu permiso",
    "hero.note2.label": "Control de Primer Contacto",
    "hero.note3": "Nadie te encuentra si no los invitas",
    "hero.note3.label": "QR y Codigo de Invitacion",
    "hero.note4": "Ve el contenido y los miembros antes de entrar",
    "hero.note4.label": "Vista Previa del Grupo",
    "band.item1": "Acceso listo para passkeys",
    "band.item1.label": "Passkey",
    "band.item2": "Primer contacto selectivo con solicitudes",
    "band.item2.label": "Primer Contacto",
    "band.item3": "Emparejamiento controlado con QR y codigos",
    "band.item3.label": "QR e Invitacion",
    "band.item4": "Vista previa del grupo antes de entrar",
    "band.item4.label": "Vista Previa",
    "band.item5": "Mayor control sobre la privacidad",
    "band.item5.label": "Privacidad",
    "band.item6": "iOS y Android",
    "band.item6.label": "Plataformas",
    "story.eyebrow": "Enfoque",
    "story.title": "Cada paso, desde el acceso hasta el flujo grupal, esta pensado con mayor intencion.",
    "story.body":
      "En lugar de una mensajeria abierta, NiveLine se construye sobre descubrimiento controlado, una jerarquia visual clara y una sensacion de confianza mas fuerte.",
    "story.card1.title": "Arquitectura de acceso selectivo",
    "story.card1.body":
      "Una nueva conversacion comienza mediante invitacion, QR o solicitud de mensaje. El contacto se filtra desde el primer momento.",
    "story.card2.title": "Seguridad de cuenta por capas",
    "story.card2.body":
      "Passkeys, verificacion por correo, 2FA con autenticador y registro de dispositivos trabajan juntos dentro de un mismo modelo de confianza.",
    "story.card3.title": "Un inicio mas claro para la comunicacion grupal",
    "story.card3.body":
      "Las vistas previas, las descripciones y los flujos centrados en el contexto ayudan a que los grupos empiecen de forma mas ordenada y comprensible.",
    "features.eyebrow": "Producto",
    "features.title": "Chats, invitaciones y ajustes pertenecen a un mismo sistema de interfaz.",
    "features.body":
      "La sensacion de producto no nace solo del tema oscuro, sino de un ritmo, espacios, tipografia e interacciones que se mantienen coherentes.",
    "features.panel1.kicker": "Mensajeria contextual",
    "features.panel1.title": "Encuestas, eventos, ubicaciones y anuncios pasan a ser parte natural de la conversacion.",
    "features.panel1.body": "Lleva la comunicacion mas alla del texto plano y hace visible el contexto.",
    "features.panel2.kicker": "Flujo de primer contacto",
    "features.panel2.title": "Llegar a una nueva persona pasa por un flujo dedicado basado en consentimiento y contexto.",
    "features.panel2.body": "Reduce el ruido no deseado y limpia el inicio de cada interaccion.",
    "features.panel3.kicker": "Sistema de interfaz",
    "features.panel3.title": "Inicio, chats y ajustes siguen la misma disciplina visual.",
    "features.panel3.body": "El lenguaje del producto se mantiene consistente en toda la experiencia.",
    "features.pill1": "iOS y Android",
    "features.pill2": "Descarga gratuita",
    "features.pill3": "Experiencia premium",
    "features.mock.groupName": "Equipo de Producto",
    "features.mock.groupMeta": "3 miembros · activo",
    "features.mock.msg1": "¿Abro una encuesta para la presentacion?",
    "features.mock.msg2": "Claro, agrega tambien la tarjeta de evento 🗓",
    "features.mock.msg3": "Puedes compartir la ubicacion para asistencia en linea.",
    "features.mock.card1label": "Encuesta",
    "features.mock.card1title": "Dia de lanzamiento",
    "features.mock.card1meta": "Jue / Vie",
    "features.mock.card2label": "Evento",
    "features.mock.card2title": "Presentacion del producto",
    "features.mock.card2meta": "20:30 · En linea",
    "features.mock.card3label": "Ubicacion",
    "features.mock.card3title": "NiveLine Studio",
    "features.mock.card3meta": "Kadikoy · Estambul",
    "features.mock.composerPlaceholder": "Escribe un mensaje…",
    "features.mock.req1title": "Solicitud de mensaje",
    "features.mock.req1meta": "Esperando aprobacion…",
    "features.mock.req1badge": "Pendiente",
    "features.mock.req2title": "Conectado",
    "features.mock.req2meta": "Conversacion iniciada",
    "features.mock.tab1": "Chats",
    "features.mock.tab2": "Explorar",
    "features.mock.tab3": "Grupos",
    "features.mock.tab4": "Ajustes",
    "features.showcaseLabel": "Lo que hace diferente a NiveLine",
    "features.list1.title": "Autenticacion con passkey",
    "features.list1.body": "Acceso seguro con un toque, sin contrasena.",
    "features.list2.title": "Sistema de solicitudes de mensaje",
    "features.list2.body": "Los mensajes de desconocidos esperan en una bandeja filtrada.",
    "features.list3.title": "Tarjetas de evento, encuesta y ubicacion",
    "features.list3.body": "Tipos de contenido enriquecido dentro del chat, en una sola pantalla.",
    "features.list4.title": "Stories y contenido efimero",
    "features.list4.body": "Visibilidad de 24 horas, integrada en el lenguaje del producto.",
    "features.list5.title": "Vista previa de grupo y flujo de entrada",
    "features.list5.body": "Conoce el grupo antes de unirte, toma una decision informada.",
    "features.list6.title": "La privacidad esta en tus manos",
    "features.list6.body": "Confirmaciones de lectura, ultima vez y vistas previas bajo tu control.",
    "features.floatBadge1": "Cifrado de extremo a extremo",
    "features.floatBadge2": "Protegido con passkey",
    "features.phone.groupName": "Grupo NiveLine",
    "features.phone.groupMeta": "4 miembros · activo",
    "features.phone.msg1": "¿Estas listo para la presentacion de hoy?",
    "features.phone.msg2": "¡Si! Las diapositivas estan listas ✅",
    "features.phone.msg3": "Genial, nos vemos 🚀",
    "features.phone.eventTitle": "Presentacion de lanzamiento",
    "features.phone.eventMeta": "Hoy · 20:30",
    "features.phone.composerPlaceholder": "Escribe un mensaje…",
    "canvas.kicker": "Flujo del producto",
    "canvas.title": "La sensacion de producto real se construye con una jerarquia clara y una interaccion serena.",
    "canvas.tag": "Sensacion de producto",
    "canvas.chat1": "Estoy abriendo una encuesta rapida para el flujo de presentacion.",
    "canvas.chat2": "Adjunte la tarjeta del evento y la ubicacion al mismo mensaje.",
    "canvas.card1.label": "Encuesta",
    "canvas.card1.title": "Dia de lanzamiento",
    "canvas.card1.meta": "Jueves / Viernes",
    "canvas.card2.label": "Evento",
    "canvas.card2.title": "Presentacion del producto",
    "canvas.card2.meta": "20:30, en linea",
    "canvas.card3.label": "Ubicacion",
    "canvas.card3.title": "NiveLine Studio",
    "canvas.card3.meta": "Kadikoy, Estambul",
    "canvas.side1.kicker": "Stories",
    "canvas.side1.title": "Visibilidad breve",
    "canvas.side1.body": "Los estados permanecen dentro del lenguaje del producto sin romper el flujo de la aplicacion.",
    "canvas.side2.kicker": "Solicitudes",
    "canvas.side2.title": "Primer contacto aprobado",
    "canvas.side2.body": "El primer mensaje se muestra antes de aprobarse, pero permanece deliberadamente contenido.",
    "canvas.side3.kicker": "Privacidad",
    "canvas.side3.title": "Preferencias centradas en el usuario",
    "canvas.side3.body": "Confirmaciones de lectura, ultima vez y vistas previas quedan en manos del usuario.",
    "security.eyebrow": "Seguridad",
    "security.title": "Acceso, dispositivos y visibilidad se integran en un mismo modelo de seguridad.",
    "security.body":
      "En NiveLine, la seguridad no es una sola pantalla ni una sola promesa; es una decision de producto que abarca todo el ciclo de vida de la cuenta.",
    "security.list1": "Passkeys, contrasenas y 2FA con autenticador son compatibles en conjunto.",
    "security.list2": "Las sesiones de dispositivo pueden supervisarse y cerrarse de forma remota cuando sea necesario.",
    "security.list3": "Las confirmaciones de lectura, la ultima conexion y las vistas previas siguen bajo control del usuario.",
    "security.list4": "Solicitudes, bloqueo y reportes trabajan juntos para limitar el abuso.",
    "security.list5": "El cifrado de extremo a extremo se refuerza con un modelo de claves por dispositivo.",
    "security.panelKicker": "Modelo de seguridad",
    "security.panelTitle": "Los ajustes criticos se mantienen visibles, claros y bajo control del usuario.",
    "security.stack1.label": "Identidad",
    "security.stack1.value": "Passkey / Contrasena / 2FA",
    "security.stack2.label": "Dispositivos",
    "security.stack2.value": "Registro, verificacion, control de sesiones",
    "security.stack3.label": "Comunicacion",
    "security.stack3.value": "Solicitudes, bloqueo, reportes",
    "security.stack4.label": "Privacidad",
    "security.stack4.value": "Ultima vez, lecturas, vistas previas",
    "security.chip1": "Cifrado",
    "security.chip2": "Selectivo",
    "security.chip3": "Alto control",
    "security.chip4": "Diseno claro",
    "download.eyebrow": "Plataformas",
    "download.title": "NiveLine llegara pronto a App Store y Google Play.",
    "download.body":
      "Esta area esta preparada para dirigir directamente a las paginas oficiales de App Store y Google Play cuando los enlaces finales esten listos.",
    "download.meta1": "iOS y Android",
    "download.meta2": "TR / EN / ESP",
    "footer.badge": "Mensajeria privada refinada",
    "footer.supportLabel": "Soporte",
    "footer.colProduct": "Producto",
    "footer.colSupport": "Contacto",
    "footer.colPlatforms": "Plataforma",
    "footer.badge1": "Seguridad Passkey",
    "footer.badge2": "Cifrado E2E",
    "footer.badge3": "iOS & Android",
    "footer.copy": "© {year} NiveLine. Todos los derechos reservados.",
    "splash.title": "Muy Pronto",
    "splash.sub": "Una experiencia de mensajería más consciente está en camino.",
    "splash.cta": "Explorar",
    "splash.badge": "2025"
  }
};

const revealItems = [...document.querySelectorAll("[data-reveal]")];
const languageButtons = [...document.querySelectorAll(".lang-option")];
const i18nNodes = [...document.querySelectorAll("[data-i18n]")];
const i18nAriaNodes = [...document.querySelectorAll("[data-i18n-aria-label]")];
const i18nYearNodes = [...document.querySelectorAll("[data-i18n-year]")];
const titleNode = document.querySelector("title");
const descriptionNode = document.querySelector('meta[name="description"]');
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const forceHeroEntry = () => {
  const documentRoot = document.documentElement;
  const previousScrollBehavior = documentRoot.style.scrollBehavior;
  const landingUrl = `${window.location.pathname}${window.location.search}`;

  documentRoot.style.scrollBehavior = "auto";

  if (window.location.hash) {
    history.replaceState(null, "", landingUrl);
  }

  window.scrollTo(0, 0);

  requestAnimationFrame(() => {
    documentRoot.style.scrollBehavior = previousScrollBehavior;
  });
};

const setRevealTiming = () => {
  document.querySelectorAll("section, footer").forEach((group) => {
    [...group.querySelectorAll("[data-reveal]")].forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index * 90, 360)}ms`);
      item.style.setProperty("--reveal-distance", `${56 + Math.min(index, 4) * 6}px`);
    });
  });
};

const getStoredLanguage = () => {
  try {
    return window.localStorage.getItem("niveline-language-v2");
  } catch {
    return null;
  }
};

const storeLanguage = (language) => {
  try {
    window.localStorage.setItem("niveline-language-v2", language);
  } catch {
    return;
  }
};

const getPreferredLanguage = () => {
  const storedLanguage = getStoredLanguage();
  if (storedLanguage && translations[storedLanguage]) {
    return storedLanguage;
  }

  return "en";
};

const applyTranslations = (language) => {
  const activeLanguage = translations[language] ? language : "en";
  const copy = translations[activeLanguage];
  const currentYear = String(new Date().getFullYear());

  document.documentElement.lang = activeLanguage;

  if (titleNode) {
    titleNode.textContent = copy.metaTitle;
  }

  if (descriptionNode) {
    descriptionNode.setAttribute("content", copy.metaDescription);
  }

  // OG + Twitter meta güncelleme (dil değişiminde)
  const ogLocaleMap = { tr: "tr_TR", en: "en_US", es: "es_ES" };
  const ogTitleVal  = copy.metaTitle;
  const ogDescVal   = copy.metaDescription;
  const ogLocaleVal = ogLocaleMap[activeLanguage] || "en_US";
  [
    ["property", "og:title",       "content", ogTitleVal],
    ["property", "og:description", "content", ogDescVal],
    ["property", "og:locale",      "content", ogLocaleVal],
    ["name",     "twitter:title",       "content", ogTitleVal],
    ["name",     "twitter:description", "content", ogDescVal],
  ].forEach(([attr, val, prop, newVal]) => {
    const el = document.querySelector(`meta[${attr}="${val}"]`);
    if (el) el.setAttribute(prop, newVal);
  });

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = copy[key];

    if (value) {
      node.textContent = value;
    }
  });

  i18nAriaNodes.forEach((node) => {
    const key = node.dataset.i18nAriaLabel;
    const value = copy[key];

    if (value) {
      node.setAttribute("aria-label", value);
    }
  });

  i18nYearNodes.forEach((node) => {
    const key = node.dataset.i18nYear;
    const value = copy[key];

    if (value) {
      node.textContent = value.replace("{year}", currentYear);
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  // Trigger butonunu güncelle
  const langFlag = document.getElementById("langFlag");
  const langCurrent = document.getElementById("langCurrent");
  const flagMap = { tr: "🇹🇷", en: "🇬🇧", es: "🇪🇸" };
  if (langFlag) langFlag.textContent = flagMap[activeLanguage] || "🌐";
  if (langCurrent) langCurrent.textContent = activeLanguage.toUpperCase();

  storeLanguage(activeLanguage);
};

const setupRevealObserver = () => {
  if (!revealItems.length) {
    return;
  }

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    revealItems.forEach((item) => observer.observe(item));
    return;
  }

  revealItems.forEach((item) => item.classList.add("is-visible"));
};

forceHeroEntry();
window.addEventListener("pageshow", forceHeroEntry);

setRevealTiming();
applyTranslations(getPreferredLanguage());
setupRevealObserver();

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.lang;
    applyTranslations(language);
    closeLangDropdown();
  });
});

// ── Dil dropdown toggle ──
const langSwitcher = document.getElementById("langSwitcher");
const langTrigger  = document.getElementById("langTrigger");
const langDropdown = document.getElementById("langDropdown");

const openLangDropdown = () => {
  if (!langDropdown || !langTrigger) return;
  langDropdown.classList.add("is-open");
  langTrigger.setAttribute("aria-expanded", "true");
  langSwitcher.classList.add("is-open");
};

const closeLangDropdown = () => {
  if (!langDropdown || !langTrigger) return;
  langDropdown.classList.remove("is-open");
  langTrigger.setAttribute("aria-expanded", "false");
  langSwitcher.classList.remove("is-open");
};

if (langTrigger) {
  langTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    langDropdown.classList.contains("is-open") ? closeLangDropdown() : openLangDropdown();
  });
}

document.addEventListener("click", (e) => {
  if (langSwitcher && !langSwitcher.contains(e.target)) {
    closeLangDropdown();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLangDropdown();
});

// ── Hamburger menü ──
const hamburger = document.getElementById("hamburger");
const topnav    = document.getElementById("topnav");

const closeNav = () => {
  if (!topnav || !hamburger) return;
  topnav.classList.remove("is-open");
  hamburger.classList.remove("is-open");
  hamburger.setAttribute("aria-expanded", "false");
};

if (hamburger && topnav) {
  hamburger.addEventListener("click", () => {
    const isOpen = topnav.classList.toggle("is-open");
    hamburger.classList.toggle("is-open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  // Nav linkine tıklayınca kapat
  topnav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

const stage = document.querySelector(".hero-stage");
const parallaxLayers = document.querySelectorAll(".parallax-layer");
const heroShots = Array.from(document.querySelectorAll(".hero-stage .screen-shot"));
const heroDots = Array.from(document.querySelectorAll(".hero-slider-dot"));
const heroShotImages = Array.from(document.querySelectorAll(".hero-stage .screen-shot img"));
let heroSliderIndex = 0;
let heroSliderTimer = null;

const isHeroSliderMode = () => window.innerWidth <= 880;

const syncHeroSliderAssets = () => {
  heroShotImages.forEach((image) => {
    const nextSrc = isHeroSliderMode()
      ? image.dataset.mobileSrc || image.dataset.desktopSrc || image.getAttribute("src")
      : image.dataset.desktopSrc || image.getAttribute("src");

    if (nextSrc && image.getAttribute("src") !== nextSrc) {
      image.setAttribute("src", nextSrc);
    }
  });
};

const renderHeroSlider = () => {
  if (!heroShots.length) return;

  if (!isHeroSliderMode()) {
    heroShots.forEach((shot) => shot.classList.remove("is-active"));
    heroDots.forEach((dot) => dot.classList.remove("is-active"));
    return;
  }

  heroShots.forEach((shot, index) => {
    const isActive = index === heroSliderIndex;
    shot.classList.toggle("is-active", isActive);
    // Ken Burns animasyonunu resetle — yeni slayt her seferinde baştan başlar
    if (isActive && shot.classList.contains("parallax-layer")) {
      shot.style.animation = "none";
      shot.offsetHeight; // reflow tetikle
      shot.style.animation = "";
    }
  });

  // Dot progress animasyonunu resetle
  heroDots.forEach((dot, index) => {
    const isActive = index === heroSliderIndex;
    dot.classList.toggle("is-active", isActive);
    if (isActive) {
      // ::after pseudo-element animasyonunu resetle
      dot.style.animation = "none";
      dot.offsetHeight;
      dot.style.animation = "";
    }
  });
};

const startHeroSlider = () => {
  if (!heroShots.length || !isHeroSliderMode()) return;
  window.clearInterval(heroSliderTimer);
  heroSliderTimer = window.setInterval(() => {
    heroSliderIndex = (heroSliderIndex + 1) % heroShots.length;
    renderHeroSlider();
  }, 3600);
};

const syncHeroSlider = () => {
  if (!heroShots.length) return;
  syncHeroSliderAssets();

  if (!isHeroSliderMode()) {
    window.clearInterval(heroSliderTimer);
    heroSliderTimer = null;
  } else if (heroSliderTimer === null) {
    startHeroSlider();
  }

  renderHeroSlider();
};

heroDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    heroSliderIndex = index;
    renderHeroSlider();
    startHeroSlider();
  });
});

/* ── Hero slider: parmakla kaydırma (swipe) desteği ── */
if (stage) {
  let swipeStartX = 0;
  let swipeStartY = 0;
  let isSwiping = false;
  const SWIPE_THRESHOLD = 40; // px

  stage.addEventListener("pointerdown", (e) => {
    if (!isHeroSliderMode()) return;
    swipeStartX = e.clientX;
    swipeStartY = e.clientY;
    isSwiping = true;
    stage.setPointerCapture(e.pointerId);
  }, { passive: true });

  stage.addEventListener("pointerup", (e) => {
    if (!isHeroSliderMode() || !isSwiping) return;
    isSwiping = false;
    const dx = e.clientX - swipeStartX;
    const dy = e.clientY - swipeStartY;
    // Yatay hareket dikey hareketten büyükse slider'ı değiştir
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) {
        // sola → sonraki
        heroSliderIndex = (heroSliderIndex + 1) % heroShots.length;
      } else {
        // sağa → önceki
        heroSliderIndex = (heroSliderIndex - 1 + heroShots.length) % heroShots.length;
      }
      renderHeroSlider();
      startHeroSlider();
    }
  }, { passive: true });

  stage.addEventListener("pointercancel", () => { isSwiping = false; });
}

if (stage && parallaxLayers.length && !prefersReducedMotion) {
  const resetLayerShift = () => {
    parallaxLayers.forEach((layer) => {
      layer.style.setProperty("--shift-x", "0px");
      layer.style.setProperty("--shift-y", "0px");
    });
  };

  stage.addEventListener("pointermove", (event) => {
    if (isHeroSliderMode()) return; // mobilde parallax yok, sadece swipe
    const bounds = stage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    parallaxLayers.forEach((layer) => {
      const depth = Number(layer.dataset.depth || 12);
      layer.style.setProperty("--shift-x", `${x * depth}px`);
      layer.style.setProperty("--shift-y", `${y * depth}px`);
    });
  });

  stage.addEventListener("pointerleave", resetLayerShift);
}

window.addEventListener("resize", syncHeroSlider);
syncHeroSlider();

/* ─────────────────────────────────────────────────────────────
   Mobile Scroll-Snap Slider Dots
   Tüm bölümlerdeki scroll-snap sliderları için nokta göstergesi
   ───────────────────────────────────────────────────────────── */

const isMobileSliderMode = () => window.innerWidth <= 680;

/**
 * Bir slider konteyner + dot konteyner çifti için sistemi başlatır.
 * @param {string} trackSelector   - kaydırma yapılan elementin CSS seçicisi
 * @param {string} dotsId          - nokta konteynerinin id'si
 * @param {string} itemSelector    - her slayt öğesinin CSS seçicisi
 */
function initMobileSlider(trackSelector, dotsId, itemSelector) {
  const track = document.querySelector(trackSelector);
  const dotsEl = document.getElementById(dotsId);
  if (!track || !dotsEl) return;

  let items = [];
  let dotEls = [];
  let built = false;

  function buildDots() {
    items = Array.from(track.querySelectorAll(itemSelector));
    dotsEl.innerHTML = "";
    dotEls = items.map((_, i) => {
      const d = document.createElement("span");
      d.className = "mobile-dot" + (i === 0 ? " is-active" : "");
      d.addEventListener("click", () => scrollToItem(i));
      dotsEl.appendChild(d);
      return d;
    });
    built = true;
  }

  function scrollToItem(index) {
    const item = items[index];
    if (!item) return;
    track.scrollTo({ left: item.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }

  function updateActiveDot() {
    if (!built || items.length === 0) return;
    // En çok görünür öğeyi bul
    let bestIndex = 0;
    let bestOverlap = -1;
    const trackLeft = track.scrollLeft;
    const trackRight = trackLeft + track.clientWidth;
    items.forEach((item, i) => {
      const itemLeft = item.offsetLeft - track.offsetLeft;
      const itemRight = itemLeft + item.offsetWidth;
      const overlap = Math.min(itemRight, trackRight) - Math.max(itemLeft, trackLeft);
      if (overlap > bestOverlap) {
        bestOverlap = overlap;
        bestIndex = i;
      }
    });
    dotEls.forEach((d, i) => d.classList.toggle("is-active", i === bestIndex));
  }

  function onResize() {
    if (isMobileSliderMode()) {
      if (!built) buildDots();
      dotsEl.style.display = "";
      updateActiveDot();
    } else {
      dotsEl.style.display = "none";
    }
  }

  track.addEventListener("scroll", updateActiveDot, { passive: true });
  window.addEventListener("resize", onResize);
  onResize();
}

// Advantage (Fark bölümü)
initMobileSlider(".advantage-grid", "dots-advantage", ".advantage-card");

// Features büyük kart grid — her doğrudan çocuk bir slayt
// feat-hero-grid'in doğrudan çocukları: feat-card--large ve feat-col-right
(function () {
  const track = document.querySelector(".feat-hero-grid");
  const dotsEl = document.getElementById("dots-feat-hero");
  if (!track || !dotsEl) return;
  let items = [];
  let dotEls = [];
  let built = false;

  function buildDots() {
    items = Array.from(track.children);
    dotsEl.innerHTML = "";
    dotEls = items.map((_, i) => {
      const d = document.createElement("span");
      d.className = "mobile-dot" + (i === 0 ? " is-active" : "");
      d.addEventListener("click", () => {
        const item = items[i];
        if (item) track.scrollTo({ left: item.offsetLeft - track.offsetLeft, behavior: "smooth" });
      });
      dotsEl.appendChild(d);
      return d;
    });
    built = true;
  }

  function updateActiveDot() {
    if (!built || items.length === 0) return;
    let bestIndex = 0, bestOverlap = -1;
    const tl = track.scrollLeft, tr = tl + track.clientWidth;
    items.forEach((item, i) => {
      const il = item.offsetLeft - track.offsetLeft;
      const ir = il + item.offsetWidth;
      const overlap = Math.min(ir, tr) - Math.max(il, tl);
      if (overlap > bestOverlap) { bestOverlap = overlap; bestIndex = i; }
    });
    dotEls.forEach((d, i) => d.classList.toggle("is-active", i === bestIndex));
  }

  function onResize() {
    if (isMobileSliderMode()) {
      if (!built) buildDots();
      dotsEl.style.display = "";
      updateActiveDot();
    } else {
      dotsEl.style.display = "none";
    }
  }

  track.addEventListener("scroll", updateActiveDot, { passive: true });
  window.addEventListener("resize", onResize);
  onResize();
})();

// Canvas side mini-paneller
initMobileSlider(".canvas-side", "dots-canvas-side", ".mini-panel");

// Güvenlik stack
initMobileSlider(".security-stack", "dots-security", ".stack-row");
