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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var cust_component_1 = require('./cust.component');
var cust_service_1 = require('./cust.service');
var CustModule = (function () {
    function CustModule() {
    }
    CustModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [cust_component_1.CustComponent],
            exports: [cust_component_1.CustComponent],
            providers: [cust_service_1.CustService]
        }), 
        __metadata('design:paramtypes', [])
    ], CustModule);
    return CustModule;
}());
exports.CustModule = CustModule;
//# sourceMappingURL=cust.module.js.map