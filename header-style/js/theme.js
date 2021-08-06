const toggleBtns = document.querySelectorAll('.toggle-button');
let darkMode = localStorage.getItem('light');

const enableLightMode = () => {
    document.documentElement.setAttribute("theme", "light");
    localStorage.setItem('light', 'enabled');
}
const disableLightMode = () => {
    document.documentElement.removeAttribute("theme");
    localStorage.setItem('light', null);
}

if (darkMode === 'enabled') {
    enableLightMode();
}

toggleBtns.forEach(e => {
    e.addEventListener('click', () => {
        darkMode = localStorage.getItem('light');
        if (darkMode !== 'enabled') {
            enableLightMode();
        } else {
            disableLightMode();
        }
    });
});