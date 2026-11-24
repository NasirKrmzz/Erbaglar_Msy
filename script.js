/**
 * ERBAĞA İNŞAAT — High-End Creative Technologist Engine
 * Ultra-Smooth Momentum Lerp Scroller, Dynamic Blueprint LiDAR Scanner & 3D Telemetry Systems
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
    area: '3.200 m² Kapalı Alan',
    status: 'TAMAMLANDI',
    statusTone: 'ready',
    images: [
      'Proje_Resimler/Erbağalar_Konak1.jpg',
      'Proje_Resimler/Erbağalar_Konak2.jpg'
    ],
    summary: 'Geniş bahçeli müstakil konak projesi. Özel cephe aydınlatması ve ferforje detaylarla tasarlandı.',
    specs: ['Müstakil Bahçe', 'Geniş Panoramik Cam', 'Özel Peyzaj'],
    details: 'Gündüz doğal peyzajı ve akşam mimari cephe aydınlatmasıyla öne çıkan, geniş teraslı, bağımsız bahçe alanına sahip yüksek standartlı konak yerleşimi.'
  },
  {
    id: 'torium-avm',
    title: 'Torium AVM',
    category: 'ticari',
    categoryLabel: 'Alışveriş & Eğlence',
    loc: 'Esenyurt / Haramidere E-5',
    year: '2025',
    type: 'Temalı Alışveriş & Eğlence Merkezi',
    area: '180.000 m² İnşaat',
    status: 'TAMAMLANDI',
    statusTone: 'ready',
    images: ['Proje_Resimler/Torium_Avm.jpg'],
    summary: 'E-5 üzerinde kar parkı ve eğlence alanlarıyla öne çıkan dev alışveriş merkezi.',
    specs: ['Perforje Cephe Kabuğu', 'Geniş Açıklıklı Çatı', 'Çok Katlı Otopark'],
    details: 'E-5 karayolu aksında dikkat çekici dış cephe tasarımı, yüksek taşıma kapasiteli döşeme sistemleri ve eğlence temalı geniş iç hacimleriyle tamamlanan dev ticari kompleks.'
  },
  {
    id: 'korupark-avm',
    title: 'Korupark AVM',
    category: 'ticari',
    categoryLabel: 'Alışveriş Merkezi',
    loc: 'Osmangazi, Bursa',
    year: '2025',
    type: 'Bölgesel Alışveriş & Yaşam Merkezi',
    area: '165.000 m² Ticari Hacim',
    status: 'TAMAMLANDI',
    statusTone: 'ready',
    images: ['Proje_Resimler/Korıpark_Avm.webp'],
    summary: 'Bursa\'nın en büyük alışveriş merkezlerinden biri. Silindirik cam atriyumuyla dikkat çeker.',
    specs: ['Silindirik Atriyum', 'Büyük Ölçekli Çelik', 'Açık & Kapalı Otopark'],
    details: 'Büyük açıklıklı çelik çatı konstrüksiyonu, gün ışığı alan dairesel giriş rotunda yapısı ve entegre ulaşım akslarıyla yüksek ziyaretçi trafiğine uygun tasarlanan alışveriş merkezi.'
  },
  {
    id: 'lalahan-elektronik-harp',
    title: 'Ankara Lalahan Elektronik Harp Komutanlığı',
    category: 'kurumsal',
    categoryLabel: 'Savunma & Kampüs',
    loc: 'Lalahan / Elmadağ, Ankara',
    year: '2025',
    type: 'Yüksek Güvenlikli Askeri Teknoloji Kampüsü',
    area: '140.000 m² Kampüs Alanı',
    status: 'TAMAMLANDI',
    statusTone: 'ready',
    images: ['Proje_Resimler/Ankara_Lalahan_Elektronik_Harp_Komutanlığı.jpg'],
    summary: 'Özel güvenlik standartlarında inşa edilen stratejik askeri teknoloji yerleşkesi.',
    specs: ['Stratejik Kampüs', 'Özel Teknik Altyapı', 'Çoklu Hizmet Binası'],
    details: 'Yüksek güvenlik ve özel mühendislik şartnamelerine göre inşa edilen; komuta, teknik operasyon, hangar, eğitim ve sosyal tesis bloklarından oluşan kapsamlı yerleşke.'
  },
  {
    id: 'nish-adalar',
    title: 'Nish Adalar',
    category: 'rezidans',
    categoryLabel: 'Site & Rezidans',
    loc: 'Maltepe, Süreyyapaşa',
    year: '2025',
    type: 'Büyük Ölçekli Panorama Konutları',
    area: '95.000 m² Yaşam Vadisi',
    status: 'TAMAMLANDI',
    statusTone: 'ready',
    images: ['Proje_Resimler/NİSH ADALAR.png'],
    summary: 'Adalar manzarasına hakim, sosyal donatılarla donatılmış büyük ölçekli konut yerleşkesi.',
    specs: ['Adalar Manzarası', 'Sosyal Donatılar', 'Çoklu Blok'],
    details: 'Yamaç topoğrafyasına uyumlu kademeli yerleşimiyle her blokta ferah görüş açısı sunan, açık havuzları, spor sahaları ve peyzaj teraslarıyla bütünleşen kapsamlı konut projesi.'
  },
  {
    id: 'kucukcekmece-bizim-mahalle',
    title: 'Küçükçekmece Bizim Mahalle',
    category: 'donusum',
    categoryLabel: 'Kentsel Dönüşüm',
    loc: 'Küçükçekmece, İstanbul',
    year: '2026',
    type: 'Yatay Mimari Kentsel Dönüşüm',
    area: '84.000 m² Yaşam Alanı',
    status: 'ETAP TESLİMİ',
    statusTone: 'ready',
    images: ['Proje_Resimler/küçükçekmece_bizim_mahalle_kenstel.jpg'],
    summary: 'Mahalle kültürünü modern yatay mimariyle buluşturan kapsamlı kentsel dönüşüm projesi.',
    specs: ['Yatay Mimari', 'Avlu & Su Peyzajı', 'Geniş Sosyal Alan'],
    details: 'Deprem yönetmeliğine tam uyumlu az katlı konut blokları, araç trafiğinden arındırılmış yürüyüş aksları, gölgelikli dinlenme alanları ve merkezi yansıma havuzlarıyla planlanan örnek kentsel dönüşüm.'
  },
  {
    id: 'nish-istanbul',
    title: 'Nish İstanbul',
    category: 'ticari',
    categoryLabel: 'Ticari & Rezidans',
    loc: 'Bahçelievler, Yenibosna',
    year: '2025',
    type: '4 Kuleli İş & Yaşam Merkezi',
    area: '72.000 m² Karma Kompleks',
    status: 'TAMAMLANDI',
    statusTone: 'ready',
    images: ['Proje_Resimler/NİSH İSTANBUL.png'],
    summary: 'Cam giydirme cepheli 4 kulesiyle İstanbul\'un öne çıkan iş ve yaşam merkezi.',
    specs: ['Giydirme Cam Cephe', '4 Kule Kompleks', 'Yeşil Podyum'],
    details: 'Havalimanı ve E-5 aksına yakın konumda, yüksek verimli giydirme cam cepheleri, geniş avlu meydanı ve kurumsal ofis/rezidans katlarıyla dikkat çeken simge proje.'
  },
  {
    id: 'gaziosmanpasa-hastanesi',
    title: 'Gaziosmanpaşa Devlet Hastanesi',
    category: 'kurumsal',
    categoryLabel: 'Sağlık Yapısı',
    loc: 'Gaziosmanpaşa, İstanbul',
    year: '2025',
    type: 'Tam Teşekküllü Eğitim & Araştırma Hastanesi',
    area: '68.000 m² Sağlık Tesisi',
    status: 'HİZMETTE',
    statusTone: 'ready',
    images: ['Proje_Resimler/Gaziosmanpaşa_Devlet_Hastanesi.jpg'],
    summary: 'Yüksek sismik güvenlikli, tam teşekküllü modern kamu hastanesi.',
    specs: ['Kesintisiz Sağlık Altyapısı', 'Sismik Dayanım', 'Cam & Taş Cephe'],
    details: 'Deprem sonrası kesintisiz hizmet kriterlerine uygun taşıyıcı sistem, ileri mekanik havalandırma, medikal gaz ve yüksek kapasiteli poliklinik üniteleriyle tamamlanan kamu hastanesi.'
  },
  {
    id: 'uskudar-kentsel',
    title: 'Üsküdar Kentsel Dönüşüm',
    category: 'donusum',
    categoryLabel: 'Kentsel Dönüşüm',
    loc: 'Üsküdar, İstanbul',
    year: '2026',
    type: 'Bölgesel Kentsel Dönüşüm Etapları',
    area: '64.000 m² Dönüşüm Alanı',
    status: 'ETAP TESLİMİ',
    statusTone: 'construction',
    images: ['Proje_Resimler/Üsküdat_Kentsel.png'],
    summary: 'Deprem yönetmeliğine uyumlu, az katlı bloklardan oluşan kapsamlı yenileme projesi.',
    specs: ['Deprem Güvenlikli', 'Çoklu Etap', 'Modern Altyapı'],
    details: 'Riskli yapı stokunu güvenli ve düzenli kent dokusuna dönüştüren; geniş yol aksları, istinat yapıları ve mahalle ölçeğinde az katlı bloklarıyla örnek kentsel dönüşüm uygulaması.'
  },
  {
    id: 'korupark-evleri',
    title: 'Korupark Evleri Faz 1 & 2',
    category: 'rezidans',
    categoryLabel: 'Rezidans & Konut',
    loc: 'Osmangazi, Bursa',
    year: '2025',
    type: 'Su Peyzajlı Yaşam Kompleksi',
    area: '58.000 m² İnşaat',
    status: 'TAMAMLANDI',
    statusTone: 'ready',
    images: ['Proje_Resimler/Korupark_Evleri_Faz_1 ve 2 .jpg'],
    summary: 'Merkezi süs havuzları ve peyzaj yürüyüş yollarıyla donatılmış prestijli konut sitesi.',
    specs: ['Yansıma Havuzları', 'Geniş Peyzaj', '7/24 Güvenlik'],
    details: 'Bloklar arasında geniş nefes alma alanları bırakan merkezi su parkı, peyzaj aydınlatması ve modern konut katlarıyla aile yaşamına odaklanan büyük ölçekli konut projesi.'
  },
  {
    id: 'zafer-plaza',
    title: 'Zafer Plaza',
    category: 'ticari',
    categoryLabel: 'Şehir Meydanı & AVM',
    loc: 'Osmangazi, Bursa',
    year: '2025',
    type: 'Cam Piramitli Yeraltı Çarşı & Meydan',
    area: '52.000 m² Ticari Alan',
    status: 'TAMAMLANDI',
    statusTone: 'ready',
    images: ['Proje_Resimler/Zafer_Plaza.jpg'],
    summary: 'İkonik cam piramit girişi ve çok katlı yeraltı çarşısıyla Bursa\'nın simge meydanı.',
    specs: ['Cam Piramit Çatı', 'Derin İksa & Temel', 'Kent Meydanı'],
    details: 'Kent siluetini koruyarak yeraltına doğru çok katlı inşa edilen, merkezindeki dev cam piramit sayesinde alt katlara doğal gün ışığı taşıyan özel mühendislik ve ticaret kompleksi.'
  },
  {
    id: 'tdk-kompleksi',
    title: 'TDK Kurumsal Kompleksi',
    category: 'kurumsal',
    categoryLabel: 'Kamu & Kurumsal',
    loc: 'Ankara / Kurumsal Kampüs',
    year: '2025',
    type: 'Anıtsal Yıldız Planlı Kampüs',
    area: '48.000 m² Kampüs Alanı',
    status: 'TAMAMLANDI',
    statusTone: 'ready',
    images: ['Proje_Resimler/TDK.png'],
    summary: 'Beş kollu yıldız plan geometrisiyle tasarlanan anıtsal kurumsal kampüs.',
    specs: ['5 Kollu Yıldız Plan', 'Merkezi Kubbe', 'Kampüs Peyzajı'],
    details: 'Özgün 5 kollu yıldız mimarisi, büyük açıklıklı giriş portalları, gece mimari aydınlatması ve geniş açık otopark/peyzaj düzenlemesiyle öne çıkan yüksek prestijli kurumsal kompleks.'
  },
  {
    id: 'yali-atakoy',
    title: 'Yalı Ataköy',
    category: 'rezidans',
    categoryLabel: 'Sahil Rezidans',
    loc: 'Bakırköy, Ataköy Sahil',
    year: '2025',
    type: 'Denize Sıfır Rezidans Kuleleri',
    area: '42.000 m² Toplam Alan',
    status: 'YAŞAM BAŞLADI',
    statusTone: 'ready',
    images: ['Proje_Resimler/YALI ATAKÖY.png'],
    summary: 'Marmara Denizi kıyısında panoramik manzaralı lüks sahil rezidansları.',
    specs: ['Denize Sıfır', 'Özel İskele & Sahil', 'Panoramik Balkon'],
    details: 'Ataköy sahil bandında kesintisiz deniz manzarasına sahip, geniş kıyı peyzajı, yatay teras hatları ve yüksek sismik dayanımla inşa edilmiş prestijli sahil rezidansları.'
  },
  {
    id: 'hilton-bakirkoy',
    title: 'Hilton İstanbul Bakırköy',
    category: 'ticari',
    categoryLabel: 'Lüks Otel',
    loc: 'Bakırköy Sahil, İstanbul',
    year: '2025',
    type: '5 Yıldızlı Sahil Oteli & SPA',
    area: '38.500 m² Kapalı Alan',
    status: 'TAMAMLANDI',
    statusTone: 'ready',
    images: ['Proje_Resimler/Bakırköy_Hilton_İstanbul_otel.avif'],
    summary: 'Marmara sahilinde açık havuz ve SPA tesisleriyle donatılmış 5 yıldızlı otel.',
    specs: ['5 Yıldızlı Otel', 'Deniz Manzaralı', 'Açık Havuz & SPA'],
    details: 'Bakırköy kıyı aksında yükselen, yüksek akustik konfora sahip konaklama kulesi, peyzajlı açık havuz avlusu ve uluslararası standartlarda teknik altyapıyla inşa edilen otel yatırımı.'
  },
  {
    id: 'terrace-lotus',
    title: 'Terrace Lotus',
    category: 'rezidans',
    categoryLabel: 'Kule & Rezidans',
    loc: 'Beylikdüzü / E-5 Aksı',
    year: '2026',
    type: 'Kademeli Teraslı Karma Kule',
    area: '36.000 m² Karma Alan',
    status: 'TAMAMLANDI',
    statusTone: 'ready',
    images: ['Proje_Resimler/Terrace_Lotus_Projesi.webp'],
    summary: 'Kademeli yeşil teraslar üzerinde yükselen ikonik cam cepheli rezidans kulesi.',
    specs: ['Kademeli Yeşil Teras', 'Panoramik Kule', 'Cadde Mağazaları'],
    details: 'Alt katlarda geniş saçaklı ve bitkisel peyzajlı teras çarşısı, üzerinde ise kesintisiz şehir panoraması sunan modern kule bloktan oluşan karma yaşam projesi.'
  },
  {
    id: 'route-istanbul',
    title: 'Route İstanbul',
    category: 'rezidans',
    categoryLabel: 'Rezidans & Ofis',
    loc: 'Bahçelievler / E-5 Aksı',
    year: '2025',
    type: 'Karma Rezidans & Cadde Ticari',
    area: '24.000 m² Karma Alan',
    status: 'OTURUM HAZIR',
    statusTone: 'ongoing',
    images: ['Proje_Resimler/ROUTE İSTANBUL.png'],
    summary: 'E-5 aksında ticari zemin katlı, teraslı modern şehir rezidansı.',
    specs: ['E-5 Cepheli', 'Cadde Mağazaları', 'Teraslı Katlar'],
    details: 'Şehir içi ana arterlere doğrudan bağlantılı, zemin katta ticari birimler ve üst katlarda yüksek konforlu rezidans dairelerinden oluşan çağdaş karma yapı.'
  },
  {
    id: 'baglicalar-kentsel',
    title: 'Bağlıcalar Kentsel Dönüşüm',
    category: 'donusum',
    categoryLabel: 'Kentsel Dönüşüm',
    loc: 'Bağlıcalar / Dönüşüm Aksı',
    year: '2026',
    type: 'Yeni Nesil Kentsel Dönüşüm Bloğu',
    area: '9.600 m² Kapalı Alan',
    status: 'İSKÂNA HAZIR',
    statusTone: 'ongoing',
    images: ['Proje_Resimler/Bağlıcalr_Kenstel.png'],
    summary: 'Modern taş cephe ve kapalı otoparkıyla yenilenen kentsel dönüşüm bloğu.',
    specs: ['Çift Kapalı Otopark', 'Modern Taş Cephe', 'Yüksek Tavan'],
    details: 'Eski yapı stoğunun yerine modern mimari çizgilerle yükselen, çift araç girişli kapalı otopark, peyzajlı yan yürüyüş yolu ve dayanıklı betonarme taşıyıcı sisteme sahip dönüşüm projesi.'
  },
  {
    id: 'gokturk-kemer-villa',
    title: 'Göktürk Kemer Villaları',
    category: 'villa',
    categoryLabel: 'Özel Villa',
    loc: 'Eyüpsultan, Göktürk',
    year: '2026',
    type: 'Müstakil Havuzlu Villa Sitesi',
    area: '5.400 m² Parsel & Villa',
    status: 'İSKÂNI ALINDI',
    statusTone: 'ready',
    images: ['Proje_Resimler/Göktürk_Kemer_villa.png'],
    summary: 'Özel yüzme havuzlu, güneş enerjili müstakil villalar. Göktürk ormanları komşuluğunda.',
    specs: ['Özel Yüzme Havuzu', 'Güneş Enerjisi', 'Doğal Taş Cephe'],
    details: 'Göktürk orman hattına komşu, her villaya ait müstakil yüzme havuzu, güneş enerjili çatı sistemi, pergola oturma alanları ve geniş bahçe peyzajı ile inşa edilmiş seçkin villa projesi.'
  },
  {
    id: 'erbaglar-plaza',
    title: 'Erbağlar Plaza',
    category: 'ticari',
    categoryLabel: 'Ticari Plaza',
    loc: 'Nilüfer, Bursa',
    year: '2025',
    type: 'Showroom & Kurumsal Ticari Bina',
    area: '3.400 m² Ticari Alan',
    status: 'AKTİF KULLANIMDA',
    statusTone: 'ready',
    images: ['Proje_Resimler/Erbağlar_Plaza1.png'],
    summary: 'Reflektif cam cephe ve showroom alanıyla modern kurumsal ticari plaza.',
    specs: ['Geniş Vitrin Cephe', 'Kurumsal Ofis', 'Ön Cephe Otopark'],
    details: 'Ticari görünürlüğü en üst düzeye çıkaran reflektif cam cephe, zemin katta lojistik/showroom kepenk sistemi ve üst katta ferah yönetim ofisleriyle tasarlanan ticari yapı.'
  },
  {
    id: 'kardelen-evleri',
    title: 'Kardelen Evleri',
    category: 'rezidans',
    categoryLabel: 'Butik Konut',
    loc: 'İstanbul / Konut Bölgesi',
    year: '2025',
    type: '4 Katlı Butik Aile Apartmanı',
    area: '2.800 m² İnşaat',
    status: 'TAMAMLANDI',
    statusTone: 'ready',
    images: ['Proje_Resimler/Kardelen_Evleri1.png'],
    summary: 'Cam balkonlu, ısı yalıtımlı modern butik aile apartmanı.',
    specs: ['Cam Balkon Sistemi', 'Yatay Mimari', 'Isı & Ses Yalıtımı'],
    details: 'Sakin sokak dokusuna uyumlu 4 katlı mimarisi, köşe cephe cam balkonları ve güvenlikli bahçe çevresiyle öne çıkan butik konut projesi.'
  }
];

let openProjectModalHandler = null;

document.addEventListener('DOMContentLoaded', () => {
  initGlobalScrollProgress();
  initHeroSlideshow();
  initCinemaHeroScroller();
  renderHomeShowcase();
  renderPortfolioGrid();
  initCardSpotlights();
  initScrollObserver();
  initTelemetryCounters();
  initPortfolioFilters();
  initKineticProjectDeck();
  initProjectSheetModal();
  initHeaderAndDock();
});

/* ==========================================================================
   0. DYNAMIC DATA RENDERERS (Home Showcase Marquee & Portfolio Grid)
   ========================================================================== */
