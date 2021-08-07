let Sanahin_slider = document.querySelector('.Sanahin-slider'),
    Lori_slider = document.querySelector('.Lori-slider'),
    Haghpat_slider = document.querySelector('.Haghpat-slider'),
    Odzun_slider = document.querySelector('.Odzun-slider'),
    Horomayr_slider = document.querySelector('.Horomayr-slider'),
    Kobayr_slider = document.querySelector('.Kobayr-slider'),
    Hnevank_slider = document.querySelector('.Hnevank-slider'),
    Akhtala_slider = document.querySelector('.Akhtala-slider'),
    Kurtan_slider = document.querySelector('.Kurtan-slider'),
    Hovhanes_slider = document.querySelector('.Hovhanes-slider');

let next = document.querySelector('.next');
let back = document.querySelector('.back');
let count = 0;
let slider_box = document.querySelectorAll('.slider_box');
let sliderLine = document.querySelector('.slider_init');
let sliderWidth = document.querySelector('.slider').offsetWidth;
let width = sliderWidth / 2;
let width_1200 = sliderWidth * 20 / 100;
let width_two = sliderWidth;
let next_back_one = slider_box.length / 2;
let next_back_two = slider_box.length / 5 * 4;
let next_back_three = slider_box.length - 1;


function windowSize() {
    console.log(window.innerWidth);
}

// window.addEventListener('resize', function () {
//     console.log(window.innerWidth);
// })

function init() {
    if (window.innerWidth > 992) {
        sliderLine.style.width = width_1200 * slider_box.length + 'px';
    }

    else if (window.innerWidth < 992 && window.innerWidth > 768) {
        slider_box.forEach(element => {
            element.style.width = width + 'px';
        });
        sliderLine.style.width = width * slider_box.length + 'px';
    }

    else if (window.innerWidth <= 768) {
        slider_box.forEach(element => {
            element.style.width = width_two + 'px';
        });
        sliderLine.style.width = width_two * slider_box.length + 'px';
    }
}


next.addEventListener('click', function () {
    count++;
    if (window.innerWidth > 992 && count > next_back_one) {
        count = 0;
    }
    else if (window.innerWidth <= 992 && window.innerWidth > 768 && count > next_back_two) {
        count = 0;
    }

    else if (window.innerWidth <= 768 && count > next_back_three) {
        count = 0;
    }
    ScrollSlidder();
})

back.addEventListener('click', function () {
    count--;
    if (window.innerWidth > 992 && count < 0) {
        count = next_back_one;
    }

    else if (window.innerWidth <= 992 && window.innerWidth > 768 && count < 0) {
        count = next_back_two;
    }

    else if (window.innerWidth <= 768 && count < 0) {
        count = next_back_three;
    }
    ScrollSlidder();
})

function ScrollSlidder() {
    if (window.innerWidth > 992) {
        sliderLine.style.transform = 'translate( -' + count * width_1200 + 'px)';
    } else if (window.innerWidth <= 992 && window.innerWidth > 768) {
        sliderLine.style.transform = 'translate( -' + count * width + 'px)';
    } else if (window.innerWidth <= 768) {
        sliderLine.style.transform = 'translate( -' + count * width_two + 'px)';
    }
}


let locSlider = [
    Sanahin_slider,
    Lori_slider,
    Haghpat_slider,
    Odzun_slider,
    Horomayr_slider,
    Kobayr_slider,
    Hnevank_slider,
    Akhtala_slider,
    Kurtan_slider,
    Hovhanes_slider
];

let foto_all = document.querySelector('.all_content_for');

function clickSlider(arr) {
    arr.forEach(element => {
        element.addEventListener('click', function () {
            foto_all.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    });
}

let button_down_top = document.querySelector('.down_top');
let all_content_for = document.querySelector('.all_content_for');
button_down_top.addEventListener('click', function () {
    let about_info = document.querySelector('.about_info');
    about_info.classList.toggle('about_info_active');
    if (!about_info.classList.contains('about_info_active')) {
        all_content_for.scrollIntoView({
            block: 'center'
        })
    }
})

let logo_scroll = document.querySelector('.logo');
logo_scroll.addEventListener('click', () => {
    window.scroll(0, 0);
});
clickSlider(locSlider);
window.addEventListener('resize', windowSize());
init();