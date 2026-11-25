/**
 * ERBAĞLAR MSY İNŞAAT — Modern Kurumsal Web Motoru (Mescioğlu Tarzı)
 * Akıcı Hero Slider, Dinamik Proje Vitrini (Ana Sayfada 5, Projeler Sayfasında 20 Proje),
 * Kategori Filtreleme, Modal ve Sayaç İstatistikleri
 */

const PROJECTS = [
  // 1. Erbağalar Konakları (Öne Çıkan 1)
  {
    id: 'erbagalar-konaklari',
    title: 'Erbağalar Konakları',
    category: 'villa',
    categoryLabel: 'Özel Villa',
    loc: 'Bursa',
    year: '2026',
    type: 'Müstakil Konak & Bahçe Yerleşimi',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/Erbağalar_Konak3.jpg',
    summary: 'Geniş bahçeli müstakil lüks konak projesi. Özel cephe aydınlatması ve ferforje detaylarla tasarlandı.',
    details: 'Doğal peyzajı ve akşam mimari cephe aydınlatmasıyla öne çıkan, bağımsız bahçeli, geniş teraslı yüksek standartlı konak yerleşimi.',
    featured: true
  },
  // 2. Türk Dil Kurumu (Öne Çıkan 2)
  {
    id: 'tdk-projesi',
    title: 'Türk Dil Kurumu',
    category: 'kamu',
    categoryLabel: 'Kamu & İdari',
    loc: 'Ankara',
    year: '2025',
    type: 'Kamu Hizmet ve Yönetim Kompleksi',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/TDK.png',
    summary: 'Modern kamu mimarisi standartlarında inşa edilen prestijli idari ve kurumsal hizmet kompleksi.',
    details: 'Yüksek güvenlik ve yangın standartlarına sahip, modern konferans ve çalışma alanlarını barındıran simge kamu yapısı.',
    featured: true
  },
  // 3. Terrace Lotus (Öne Çıkan 3)
  {
    id: 'terrace-lotus',
    title: 'Terrace Lotus',
    category: 'rezidans',
    categoryLabel: 'Kule & Rezidans',
    loc: 'Beylikdüzü / E-5 Aksı',
    year: '2026',
    type: 'Kademeli Teraslı Karma Kule',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/Terrace_Lotus_Projesi.webp',
    summary: 'Kademeli yeşil teraslar üzerinde yükselen ikonik cam cepheli rezidans kulesi ve cadde çarşısı.',
    details: 'Alt katlarda geniş saçaklı ve bitkisel peyzajlı teras çarşısı, üzerinde ise kesintisiz şehir panoraması sunan modern kule bloktan oluşan karma yaşam projesi.',
    featured: true
  },
  // 4. Bakırköy Hilton İstanbul Otel (Öne Çıkan 4)
  {
    id: 'hilton-bakirkoy',
    title: 'Bakırköy Hilton İstanbul Otel',
    category: 'otel',
    categoryLabel: 'Otel & Turizm',
    loc: 'Bakırköy, Sahil Aksı',
    year: '2024',
    type: '5 Yıldızlı Uluslararası Otel Kompleksi',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/Bakırköy_Hilton_İstanbul_otel.avif',
    summary: 'Marmara sahili bandında 5 yıldızlı uluslararası otelcilik standartlarında lüks konaklama ve kongre kompleksi.',
    details: 'Deniz manzaralı süitler, balo ve kongre salonları, spa merkezleri ve yüksek sismik dayanımla hayata geçirilen simge turizm projesi.',
    featured: true
  },
  // 5. Ankara Lalahan Elektronik Harp Komutanlığı (Öne Çıkan 5)
  {
    id: 'ankara-lalahan',
    title: 'Ankara Lalahan Elektronik Harp Komutanlığı',
    category: 'kamu',
    categoryLabel: 'Stratejik Tesis',
    loc: 'Ankara / Lalahan',
    year: '2024',
    type: 'Elektronik Harp Komutanlığı Özel Yerleşkesi',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/Ankara_Lalahan_Elektronik_Harp_Komutanlığı.jpg',
    summary: 'Yüksek güvenlikli sismik ve elektronik koruma standartlarında inşa edilen stratejik kamu ve savunma tesisi.',
    details: 'Elektronik harp sistemleri ve stratejik komuta gereksinimlerine uygun, özel korumalı betonarme altyapıyla tamamlanmış milli savunma projesi.',
    featured: true
  },
  // 6. Göktürk Kemer Villaları
  {
    id: 'gokturk-kemer-villalari',
    title: 'Göktürk Kemer Villaları',
    category: 'villa',
    categoryLabel: 'Özel Villa',
    loc: 'Göktürk / Eyüpsultan',
    year: '2026',
    type: 'Özel Havuzlu Doğa Villaları',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/Göktürk_Kemer_villa.png',
    summary: 'Orman sınırında özel yüzme havuzlu ve müstakil bahçeli seçkin mimari yaşam villaları.',
    details: 'Doğayla uyumlu ahşap ve doğal taş cephe dokusu, müstakil yüzme havuzları, ferah tavan açıklıkları ve akıllı ev altyapısıyla hayata geçen seçkin villa projesi.',
    featured: false
  },
  // 7. Yalı Ataköy
  {
    id: 'yali-atakoy',
    title: 'Yalı Ataköy',
    category: 'rezidans',
    categoryLabel: 'Sahil Rezidansı',
    loc: 'Bakırköy, Ataköy Sahil',
    year: '2025',
    type: 'Denize Sıfır Rezidans Kuleleri',
    status: 'YAŞAM BAŞLADI',
    image: 'Proje_Resimler/YALI ATAKÖY.png',
    summary: 'Marmara Denizi kıyısında panoramik manzaralı lüks sahil rezidansları.',
    details: 'Ataköy sahil bandında kesintisiz deniz manzarasına sahip, geniş kıyı peyzajı, yatay teras hatları ve yüksek sismik dayanımla inşa edilmiş prestijli sahil rezidansları.',
    featured: false
  },
  // 8. Nish İstanbul
  {
    id: 'nish-istanbul',
    title: 'Nish İstanbul',
    category: 'ticari',
    categoryLabel: 'Ticari & Ofis',
    loc: 'Bahçelievler, Yenibosna',
    year: '2025',
    type: '4 Kuleli İş & Yaşam Merkezi',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/NİSH İSTANBUL.png',
    summary: 'Cam giydirme cepheli 4 kulesiyle İstanbul\'un öne çıkan iş ve yaşam merkezi.',
    details: 'Havalimanı ve E-5 aksına yakın konumda, yüksek verimli giydirme cam cepheleri, geniş avlu meydanı ve kurumsal ofis/rezidans katlarıyla dikkat çeken simge proje.',
    featured: false
  },
  // 9. Nish Adalar
  {
    id: 'nish-adalar',
    title: 'Nish Adalar',
    category: 'rezidans',
    categoryLabel: 'Panoramik Rezidans',
    loc: 'Maltepe / Süreyyapaşa',
    year: '2024',
    type: 'Adalar Manzaralı Konut Kuleleri',
    status: 'YAŞAM BAŞLADI',
    image: 'Proje_Resimler/NİSH ADALAR.png',
    summary: 'Prens Adaları ve deniz manzarasına hakim, geniş peyzaj alanlarına sahip seçkin konut projesi.',
    details: 'Temiz ada havası, açık ve kapalı spor tesisleri, yürüyüş parkurları ve geniş balkonlu daire planlarıyla hayata geçen dev konut yerleşimi.',
    featured: false
  },
  // 10. Route İstanbul
  {
    id: 'route-istanbul',
    title: 'Route İstanbul',
    category: 'rezidans',
    categoryLabel: 'Şehir Rezidansı',
    loc: 'Ataköy / E-5 Aksı',
    year: '2025',
    type: 'Rezidans & Ticari Üniteler',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/ROUTE İSTANBUL.png',
    summary: 'E-5 aksında metro ve metrobüse sıfır konumda modern mimarili rezidans projesi.',
    details: 'Yüksek kira getirisi, modern concierge hizmetleri ve cadde dükkanlarıyla iş dünyasına hitap eden modern kentsel rezidans projesi.',
    featured: false
  },
  // 11. Erbağlar Plaza
  {
    id: 'erbaglar-plaza',
    title: 'Erbağlar Plaza',
    category: 'ticari',
    categoryLabel: 'Plaza & Ofis',
    loc: 'Bursa / Niltim',
    year: '2025',
    type: 'A+ Kurumsal Yönetim Merkezi',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/Erbağlar_Plaza1.png',
    summary: 'A+ kurumsal ofis katları, ferah lobisi ve akıllı bina teknolojisiyle donatılmış plaza kompleksi.',
    details: 'Kurumsal genel merkezler için özel tasarlanmış toplantı katları, kat bahçeleri ve fiber optik altyapıya sahip yönetim plazası.',
    featured: false
  },
  // 12. Kardelen Evleri
  {
    id: 'kardelen-evleri',
    title: 'Kardelen Evleri',
    category: 'konut',
    categoryLabel: 'Butik Konut',
    loc: 'Bursa',
    year: '2024',
    type: 'Ferah Aile Yaşam Konutları',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/Kardelen_Evleri1.png',
    summary: 'Sakin ve nezih bir muhitte geniş aile daireleri, kapalı otopark ve yeşil bahçeler.',
    details: 'Deprem yönetmeliğine tam uyumlu radye temel ve perde beton sistemiyle inşa edilmiş, sıcak mahalle kültürünü yaşatan butik konut projesi.',
    featured: false
  },
  // 13. Gaziosmanpaşa Devlet Hastanesi
  {
    id: 'gaziosmanpasa-hastanesi',
    title: 'Gaziosmanpaşa Devlet Hastanesi',
    category: 'kamu',
    categoryLabel: 'Sağlık Kompleksi',
    loc: 'İstanbul / Gaziosmanpaşa',
    year: '2023',
    type: 'Sismik İzolatörlü Sağlık Tesisi',
    status: 'HİZMETTE',
    image: 'Proje_Resimler/Gaziosmanpaşa_Devlet_Hastanesi.jpg',
    summary: 'Deprem anında dahi kesintisiz operasyonel kalabilen yüksek standartlı kamu sağlık kampüsü.',
    details: 'Yüzlerce yatak kapasitesi, modern ameliyathaneleri, helikopter pisti ve medikal gaz altyapısıyla bölgenin en büyük sağlık yatırımlarından biri.',
    featured: false
  },
  // 14. Korupark Evleri Faz 1 & 2
  {
    id: 'korupark-evleri',
    title: 'Korupark Evleri Faz 1 & 2',
    category: 'konut',
    categoryLabel: 'Doğa & Konut',
    loc: 'Bursa',
    year: '2024',
    type: 'Geniş Peyzajlı Yaşam Etapları',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/Korupark_Evleri_Faz_1 ve 2 .jpg',
    summary: 'Çam ormanlarına komşu, temiz hava ve geniş sosyal donatılarla çevrili iki etaplı yaşam projesi.',
    details: 'Yürüyüş yolları, tenis kortları, açık-kapalı havuzları ve çocuk oyun parklarıyla modern aile yaşamının tüm ihtiyaçlarına cevap veren prestijli site.',
    featured: false
  },
  // 15. Korupark AVM
  {
    id: 'korupark-avm',
    title: 'Korupark Alışveriş Merkezi',
    category: 'ticari',
    categoryLabel: 'Bölgesel AVM',
    loc: 'Bursa',
    year: '2023',
    type: 'Karma Ticaret & Yaşam Merkezi',
    status: 'HİZMETTE',
    image: 'Proje_Resimler/Korıpark_Avm.webp',
    summary: 'Bölgenin en büyük karma AVM projelerinden biri; yüzlerce uluslararası marka ve eğlence alanı.',
    details: 'Geniş atriyum açıklıkları, gün ışığı alan cam tavan mimarisi ve dev otopark kapasitesiyle günde on binlerce ziyaretçiyi ağırlayan simge ticaret merkezi.',
    featured: false
  },
  // 16. Torium AVM
  {
    id: 'torium-avm',
    title: 'Torium Alışveriş Merkezi',
    category: 'ticari',
    categoryLabel: 'Tematik AVM',
    loc: 'Esenyurt / Haramidere',
    year: '2023',
    type: 'Eğlence & Alışveriş Kompleksi',
    status: 'HİZMETTE',
    image: 'Proje_Resimler/Torium_Avm.jpg',
    summary: 'Türkiye\'nin ilk kapalı kar eğlence parkı Snowpark ve yüzlerce mağazasıyla simge alışveriş merkezi.',
    details: 'Dev amfitiyatro, açık hava teras çarşısı ve devasa sinema salonlarıyla eğlence ve alışverişi tek çatı altında buluşturan vizyoner mimari proje.',
    featured: false
  },
  // 17. Zafer Plaza
  {
    id: 'zafer-plaza',
    title: 'Zafer Plaza',
    category: 'ticari',
    categoryLabel: 'Tarihi & Modern AVM',
    loc: 'Bursa / Osmangazi',
    year: '2022',
    type: 'İkonik Piramit Mimari AVM',
    status: 'HİZMETTE',
    image: 'Proje_Resimler/Zafer_Plaza.jpg',
    summary: 'İkonik cam piramit mimarisi ve merkezi meydan konumuyla Bursa\'nın simge alışveriş merkezi.',
    details: 'Tarihi kent meydanına saygılı yer altı katları ve cam piramit ışıklığıyla ödüllü mimari tasarım standartlarında inşa edilmiş alışveriş merkezi.',
    featured: false
  },
  // 18. Bağcılar Kentsel Dönüşüm
  {
    id: 'baglicalar-kentsel',
    title: 'Bağcılar Kentsel Dönüşüm',
    category: 'kentsel',
    categoryLabel: 'Kentsel Dönüşüm',
    loc: 'İstanbul / Bağcılar',
    year: '2025',
    type: 'Depreme Dayanıklı Modern Bloklar',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/Bağlıcalr_Kenstel.png',
    summary: 'Riskli yapıların yerine yükselen, sismik güvenlikli ve planlı altyapıya sahip yeni nesil konut yerleşkesi.',
    details: 'Modern ısı ve ses yalıtımı, geniş cadde düzenlemeleri ve sosyal yeşil alanlarla şehre değer katan güvenli kentsel dönüşüm projesi.',
    featured: false
  },
  // 19. Küçükçekmece Bizim Mahalle Kentsel Dönüşüm
  {
    id: 'kucukcekmece-bizim-mahalle',
    title: 'Küçükçekmece Bizim Mahalle',
    category: 'kentsel',
    categoryLabel: 'Kentsel Dönüşüm',
    loc: 'İstanbul / Küçükçekmece',
    year: '2025',
    type: 'Kapsamlı Kentsel Yenileme Yerleşkesi',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/küçükçekmece_bizim_mahalle_kenstel.jpg',
    summary: 'Geleneksel mahalle sıcaklığını ileri deprem mühendisliğiyle buluşturan örnek kentsel dönüşüm.',
    details: 'Göl havzasına uyumlu kademeli bloklar, avlular, meydanlar ve çocuk kreşleriyle binlerce vatandaşımızı güvenli yuvalara kavuşturan dev dönüşüm hamlesi.',
    featured: false
  },
  // 20. Üsküdar Kentsel Dönüşüm
  {
    id: 'uskudar-kentsel',
    title: 'Üsküdar Kentsel Dönüşüm',
    category: 'kentsel',
    categoryLabel: 'Tarihi Doku Dönüşümü',
    loc: 'İstanbul / Üsküdar',
    year: '2025',
    type: 'Boğaziçi Silüetine Saygılı Yenileme',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/Üsküdat_Kentsel.png',
    summary: 'Boğaziçi öngörünüm bölgesine ve tarihi silüete tam uyumlu, yatay mimarili sağlam yaşam konutları.',
    details: 'Derin kazık sistemleri ve radye jeneral temel altyapısıyla zemin emniyeti maksimuma çıkarılmış, estetik ahşap görünümlü cepheleriyle simge dönüşüm projesi.',
    featured: false
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  renderProjectsGrid('all');
  initFilterButtons();
  initStatsCounters();
  initMobileMenu();
  initModalListeners();
  initSmartHeader();
});

