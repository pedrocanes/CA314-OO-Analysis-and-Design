<script>
class Card {
	constructor(suit, symbol, ID) {
		this.suit = suit;
		this.symbol = symbol;
		this.ID = ID;
	}
}

class Player {
	constructor(name, ID, win_count, hand = None) {
		this.name = name;
		this.ID = ID;
		this.win_count = win_count;
		this.hand = hand
	}

	// Player receives a card
	getCard(card){
		hand.push(card);
	}
}

function shuffle(deck) {
    let counter = deck.length;

    // While there are elements in the deck
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = deck[counter];
        deck[counter] = deck[index];
        deck[index] = temp;
    }
    return deck;
}

var deck = [
	new Card("Spades", "A", 13),
	new Card("Spades", "K", 12),
	new Card("Spades", "Q", 11),
	new Card("Spades", "J", 10),
	new Card("Spades", "10", 9),
	new Card("Spades", "9", 8),
	new Card("Spades", "8", 7),
	new Card("Spades", "7", 6),
	new Card("Spades", "6", 5),
	new Card("Spades", "5", 4),
	new Card("Spades", "4", 3),
	new Card("Spades", "3", 2),
	new Card("Spades", "2", 1),
	new Card("Hearts", "A", 13),
	new Card("Hearts", "K", 12),
	new Card("Hearts", "Q", 11),
	new Card("Hearts", "J", 10),
	new Card("Hearts", "10", 9),
	new Card("Hearts", "9", 8),
	new Card("Hearts", "8", 7),
	new Card("Hearts", "7", 6),
	new Card("Hearts", "6", 5),
	new Card("Hearts", "5", 4),
	new Card("Hearts", "4", 3),
	new Card("Hearts", "3", 2),
	new Card("Hearts", "2", 1),
	new Card("Clubs", "A", 13),
	new Card("Clubs", "K", 12),
	new Card("Clubs", "Q", 11),
	new Card("Clubs", "J", 10),
	new Card("Clubs", "10", 9),
	new Card("Clubs", "9", 8),
	new Card("Clubs", "8", 7),
	new Card("Clubs", "7", 6),
	new Card("Clubs", "6", 5),
	new Card("Clubs", "5", 4),
	new Card("Clubs", "4", 3),
	new Card("Clubs", "3", 2),
	new Card("Clubs", "2", 1),
	new Card("Diamonds", "A", 13),
	new Card("Diamonds", "K", 12),
	new Card("Diamonds", "Q", 11),
	new Card("Diamonds", "J", 10),
	new Card("Diamonds", "10", 9),
	new Card("Diamonds", "9", 8),
	new Card("Diamonds", "8", 7),
	new Card("Diamonds", "7", 6),
	new Card("Diamonds", "6", 5),
	new Card("Diamonds", "5", 4),
	new Card("Diamonds", "4", 3),
	new Card("Diamonds", "3", 2),
	new Card("Diamonds", "2", 1),
];
</script>