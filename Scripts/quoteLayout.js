//Small chance for quirky errors
const errorMessages = ["Sadly momma ran out of roshi"];
const errorText = document.querySelector("#emptyContainer").children[2];

//Happens 20% of the time
if (Math.random() > 0.8) {
	errorText.innerText =
		errorMessages[Math.floor(Math.random() * errorMessages.length)];
}

//Layout changer
const LayoutButton = document.querySelector("#rows-icon");
const SettingsButton = document.querySelector("#settings-icon");
const SettingsCloseBtn = document.querySelector("#close-btn");
const QuoteContainer = document.querySelector(".quote-container");
const EmptyImage = document.querySelector("#emptyImage");

SettingsCloseBtn.onclick = function () { settingsPopUp(); };
SettingsButton.onclick = function () { settingsPopUp(); };
LayoutButton.onclick = function () { layoutSwitch(); };

//Opening and closing settings
function settingsPopUp() {
	document.querySelector("#popup-container").classList.toggle("imageHide");

	SettingsCloseBtn.addEventListener("mousedown", function () {
		SettingsCloseBtn.style.opacity = 0.75;
	});
	SettingsCloseBtn.addEventListener("mouseup", function () {
		SettingsCloseBtn.style.opacity = 1;
	});
	document.addEventListener("keydown", function (event) {
		if (event.key === "Escape") {
			SettingsCloseBtn.style.opacity = 0.75;
		}
	});
	document.addEventListener("keyup", function (event) {
		if (event.key === "Escape") {
			document.querySelector("#popup-container").classList.add("imageHide");
		}
		SettingsCloseBtn.style.opacity = 1;
	});

}

function layoutSwitch() {
	LayoutButton.innerText == "table_rows"
		? (LayoutButton.innerText = "grid_on")
		: (LayoutButton.innerText = "table_rows");

	AllCardsContainer.classList.toggle("gridLayout");
}

// Search animation
const SearchLabel = document.querySelector("#searchLabel");
const SearchInputContainer = document.querySelector("#searchInput-container");

SearchLabel.onclick = function () { highlighter(); };

function highlighter() {
	SearchLabel.classList.remove("see-through");
	SearchLabel.classList.remove("OG-searchLabel");
	SearchLabel.classList.add("hover-searchLabel");
	SearchInputContainer.classList.add("hover-searchInput");
}