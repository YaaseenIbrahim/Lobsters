import lob from "../lob.json" assert {type: 'json'};

//Quote of the day maker
const keys = Object.keys(lob)
const randIndex = Math.floor(Math.random() * keys.length)
const randKey = keys[randIndex]
const quote = lob[randKey].quote
const person = lob[randKey].person

document.getElementById("cardtext").innerHTML = quote
document.getElementById("cardauthor").innerHTML = person

//Small chance for quirky errors
const errorMessages = ["Sadly momma ran out of roshi"]
const errorText = document.querySelector("#emptyContainer").children[2]

//Happens 10% of the time
if (Math.random() > 0.9) {
    errorText.innerText = errorMessages[Math.floor(Math.random() * errorMessages.length)]
}

const LayoutButton = document.querySelector("#rowsIcon")
const QuoteContainer = document.querySelector(".quote-container")
LayoutButton.onclick = function () { layoutSwitch() }

function layoutSwitch() {
    if (LayoutButton.innerText == 'table_rows'){
        LayoutButton.innerText = 'grid_on'
        
    }
    else{
        LayoutButton.innerText = 'table_rows'
    }

    console.log(QuoteContainer.style.width)
    AllCardsContainer.classList.toggle("gridLayout")  //AllCardsContainer is defined in quoteSearch.js
}





