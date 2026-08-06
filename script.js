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
        ext_header: "Toplam 6 adet eklenti yüklendi. Detaylar için kartlara tıklayın.",
        btn_back: "Geri Dön",
        btn_store: "MAĞAZA",
        btn_detail: "DETAY",
        recycle_bin: "Çöp Kutusu",
        projects_lnk: "Projelerim.lnk",
        gmail_title: "Old Gmail Notifications",
        gmail_desc: "Gmail için klasik bildirim sesini ve eski nostaljik tarzı geri getiren tarayıcı eklentisi.",
        haytool_title: "HaYTool Youtube Download",
        haytool_desc: "YouTube kanallarını otomatik izleyen ve yeni videoları arka planda indiren premium, hafif ve çoklu işletim sistemi destekli otomasyon yazılımı.",
        haytool_firewall_title: "HaYTooL Firewall",
        haytool_firewall_desc: "Windows Güvenlik Duvarı kurallarını profiller halinde düzenleyen, özyinelemeli (recursive) akıllı klasör taraması ile binlerce .EXE dosyasını tek tıkla engelleyen veya izin veren (whitelist) modern masaüstü kontrol paneli."
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
        ext_header: "A total of 6 extensions loaded. Click on cards for details.",
        btn_back: "Go Back",
        btn_store: "STORE",
        btn_detail: "DETAILS",
        recycle_bin: "Recycle Bin",
        projects_lnk: "Projects.lnk",
        gmail_title: "Old Gmail Notifications",
        gmail_desc: "Browser extension that brings back the classic notification sound and nostalgic style for Gmail.",
        haytool_title: "HaYTool Youtube Download",
        haytool_desc: "A premium, lightweight, and cross-platform automation software that automatically monitors YouTube channels and downloads new videos in the background.",
        haytool_firewall_title: "HaYTooL Firewall",
        haytool_firewall_desc: "A modern Windows Firewall control panel that categorizes rules into profiles and allows bulk blocking or whitelisting of thousands of .EXE files via recursive folder scanning."
    }
};

let currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('tr') ? 'tr' : 'en');

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    startClock();
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
