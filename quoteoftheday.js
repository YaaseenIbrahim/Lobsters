import lob from "./lob.json" assert {type: 'json'};

const keys = Object.keys(lob)
const randIndex = Math.floor(Math.random() * keys.length)
const randKey = keys[randIndex]
const quote = lob[randKey].quote
const person = lob[randKey].person

document.getElementById("cardtext").innerHTML = quote
document.getElementById("cardauthor").innerHTML = person





