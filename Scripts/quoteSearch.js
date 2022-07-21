const QuoteCardTemplate = document.querySelector("[quote-card-template]")
const CardContainer = document.querySelector("[data-cards-container]")
const SearchInput = document.querySelector("[data-search]")


// Search
let peeps = []
SearchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();

    peeps.forEach(peep => {
        
        const hasAlt = peep.altName != undefined && peep.altName.toLowerCase().includes(value)
        const isGolden = peep.element.classList.contains("golden") && value == 'golden';
        const isVisible =
            peep.quote.toLowerCase().includes(value)||
            peep.person.toLowerCase().includes(value)||
            isGolden ||
            hasAlt
           
        
        peep.element.classList.toggle("alwaysGolden", isGolden) //Turns it gold always if you search Golden
        peep.element.classList.toggle("center", isVisible)
        peep.element.classList.toggle("hide", !isVisible)
    })
})

// Making the cards
fetch("lob.json")
    .then(response => response.json())
    .then((data) => {
        peeps = data.map(peep => {
            const Card = QuoteCardTemplate.content.cloneNode(true).children[0];
            const Quote = Card.querySelector("[data-quote]");
            const Person = Card.querySelector("[data-person]");
            Quote.textContent = peep.quote;
            Person.textContent = peep.person;

            if (peep.golden == true) {
                Card.classList.add("golden");
            }
            else if (peep.fake == true) {
                Quote.classList.remove("actuallyQuote");
            }
           
            CardContainer.append(Card);
            return { quote: peep.quote, person: peep.person, altName: peep.altName, element: Card }

        })

    });

