"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(spinner, router, home, auth) {
        this.spinner = spinner;
        this.router = router;
        this.home = home;
        this.auth = auth;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.showMessage = false;
        this.showLoader = false;
    }
    LoginComponent.prototype.toggleShowMessage = function () {
        this.showMessage = !this.showMessage;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    // submit(){
    //  this.auth.submit(this.emailFormControl,this.passwordFormControl);
    // }
    LoginComponent.prototype.gotToRegister = function () {
        this.router.navigate(['register']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
