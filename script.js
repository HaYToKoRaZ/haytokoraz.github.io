/**
 * Win98 System Logic with Multi-language Support
 */

const translations = {
    tr: {
        welcome_msg: "Sisteme başarıyla giriş yapıldı.",
        intro_text: "Merhaba, ben <b>HaYTo</b>. Modern Chromium ve Helium tarayıcı eklentileri (RewriteAI, TabSuspender, XDownloader vb.) ile CachyOS Linux ve Windows için açık kaynaklı sistem optimizasyon araçları geliştiriyorum.",
        projects_info: "Yapay zeka asistanları, gizlilik odaklı sekme yöneticileri ve masaüstü otomasyon yazılımlarını keşfetmek için masaüstündeki <b>Projelerim.lnk</b> dosyasını açabilir veya aşağıdaki butondan erişebilirsiniz.",
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
        tabsuspender_desc: "Kullanılmayan sekmeleri otomatik uyutarak RAM ve sistem kaynaklarından %85'e varan tasarruf sağlayan akıllı, ultra hafif ve gizlilik odaklı sekme yöneticisi.",
        webtranslate_desc: "Işık hızında tam sayfa ve seçili metin çevirmeni. 6 farklı çeviri motoru, canlı ilerleme ve çoklu sekme karşılaştırma özellikli akıllı eklenti.",
        xdownloader_desc: "X (Twitter) üzerindeki video, fotoğraf ve GIF medyalarını tek tıklamayla en yüksek orijinal kalitede indiren ışık hızında ve gizlilik odaklı tarayıcı eklentisi.",
        rewriteai_desc: "Chrome, Edge ve Helium'da seçili metinleri Gemini, Groq, Claude ve OpenAI desteğiyle tek tıkla yeniden yazan, imla düzelten ve ton değiştiren akıllı AI asistanı.",
        haytool_weather_title: "Weather",
        haytool_weather_desc: "Windows bildirim alanında (saatin yanında) sessizce çalışan, anlık sıcaklık derecesini ve hava durumu sembolünü dinamik sistem tepsisi simgeleriyle gösteren hafif masaüstü hava durumu uygulaması.",
        lol_switcher_title: "Lol Account Switcher",
        lol_switcher_desc: "Riot & League of Legends için milisaniyelik hesap değiştirici, 144Hz/240Hz ekran yenileme hızı optimizasyonu ve oyun içi tuş yapılandırması (cfg) koruyucusu.",
        fakelord_title: "FakeLord",
        fakelord_desc: "Discord üzerinde 4.000+ oyunu 0 MB GPU yükü ve sıfır donanım harcamasıyla çalışıyor gösteren hafif hayalet süreçli akıllı Discord aktivite simülatörü.",
        wattcost_title: "WattCost",
        wattcost_desc: "Donanım sensörlerinden anlık priz gücünü (Watt) ve elektrik maliyetini hesaplayan, oyun içi RTSS göstergesi sunan ve akıllı güç planları yöneten sürücüsüz Windows telemetri süiti.",
        pending_releases: "Onay Sürecinde (Releases)",
        recommended_badge: "(Önerilen)",
        menu_projects: "Projelerim",
        menu_contact: "İletişim",
        page_not_found_title: "404 - Sayfa Bulunamadı",
        page_not_found_desc: "Aradığınız dosya veya sayfa bu sistemde bulunamadı ya da taşınmış olabilir.",
        error_code: "Hata Kodu: 0x80004005 (E_FAIL_NOT_FOUND)",
        btn_home: "Ana Sayfaya Dön",
        btn_projects_page: "Projelerim Klasörü",
        legend_specs: "Sistem &amp; Geliştirme Özellikleri",
        specs_desc: "Açık kaynak, hafif mimari ve kullanıcı gizliliği odaklı yazılım ekosistemi:",
        spec_item_1: "<b>Tarayıcı Eklentileri:</b> Yapay zeka metin optimizasyonu, RAM tasarrufu sağlayan sekme uyutucu ve hızlı medya indiriciler.",
        spec_item_2: "<b>Masaüstü Araçları:</b> Güvenlik duvarı kontrol paneli (Firewall) ve hafif sistem tepsisi araçları.",
        spec_item_3: "<b>Platform Uyumu:</b> Helium, Chrome, Edge, CachyOS Linux ve Windows ile tam uyumlu mimari.",
        spec_item_4: "<b>Açık Kaynak &amp; Güvenlik:</b> Bağımsız denetlenebilir kaynak kodları, sıfır telemetri ve MIT lisanslı dağıtım modeli.",
        spec_footer: "Tüm yazılımlar kullanıcı gizliliği, sıfır bellek sızıntısı ve yüksek performans optimizasyonu hedeflenerek tasarlanmıştır.",
        window_h1: "HaYTooL Hub - Modern Yazılımlar &amp; Retro Portfolyo"
    },
    en: {
        welcome_msg: "System login successful.",
        intro_text: "Hi, I'm <b>HaYTo</b>. I develop open-source browser extensions for Chromium & Helium (RewriteAI, TabSuspender, XDownloader) and high-performance system utility software for CachyOS Linux and Windows.",
        projects_info: "Explore privacy-oriented AI assistants, memory optimization tools, and desktop automation apps by launching the <b>Projects.lnk</b> shortcut on the desktop or clicking below.",
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
        rewriteai_desc: "An intelligent browser extension to rewrite, fix grammar, and adjust tone with Gemini, Groq, Claude, and OpenAI in Chrome, Edge, and Helium with a single click.",
        category_extensions: "Browser Extensions",
        and_word: "&",
        category_pc: "PC Software",
        haytool_title: "Youtube Download",
        haytool_desc: "A premium, lightweight, and cross-platform automation software that automatically monitors YouTube channels and downloads new videos in the background.",
        haytool_wallpaper_title: "Wallpaper",
        haytool_wallpaper_desc: "A lightweight and modern PC application that dynamically changes your Windows desktop background using high-resolution images from selected sources. It runs completely silently.",
        haytool_firewall_title: "Firewall",
        haytool_firewall_desc: "A modern Windows Firewall control panel that categorizes rules into profiles and allows bulk blocking or whitelisting of thousands of .EXE files via recursive folder scanning.",
        haytool_weather_title: "Weather",
        haytool_weather_desc: "An ultra-lightweight, native Windows desktop application that runs silently in the system tray, dynamically rendering live temperature and weather condition icons.",
        lol_switcher_title: "Lol Account Switcher",
        lol_switcher_desc: "Ultra-fast Riot & League of Legends profile switcher, 144Hz/240Hz display optimizer, and native in-game config & keybind protector.",
        fakelord_title: "FakeLord",
        fakelord_desc: "Lightweight Discord Rich Presence simulator for 4,000+ games using zero GPU and minimal RAM with ghost process architecture.",
        wattcost_title: "WattCost",
        wattcost_desc: "A driverless Windows telemetry suite that calculates live wall power (Watts) and electricity cost from hardware sensors, with an in-game RTSS overlay and smart power plan automation.",
        pending_releases: "Under Review (Releases)",
        recommended_badge: "(Recommended)",
        menu_projects: "My Projects",
        menu_contact: "Contact",
        page_not_found_title: "404 - Page Not Found",
        page_not_found_desc: "The requested file or page does not exist on this system or has been relocated.",
        error_code: "Error Code: 0x80004005 (E_FAIL_NOT_FOUND)",
        btn_home: "Return to Home",
        btn_projects_page: "Open Projects",
        legend_specs: "System &amp; Architecture Overview",
        specs_desc: "Open-source, lightweight architecture and privacy-first software ecosystem:",
        spec_item_1: "<b>Browser Extensions:</b> AI-powered text assistants, RAM-saving tab suspender, and lossless high-speed media downloaders.",
        spec_item_2: "<b>Desktop Utilities:</b> Bulk Windows Firewall rule controller and native tray apps.",
        spec_item_3: "<b>Cross-Platform:</b> Native compatibility with Helium, Chrome, Edge, CachyOS Linux, and Windows.",
        spec_item_4: "<b>Open Source &amp; Security:</b> Transparent codebases, zero telemetry policy, and permissive MIT licensing across all projects.",
        spec_footer: "All applications are engineered with strict focus on memory efficiency, responsive performance, and uncompromising user privacy.",
        window_h1: "HaYTooL Hub - Modern Software &amp; Retro Portfolio"
    }
};

function getInitialLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get('lang');
    if (paramLang && (paramLang === 'tr' || paramLang === 'en')) {
        return paramLang;
    }
    const stored = localStorage.getItem('lang');
    if (stored && (stored === 'tr' || stored === 'en')) {
        return stored;
    }
    return navigator.language.startsWith('tr') ? 'tr' : 'en';
}

let currentLang = getInitialLanguage();

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang, false);
    startClock();
    console.log('--- SYSTEM_READY // 1980 ---');

    // Register Service Worker for aggressive static asset caching & 0ms repeat visits
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').catch(() => null);
        });
    }
});

function applyLanguage(lang, updateUrl = true) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    const t = translations[lang] || translations.tr;

    // Sync URL query parameter (?lang=tr or ?lang=en) without page reload
    if (updateUrl && window.history && window.history.replaceState) {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', lang);
        window.history.replaceState({ lang }, '', url.toString());
    }

    // Update document title dynamically based on language (Max 55-60 chars for SEO)
    if (document.location.pathname.includes('extensions')) {
        document.title = lang === 'tr' 
            ? 'Projelerim & Tarayıcı Eklentileri | HaYTo' 
            : 'Projects & Extensions Catalog | HaYTo';
    } else if (document.location.pathname.includes('404')) {
        document.title = lang === 'tr'
            ? '404 - Sayfa Bulunamadı | HaYTo Windows 98'
            : '404 - Page Not Found | HaYTo Windows 98';
    } else {
        document.title = lang === 'tr'
            ? 'HaYTooL Hub | Modern Yazılımlar & Retro Portfolyo'
            : 'HaYTooL Hub | Modern Software & Retro Portfolio';
    }

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

    // Map placeholder attributes by data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.setAttribute('placeholder', t[key]);
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
            
            <b>Instagram:</b> <a href="https://www.instagram.com/haytokoraz/" target="_blank" rel="nofollow noopener noreferrer">@haytokoraz</a>
            <b>X (Twitter):</b> <a href="https://x.com/HaYTo" target="_blank" rel="nofollow noopener noreferrer">@HaYTo</a>
            <b>Steam:</b> <a href="https://steamcommunity.com/id/HaYTo/" target="_blank" rel="nofollow noopener noreferrer">HaYTo Profile</a>
            <b>Email:</b> <a href="mailto:korazhayto@gmail.com">korazhayto@gmail.com</a>
            
            <b>Status:</b> ONLINE
            <b>Location:</b> CYBER_SPACE
            <b>Protocol:</b> V.4.0.2
        `;
    }
}

function setLanguage(lang) {
    applyLanguage(lang, true);
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


function toggleStartMenu() {
    const menu = document.getElementById('start-menu');
    const btn = document.getElementById('start-button');
    if (!menu) return;

    if (menu.style.display === 'none' || !menu.style.display) {
        menu.style.display = 'flex';
        if (btn) btn.style.borderStyle = 'inset';
    } else {
        closeStartMenu();
    }
}

function closeStartMenu() {
    const menu = document.getElementById('start-menu');
    const btn = document.getElementById('start-button');
    if (menu) menu.style.display = 'none';
    if (btn) btn.style.borderStyle = '';
}


document.addEventListener('click', (e) => {
    const menu = document.getElementById('start-menu');
    const btn = document.getElementById('start-button');
    if (menu && menu.style.display === 'flex') {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            closeStartMenu();
        }
    }
});

