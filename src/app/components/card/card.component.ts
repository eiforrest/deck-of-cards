import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { CardService } from 'src/app/services/card-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {

  @Input()
  public card: Card;
  @Input()
  public index: number;
  @Input()
  public isDisplayed: boolean;

  constructor() { }

  public getDeckPosition() {
    return {
      'left': 5+this.index*0.25 + 'px',
      'bottom': 5+this.index*0.25 + 'px'
    }
  }

}
