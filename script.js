/**
 * ERBAĞLARMSY İNŞAAT — Mescioğlu Tarzı Modern Kurumsal Web Motoru
 * Akıcı Hero Slider, Dinamik Proje Vitrini, Filtreleme, Modal ve İstatistikler
 */

const PROJECTS = [
  {
    id: 'erbagalar-konaklari',
    title: 'Erbağalar Konakları',
    category: 'villa',
    categoryLabel: 'Özel Villa',
    loc: 'İstanbul / Özel Parsel',
    year: '2026',
    type: 'Müstakil Konak & Bahçe Yerleşimi',
    area: 'Yaklaşık ~3.500 m²',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/Erbağalar_Konak1.jpg',
    summary: 'Geniş bahçeli müstakil lüks konak projesi. Özel cephe aydınlatması ve ferforje detaylarla tasarlandı.',
    details: 'Doğal peyzajı ve akşam mimari cephe aydınlatmasıyla öne çıkan, bağımsız bahçeli, geniş teraslı yüksek standartlı konak yerleşimi.'
  },
  {
    id: 'gokturk-kemer-villalari',
    title: 'Göktürk Kemer Villaları',
    category: 'villa',
    categoryLabel: 'Lüks Villa',
    loc: 'Göktürk / Eyüpsultan',
    year: '2026',
    type: 'Özel Havuzlu Doğa Villaları',
    area: 'Yaklaşık ~8.200 m²',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/Göktürk_Kemer_villa.png',
    summary: 'Orman sınırında özel yüzme havuzlu ve müstakil bahçeli lüks yaşam villaları.',
    details: 'Doğayla uyumlu ahşap ve doğal taş cephe dokusu, müstakil yüzme havuzları, ferah tavan açıklıkları ve akıllı ev altyapısıyla hayata geçen seçkin villa projesi.'
  },
  {
    id: 'terrace-lotus',
    title: 'Terrace Lotus',
    category: 'rezidans',
    categoryLabel: 'Kule & Rezidans',
    loc: 'Beylikdüzü / E-5 Aksı',
    year: '2026',
    type: 'Kademeli Teraslı Karma Kule',
    area: 'Yaklaşık ~65.000 m²',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/Terrace_Lotus_Projesi.webp',
    summary: 'Kademeli yeşil teraslar üzerinde yükselen ikonik cam cepheli rezidans kulesi.',
    details: 'Alt katlarda geniş saçaklı ve bitkisel peyzajlı teras çarşısı, üzerinde ise kesintisiz şehir panoraması sunan modern kule bloktan oluşan karma yaşam projesi.'
  },
  {
    id: 'yali-atakoy',
    title: 'Yalı Ataköy',
    category: 'rezidans',
    categoryLabel: 'Sahil Rezidans',
    loc: 'Bakırköy, Ataköy Sahil',
    year: '2025',
    type: 'Denize Sıfır Rezidans Kuleleri',
    area: 'Yaklaşık ~48.000 m²',
    status: 'YAŞAM BAŞLADI',
    image: 'Proje_Resimler/YALI ATAKÖY.png',
    summary: 'Marmara Denizi kıyısında panoramik manzaralı lüks sahil rezidansları.',
    details: 'Ataköy sahil bandında kesintisiz deniz manzarasına sahip, geniş kıyı peyzajı, yatay teras hatları ve yüksek sismik dayanımla inşa edilmiş prestijli sahil rezidansları.'
  },
  {
    id: 'nish-istanbul',
    title: 'Nish İstanbul',
    category: 'ticari',
    categoryLabel: 'Ticari & Rezidans',
    loc: 'Bahçelievler, Yenibosna',
    year: '2025',
    type: '4 Kuleli İş & Yaşam Merkezi',
    area: 'Yaklaşık ~72.000 m²',
    status: 'TAMAMLANDI',
    image: 'Proje_Resimler/NİSH İSTANBUL.png',
    summary: 'Cam giydirme cepheli 4 kulesiyle İstanbul\'un öne çıkan iş ve yaşam merkezi.',
    details: 'Havalimanı ve E-5 aksına yakın konumda, yüksek verimli giydirme cam cepheleri, geniş avlu meydanı ve kurumsal ofis/rezidans katlarıyla dikkat çeken simge proje.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  renderProjectsGrid('all');
  initFilterButtons();
  initStatsCounters();
  initMobileMenu();
  initModalListeners();
});

/* ==========================================================================
   1. HERO FULLSCREEN SLIDER
   ========================================================================== */
function initHeroSlider() {
  const slides = document.querySelectorAll('.slide-item');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  const dotsContainer = document.getElementById('sliderDots');
  if (slides.length === 0) return;

  let currentSlide = 0;
  let slideInterval = null;

  // Build dots
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
    dots[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
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
    slideInterval = setInterval(nextSlide, 5500);
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  startAutoSlide();

  // Slide button clicks targeting modal
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
   2. DYNAMIC PROJECTS GRID (Clean Mescioğlu Style Cards)
   ========================================================================== */
function safeAssetUrl(path) {
  return encodeURI(path);
}

function renderProjectsGrid(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'mesci-card';
    card.setAttribute('data-category', project.category);

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${safeAssetUrl(project.image)}" alt="${project.title}" loading="lazy">
        <span class="card-status-badge">${project.status}</span>
      </div>
      <div class="card-content">
        <span class="card-loc">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          ${project.loc}
        </span>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.summary}</p>
        
        <div class="card-area-box">
          <span>İnşaat Alanı:</span>
          <strong>${project.area}</strong>
        </div>

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
   3. FILTER BUTTONS
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
   4. STATS COUNTERS
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
   5. MOBILE DRAWER NAVIGATION
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('menuToggle');
  const closeBtn = document.getElementById('drawerClose');
  const drawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('active');
  }

  function closeDrawer() {
    drawer.classList.remove('active');
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   6. PROJECT DETAIL MODAL
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
  const area = document.getElementById('modalArea');
  const status = document.getElementById('modalStatus');
  const desc = document.getElementById('modalDesc');

  if (img) img.src = safeAssetUrl(project.image);
  if (badge) badge.textContent = project.categoryLabel.toUpperCase();
  if (loc) loc.textContent = project.loc;
  if (title) title.textContent = project.title;
  if (type) type.textContent = project.type;
  if (area) area.textContent = project.area;
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
