const menuBtn = document.querySelector('.menu_icon');
const mobileMenu = document.querySelector('.menu_mob');
const body_stop = document.querySelector('body');


menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle('open');
    header.classList.toggle('on_opened_menu');
});

menuBtn.addEventListener("click", () => {
    body_stop.classList.toggle('scroll-stop');
});


document.querySelector('.menu_icon').addEventListener("click", () => {
    document.querySelector('.menu_icon').classList.toggle("open");
})