function safeAssetUrl(path) {
  return encodeURI(path);
}

function renderHomeShowcase() {
  const topTrack = document.getElementById('showcaseTrackTop');
  const bottomTrack = document.getElementById('showcaseTrackBottom');
  const wrapper = document.getElementById('showcaseMarqueeWrapper');
  if (!topTrack || !bottomTrack) return;

  const half = Math.ceil(PROJECTS.length / 2);
  const topItems = PROJECTS.slice(0, half);
  const bottomItems = PROJECTS.slice(half);

  function buildTrack(trackEl, list) {
    // Duplicate items twice for seamless -50% infinite CSS marquee loop
    const combined = [...list, ...list];
    combined.forEach((project) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'showcase-reel-card';
      card.setAttribute('aria-label', `${project.title} projesini incele`);
      card.innerHTML = `
        <img src="${safeAssetUrl(project.images[0])}" alt="${project.title}" loading="lazy" decoding="async">
        <div class="showcase-reel-overlay">
          <span class="reel-badge">${project.categoryLabel}</span>
          <div class="reel-meta">
            <strong class="reel-title">${project.title}</strong>
            <span class="reel-loc">${project.loc}</span>
          </div>
        </div>
      `;
      card.addEventListener('click', () => {
        if (openProjectModalHandler) openProjectModalHandler(project);
      });
      trackEl.appendChild(card);
    });
  }

  buildTrack(topTrack, topItems);
  buildTrack(bottomTrack, bottomItems);

  if (wrapper) {
    wrapper.addEventListener('touchstart', () => wrapper.classList.add('is-paused'), { passive: true });
    wrapper.addEventListener('touchend', () => {
      setTimeout(() => wrapper.classList.remove('is-paused'), 1200);
    }, { passive: true });
  }
}

