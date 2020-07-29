/* eslint-disable no-unused-vars */
const err = new Error('invalid email');

function validateEmail(email) {
    return email.match(/@/) ? email : new Error(`invalid email: ${email}`);
}

console.log("EXAMPLE 1: ALL OK!");

let email_good = "jane@hotmail.com";
let validatedEmail_good = validateEmail(email_good);

if (validatedEmail_good instanceof Error) {
    console.error(`Error: ${validatedEmail_good.message}`);
} else {
    console.log(`Valid email: ${validatedEmail_good}`);
}

console.log("EXAMPLE 2: CATASTROPHIC ERROR!");


let email_bad = null;
//let validatedEmail_bad = validateEmail(email_bad);

try {
    let validatedEmail_bad = validateEmail(email_bad);

    if (validatedEmail_bad instanceof Error) {
        console.error(`Error: ${validatedEmail_bad.message}`);
    } else {
        console.log(`Valid email: ${validatedEmail_bad}`);
    }
} catch (err) {
    console.error(`Error: ${err.message}`);
}