/* ==========================================================================
   1. HERO FULLSCREEN SLIDER (Ana Sayfa İçin)
   ========================================================================== */
function initHeroSlider() {
  const slides = document.querySelectorAll('.slide-item');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  const dotsContainer = document.getElementById('sliderDots');
  if (slides.length === 0 || !dotsContainer) return;

  let currentSlide = 0;
  let slideInterval = null;

  // Noktaları oluştur
  dotsContainer.innerHTML = '';
  slides.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => {
      goToSlide(idx);
      resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.slider-dot');

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 2000); // 2 saniye
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  startAutoSlide();

  // Slider butonlarından modala yönlendirme
  document.querySelectorAll('[data-open-project]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projId = btn.getAttribute('data-open-project');
      const project = PROJECTS.find(p => p.id === projId);
      if (project) {
        e.preventDefault();
        openProjectModal(project);
      }
    });
  });
}

/* ==========================================================================
   2. PROJE VİTRİNİ
   Ana Sayfada: Sadece 5 Öne Çıkan Proje
   Projeler Sayfasında (projeler.html): Bütün 20 Proje
   ========================================================================== */
function isCatalogPage() {
  return document.body.classList.contains('page-catalog') ||
    window.location.pathname.toLowerCase().includes('projeler.html');
}

