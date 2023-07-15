const SUITS = ["♠","♦", "♣", "♥"]
const VALUES = [

 export default class Deck {
  constructor(cards = freshDeck()) {
   this.cards = cards
  }
 

]

class Deck {
 constructor() {
  this.cards = cards
 }
}


class Card {
 constructor(suit, value) {
  this.suit = suit
  this.value = value
 }
}

function freshDeck() {
 return SUITS.flatMap(suit => {
  return VALUES.map(value => {
   return
  })
 })
}