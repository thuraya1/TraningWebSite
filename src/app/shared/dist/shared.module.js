"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ngx_spinner_1 = require("ngx-spinner");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var toolbar_1 = require("@angular/material/toolbar");
var icon_1 = require("@angular/material/icon");
var card_1 = require("@angular/material/card");
var button_1 = require("@angular/material/button");
var navbar_component_1 = require("./navbar/navbar.component");
var foramted_pipes_pipe_1 = require("../Pipes/foramted-pipes.pipe");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                navbar_component_1.NavbarComponent,
                foramted_pipes_pipe_1.ForamtedPipesPipe
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ngx_spinner_1.NgxSpinnerModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                forms_1.ReactiveFormsModule,
                progress_spinner_1.MatProgressSpinnerModule, toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                card_1.MatCardModule,
                button_1.MatButtonModule
            ],
            exports: [forms_1.FormsModule,
                ngx_spinner_1.NgxSpinnerModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                forms_1.ReactiveFormsModule,
                progress_spinner_1.MatProgressSpinnerModule,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                card_1.MatCardModule,
                button_1.MatButtonModule,
                navbar_component_1.NavbarComponent,
                foramted_pipes_pipe_1.ForamtedPipesPipe
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
