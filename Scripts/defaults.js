const SettingsLayoutToggler = document.querySelector("#layout-checkbox")
const SettingsThemeToggler = document.querySelector("#theme-checkbox");
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
layoutSwitch(localStorage.defaultLayout, "grid")

SettingsLayoutToggler.onclick = function () { layoutDefaults() }
SettingsThemeToggler.onclick = function () { themeDefaults() }

function toggleDefault(toggleButton, boolean, data1,  data2) {
    if (data1 == data2) {
        toggleButton.checked = boolean
    }
}
function themeSwitch(data, option) {
    
    if (data == option){
        ThemeButton.innerText = "light_mode";
        ThemeButton.title = "Light Mode";
        Body.style.color = "black";
        EmptyImage.src = "Pics/lostbot.png";
        theme = lightColors
        toggleDefault(SettingsThemeToggler, true, data, localStorage.defaultTheme)
    }
    else{
        ThemeButton.innerText = "nights_stay";
        ThemeButton.title = "Dark Mode";
        Body.style.color = "whitesmoke";
        EmptyImage.src = "Pics/darklostbot.png";
        theme = darkColors;
        toggleDefault(SettingsThemeToggler, false, data, localStorage.defaultTheme)
    }
    Object.keys(theme).forEach((property) => {
        const propString = "---" + property;
        document.querySelector(":root").style.setProperty(propString, theme[property]);
    });
}
function layoutSwitch(data, option) {
    if (data == option){
        LayoutButton.innerText = "grid_on"
        AllCardsContainer.classList.add("gridLayout")
        toggleDefault(SettingsLayoutToggler, true, data, localStorage.defaultLayout)
    }
    else{
        LayoutButton.innerText = "table_rows"
        AllCardsContainer.classList.remove("gridLayout")
        toggleDefault(SettingsLayoutToggler, false, data, localStorage.defaultLayout)
    }
}

function themeDefaults() {
    if (SettingsThemeToggler.checked) {
        localStorage.setItem("defaultTheme", "light")
    } else {
        localStorage.setItem("defaultTheme", "dark")
    }
}

function layoutDefaults() {
    console.log(SettingsLayoutToggler.checked)
    if (SettingsLayoutToggler.checked) {
        localStorage.setItem("defaultLayout", "grid")
    } else {
        localStorage.setItem("defaultLayout", "flat")
    }
}

