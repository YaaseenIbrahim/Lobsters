//Small chance for quirky errors
const errorMessages = ["Sadly momma ran out of roshi"]
const errorText = document.querySelector("#emptyContainer").children[2]

//Happens 10% of the time
if (Math.random() > 0.9) {
    errorText.innerText = errorMessages[Math.floor(Math.random() * errorMessages.length)]
}

//Layout changer
const LayoutButton = document.querySelector("#rows-icon")
const ThemeButton = document.querySelector("#light-dark-mode")
const QuoteContainer = document.querySelector(".quote-container")
LayoutButton.onclick = function () { layoutSwitch() }
ThemeButton.onclick = function () {themeSwitch()}

function layoutSwitch() {
    if (LayoutButton.innerText == 'table_rows'){
        LayoutButton.innerText = 'grid_on'
        
    }
    else{
        LayoutButton.innerText = 'table_rows'
    }

    AllCardsContainer.classList.toggle("gridLayout")  //AllCardsContainer is defined in quoteSearch.js
}

function themeSwitch() {
    if (ThemeButton.innerText == "light_mode") {
        ThemeButton.innerText = "nights_stay"
        ThemeButton.title = "Dark Mode"
    }
    else{
        ThemeButton.innerText = "light_mode"
        ThemeButton.title = "Light Mode"

    }
    
}

const SearchLabel = document.querySelector("#searchLabel")
const SearchInputContainer = document.querySelector("#searchInput-container")

SearchLabel.onmouseover = function() { highlighter() };

function highlighter() {
    SearchLabel.classList.remove ("see-through")
    SearchLabel.classList.remove ("OG-searchLabel")
    SearchLabel.classList.add ("hover-searchLabel")
    SearchInputContainer.classList.add("hover-searchInput") 
}
