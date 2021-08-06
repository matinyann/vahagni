const header = document.querySelector('.header');
const maps = document.querySelector("#googlemaps");
const menuMob = document.querySelector(".menu_mob");

window.onscroll = () => {
    if (window.scrollY >= 5) {
        header.classList.add("after_scroll");
    } else {
        header.classList.remove("after_scroll");
    }
};

const smoothScrollToSections = () => {
    const menuLinks = document.querySelectorAll(".menu_link");

    for (let n in menuLinks) {
        if (menuLinks.hasOwnProperty(n)) {
            menuLinks[n].addEventListener("click", e => {
                e.preventDefault();
                document.querySelector(menuLinks[n].hash).scrollIntoView({
                    behavior: 'smooth'
                });
                if (menuLinks[n].parentElement == menuMob) {
                    menuMob.classList.remove('open');
                    menuBtn.classList.remove('open');
                }
            });
        }
    }
}

smoothScrollToSections();