function renderProjectsGrid(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const isCatalog = isCatalogPage();
  const pool = isCatalog ? PROJECTS : PROJECTS.filter(p => p.featured === true);

  const filtered = filter === 'all'
    ? pool
    : pool.filter(p => p.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-projects-notice">
        <p>Bu kategoride henüz listelenen proje bulunmamaktadır.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'mesci-card';
    card.setAttribute('data-category', project.category);

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${safeAssetUrl(project.image)}" alt="${project.title}" loading="lazy">
        <span class="card-status-badge">${project.status}</span>
        <span class="card-type-chip">${project.categoryLabel}</span>
      </div>
      <div class="card-content">
        <span class="card-loc">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          ${project.loc}
        </span>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.summary}</p>

        <div class="card-action">
          <span>Projeyi İncele</span>
          <div class="action-arrow">→</div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      openProjectModal(project);
    });

    grid.appendChild(card);
  });
}

/* ==========================================================================
   3. FİLTRE BUTONLARI
   ========================================================================== */
function initFilterButtons() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjectsGrid(filter);
    });
  });
}

/* ==========================================================================
   4. STATS SAYAÇLARI
   ========================================================================== */
function initStatsCounters() {
  const statsSection = document.getElementById('istatistik');
  const numbers = document.querySelectorAll('.stat-num');
  if (!statsSection || numbers.length === 0) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        numbers.forEach(num => {
          const target = parseInt(num.getAttribute('data-target'), 10);
          animateCount(num, target, 1800);
        });
      }
    });
  }, { threshold: 0.2 });

  observer.observe(statsSection);

  function animateCount(el, target, duration) {
    let start = 0;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(step);
  }
}

