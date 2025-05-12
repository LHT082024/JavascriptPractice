console.log("supmate")

let firstName = "Fitzwilliam";
let middleName = "Esquire";
let lastName = "Darcy";

const qty = 2;
const events = "Hannibal at the paris oprea house";
const price = 400;
const ticketAgent = "Armand Moncharmin"

const email = `
Hello Mr ${firstName}

Thanks for ordering ${qty} tickets to ${events}.

Order details
${firstName} ${middleName} ${lastName}
     ${qty} x $${price} = ${qty*price} to ${events}

you can pick your tickets up 30 minutes 
before the show.

Thanks

${ticketAgent}`


const logCompliment = function(firstName){
    console.log(`${firstName} you're doing great  uwu`);
};

logCompliment("Shift");


// console.log(`${email}`);