function renderPortfolioGrid() {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  const counts = { all: PROJECTS.length, villa: 0, rezidans: 0, donusum: 0, ticari: 0, kurumsal: 0 };

  PROJECTS.forEach((project, idx) => {
    if (counts[project.category] !== undefined) counts[project.category] += 1;

    const card = document.createElement('article');
    card.className = 'portfolio-card scroll-reveal';
    card.setAttribute('data-category', project.category);
    card.setAttribute('data-project-id', project.id);
    card.style.transitionDelay = `${Math.min(idx % 3, 2) * 70}ms`;

    const galleryBadge = project.images.length > 1
      ? `<span class="card-gallery-count">1/${project.images.length} FOTOĞRAF</span>`
      : '';

    const specsHtml = project.specs
      .map((spec) => `<span class="spec-pill">${spec}</span>`)
      .join('');

    card.innerHTML = `
      <div class="card-media">
        <img src="${safeAssetUrl(project.images[0])}" alt="${project.title}" loading="lazy" decoding="async">
        <div class="card-sheen-beam"></div>
        ${galleryBadge}
      </div>
      <div class="card-details">
        <div class="card-meta-top">
          <span class="loc-pin">${project.loc}</span>
          <span class="proj-year">${project.year}</span>
        </div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.summary}</p>
        <div class="card-micro-specs">${specsHtml}</div>
        <div class="card-action-row">
          <span class="btn-inspect">Projeyi İncele</span>
          <div class="action-circle-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17l10-10M17 7H7M17 7v10"/></svg>
          </div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      if (openProjectModalHandler) openProjectModalHandler(project);
    });

    grid.appendChild(card);
  });

  Object.entries(counts).forEach(([key, val]) => {
    const countEl = document.querySelector(`[data-count-for="${key}"]`);
    if (countEl) countEl.textContent = String(val);
  });
}

function initHeroSlideshow() {
  const slides = document.querySelectorAll('#heroSlideshow .hero-slide');
  const label = document.getElementById('heroActiveProjectName');
  if (slides.length <= 1) return;

  let currentIndex = 0;
  setInterval(() => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
    if (label) {
      label.textContent = (slides[currentIndex].getAttribute('alt') || 'ERBAĞA İNŞAAT').toUpperCase();
    }
  }, 4800);
}

/* ==========================================================================
   1. GLOBAL READING PROGRESS BAR (Top Laser Indicator)
   ========================================================================== */
function initGlobalScrollProgress() {
  const progressBar = document.getElementById('globalProgressBar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
    progressBar.style.width = `${progress * 100}%`;
  }, { passive: true });
}

/* ==========================================================================
   2. CINEMATIC HERO SCROLLER (Momentum Lerp Loop & LiDAR Blueprint Wipe)
   ========================================================================== */
function initCinemaHeroScroller() {
  const track = document.getElementById('heroTrack');
  const portal = document.getElementById('cinemaPortal');
  const heroSlideshow = document.getElementById('heroSlideshow');
  const blueprintLayer = document.getElementById('blueprintLayer');
  const laserScanner = document.getElementById('laserScanner');

  const beacon1 = document.getElementById('beacon1');
  const beacon2 = document.getElementById('beacon2');
  const beacon3 = document.getElementById('beacon3');

  const chapter1 = document.getElementById('chapter1');
  const chapter2 = document.getElementById('chapter2');
  const chapter3 = document.getElementById('chapter3');

  const hudPhaseChip = document.getElementById('hudPhaseChip');
  const scrubFill = document.getElementById('scrubFill');
  const scrubPercentText = document.getElementById('scrubPercentText');
  const timeTabs = document.querySelectorAll('.time-tab');

  if (!track || !portal) return;

  // Momentum Physics State
  let targetProgress = 0;
  let currentProgress = 0;
  const lerpFactor = 0.12; // Buttery iOS-like spring inertia

  function calculateTarget() {
    const rect = track.getBoundingClientRect();
    const trackHeight = track.offsetHeight - window.innerHeight;
    if (trackHeight <= 0) return;
    const raw = -rect.top / trackHeight;
    targetProgress = Math.max(0, Math.min(1, raw));
  }

  // Animation Loop running via requestAnimationFrame
  function renderScroller() {
    // Lerp smoothing: current smoothly chases target
    currentProgress += (targetProgress - currentProgress) * lerpFactor;

    // 1. Dynamic Portal 3D Perspective & Scale Transform
    // Scale starts contained (0.86) and smoothly expands to full-screen panoramic (1.04)
    const scale = 0.86 + (currentProgress * 0.18);
    // Subtle 3D tilt: camera tilts upright as you scroll
    const tiltX = (1 - currentProgress) * 3.5;
    const radius = Math.max(0, 24 - (currentProgress * 28));

    portal.style.transform = `scale(${scale}) rotateX(${tiltX}deg)`;
    portal.style.borderRadius = `${radius}px`;

    // Counter-parallax on internal building slideshow
    if (heroSlideshow) {
      const imgScale = 1.08 - (currentProgress * 0.04);
      const imgShiftY = currentProgress * 16;
      heroSlideshow.style.transform = `scale(${imgScale}) translateY(${imgShiftY}px)`;
    }

    // 2. Blueprint LiDAR Scan Beam & Clip-Path Wipe
    // Phase 1 (0.0 to 0.22): Blueprint fully covers (scan is parked at 0%)
    // Phase 2 (0.22 to 0.72): Laser beam sweeps 0% -> 100%, peeling CAD blueprint to reveal real building!
    // Phase 3 (0.72 to 1.0): Full photoreal building revealed, laser fades out
    let scanY = 0;
    if (currentProgress < 0.22) {
      scanY = 0;
      if (laserScanner) {
        laserScanner.style.opacity = '0';
        laserScanner.style.top = '0%';
      }
    } else if (currentProgress <= 0.72) {
      const scanProgress = (currentProgress - 0.22) / 0.50;
      scanY = Math.min(100, Math.max(0, scanProgress * 100));
      if (laserScanner) {
        laserScanner.style.opacity = '1';
        laserScanner.style.top = `${scanY}%`;
      }
    } else {
      scanY = 100;
      if (laserScanner) {
        const fadeProgress = (currentProgress - 0.72) / 0.15;
        laserScanner.style.opacity = Math.max(0, 1 - fadeProgress).toString();
        laserScanner.style.top = '100%';
      }
    }

    if (blueprintLayer) {
      blueprintLayer.style.clipPath = `inset(${scanY}% 0 0 0)`;
      blueprintLayer.style.webkitClipPath = `inset(${scanY}% 0 0 0)`;
    }

    // 3. Dynamic Story Chapters Transition
    if (chapter1 && chapter2 && chapter3) {
      if (currentProgress < 0.32) {
        switchChapter(chapter1, [chapter2, chapter3]);
      } else if (currentProgress < 0.68) {
        switchChapter(chapter2, [chapter1, chapter3]);
      } else {
        switchChapter(chapter3, [chapter1, chapter2]);
      }
    }

    // 4. Interactive Beacons (Structural Hotspots with Crosshairs)
    if (beacon1) {
      if (currentProgress > 0.34 && currentProgress < 0.95) {
        beacon1.classList.add('revealed');
      } else {
        beacon1.classList.remove('revealed');
      }
    }

    if (beacon2) {
      if (currentProgress > 0.50 && currentProgress < 0.95) {
        beacon2.classList.add('revealed');
      } else {
        beacon2.classList.remove('revealed');
      }
    }

    if (beacon3) {
      if (currentProgress > 0.68 && currentProgress < 0.98) {
        beacon3.classList.add('revealed');
      } else {
        beacon3.classList.remove('revealed');
      }
    }

    // 5. Timeline HUD Indicators
    if (scrubFill) {
      scrubFill.style.width = `${currentProgress * 100}%`;
    }

    if (scrubPercentText) {
      scrubPercentText.textContent = `${Math.round(currentProgress * 100)}% TAMAMLANDI`;
    }

    // Phase Chip Text & Tab Active State
    let activeStep = 0;
    if (currentProgress < 0.32) {
      activeStep = 0;
      if (hudPhaseChip) hudPhaseChip.textContent = 'FAZ: 01 // KONSEPT & STATİK';
    } else if (currentProgress < 0.68) {
      activeStep = 1;
      if (hudPhaseChip) hudPhaseChip.textContent = 'FAZ: 02 // SİSMİK MODEL TARAMA';
    } else {
      activeStep = 2;
      if (hudPhaseChip) hudPhaseChip.textContent = 'FAZ: 03 // İMALAT & TESLİM';
    }

    timeTabs.forEach((tab, idx) => {
      if (idx === activeStep) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    window.requestAnimationFrame(renderScroller);
  }

  function switchChapter(activeCh, inactiveArr) {
    if (!activeCh.classList.contains('active')) {
      activeCh.classList.add('active');
    }
    inactiveArr.forEach(ch => ch.classList.remove('active'));
  }

  // Clickable Time Tabs (Glides to corresponding phase)
  timeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const step = parseInt(tab.getAttribute('data-step'), 10);
      const trackTop = track.offsetTop;
      const trackHeight = track.offsetHeight - window.innerHeight;

      let targetScrollY = trackTop;
      if (step === 0) targetScrollY = trackTop + (0.05 * trackHeight);
      if (step === 1) targetScrollY = trackTop + (0.45 * trackHeight);
      if (step === 2) targetScrollY = trackTop + (0.85 * trackHeight);

      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });
    });
  });

  window.addEventListener('scroll', calculateTarget, { passive: true });
  window.addEventListener('resize', calculateTarget, { passive: true });

  // Start continuous momentum loop
  calculateTarget();
  renderScroller();
}

/* ==========================================================================
   3. CARD SPOTLIGHT TRACKER (Ambient Specular Light on Touch / Cursor)
   ========================================================================== */
function initCardSpotlights() {
  const cards = document.querySelectorAll('.metric-glass-card');
  cards.forEach(card => {
    function setSpotlight(clientX, clientY) {
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      card.style.setProperty('--spot-x', `${x}px`);
      card.style.setProperty('--spot-y', `${y}px`);
    }

    card.addEventListener('mousemove', (e) => {
      setSpotlight(e.clientX, e.clientY);
    });

    card.addEventListener('touchstart', (e) => {
      card.classList.add('touch-active');
      if (e.touches && e.touches[0]) {
        setSpotlight(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    card.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        setSpotlight(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    card.addEventListener('touchend', () => {
      setTimeout(() => card.classList.remove('touch-active'), 400);
    });
  });
}

/* ==========================================================================
   4. SCROLL OBSERVER (Editorial Reveal for In-View Elements)
   ========================================================================== */
function initScrollObserver() {
  const elements = document.querySelectorAll('.scroll-reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.12
  });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   5. TELEMETRY COUNTERS & DONUT ACTIVITY GAUGE (Synced 60fps Animation)
   ========================================================================== */
function initTelemetryCounters() {
  const section = document.getElementById('istatistik');
  const numbers = document.querySelectorAll('.telemetry-num');
  const donutStroke = document.getElementById('donutDeliveryStroke');
  const metricCards = document.querySelectorAll('.metric-glass-card');
  if (!section || numbers.length === 0) return;

  let triggered = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !triggered) {
        triggered = true;

        // Ensure in-view is triggered on all cards for micro progress bars
        metricCards.forEach(card => card.classList.add('in-view'));

        // Animate numbers and sync donut stroke
        numbers.forEach(num => {
          const target = parseInt(num.getAttribute('data-count'), 10);
          animateValue(num, target, 1800);
        });
      }
    });
  }, { threshold: 0.2 });

  observer.observe(section);

  function animateValue(el, target, duration) {
    let start = null;
    const isDonutNumber = el.closest('.donut-card') !== null;
    const maxCircumference = 251.2;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Apple-style cubic deceleration
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(ease * target);
      el.textContent = currentVal;

      // Real-time synchronization of the SVG Donut Activity Ring
      if (isDonutNumber && donutStroke) {
        const offset = maxCircumference - (ease * maxCircumference);
        donutStroke.style.strokeDashoffset = offset;
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = target;
        if (isDonutNumber && donutStroke) {
          donutStroke.style.strokeDashoffset = '0';
        }
      }
    }
    window.requestAnimationFrame(step);
  }
}

/* ==========================================================================
   6. PORTFOLIO FILTERS (Apple Segmented Gliding Pill Control)
   ========================================================================== */
function initPortfolioFilters() {
  const cluster = document.getElementById('filterCluster');
  const pill = document.getElementById('filterSliderPill');
  const chips = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.portfolio-card');
  if (!cluster || chips.length === 0) return;

  function updatePill(activeBtn) {
    if (!pill || !activeBtn) return;
    const clusterRect = cluster.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();
    const leftOffset = btnRect.left - clusterRect.left + cluster.scrollLeft;

    pill.style.width = `${btnRect.width}px`;
    pill.style.transform = `translateX(${leftOffset}px)`;
  }

  // Initial pill position
  const activeChip = cluster.querySelector('.filter-chip.active');
  if (activeChip) {
    setTimeout(() => updatePill(activeChip), 100);
  }

  window.addEventListener('resize', () => {
    const currentActive = cluster.querySelector('.filter-chip.active');
    if (currentActive) updatePill(currentActive);
  }, { passive: true });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      updatePill(chip);

      const filter = chip.getAttribute('data-filter');
      let matchIdx = 0;

      cards.forEach((card) => {
        const category = card.getAttribute('data-category');
        const matches = (filter === 'all' || category === filter);

        if (card._filterTimer) {
          clearTimeout(card._filterTimer);
          card._filterTimer = null;
        }

        if (matches) {
          const delay = 20 + (matchIdx * 35);
          matchIdx += 1;
          card.style.display = 'flex';
          card.classList.add('in-view');
          card._filterTimer = setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'perspective(1200px) translateY(0) scale(1)';
          }, delay);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'perspective(1200px) translateY(18px) scale(0.96)';
          card._filterTimer = setTimeout(() => {
            card.style.display = 'none';
          }, 260);
        }
      });
    });
  });
}

/* ==========================================================================
   7. KINETIC PROJECT DECK (3D Scroll Perspective, Sheen & Magnetic Tilt)
   ========================================================================== */
function initKineticProjectDeck() {
  const cards = document.querySelectorAll('.portfolio-card');
  if (cards.length === 0) return;

  // 1. Kinetic Scroll Perspective & Image Parallax Loop
  function updateDeck() {
    const windowH = window.innerHeight;
    const centerY = windowH / 2;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const img = card.querySelector('.card-media img');
      const sheen = card.querySelector('.card-sheen-beam');

      // Only process when visible on viewport
      if (rect.top < windowH && rect.bottom > 0) {
        const cardCenter = rect.top + rect.height / 2;
        const distanceFromCenter = cardCenter - centerY;
        const normalizedDist = Math.max(-1, Math.min(1, distanceFromCenter / (windowH * 0.6)));

        // Subtle 3D perspective pitch based on scroll position
        const pitchAngle = normalizedDist * 4; // Max 4 deg tilt
        const parallaxShift = normalizedDist * 18; // 18px shift

        if (img) {
          img.style.transform = `scale(1.08) translateY(${parallaxShift}px)`;
        }

        // Trigger sheen sweep once as it passes through the viewing focal zone
        if (sheen && Math.abs(normalizedDist) < 0.25 && !card.dataset.sheenTriggered) {
          card.dataset.sheenTriggered = 'true';
          sheen.style.animation = 'card-sheen-sweep 0.9s ease-out forwards';
        }
      }
    });
  }

  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateDeck);
  }, { passive: true });

  updateDeck();

  // 2. Interactive 3D Magnetic Cursor Tilt (Desktop & Tablet)
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  if (!isTouchDevice) {
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -((y - centerY) / centerY) * 4.5;
        const rotateY = ((x - centerX) / centerX) * 4.5;

        card.style.transform = `perspective(1200px) translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1200px) translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
      });
    });
  }
}

