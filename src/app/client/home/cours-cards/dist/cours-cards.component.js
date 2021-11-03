"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoursCardsComponent = void 0;
var core_1 = require("@angular/core");
var CoursCardsComponent = /** @class */ (function () {
    function CoursCardsComponent(homeservice, router) {
        this.homeservice = homeservice;
        this.router = router;
        this.subText = 'N/A';
        this.openProfile = new core_1.EventEmitter();
    }
    CoursCardsComponent.prototype.ngOnInit = function () {
    };
    CoursCardsComponent.prototype.showProfile = function () {
        this.homeservice.selectedCourse = {
            title: this.typeLang,
            Text: this.subText,
            decription: this.description
        };
        this.router.navigate(['client/profile']);
        // this.openProfile.emit();
    };
    __decorate([
        core_1.Input()
    ], CoursCardsComponent.prototype, "typeLang");
    __decorate([
        core_1.Input()
    ], CoursCardsComponent.prototype, "subText");
    __decorate([
        core_1.Input()
    ], CoursCardsComponent.prototype, "description");
    __decorate([
        core_1.Output()
    ], CoursCardsComponent.prototype, "openProfile");
    CoursCardsComponent = __decorate([
        core_1.Component({
            selector: 'app-cours-cards',
            templateUrl: './cours-cards.component.html',
            styleUrls: ['./cours-cards.component.css']
        })
    ], CoursCardsComponent);
    return CoursCardsComponent;
}());
exports.CoursCardsComponent = CoursCardsComponent;