/* ==========================================================================
   5. GELİŞMİŞ MOBİL MENÜ & OVERLAY
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('menuToggle');
  const closeBtn = document.getElementById('drawerClose');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('active');
    toggleBtn.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    toggleBtn.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    if (drawer.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });
}

/* ==========================================================================
   6. PROJE DETAY MODAL
   ========================================================================== */
const projectModal = document.getElementById('projectModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalCloseBtn = document.getElementById('modalCloseBtn');

function openProjectModal(project) {
  if (!projectModal) return;

  const img = document.getElementById('modalImg');
  const badge = document.getElementById('modalBadge');
  const loc = document.getElementById('modalLoc');
  const title = document.getElementById('modalTitle');
  const type = document.getElementById('modalType');
  const locSpec = document.getElementById('modalLocSpec');
  const status = document.getElementById('modalStatus');
  const desc = document.getElementById('modalDesc');

  if (img) img.src = safeAssetUrl(project.image);
  if (badge) badge.textContent = project.categoryLabel.toUpperCase();
  if (loc) loc.textContent = project.loc;
  if (title) title.textContent = project.title;
  if (type) type.textContent = project.type;
  if (locSpec) locSpec.textContent = project.loc;
  if (status) status.textContent = project.status;
  if (desc) desc.textContent = project.details || project.summary;

  projectModal.classList.add('active');
  projectModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove('active');
  projectModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initModalListeners() {
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });
}

