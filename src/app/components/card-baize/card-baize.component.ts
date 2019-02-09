import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardService } from 'src/app/services/card-service.service';
import { Card } from 'src/app/models/Card';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-baize',
  templateUrl: './card-baize.component.html',
  styleUrls: ['./card-baize.component.less']
})
export class CardBaizeComponent implements OnInit, OnDestroy {

  public cards: Card[] = [];
  public deck: Card[] = [];
  public cardsSubscription: Subscription;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.deck = this.cardService.deck;
    this.cardsSubscription = this.cardService.cardsSubject.subscribe((array) => {
      this.cards = array[0];
      this.deck = array[1];
    });
  }

  ngOnDestroy() {
    this.cardsSubscription.unsubscribe();
  }

  public shuffle() {
    this.cardService.shuffle();
  }

  public dealOneCard() {
    this.cardService.dealOneCard();
  }

  public changeDisplay() {
    this.cardService.changeDisplay();
  }

  public getCardStyle(index:number) {
    if (this.cardService.displayChanged) {
      return {
        'width' : '20px',
        'margin-top' : index*2 + 'px'
      }
    }
  }
}
