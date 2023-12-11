class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
}
    // This Class will define the deck of cards, and create a deck of 52 cards.
class Deck {
  constructor() {
    this.cards = [];
    this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  }
   // This Method creates the deck of cards.
  createDeck() {
    console.log('Creating a New Deck');
    for (let suit of this.suits) {
      for (let rank of this.ranks) {
        this.cards.push(new Card(suit, rank));
      }
    }
  }
   // This will shuffle the decks of cards
  shuffleDeck() {
    console.log('Shuffling Deck');
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  // This will give cards to the players 
  dealCards(players) {
    console.log('Dealing Cards');
    let halfDeck = this.cards.length / 2;
    let dealingCards1 = this.cards.splice(0, halfDeck);
    players[0].hands.push(...dealingCards1);
    let dealingCards2 = this.cards.splice(0, halfDeck);
    players[1].hands.push(...dealingCards2);
  }
}
    // This class will create the players for the game.
class Player {
  constructor(name) {
    this.name = name;
    this.points = 0;
    this.hands = [];
  }
}

class Game {
  constructor() {
    this.players = [];
  }
             //This Method will start the game. 
  start() {
    this.players.push(new Player('Player 1'));
    this.players.push(new Player('Player 2'));
    console.log('DECLARE WAR!', this.players);

    let myDeck = new Deck();
    myDeck.createDeck();
    myDeck.shuffleDeck();
    myDeck.dealCards(this.players);

    this.playGame();  // This will run until one player is out of cards.
    this.endGame();   // This will dertermine outcome of the Game and ouput the results.
  }

  playGame() {
    console.log('DECLARE WAR');

    let player1 = this.players[0];
    let player2 = this.players[1];
    let turn = 0;

    while (player1.hands.length !== 0 && player2.hands.length !== 0) {
      let player1Card = player1.hands.pop();
      let player2Card = player2.hands.pop();

      if (player1Card.rank > player2Card.rank) {
        player1.points += 1;
        console.log(`Turn ${turn += 1} - ${player1.name} wins this round!`); /*player1Card's rank is greater than player2Card's rank, player1 wins the round. 
        It increments player1.points by 1 and logs the round result indicating that player1 wins this round.*/
      } else if (player2Card.rank > player1Card.rank) {    /*  player2Card's rank is greater than player1Card's rank,
         player2 wins the round. It increments player2.points by 1 and logs the round result indicating that player2 wins this round.*/
        player2.points += 1;
        console.log(`Turn ${turn += 1} - ${player2.name} wins this round!`); 
      } else {
        console.log(`Turn ${turn += 1} - It's a tie!`); // If the ranks of both cards are equal, it's a tie, and it logs that it's a tie for this round.
      }
    }
  }

  endGame() {
    let player1 = this.players[0];
    let player2 = this.players[1];

    console.log('Game Over!');  

    if (player1.points > player2.points) {
      console.log(`Player 1 (${player1.points}) wins over Player 2 (${player2.points})`); // This will logout Player 1 wins over Player2
    } else if (player2.points > player1.points) {
      console.log(`Player 2 (${player2.points}) wins over Player 1 (${player1.points})`);  // This will logout Player 2 wins over Player1
    } else {
      console.log('It\'s a tie! No winner in this game.'); 
    }
  }
}
   
function startGame(){   // Function name is startGame
  let game = new Game(); // This creates a new instance of the Game class using the new keyword.
  game.start(); /* object. The start() method is responsible for initiating the game by setting up players, 
  creating and shuffling the deck, dealing cards, and starting the game loop to play out the rounds of the card game. */
}



