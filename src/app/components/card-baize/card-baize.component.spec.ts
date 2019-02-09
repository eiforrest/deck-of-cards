import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBaizeComponent } from './card-baize.component';

describe('CardBaizeComponent', () => {
  let component: CardBaizeComponent;
  let fixture: ComponentFixture<CardBaizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBaizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBaizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
