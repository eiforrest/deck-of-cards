import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardBaizeComponent } from './components/card-baize/card-baize.component';
import { CardComponent } from './components/card/card.component';
import { CardService } from './services/card-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CardBaizeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
