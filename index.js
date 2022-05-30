let cardsArr = [];
let cardSum = 0;
let hasBlackjack = false;
let isAlive = false;
let comment = "";
const commentEl = document.getElementById('comment-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');

let player = {
    name: "Anri",
    chips: 255
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardsArr = [firstCard, secondCard];
    cardSum = firstCard + secondCard;
    renderGame();
}


function getRandomCard() {
    let randomCardNum = Math.floor(Math.random() * 13) + 1
    if(randomCardNum > 10) {
        return 10;
    } else if(randomCardNum === 1) {
        return 11;
    } else {
        return randomCardNum;
    }
}


function renderGame() {
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cardsArr.length; i++) {
        cardsEl.textContent += cardsArr[i] + " ";
    }

    sumEl.textContent = "Sum: " + cardSum;

    if(cardSum <= 20) {
        comment = "Do you want to draw a new card?";
    } else if(cardSum === 21) {
        comment = "You've got Blackjack!";
        hasBlackjack = true;
    } else {
        comment = "You have lost...";
        isAlive = false;
    }
    
    commentEl.textContent = comment;
}

function newCard() {
    if(isAlive === true && hasBlackjack === false) {
        let newCard = getRandomCard();
        cardSum += newCard;
        cardsArr.push(newCard);
        renderGame();
    }
} 