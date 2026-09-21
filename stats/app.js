/**
 * HaYTooL Pulse Telemetry Dashboard
 * Compact Table View, Metric Sorting & Real-Time Sync
 */

const CONFIG = {
    API_URL: 'https://hayto-telemetry.korazhayto.workers.dev/api/stats',
    REFRESH_INTERVAL_SEC: 10,
    DEMO_FALLBACK: false
};

// 20 Varlık: Her web sitesi kendi uygulamasının gerçek logosunu taşır!
const ITEMS_METADATA = [
    // --- 1. TARAYICI EKLENTİLERİ ---
    {
        id: 'cloud_startpage',
        name: 'Cloud StartPage',
        type: 'extension',
        icon: '../assets/cloud_startpage.png',
        categoryLabel: 'Eklenti',
        website: 'https://haytokoraz.github.io/HaYTooL-Cloud-StartPage/'
    },
    {
        id: 'extensityplus',
        name: 'ExtensityPlus',
        type: 'extension',
        icon: '../assets/extensityplus.png',
        categoryLabel: 'Eklenti',
        website: 'https://haytokoraz.github.io/ExtensityPlus-HaYTooL/'
    },
    {
        id: 'webtranslate',
        name: 'WebTranslate',
        type: 'extension',
        icon: '../assets/webtranslate.png',
        categoryLabel: 'Eklenti',
        website: 'https://haytokoraz.github.io/WebTranslate-HaYTooL/'
    },
    {
        id: 'tabsuspender',
        name: 'TabSuspender',
        type: 'extension',
        icon: '../assets/tabsuspender.png',
        categoryLabel: 'Eklenti',
        website: 'https://haytokoraz.github.io/TabSuspender-HaYTooL/'
    },
    {
        id: 'xdownloader',
        name: 'XDownloader',
        type: 'extension',
        icon: '../assets/xdownloader.png',
        categoryLabel: 'Eklenti',
        website: 'https://haytokoraz.github.io/xdownloader-HaYTooL/'
    },
    {
        id: 'whatsapp_sahibinden',
        name: 'Whatsapp To Sahibinden',
        type: 'extension',
        icon: '../assets/whatsapp.png',
        categoryLabel: 'Eklenti',
        website: 'https://chromewebstore.google.com/detail/whatsapp-to-sahibinden/kpgemfhcbfplfinonlfolenclpjmplbd'
    },

    // --- 2. PC YAZILIMLARI ---
    {
        id: 'pc_youtube_download',
        name: 'YouTube Download',
        type: 'pc',
        icon: '../assets/haytool.png',
        categoryLabel: 'PC Yazılımı',
        website: 'https://haytokoraz.github.io/haytool-youtube-download/'
    },
    {
        id: 'pc_firewall',
        name: 'Firewall PC',
        type: 'pc',
        icon: '../assets/firewall.png',
        categoryLabel: 'PC Yazılımı',
        website: 'https://haytokoraz.github.io/HaYTooL-Firewall/'
    },
    {
        id: 'pc_weather',
        name: 'Weather PC',
        type: 'pc',
        icon: '../assets/weather.png',
        categoryLabel: 'PC Yazılımı',
        website: 'https://haytokoraz.github.io/HaYTooL-Weather/'
    },
    {
        id: 'pc_wallpaper',
        name: 'Wallpaper PC',
        type: 'pc',
        icon: '../assets/wallpaper.png',
        categoryLabel: 'PC Yazılımı',
        website: 'https://haytokoraz.github.io/HaYTooL-Wallpaper/'
    },

    // --- 3. PROJE WEB SİTELERİ (Kendi proje logolarıyla) ---
    {
        id: 'web_portal',
        name: 'HaYTo Portal (Ana Site)',
        type: 'web',
        icon: '../assets/pc_icon.png',
        categoryLabel: 'Web Sitesi',
        website: 'https://haytokoraz.github.io/'
    },
    {
        id: 'web_cloud_startpage',
        name: 'Cloud StartPage Sitesi',
        type: 'web',
        icon: '../assets/cloud_startpage.png',
        categoryLabel: 'Web Sitesi',
        website: 'https://haytokoraz.github.io/HaYTooL-Cloud-StartPage/'
    },
    {
        id: 'web_extensityplus',
        name: 'ExtensityPlus Sitesi',
        type: 'web',
        icon: '../assets/extensityplus.png',
        categoryLabel: 'Web Sitesi',
        website: 'https://haytokoraz.github.io/ExtensityPlus-HaYTooL/'
    },
    {
        id: 'web_webtranslate',
        name: 'WebTranslate Sitesi',
        type: 'web',
        icon: '../assets/webtranslate.png',
        categoryLabel: 'Web Sitesi',
        website: 'https://haytokoraz.github.io/WebTranslate-HaYTooL/'
    },
    {
        id: 'web_tabsuspender',
        name: 'TabSuspender Sitesi',
        type: 'web',
        icon: '../assets/tabsuspender.png',
        categoryLabel: 'Web Sitesi',
        website: 'https://haytokoraz.github.io/TabSuspender-HaYTooL/'
    },
    {
        id: 'web_xdownloader',
        name: 'XDownloader Sitesi',
        type: 'web',
        icon: '../assets/xdownloader.png',
        categoryLabel: 'Web Sitesi',
        website: 'https://haytokoraz.github.io/xdownloader-HaYTooL/'
    },
    {
        id: 'web_youtube_download',
        name: 'YouTube Download Sitesi',
        type: 'web',
        icon: '../assets/haytool.png',
        categoryLabel: 'Web Sitesi',
        website: 'https://haytokoraz.github.io/haytool-youtube-download/'
    },
    {
        id: 'web_firewall',
        name: 'Firewall Sitesi',
        type: 'web',
        icon: '../assets/firewall.png',
        categoryLabel: 'Web Sitesi',
        website: 'https://haytokoraz.github.io/HaYTooL-Firewall/'
    },
    {
        id: 'web_weather',
        name: 'Weather Sitesi',
        type: 'web',
        icon: '../assets/weather.png',
        categoryLabel: 'Web Sitesi',
        website: 'https://haytokoraz.github.io/HaYTooL-Weather/'
    },
    {
        id: 'web_wallpaper',
        name: 'Wallpaper Sitesi',
        type: 'web',
        icon: '../assets/wallpaper.png',
        categoryLabel: 'Web Sitesi',
        website: 'https://haytokoraz.github.io/HaYTooL-Wallpaper/'
    }
];

