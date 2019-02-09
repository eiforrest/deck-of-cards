import { Injectable } from '@angular/core';
import { Card } from '../models/Card';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  public cards: Card[] = [];
  public deck: Card[] = [];
  public displayChanged: boolean = false;
  public cardsSubject = new Subject<[Card[], Card[]]>();

  constructor() {
    this.generateDeckOfCards();
  }

  generateDeckOfCards() {
    const colors = ['♥', '♦', '♣', '♠'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    for (const color of colors) {
      for (const value of values) {
        let card = new Card(color, value);
        this.deck.push(card);
      }
    }
  }

  public shuffle() {
    this.deck.push(...this.cards);
    this.cards = [];

    this.deck.reduce((newArr, currentCard, i) => {
      const randomIndex = Math.floor(Math.random() * i);
      [newArr[randomIndex], newArr[i]] = [newArr[i], newArr[randomIndex]];
      return newArr
    }, this.deck);

    this.emitNewCards();
  }

  public dealOneCard() {
    if (this.deck.length > 0) {
      this.cards.push(this.deck.shift());
      this.emitNewCards();
    } 
  }

  public changeDisplay() {
    this.displayChanged = !this.displayChanged;
  }

  public emitNewCards() {
    this.cardsSubject.next([this.cards, this.deck]);
  }
}
