import { Component } from '@angular/core';

import { Shop } from './shop';

@Component({
	selector: 'my-app',
	template: `
	<h1>{{ title }}</h1>
	<ul class="shops">
		<li *ngFor="let shop of example_shop"
			[class.selected]="shop === selectedShop"
			(click)="onSelect(shop)">
		<span class="badge"> {{shop.id}} </span>{{shop.name}}</li>
	<ul>
	<shop-details [shop]="selectedShop"></shop-details>
	`,
	styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .shops {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .shops li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .shops li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .shops li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .shops .text {
    position: relative;
    top: -3px;
  }
  .shops .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent{
	title = 'Shops';
	example_shop = [
	new Shop(1,"marc"),
	new Shop(2,"marc"),
	new Shop(3,"marc"),
	new Shop(4,"marc")
	];
	selectedShop: Shop;
	onSelect(shop: Shop): void {
  	this.selectedShop = shop;
}
}
