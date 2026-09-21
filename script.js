/**
 * Win98 System Logic with Multi-language Support
 */

const translations = {
    tr: {
        welcome_msg: "Sisteme başarıyla giriş yapıldı.",
        intro_text: "Merhaba, ben <b>HaYTo</b>. Modern teknolojileri retro bir bakış açısıyla harmanlamayı seviyorum.",
        projects_info: "Geliştirdiğim projeleri görmek için masaüstündeki <b>Projelerim.lnk</b> dosyasını açabilir veya aşağıdaki butona tıklayabilirsiniz.",
        btn_projects: "PROJELERİ GÖR",
        btn_info: "BİLGİ AL",
        start_btn: "Başlat",
        notepad_title: "İletişim.txt - Not Defteri",
        contact_header: "İLETİŞİM BİLGİLERİ",
        btn_back: "Geri Dön",
        btn_website: "Web Sitesi",
        btn_download: "İndir (Release)",
        recycle_bin: "Çöp Kutusu",
        projects_lnk: "Projelerim.lnk",
        cloud_startpage_desc: "Hızlı, minimalist ve bulut entegrasyonlu özelleştirilebilir yeni sekme ve başlangıç sayfası eklentisi.",
        extensityplus_desc: "Tarayıcı eklentilerinizi tek tıkla hızlıca yönetmenizi, etkinleştirip devre dışı bırakmanızı sağlayan pratik eklenti yöneticisi.",
        haytool_title: "Youtube Download",
        haytool_desc: "YouTube kanallarını otomatik izleyen ve yeni videoları arka planda indiren premium, hafif ve çoklu işletim sistemi destekli otomasyon yazılımı.",
        haytool_wallpaper_title: "Wallpaper",
        haytool_wallpaper_desc: "Windows masaüstü arka planınızı belirlediğiniz kaynaklardan yüksek çözünürlüklü görsellerle dinamik olarak değiştiren, tamamen sessiz çalışan hafif ve modern PC yazılımı.",
        haytool_firewall_title: "Firewall",
        haytool_firewall_desc: "Windows Güvenlik Duvarı kurallarını profiller halinde düzenleyen, özyinelemeli (recursive) akıllı klasör taraması ile binlerce .EXE dosyasını tek tıkla engelleyen veya izin veren (whitelist) modern masaüstü kontrol paneli.",
        category_extensions: "Tarayıcı Eklentileri",
        and_word: "ve",
        category_pc: "PC Yazılımlarım",
        category_scripts: "Scriptlerim",
        tabsuspender_desc: "Kullanılmayan sekmeleri otomatik uyutarak RAM ve sistem kaynaklarından %85'e varan tasarruf sağlayan akıllı, ultra hafif ve gizlilik odaklı sekme yöneticisi.",
        webtranslate_desc: "Işık hızında tam sayfa ve seçili metin çevirmeni. 6 farklı çeviri motoru, canlı ilerleme ve çoklu sekme karşılaştırma özellikli akıllı eklenti.",
        xdownloader_desc: "X (Twitter) üzerindeki video, fotoğraf ve GIF medyalarını tek tıklamayla en yüksek orijinal kalitede indiren ışık hızında ve gizlilik odaklı tarayıcı eklentisi.",
        haytool_weather_title: "Weather",
        haytool_weather_desc: "Windows bildirim alanında (saatin yanında) sessizce çalışan, anlık sıcaklık derecesini ve hava durumu sembolünü dinamik sistem tepsisi simgeleriyle gösteren hafif masaüstü hava durumu uygulaması.",
        restricted_title: "YETKİSİZ ERİŞİM",
        restricted_desc: "Script arşivi sadece geliştirici ve admin modunda görüntülenebilir.",
        restricted_btn: "KİMLİK DOĞRULA",
        pending_releases: "Onay Sürecinde (Releases)",
        recommended_badge: "(Önerilen)"
    },
    en: {
        welcome_msg: "System login successful.",
        intro_text: "Hi, I'm <b>HaYTo</b>. I love blending modern technologies with a retro perspective.",
        projects_info: "To see the projects I've developed, you can open the <b>Projelerim.lnk</b> file on the desktop or click the button below.",
        btn_projects: "VIEW PROJECTS",
        btn_info: "GET INFO",
        start_btn: "Start",
        notepad_title: "Contact.txt - Notepad",
        contact_header: "CONTACT INFORMATION",
        btn_back: "Go Back",
        btn_website: "Website",
        btn_download: "Download",
        recycle_bin: "Recycle Bin",
        projects_lnk: "Projects.lnk",
        cloud_startpage_desc: "A fast, minimalist, and customizable new tab & start page extension with cloud integration.",
        extensityplus_desc: "A handy extension manager to quickly manage, enable, and disable your browser extensions with a single click.",
        tabsuspender_desc: "Smart, ultra-lightweight and privacy-first tab suspender that saves up to 85% RAM and battery by putting background tabs to sleep.",
        webtranslate_desc: "Lightning fast full-page and selection translator featuring 6 engines, real-time progress HUD and multi-tab live comparison.",
        xdownloader_desc: "A lightning-fast, privacy-first browser extension to download videos, photos, and GIFs from X (Twitter) in original maximum quality with one click.",
        category_extensions: "Browser Extensions",
        and_word: "&",
        category_pc: "PC Software",
        category_scripts: "My Scripts",
        haytool_title: "Youtube Download",
        haytool_desc: "A premium, lightweight, and cross-platform automation software that automatically monitors YouTube channels and downloads new videos in the background.",
        haytool_wallpaper_title: "Wallpaper",
        haytool_wallpaper_desc: "A lightweight and modern PC application that dynamically changes your Windows desktop background using high-resolution images from selected sources. It runs completely silently.",
        haytool_firewall_title: "Firewall",
        haytool_firewall_desc: "A modern Windows Firewall control panel that categorizes rules into profiles and allows bulk blocking or whitelisting of thousands of .EXE files via recursive folder scanning.",
        haytool_weather_title: "Weather",
        haytool_weather_desc: "An ultra-lightweight, native Windows desktop application that runs silently in the system tray, dynamically rendering live temperature and weather condition icons.",
        restricted_title: "UNAUTHORIZED ACCESS",
        restricted_desc: "The script archive can only be viewed in developer and admin mode.",
        restricted_btn: "AUTHENTICATE",
        pending_releases: "Under Review (Releases)",
        recommended_badge: "(Recommended)"
    }
};

let currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('tr') ? 'tr' : 'en');

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    startClock();
    recordVisit();
    initSecretTrigger();
    console.log('--- SYSTEM_READY // 1980 ---');
});

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const t = translations[lang];

    // Update title
    document.title = 'HaYTo | Windows 98 Edition';

    // Map elements by data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.value = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });

    // Map title attributes by data-i18n-title attribute
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (t[key]) {
            el.setAttribute('title', t[key]);
        }
    });

    // Update Notepad Specifically
    const notepadArea = document.getElementById('notepad-content-area');
    if (notepadArea) {
        notepadArea.innerHTML = `
            <b>${t.contact_header}</b>
            -------------------------
            
            <b>Instagram:</b> <a href="https://www.instagram.com/haytokoraz/" target="_blank">@haytokoraz</a>
            <b>X (Twitter):</b> <a href="https://x.com/HaYTo" target="_blank">@HaYTo</a>
            <b>Steam:</b> <a href="https://steamcommunity.com/id/HaYTo/" target="_blank">HaYTo Profile</a>
            <b>Email:</b> <a href="mailto:korazhayto@gmail.com">korazhayto@gmail.com</a>
            
            <b>Status:</b> ONLINE
            <b>Location:</b> CYBER_SPACE
            <b>Protocol:</b> V.4.0.2
        `;
    }
}

function setLanguage(lang) {
    applyLanguage(lang);
}

function startClock() {
    const clockElement = document.getElementById('clock');
    if (!clockElement) return;
    
    function updateClock() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        clockElement.textContent = `${h}:${m}`;
    }
    
    setInterval(updateClock, 1000);
    updateClock();
}

// Window focus logic
document.querySelectorAll('.window').forEach(win => {
    win.addEventListener('mousedown', () => {
        document.querySelectorAll('.window').forEach(w => w.style.zIndex = 10);
        win.style.zIndex = 100;
    });
});

function openNotepad() {
    const notepad = document.getElementById('notepad');
    if (notepad) {
        notepad.style.display = 'flex';
        document.getElementById('notepad-task').style.display = 'flex';
        document.querySelectorAll('.window').forEach(w => w.style.zIndex = 10);
        notepad.style.zIndex = 100;
    }
}

function closeNotepad() {
    document.getElementById('notepad').style.display = 'none';
    document.getElementById('notepad-task').style.display = 'none';
}

// --- Secret Visitor Counter & Stats Logic ---
const STATS_API_BASE = 'https://countapi.mileshilliard.com/api/v1';
const SITE_NAMESPACE = 'haytokoraz_portfolio';

