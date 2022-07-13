const quotes = ["Sometimes you will never know the value of a moment, until it becomes <br> a memory.", "Be careful who you make memories with. Those things can last a lifetime.", "It is often not the words but the message behind the words that makes <br> a quote so meaningful"];
const authors = ["Theodor Geisel", "Ugo Eze", "Paul Ayoub"];
!function quoteGenerator() {
    const rando = Math.floor(Math.random() * quotes.length);
    document.getElementById("popboxtext").innerHTML = quotes[rando];
    document.getElementById("popboxauthor").innerHTML = authors[rando];
}();

