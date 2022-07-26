import lob from "../lob.json" assert { type: "json" };

//Quote of the day maker
const keys = Object.keys(lob);
const randIndex = Math.floor(Math.random() * keys.length);
const randKey = keys[randIndex];
const quote = lob[randKey].quote;
const person = lob[randKey].person;

if (lob[randKey].fake == true){
    document.querySelector("#cardtext").classList.remove("actuallyQuote")    
}

document.querySelector("#cardtext").innerHTML = quote;
document.querySelector("#cardauthor").innerHTML = person;
