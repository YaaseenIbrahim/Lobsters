//Small chance for quirky errors
const errorMessages = ["Sadly momma ran out of roshi"];
const errorText = document.querySelector("#emptyContainer").children[2];

//Happens 10% of the time
if (Math.random() > 0.8) {
	errorText.innerText =errorMessages[Math.floor(Math.random() * errorMessages.length)];
}

//Layout changer
const LayoutButton = document.querySelector("#rows-icon");
const ThemeButton = document.querySelector("#light-dark-mode");
const QuoteContainer = document.querySelector(".quote-container");
const EmptyImage = document.querySelector("#emptyImage")
const Root = document.querySelector(":root");
const Body = document.querySelector("body")
const darkColors = {
	originalQuoteBack: "#721732",
	hoverQuoteBack: "#5c031c",
	opacHov: "rgba(114, 23, 50, 0.6)",
	accButtonBorder: "#5a0e24",
	backgroundImg: "url(Pics/darkbg.jpg)",
	blur: "rgba(180, 180, 180,0.5)",
	qotdBlur: "rgba(180, 180, 180,0.4)",
};
const lightColors = {
	originalQuoteBack: "#e7233a",
	hoverQuoteBack: "#e2001a",
	opacHov: "rgba(226, 0, 26, 0.6)",
	accButtonBorder: "rgb(204, 30, 47)",
	backgroundImg: "url(Pics/oilbg.png)",
	blur: "rgba(255, 255, 255,0.5)",
	qotdBlur: "rgba(255, 255, 255,0.3)",
};

// Making defaults
const isLight = window.matchMedia('(prefers-color-scheme: light)').matches || 
				window.matchMedia('(prefers-color-scheme: no-preference)').matches 

isLight ? ThemeButton.innerText = "light_mode" : ThemeButton.innerText = "nights_stay"
isLight ? EmptyImage.src = "Pics/lostbot.png" :EmptyImage.src = "Pics/darklostbot.png"


LayoutButton.onclick = function () {layoutSwitch()};
ThemeButton.onclick = function () {themeSwitch()};

function layoutSwitch() {
	//Using ternary operator (if-else in one line)
	LayoutButton.innerText == "table_rows"? 
        LayoutButton.innerText = "grid_on": 
        LayoutButton.innerText = "table_rows";

	AllCardsContainer.classList.toggle("gridLayout"); //AllCardsContainer is defined in quoteSearch.js
}

// Allowing themebutton to be changed manually
function themeSwitch() {
	let theme = lightColors;
	if (ThemeButton.innerText == "light_mode") {
		ThemeButton.innerText = "nights_stay";
		ThemeButton.title = "Dark Mode";
		Body.style.color = "whitesmoke";
		EmptyImage.src = "Pics/darklostbot.png"
		theme = darkColors;
	} 
	else {
		ThemeButton.innerText = "light_mode";
		ThemeButton.title = "Light Mode";
		Body.style.color = "black";
		EmptyImage.src = "Pics/lostbot.png"
	}

	Object.keys(theme).forEach((property) => {
		const propString = "---" + property;
		Root.style.setProperty(propString, theme[property]);
	});
}

// Search animation
const SearchLabel = document.querySelector("#searchLabel");
const SearchInputContainer = document.querySelector("#searchInput-container");

SearchLabel.onclick = function () {highlighter()};

function highlighter() {
	SearchLabel.classList.remove("see-through");
	SearchLabel.classList.remove("OG-searchLabel");
	SearchLabel.classList.add("hover-searchLabel");
	SearchInputContainer.classList.add("hover-searchInput");
}
