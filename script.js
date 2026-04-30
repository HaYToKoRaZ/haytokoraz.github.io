/**
 * Win98 System Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    startClock();
    console.log('--- SYSTEM_READY // 1980 ---');
});

function startClock() {
    const clockElement = document.getElementById('clock');
    
    function updateClock() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        clockElement.textContent = `${h}:${m}`;
    }
    
    setInterval(updateClock, 1000);
    updateClock();
}

// Simple window focus logic (if we add more windows later)
document.querySelectorAll('.window').forEach(win => {
    win.addEventListener('mousedown', () => {
        document.querySelectorAll('.window').forEach(w => w.style.zIndex = 10);
        win.style.zIndex = 100;
    });
});