/* ==========================================================================
   7. PROJECT INSPECTION BOTTOM SHEET MODAL
   ========================================================================== */
function initProjectSheetModal() {
  const modal = document.getElementById('portfolioModal');
  const closeBtn = document.getElementById('modalCloseTrigger');

  const modalPhoto = document.getElementById('modalPhoto');
  const modalPrevBtn = document.getElementById('modalPrevPhoto');
  const modalNextBtn = document.getElementById('modalNextPhoto');
  const modalDots = document.getElementById('modalPhotoDots');
  const modalBadge = document.getElementById('modalBadge');
  const modalLoc = document.getElementById('modalLoc');
  const modalHeading = document.getElementById('modalHeading');
  const modalKind = document.getElementById('modalKind');
  const modalArea = document.getElementById('modalArea');
  const modalState = document.getElementById('modalState');
  const modalNarrative = document.getElementById('modalNarrative');

  if (!modal) return;

  let activeImages = [];
  let activeImageIdx = 0;
  let activeTitle = '';

  function renderModalPhoto() {
    if (activeImages.length === 0) return;
    modalPhoto.src = safeAssetUrl(activeImages[activeImageIdx]);
    modalPhoto.alt = `${activeTitle} (${activeImageIdx + 1}/${activeImages.length})`;

    const hasGallery = activeImages.length > 1;
    if (modalPrevBtn) modalPrevBtn.hidden = !hasGallery;
    if (modalNextBtn) modalNextBtn.hidden = !hasGallery;
    if (modalDots) {
      modalDots.hidden = !hasGallery;
      modalDots.innerHTML = '';
      if (hasGallery) {
        activeImages.forEach((_, idx) => {
          const dot = document.createElement('button');
          dot.type = 'button';
          dot.className = `sheet-gallery-dot${idx === activeImageIdx ? ' active' : ''}`;
          dot.setAttribute('aria-label', `Fotoğraf ${idx + 1}`);
          dot.addEventListener('click', (e) => {
            e.stopPropagation();
            activeImageIdx = idx;
            renderModalPhoto();
          });
          modalDots.appendChild(dot);
        });
      }
    }
  }

  openProjectModalHandler = (project) => {
    activeImages = project.images && project.images.length ? project.images : [];
    activeImageIdx = 0;
    activeTitle = project.title;

    renderModalPhoto();
    modalBadge.textContent = project.type;
    modalLoc.textContent = project.loc;
    modalHeading.textContent = project.title;
    modalKind.textContent = project.type;
    modalArea.textContent = project.area;
    modalState.textContent = project.status;
    modalNarrative.textContent = project.details;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  if (modalPrevBtn) {
    modalPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (activeImages.length <= 1) return;
      activeImageIdx = (activeImageIdx - 1 + activeImages.length) % activeImages.length;
      renderModalPhoto();
    });
  }

  if (modalNextBtn) {
    modalNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (activeImages.length <= 1) return;
      activeImageIdx = (activeImageIdx + 1) % activeImages.length;
      renderModalPhoto();
    });
  }

  function closeSheet() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeSheet);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSheet();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeSheet();
    if (e.key === 'ArrowLeft' && activeImages.length > 1) {
      activeImageIdx = (activeImageIdx - 1 + activeImages.length) % activeImages.length;
      renderModalPhoto();
    }
    if (e.key === 'ArrowRight' && activeImages.length > 1) {
      activeImageIdx = (activeImageIdx + 1) % activeImages.length;
      renderModalPhoto();
    }
  });
}

