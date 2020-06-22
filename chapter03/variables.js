//variables and constants

const sam1 = {
  name: "Sam",
  age: 4,
};
console.log(sam1);

const sam2 = {
  name: "Sam",
  age: 4,
};
console.log(sam2);

const sam3 = {
  name: "sam",
  classification: {
    kingdom: "Anamalia",
    phylum: "Chordata",
    class: "Mamalia",
    order: "Carnivoria",
    families: "Felidae",
    subfamily: "Felinae",
    genus: "Felix",
    species: "catus",
  },
};

console.log(sam3.classification.family);
console.log(sam3["classification"].family);
console.log(sam3.classification["family"]);
console.log(sam3["classification"]["family"]);

let currentTempC = 22;
console.log(currentTempC);

let targetTempC, room1 = "conference_room_a", room2 = "lobby";
console.log(targetTempC);
console.log(room2);

const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 38;
console.log(ROOM_TEMP_C);
console.log(MAX_TEMP_C);

let room12 = "conference_room_a";
console.log(room12);

let currentRoom = room1;
console.log(currentRoom);