// Uygulama çalışma belleği
let currentFilter = 'all';
let currentSort = 'last_seen-desc';
let telemetryStore = {};
let previousTelemetryStore = {};
let isFirstLoad = true;
let countdown = CONFIG.REFRESH_INTERVAL_SEC;
let countdownInterval = null;

// DOM Elements
const tbody = document.getElementById('telemetry-tbody');
const totalActiveEl = document.getElementById('total-active-count');
const totalTodayEl = document.getElementById('total-today-count');
const totalMonthEl = document.getElementById('total-month-count');
const lastUpdatedEl = document.getElementById('last-updated-time');
const countdownEl = document.getElementById('countdown-timer');
const connectionStatusEl = document.getElementById('connection-status');
const sortSelect = document.getElementById('sort-select');

// Ses Bildirimi Yönetimi (Web Audio API ile harici ses dosyası indirmeden kristal netliğinde retro ses)
let isMasterSoundEnabled = localStorage.getItem('hayto_sound_master') !== 'false';
let mutedApps = JSON.parse(localStorage.getItem('hayto_sound_muted_apps') || '[]');

let audioCtx = null;
function playNotificationTone(appName) {
    if (!isMasterSoundEnabled) return;
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        // Hoş iki tonlu retro ding sesi (E majör akoru)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(659.25, now); // E5
        osc.frequency.exponentialRampToValueAtTime(880.00, now + 0.1); // A5

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now);
        osc.stop(now + 0.45);
    } catch (e) {
        // Ses çalınamazsa sessiz kal
    }
}

