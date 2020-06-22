//escaping characters
const dialog1 = "He looked up and said \"don't do that!\" to Max";
console.log(dialog1);

const dialog2 = 'He looked up and said" don\'t do that! " to Max';
console.log(dialog2);

const dialog3 = "Escape a character with \\";
console.log(dialog3);

//String templates use backticks instead of single or double quotes
let currentTempYYY = 19.5;
const messageYYY = `The current temperature is ${currentTempYYY}\u00b0C`;
console.log(messageYYY);