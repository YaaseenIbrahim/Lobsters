
const SettingsThemeToggler = document.querySelector("#toggle-checkbox");
const ThemeButton = document.querySelector("#light-dark-mode");
const Body = document.querySelector("body");
const darkColors = {
    originalQuoteBack: "#721732",
    hoverQuoteBack: "#5c031c",
    opacHov: "rgba(114, 23, 50, 0.6)",
    accButtonBorder: "#5a0e24",
    backgroundImg: "url(Pics/darkbg.jpg)",
    blur: "rgba(180, 180, 180,0.5)",
    qotdBlur: "rgba(180, 180, 180,0.4)",
    backgroundcolor: "black",
};
const lightColors = {
    originalQuoteBack: "#e7233a",
    hoverQuoteBack: "#e2001a",
    opacHov: "rgba(226, 0, 26, 0.6)",
    accButtonBorder: "rgb(204, 30, 47)",
    backgroundImg: "url(Pics/oilbg.png)",
    blur: "rgba(255, 255, 255,0.5)",
    qotdBlur: "rgba(255, 255, 255,0.3)",
    backgroundcolor: "whitesmoke",
};
let theme = lightColors;
//Default not set: autos to system theme
if (localStorage.defaultTheme == undefined){
    const isLight = window.matchMedia("(prefers-color-scheme: light)").matches || window.matchMedia("(prefers-color-scheme: no-preference)").matches;
    themeSwitch(isLight, true)
}
//Following set default
themeSwitch(localStorage.defaultTheme, "light")

SettingsThemeToggler.onclick = function () { settingDefaults() }
ThemeButton.onclick = function () { themeSwitch(ThemeButton.innerText, "nights_stay") };


function themeSwitch(data, option) {
    
    function toggleDefault(boolean){
        if (data == localStorage.defaultTheme) {
            SettingsThemeToggler.checked = boolean
        }
    }
    
    
    if (data == option){
        ThemeButton.innerText = "light_mode";
        ThemeButton.title = "Light Mode";
        Body.style.color = "black";
        EmptyImage.src = "Pics/lostbot.png";
        theme = lightColors
        toggleDefault(true)
    }
    else{
        ThemeButton.innerText = "nights_stay";
        ThemeButton.title = "Dark Mode";
        Body.style.color = "whitesmoke";
        EmptyImage.src = "Pics/darklostbot.png";
        theme = darkColors;
        toggleDefault(false)
    }
    Object.keys(theme).forEach((property) => {
        const propString = "---" + property;
        document.querySelector(":root").style.setProperty(propString, theme[property]);
    });
}

function settingDefaults() {
    if (SettingsThemeToggler.checked) {
        localStorage.setItem("defaultTheme", "light")
    } else {
        localStorage.setItem("defaultTheme", "dark")
    }
}

