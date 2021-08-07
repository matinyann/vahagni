const header = document.querySelector('.header');
const menuMob = document.querySelector(".menu_mob");

window.onscroll = () => {
    if (window.scrollY >= 5) {
        header.classList.add("after_scroll");
    } else {
        header.classList.remove("after_scroll");
    }
};

