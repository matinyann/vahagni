var detectOS = "Unknown OS";

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
        const OS = document.querySelector('h1');
        OS.innerHTML = `Your OS is: ${ detectOS }`
    }

    displayOS()
}

getOS()