// Zamanı "5 dk önce", "2 saat önce" şeklinde formatla
function formatTimeAgo(timestampSec) {
    if (!timestampSec) return 'Henüz yok';
    const diff = Math.floor(Date.now() / 1000) - timestampSec;
    if (diff < 60) return `${diff} sn önce`;
    if (diff < 3600) return `${Math.floor(diff / 60)} dk önce`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} sa önce`;
    return `${Math.floor(diff / 86400)} gün önce`;
}

// Filtre sayaç rozetlerini güncelle
function updateFilterCounts() {
    const extCount = ITEMS_METADATA.filter(i => i.type === 'extension').length;
    const pcCount = ITEMS_METADATA.filter(i => i.type === 'pc').length;
    const webCount = ITEMS_METADATA.filter(i => i.type === 'web').length;

    document.getElementById('count-all').textContent = ITEMS_METADATA.length;
    document.getElementById('count-ext').textContent = extCount;
    document.getElementById('count-pc').textContent = pcCount;
    document.getElementById('count-web').textContent = webCount;
}

// Tabloyu filtre ve sıralamaya göre render et
function renderTable() {
    tbody.innerHTML = '';

    // 1. Filtrele
    let list = ITEMS_METADATA.filter(item => {
        if (currentFilter === 'all') return true;
        return item.type === currentFilter;
    });

    // 2. Sırala
    const [field, direction] = currentSort.split('-');
    list.sort((a, b) => {
        const statsA = telemetryStore[a.id] || { active: 0, today: 0, month: 0, last_seen: 0 };
        const statsB = telemetryStore[b.id] || { active: 0, today: 0, month: 0, last_seen: 0 };

        let valA, valB;
        if (field === 'name') {
            valA = a.name.toLowerCase();
            valB = b.name.toLowerCase();
            return direction === 'asc' ? valA.localeCompare(valB, 'tr') : valB.localeCompare(valA, 'tr');
        } else if (field === 'type') {
            valA = (a.categoryLabel || a.type).toLowerCase();
            valB = (b.categoryLabel || b.type).toLowerCase();
            return direction === 'asc' ? valA.localeCompare(valB, 'tr') : valB.localeCompare(valA, 'tr');
        } else {
            valA = statsA[field] || 0;
            valB = statsB[field] || 0;
            return direction === 'asc' ? valA - valB : valB - valA;
        }
    });

    // 3. Tablo satırlarını oluştur
    list.forEach(item => {
        const stats = telemetryStore[item.id] || { active: 0, today: 0, month: 0, last_seen: null };
        const isOnline = stats.active > 0;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="text-align: center;">
                <div class="led-status ${isOnline ? 'online' : ''}" title="${isOnline ? 'Çevrimiçi Aktif' : 'Boşta'}"></div>
            </td>
            <td>
                <div class="app-info-cell">
                    <img src="${item.icon}" alt="${item.name}" class="table-icon-img" onerror="this.src='../assets/folder_icon.png'">
                    <div>
                        <div class="app-name-text">${item.name}</div>
                    </div>
                </div>
            </td>
            <td>
                <span class="category-pill ${item.type}">${item.categoryLabel}</span>
            </td>
            <td style="text-align: right;">
                <span class="num-metric ${isOnline ? 'active-live-val' : ''}">${stats.active.toLocaleString()}</span>
            </td>
            <td style="text-align: right;">
                <span class="num-metric" style="color: #cbd5e1;">${stats.today.toLocaleString()}</span>
            </td>
            <td style="text-align: right;">
                <span class="num-metric" style="color: #94a3b8;">${stats.month.toLocaleString()}</span>
            </td>
            <td style="text-align: right;">
                <span class="time-ago">${formatTimeAgo(stats.last_seen)}</span>
            </td>
            <td style="text-align: center;">
                <button class="row-sound-btn ${mutedApps.includes(item.id) ? '' : 'active'}" 
                        data-app="${item.id}" 
                        title="${mutedApps.includes(item.id) ? 'Bu uygulama için sesi aç' : 'Bu uygulama için sesi kapat'}">
                    ${mutedApps.includes(item.id) ? '🔇' : '🔔'}
                </button>
            </td>
            <td style="text-align: center;">
                <a href="${item.website}" target="_blank" rel="noopener noreferrer" class="link-btn-icon" title="Sayfayı Ziyaret Et">
                    ↗
                </a>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Satır ses butonları olayları
    document.querySelectorAll('.row-sound-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const appId = btn.dataset.app;
            if (mutedApps.includes(appId)) {
                mutedApps = mutedApps.filter(id => id !== appId);
            } else {
                mutedApps.push(appId);
            }
            localStorage.setItem('hayto_sound_muted_apps', JSON.stringify(mutedApps));
            renderTable();
        });
    });
}

// Backend'den Telemetri Çek
async function fetchTelemetry() {
    let isLive = false;
    try {
        const res = await fetch(CONFIG.API_URL, { cache: 'no-store' });
        if (res.ok) {
            const data = await res.json();
            if (data && data.apps) {
                // 1. Bilinen uygulamaları doldur
                ITEMS_METADATA.forEach(item => {
                    const appStat = data.apps[item.id];
                    if (typeof appStat === 'object' && appStat !== null) {
                        telemetryStore[item.id] = appStat;
                    } else {
                        telemetryStore[item.id] = {
                            active: typeof appStat === 'number' ? appStat : 0,
                            today: 0,
                            month: 0,
                            last_seen: null
                        };
                    }
                });

                // 2. Dinamik Keşif: Listede henüz olmayan yepyeni bir uygulama ping atmışsa otomatik ekle!
                Object.keys(data.apps).forEach(appId => {
                    const exists = ITEMS_METADATA.some(i => i.id === appId);
                    if (!exists) {
                        let type = 'web';
                        let categoryLabel = 'Web Sitesi';
                        let icon = '../assets/folder_icon.png';

                        if (appId.startsWith('pc_')) {
                            type = 'pc';
                            categoryLabel = 'PC Yazılımı';
                            icon = '../assets/pc_icon.png';
                        } else if (!appId.startsWith('web_')) {
                            type = 'extension';
                            categoryLabel = 'Eklenti';
                            icon = '../assets/world_icon.png';
                        }

                        // İsmi formatla: 'web_yeni_proje' -> 'Yeni Proje'
                        const cleanName = appId.replace(/^(web_|pc_)/, '').replace(/_/g, ' ')
                            .replace(/\b\w/g, l => l.toUpperCase());

                        ITEMS_METADATA.push({
                            id: appId,
                            name: cleanName,
                            type: type,
                            icon: icon,
                            categoryLabel: categoryLabel,
                            website: '#'
                        });

                        telemetryStore[appId] = data.apps[appId];
                    }
                });

                // 3. Yeni Kullanıcı Girişi Tespiti ve Sesli Bildirim
                let shouldPlayDing = false;
                Object.keys(data.apps).forEach(appId => {
                    const currentStat = data.apps[appId];
                    const prevStat = previousTelemetryStore[appId];
                    
                    if (prevStat && currentStat) {
                        // Eğer anlık aktif arttıysa veya bugünkü ziyaretçi arttıysa
                        const hasNewVisitor = (currentStat.active > prevStat.active) || (currentStat.today > prevStat.today);
                        if (hasNewVisitor && !mutedApps.includes(appId)) {
                            shouldPlayDing = true;
                        }
                    }
                });

                if (shouldPlayDing && !isFirstLoad) {
                    playNotificationTone();
                }

                // Mevcut durumu önceki duruma kopyala
                previousTelemetryStore = JSON.parse(JSON.stringify(telemetryStore));
                isFirstLoad = false;

                updateFilterCounts();
                isLive = true;
            }
        }
    } catch (e) {
        // Sessiz fallback
    }

    // Backend henüz URL bağlanmadıysa varsayılan temiz veri
    if (!isLive && CONFIG.DEMO_FALLBACK) {
        ITEMS_METADATA.forEach(item => {
            if (!telemetryStore[item.id]) {
                telemetryStore[item.id] = {
                    active: 0,
                    today: 0,
                    month: 0,
                    last_seen: null
                };
            }
        });
    }

    // Toplam KPI'ları hesapla
    let totActive = 0;
    let totToday = 0;
    let totMonth = 0;
    Object.values(telemetryStore).forEach(s => {
        totActive += (s.active || 0);
        totToday += (s.today || 0);
        totMonth += (s.month || 0);
    });

    totalActiveEl.textContent = totActive.toLocaleString();
    totalTodayEl.textContent = totToday.toLocaleString();
    totalMonthEl.textContent = totMonth.toLocaleString();
    lastUpdatedEl.textContent = new Date().toLocaleTimeString();

    if (connectionStatusEl) {
        connectionStatusEl.textContent = isLive ? 'Canlı D1 SQL Yayını' : 'Hazır (URL Bekliyor)';
    }

    renderTable();
}

// Olay Dinleyicileri (Filtreler, Sıralama, Geri Sayım)
function initControls() {
    updateFilterCounts();

    // Ana Ses Aç/Kapa Butonu
    const masterSoundBtn = document.getElementById('master-sound-btn');
    const soundIcon = document.getElementById('sound-icon');
    if (masterSoundBtn) {
        const updateSoundBtnUI = () => {
            if (isMasterSoundEnabled) {
                masterSoundBtn.className = 'sound-toggle-btn active';
                masterSoundBtn.innerHTML = '<span id="sound-icon">🔔</span> Ses Açık';
            } else {
                masterSoundBtn.className = 'sound-toggle-btn';
                masterSoundBtn.innerHTML = '<span id="sound-icon">🔇</span> Ses Kapalı';
            }
        };
        updateSoundBtnUI();

        masterSoundBtn.addEventListener('click', () => {
            isMasterSoundEnabled = !isMasterSoundEnabled;
            localStorage.setItem('hayto_sound_master', String(isMasterSoundEnabled));
            updateSoundBtnUI();
            if (isMasterSoundEnabled) {
                playNotificationTone(); // Kullanıcıya test sesi dinlet
            }
        });
    }

    // Filtre butonları
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderTable();
        });
    });

    // Sıralama dropdown'ı
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderTable();
        });
    }

    // Tablo başlıklarına tıklandığında sıralama
    document.querySelectorAll('.sort-header').forEach(th => {
        th.addEventListener('click', () => {
            const field = th.dataset.sort;
            if (currentSort.startsWith(field)) {
                // Yön değiştir
                currentSort = currentSort.endsWith('-desc') ? `${field}-asc` : `${field}-desc`;
            } else {
                currentSort = `${field}-desc`;
            }
            if (sortSelect) {
                // Eğer dropdown'da bu seçenek varsa seçili yap
                const opt = Array.from(sortSelect.options).find(o => o.value === currentSort);
                if (opt) sortSelect.value = currentSort;
            }
            renderTable();
        });
    });
}

function startRefreshLoop() {
    countdown = CONFIG.REFRESH_INTERVAL_SEC;
    if (countdownInterval) clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        countdown--;
        if (countdownEl) countdownEl.textContent = `${countdown}s`;

        if (countdown <= 0) {
            countdown = CONFIG.REFRESH_INTERVAL_SEC;
            fetchTelemetry();
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    initControls();
    fetchTelemetry();
    startRefreshLoop();
});
