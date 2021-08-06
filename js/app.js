const select = document.querySelector('select');
const selectMobile = document.querySelector('.menu_mob').querySelector('select');
const langs = ['arm', 'en'];

select.addEventListener('change', changeURLLanguage);
selectMobile.addEventListener('change', changeURLLanguageMobile);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);

    if (!langs.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    
    for (let key in lang) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = lang[key][hash];
        }

    }
}



// Mobile

function changeURLLanguageMobile() {
    let lang = selectMobile.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguageMobile() {
    let hash = window.location.hash;
    hash = hash.substr(1);

    if (!langs.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    selectMobile.value = hash;
    
    for (let key in lang) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = lang[key][hash];
        }

    }
}

changeLanguage();
changeLanguageMobile();