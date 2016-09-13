import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ShopDetailComponent } from './shop-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule,
  				  FormsModule ],
  declarations: [ AppComponent,
                  ShopDetailComponent],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
