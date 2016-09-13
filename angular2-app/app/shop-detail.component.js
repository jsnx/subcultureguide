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
var ShopDetailComponent = (function () {
    function ShopDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', shop_1.Shop)
    ], ShopDetailComponent.prototype, "shop", void 0);
    ShopDetailComponent = __decorate([
        core_1.Component({
            selector: "shop-details",
            template: "\n    <div *ngIf=\"shop\">\n    <h2>{{shop.name}} details!</h2>\n    <div><label>id: </label>{{shop.id}}</div>\n    <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"shop.name\" placeholder=\"name\"/>\n    </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ShopDetailComponent);
    return ShopDetailComponent;
}());
exports.ShopDetailComponent = ShopDetailComponent;
//# sourceMappingURL=shop-detail.component.js.map