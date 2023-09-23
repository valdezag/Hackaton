const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function createDeck() {
    const deck = [];
    for (const suit of suits) {
        for (const rank of ranks) {
            deck.push({ suit, rank });
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function dealCard(deck, hand) {
    const card = deck.pop();
    hand.push(card);
    return card;
}

document.getElementById('deal1').addEventListener('click', () => {
    const card = dealCard(deck, player1Hand);
    displayCard(card, 'hand1');
});

document.getElementById('deal2').addEventListener('click', () => {
    const card = dealCard(deck, player2Hand);
    displayCard(card, 'hand2');
});

document.getElementById('reset').addEventListener('click', () => {
    resetGame();
});

let deck = createDeck();
shuffleDeck(deck);

const player1Hand = [];
const player2Hand = [];

function displayCard(card, playerId) {
    const hand = document.getElementById(playerId);
    const cardDiv = document.createElement('div');
    cardDiv.textContent = `${card.rank} of ${card.suit}`;
    hand.appendChild(cardDiv);
}

function resetGame() {
    deck = createDeck();
    shuffleDeck(deck);
    player1Hand.length = 0;
    player2Hand.length = 0;
    document.getElementById('hand1').innerHTML = '';
    document.getElementById('hand2').innerHTML = '';
}