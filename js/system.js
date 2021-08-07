let detectOS = "Unknown OS";

function getOS() {
    function iOS() {
        return [
            'iPad',
            'iPhone',
            'iPod',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
    }

    if (navigator.appVersion.indexOf("Win") !== -1) detectOS = "Windows";

    if (navigator.appVersion.indexOf("Mac") !== -1) detectOS = "MacOS";

    if (iOS()) detectOS = "IOS";

    if (navigator.appVersion.indexOf("Linux") !== -1) detectOS = "Linux";

    if (navigator.appVersion.indexOf("Android") !== -1) detectOS = "Android";

    function displayOS() {
        const gameFnc = document.querySelectorAll(".game-fnc");
        const gameDisabled = document.querySelector(".game_is_not_available");
        const gameMessageClose = document.querySelector(".game_is_not_available .close");

        window.onload = checkMobile;

        function checkMobile() {
            if (!(detectOS === "IOS" || detectOS === "Android")) {
                gameFnc.forEach(e => {
                    e.setAttribute("href", "game/memory.html");
                });
            } else {
                gameFnc.forEach(e => {
                    e.removeAttribute("href");
                    e.addEventListener("click", () => {
                        menuBtn.classList.remove("open");
                        mobileMenu.classList.toggle('open');

                        setTimeout(() => {
                            gameDisabled.classList.add("active");
                            document.body.style.overflowY = "scroll";
                        }, 700);
                    });
                });

                gameMessageClose.addEventListener("click", () => {
                    gameDisabled.classList.remove("active");
                });
            }
        }
    }

    displayOS()
}

getOS()