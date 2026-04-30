/**
 * Cyber System Logic v1.0
 */

document.addEventListener('DOMContentLoaded', () => {
    startClock();
    console.log('--- SYSTEM INITIALIZED ---');
});

function startClock() {
    const clockElement = document.getElementById('clock');
    
    function updateClock() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        clockElement.textContent = `${h}:${m}:${s}`;
    }
    
    setInterval(updateClock, 1000);
    updateClock();
}

function initializeSystem() {
    const overlay = document.getElementById('overlay-message');
    
    // Play a "beep" sound logic could go here if files were available
    console.log('Accessing Core...');
    
    overlay.classList.remove('hidden');
    
    // Animate the content inside overlay
    const content = overlay.querySelector('.msg-content');
    content.style.transform = 'scale(0.8)';
    content.style.opacity = '0';
    
    setTimeout(() => {
        content.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        content.style.transform = 'scale(1)';
        content.style.opacity = '1';
    }, 10);
}

function closeOverlay() {
    const overlay = document.getElementById('overlay-message');
    overlay.classList.add('hidden');
}

// Add mouse tracking for a subtle glitch movement
document.addEventListener('mousemove', (e) => {
    const title = document.querySelector('.main-title');
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    
    title.style.transform = `translate(${x}px, ${y}px)`;
});
