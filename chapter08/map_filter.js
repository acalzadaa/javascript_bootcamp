
// The Fundamental Array Operations: map and filter

//map transforms the elements in the array
const cart = [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }];

const names = cart.map(x => x.name);
console.log(names);

const prices = cart.map(x => x.price);
console.log(prices);

const discountPrices = prices.map(x => x * 0.8);
console.log(discountPrices);

const lcNames = names.map(x => x.toLowerCase());
console.log(lcNames);

// Create a deck of cards!

// filter, as the name implies, is designed to remove unwanted things from an array. 
// Like map, it returns a new array with elements removed.

const cards = [];
for (let suit of ['H', 'C', 'D', 'S'])
    for (let value = 1; value <= 13; value++)
        cards.push({ suit, value });

// get all DIAMONDS
console.log(cards.filter(c => c.suit === 'D'));

// get all FACE cards
console.log(cards.filter(c => c.value > 10))
    ;

//get all FACE cards and HEARTS
cards.filter(c => c.value > 10 && c.suit === 'H');
