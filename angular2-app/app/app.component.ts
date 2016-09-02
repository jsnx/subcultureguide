import { Component } from '@angular/core';

export class Shop{
	id: number;
	name: string;
	strasse: string;
	postal: number;
	phone: number;
	category: string
}


@Component({
	selector: 'my-app',
	template: `
	<h1>{{ title }}</h1>
	<ul><li>{{ shop.name }}</li>
	<li>{{ shop.category }}</li>
	<li>{{ shop.strasse }}</li>
	<li>{{ shop.postal }}</li>
	<ul>
	<div>
    	<label>name: </label>
    	<input [(ngModel)]="shop.name" placeholder="name">
  	</div>
	`	
})

export class AppComponent{ 
	title = "Shops";

	shop: Shop = {
 	 id: 1,
 	 name: 'Coretex',
 	 strasse: "Musterstraße",
 	 postal: 10249,
 	 phone: 2213312,
 	 category: "hardcore/punk"
	};

}