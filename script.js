const sunIcon = document.getElementById('sun-toggle-btn');
const moonIcon = document.getElementById('moon-toggle-btn');
const body = document.body;
const currentMode = localStorage.getItem('dark-mode');

function toggleMode() {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        localStorage.setItem('mode', 'light');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}

if (currentMode === 'dark-mode') {
    body.classList.add('light-mode');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
} else {
    body.classList.add('dark-mode');
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
}

sunIcon.addEventListener('click', toggleMode);
moonIcon.addEventListener('click', toggleMode);