function getStatsKeys() {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    return {
        daily: `${SITE_NAMESPACE}_day_${yyyy}_${mm}_${dd}`,
        monthly: `${SITE_NAMESPACE}_month_${yyyy}_${mm}`,
        yearly: `${SITE_NAMESPACE}_year_${yyyy}`,
        total: `${SITE_NAMESPACE}_total`
    };
}

async function sendPulseTelemetry() {
    try {
        let sid = sessionStorage.getItem('hayto_portal_sid');
        let isNew = false;
        if (!sid) {
            sid = 'web_' + Math.random().toString(36).substring(2, 15);
            sessionStorage.setItem('hayto_portal_sid', sid);
            isNew = true;
        }

        await fetch('https://hayto-telemetry.korazhayto.workers.dev/api/ping', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                app: 'web_portal', 
                session_id: sid,
                is_new_session: isNew 
            }),
            keepalive: true
        });
    } catch (e) {
        // Sessiz hata yönetimi
    }
}

async function recordVisit() {
    const isNewSession = !sessionStorage.getItem('hayto_session_active');
    const keys = getStatsKeys();
    const endpoint = isNewSession ? 'hit' : 'get';
    
    // 1. Canlı Cloudflare Telemetri Kalp Atışı (web_portal)
    sendPulseTelemetry();
    setInterval(sendPulseTelemetry, 2 * 60 * 1000); // 2 dakikada bir güncelle

    // 2. Win98 sys_stats.exe arşivi
    try {
        await Promise.all([
            fetch(`${STATS_API_BASE}/${endpoint}/${keys.daily}`).catch(() => null),
            fetch(`${STATS_API_BASE}/${endpoint}/${keys.monthly}`).catch(() => null),
            fetch(`${STATS_API_BASE}/${endpoint}/${keys.yearly}`).catch(() => null),
            fetch(`${STATS_API_BASE}/${endpoint}/${keys.total}`).catch(() => null),
        ]);
        
        if (isNewSession) {
            sessionStorage.setItem('hayto_session_active', 'true');
        }
    } catch (e) {
        console.warn('Stats recording bypassed:', e);
    }
}

async function refreshStats() {
    const keys = getStatsKeys();
    const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val !== undefined && val !== null ? val.toLocaleString() : '---';
    };
    
    setVal('stat-daily', '...');
    setVal('stat-monthly', '...');
    setVal('stat-yearly', '...');
    setVal('stat-total', '...');

    try {
        const [dailyRes, monthlyRes, yearlyRes, totalRes] = await Promise.all([
            fetch(`${STATS_API_BASE}/get/${keys.daily}`).then(r => r.json()).catch(() => null),
            fetch(`${STATS_API_BASE}/get/${keys.monthly}`).then(r => r.json()).catch(() => null),
            fetch(`${STATS_API_BASE}/get/${keys.yearly}`).then(r => r.json()).catch(() => null),
            fetch(`${STATS_API_BASE}/get/${keys.total}`).then(r => r.json()).catch(() => null),
        ]);

        setVal('stat-daily', dailyRes?.value ?? 1);
        setVal('stat-monthly', monthlyRes?.value ?? 1);
        setVal('stat-yearly', yearlyRes?.value ?? 1);
        setVal('stat-total', totalRes?.value ?? 1);
    } catch (e) {
        setVal('stat-daily', '1');
        setVal('stat-monthly', '1');
        setVal('stat-yearly', '1');
        setVal('stat-total', '1');
    }
}

function openStatsWindow() {
    const win = document.getElementById('stats-window');
    const task = document.getElementById('stats-task');
    if (win) {
        win.style.display = 'flex';
        if (task) task.style.display = 'flex';
        document.querySelectorAll('.window').forEach(w => w.style.zIndex = 10);
        win.style.zIndex = 100;
        refreshStats();
    }
}

function closeStatsWindow() {
    const win = document.getElementById('stats-window');
    const task = document.getElementById('stats-task');
    if (win) win.style.display = 'none';
    if (task) task.style.display = 'none';
}

function initSecretTrigger() {
    const triggers = [
        document.getElementById('clock'),
        document.querySelector('.start-button')
    ];
    
    triggers.forEach(el => {
        if (!el) return;
        // Yalnizca fare orta tekerlek tusu (button 1) ile ac
        el.addEventListener('auxclick', (e) => {
            if (e.button === 1) {
                e.preventDefault();
                openStatsWindow();
            }
        });
        el.addEventListener('mousedown', (e) => {
            if (e.button === 1) {
                e.preventDefault();
            }
        });
    });
}

