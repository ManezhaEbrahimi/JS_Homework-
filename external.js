// === Part 1: Login & Access Control ===
let username = prompt("Enter your username:");
let password = prompt("Enter your password:");
let role = "";
let securityLevel = "";
if ((username === "admin" || username === "user")&& password === "1234") {
    if (username === "admin") {
role = "admin";
securityLevel = "high";
    } else {
        role = "user";
        securityLevel = "low";
    }
    alert("Login seccessful. Welcome, " +role+ "!");
} else {
    alert("Invalid username or password. Access denied.");
}
// === Part 2: Coffee Shop Order Calculator ===
let customerName = prompt("What's your name?");
let age = parseInt(prompt("How old are you?"));
let coffeeType = prompt("Choose your coffee: espresso, latte, or cappuccino").toLowerCase();
let quantity = parseInt(prompt("How many cups would you like?"));
let pricePerCup = 0;
if (coffeeType === "espresso") {
    pricePerCup = 2.5;
} else if( coffeeType === "latte") {
    pricePerCup = 3.5;
} else if(coffeeType === "cappuccino") {
    pricePerCup = 4.0;
} else {
    alert("Invalid coffee type selected.");
    throw new Error("Invalid coffee type.");
}
let originalTotal = quantity * pricePerCup;
let discount = 0;
if(age <18 || age> 60) {
    discount = originalTotal * 0.10;
}
let finalTotal = originalTotal - discount;
// === Part 3: Bill Splitter with Tip ===
let splitCount = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
if (![1, 2, 3].includes(splitCount)) {
    alert("Invalid number of people.");
    throw new Error("Invalid split count.");
}
let tipPercent = parseInt(prompt("Enter tip percentage (0, 5, 10, or 15):"));
if (![0, 5, 10, 15].includes(tipPercent)) {
    alert("Invalid tip percentage.");
    throw new Error("Invalid tip.");
}
let tipAmount = finalTotal * (tipPercent / 100);
let totslWithTip = finalTotal + tipAmount;
let amountPerPerson = totslWithTip / splitCount;
//  === Final Output ===
alert (
    `Hello ${customerName} !\n` +
    `You ordered ${quantity} ${coffeeType}(s).\n` +
    `Original total $${originalTotal.toFixed(2)} \n` +
    `Discount $${discount.toFixed(2)} \n` +
    `Tip $${tipAmount.toFixed(2)} \n` +
    `Total with Tip: $${totslWithTip.toFixed(2)} \n` +
    `Split btween ${splitCount} people: $${amountPerPerson.toFixed(2)} each` 
);