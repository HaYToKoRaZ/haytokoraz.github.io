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
        ext_header: "Toplam 5 adet eklenti yüklendi. Detaylar ve mağaza bağlantıları için kartlara tıklayın.",
        btn_back: "Geri Dön",
        btn_store: "MAĞAZA",
        btn_detail: "DETAY",
        recycle_bin: "Çöp Kutusu",
        projects_lnk: "Projelerim.lnk"
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
        ext_header: "A total of 5 extensions loaded. Click on cards for details and store links.",
        btn_back: "Go Back",
        btn_store: "STORE",
        btn_detail: "DETAILS",
        recycle_bin: "Recycle Bin",
        projects_lnk: "Projects.lnk"
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
    document.title = lang === 'tr' ? 'HaYTo | Windows 98 Edition' : 'HaYTo | Windows 98 Edition';

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

    // Update Notepad specifically if it exists
    const notepadText = document.getElementById('notepad-textarea');
    if (notepadText) {
        notepadText.value = `${t.contact_header}\n------------------\n\nInstagram: https://www.instagram.com/HaYTo/\nSteam: https://steamcommunity.com/id/HaYTo/\nEmail: korazhayto@gmail.com\n\nStatus: ONLINE\nLocation: CYBER_SPACE\nProtocol: V.4.0.2`;
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
    notepad.style.display = 'flex';
    document.getElementById('notepad-task').style.display = 'flex';
    document.querySelectorAll('.window').forEach(w => w.style.zIndex = 10);
    notepad.style.zIndex = 100;
}

function closeNotepad() {
    document.getElementById('notepad').style.display = 'none';
    document.getElementById('notepad-task').style.display = 'none';
}