/* ==========================================================================
   8. HEADER AND MOBILE DOCK CONTROLLER
   ========================================================================== */
function initHeaderAndDock() {
  const header = document.getElementById('mainHeader');
  const toggle = document.getElementById('menuToggle');
  const panel = document.getElementById('mobileNavPanel');
  const links = document.querySelectorAll('.panel-link, .panel-btn-call, .panel-btn-wa');
  const dock = document.getElementById('mobileDock');

  // Mobile Menu Toggle
  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      panel.classList.toggle('open');
    });

    links.forEach(l => {
      l.addEventListener('click', () => {
        toggle.classList.remove('open');
        panel.classList.remove('open');
      });
    });
  }

  // Header & Dock scroll behavior
  let lastY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;

    // Header subtle darken
    if (header) {
      if (currentY > 40) {
        header.style.backgroundColor = 'rgba(9, 10, 12, 0.94)';
        header.style.borderBottomColor = 'rgba(255, 255, 255, 0.12)';
      } else {
        header.style.backgroundColor = 'rgba(9, 10, 12, 0.78)';
        header.style.borderBottomColor = 'rgba(255, 255, 255, 0.07)';
      }
    }

    // Dock auto-hide on aggressive scroll down, reappear on scroll up
    if (dock) {
      if (currentY > lastY && currentY > 200) {
        dock.style.transform = 'translate(-50%, 80px)';
        dock.style.opacity = '0';
      } else {
        dock.style.transform = 'translate(-50%, 0)';
        dock.style.opacity = '1';
      }
    }

    lastY = currentY;
  }, { passive: true });
}
