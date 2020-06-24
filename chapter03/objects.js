const sam1 = {
    name: 'Sam',
    age: 4,
};

const sam2 = { name: 'Sam', age: 4 }; // declaration on one line

const sam3 = {
    name: 'Sam',
    classification: { // property values can
        kingdom: 'Anamalia', // be objects themselves
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfaimily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
    },
};


sam3.speak = function() { return "Meow!";};
console.log(sam3.speak());

sam2.jump = function() { return "How high?";};
console.log(sam2.jump());

sam1.rollOver = function(){ return "will not";};
console.log(sam1.rollOver());


// String OBJECTS

const s = "Hello!";
console.log(s.toUpperCase());
