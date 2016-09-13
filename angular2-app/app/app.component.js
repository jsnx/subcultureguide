"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var shop_1 = require('./shop');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Shops';
        this.example_shop = [
            new shop_1.Shop(1, "marc"),
            new shop_1.Shop(2, "marc"),
            new shop_1.Shop(3, "marc"),
            new shop_1.Shop(4, "marc")
        ];
    }
    AppComponent.prototype.onSelect = function (shop) {
        this.selectedShop = shop;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t<h1>{{ title }}</h1>\n\t<ul class=\"shops\">\n\t\t<li *ngFor=\"let shop of example_shop\"\n\t\t\t[class.selected]=\"shop === selectedShop\"\n\t\t\t(click)=\"onSelect(shop)\">\n\t\t<span class=\"badge\"> {{shop.id}} </span>{{shop.name}}</li>\n\t<ul>\n\t<shop-details [shop]=\"selectedShop\"></shop-details>\n\t",
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .shops {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .shops li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .shops li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .shops li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .shops .text {\n    position: relative;\n    top: -3px;\n  }\n  .shops .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map