const main = document.querySelector("main");

const card = document.createElement("section");

const fullName = document.createElement("h3");

const phoneNumber = document.createElement("span");

const email = document.createElement("span");

const message = document.createElement("span");

main.appendChild(card);
card.append(fullName, phoneNumber, email, message);

