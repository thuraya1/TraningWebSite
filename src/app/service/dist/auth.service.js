"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AuthService = /** @class */ (function () {
    function AuthService(spinner, router) {
        this.spinner = spinner;
        this.router = router;
        this.emailFormControl = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
        this.passwordFormControl = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8)]);
    }
    AuthService.prototype.submit = function () {
        var _this = this;
        console.log(this.emailFormControl.value, this.passwordFormControl.value);
        // this.showLoader=true;
        this.spinner.show();
        setTimeout(function () {
            _this.spinner.hide();
            //this.home.message='you are logged In !!'
            _this.router.navigate(['client']);
        }, 3000);
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
