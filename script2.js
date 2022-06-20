const QuoteCardTemplate = document.querySelector("[quote-card-template]")
const CardContainer = document.querySelector("[data-cards-container]")
const SearchInput = document.querySelector("[data-search]")

let peeps = []
let total = 0
SearchInput.addEventListener("input", e =>{
    const value = e.target.value.toLowerCase();
    peeps.forEach(peep => {                         
        const isVisible = 
            peep.quote.toLowerCase().includes(value) || //OR
            peep.person.toLowerCase().includes(value);
        peep.element.classList.toggle("hide", !isVisible)
    })
})

let totalQuotes = 0
fetch("lob.json")
    .then(response => response.json())
    .then((data) => {
        peeps = data.map(peep => {
            const Card = QuoteCardTemplate.content.cloneNode(true).children[0];
            const Quote= Card.querySelector("[data-quote]");
            const Person= Card.querySelector("[data-person]");
            Quote.textContent = peep.quote;
            Person.textContent = peep.person;
            CardContainer.append(Card);
            totalQuotes = totalQuotes + 1
            return { quote: peep.quote , person: peep.person, element:Card}
        })
        
    });
