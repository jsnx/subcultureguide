import { Component } from '@angular/core';

export class Shop {
  constructor(
	public id: number,
	public name: string) { }
}

@Component({
	selector: 'my-app',
	template: `
	<h1>{{ title }}</h1>
	<ul>
		<li *ngFor="let shop of example_shop">{{shop.name}}</li>
	<ul>
	<div>
    	<label>name: </label>

  	</div>
	`
})

export class AppComponent{
	title = 'Shops';
	example_shop = [
	new Shop(1,"marc"),
	new Shop(2,"marc"),
	new Shop(3,"marc"),
	new Shop(4,"marc")
	]
}