function safeAssetUrl(url) {
  if (!url) return '';
  return url.replace(/ /g, '%20');
}

/* ==========================================================================
   7. SMART STICKY HEADER (Hide on Scroll Down, Reveal Immediately on Scroll Up)
   ========================================================================== */
function initSmartHeader() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
  let isHidden = false;

  function onScroll() {
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    const delta = currentScrollY - lastScrollY;

    // Mobile drawer açıkken menüyü gizleme
    const drawer = document.getElementById('mobileDrawer');
    if (drawer && drawer.classList.contains('active')) {
      header.classList.remove('header-hidden');
      lastScrollY = currentScrollY;
      return;
    }

    // Sayfanın en tepesindeyken (ilk 40px) menüyü doğal halinde tut
    if (currentScrollY <= 40) {
      if (isHidden) {
        header.classList.remove('header-hidden');
        isHidden = false;
      }
      header.classList.remove('header-scrolled');
    } else {
      header.classList.add('header-scrolled');

      // Aşağı doğru kaydırırken (delta > 5px ve 70px'den fazla inilmişse) -> Gizle
      if (delta > 5 && currentScrollY > 70) {
        if (!isHidden) {
          header.classList.add('header-hidden');
          isHidden = true;
        }
      }
      // Aşağıdan yukarı doğru kaydırırken (delta negatif: -2px bile olsa!) -> ANINDA GÖSTER!
      else if (delta < -2) {
        if (isHidden) {
          header.classList.remove('header-hidden');
          isHidden = false;
        }
      }
    }

    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('scroll', onScroll, { passive: true });
}
