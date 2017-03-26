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
var MainHomeComponent = (function () {
    function MainHomeComponent() {
        this.showToggle = false;
        this.accordions = [
            { title: {
                    'label': 'Assets',
                    'icon': "&#xE87B;"
                },
                content: 'Dynamic content 1' },
            { title: {
                    'label': 'Items',
                    'icon': "&#xE8F9;"
                },
                content: 'Dynamic content 2' },
            { title: {
                    'label': 'Locations',
                    'icon': "&#xE569;"
                },
                content: 'Dynamic content 1' },
            { title: {
                    'label': 'Orders',
                    'icon': "&#xE163;"
                },
                content: 'Dynamic content 2' },
            { title: {
                    'label': 'Searches',
                    'icon': "&#xE8B6;"
                },
                content: 'Dynamic content 1' },
            { title: {
                    'label': 'Catalogs',
                    'icon': "&#xE865;"
                },
                content: 'Dynamic content 2' },
            { title: {
                    'label': 'Surveys',
                    'icon': "&#xE86C;"
                },
                content: 'Dynamic content 1' },
            { title: {
                    'label': 'Documents',
                    'icon': "&#xE24D;"
                },
                content: 'Dynamic content 2' },
            { title: {
                    'label': 'Programs',
                    'icon': "&#xE02E;"
                },
                content: 'Dynamic content 1' }
        ];
    }
    MainHomeComponent.prototype.toggleOpen = function () {
        this.showToggle = true;
        console.log("hdfgejkhd");
    };
    MainHomeComponent.prototype.toggleClose = function () {
        this.showToggle = false;
        console.log("hdfgejfedsfsedfkhd");
    };
    MainHomeComponent = __decorate([
        core_1.Component({
            selector: 'main-home',
            template: "\n  <div class=\"container\">\n  <div class=\"pan_sidenav_overlay\"  *ngIf=\"showToggle==true\"></div>\n  <md-sidenav-layout>\n      <md-sidenav class=\"Leftsidenav\" #start (open)=\"mybutton.focus()\">\n          <div class=\"Manage\">\n              <div>\n                  <i class=\"material-icons ManageLeftIcon\">&#xE051;</i>\n                  <span class=\"ManageText\">M A N A G E</span>\n                  <i class=\"material-icons ManageRightIcon\" #mybutton (click)=\"start.close() && toggleClose()\">&#xE5C3;</i>\n              </div>\n          </div>\n          <md2-accordion [multiple]=\"multiple\">\n              <md2-accordion-tab class=\"test\" *ngFor=\"let tab of accordions\" [header]=\"tab.title\" [active]=\"tab.active\" [disabled]=\"tab.disabled\">\n              <ul class=\"sidenavcontent\">\n              <li><i class=\"material-icons\">&#xE5C9;</i>Items 700CS</li>\n              <li><i class=\"material-icons\"></i>Item BRD-1285</li>\n              <li><i class=\"material-icons\"></i>Items Tall Banner 701</li>\n              <li><i class=\"material-icons\"></i>Items Install Doc</li>\n              </ul>\n            </md2-accordion-tab>\n          </md2-accordion>\n          <!-- <ul class=\"TopLeftSidenav\">\n              <li><i class=\"material-icons\">&#xE87B;</i>Assets</li>\n              <li><i class=\"material-icons\">&#xE8F9;</i>Items</li>\n              <li><i class=\"material-icons\">&#xE569;</i>Locations</li>\n              <li><i class=\"material-icons\">&#xE163;</i>Orders</li>\n              <li><i class=\"material-icons\">&#xE8B6;</i>Searches</li>\n              <li><i class=\"material-icons\">&#xE86E;</i>catalogs</li>\n              <li><i class=\"material-icons\">&#xE86C;</i>Suveys</li>\n              <li><i class=\"material-icons\">&#xE24D;</i>Documents</li>\n              <li><i class=\"material-icons\">&#xE02E;</i>Programs</li>\n          </ul> -->\n      </md-sidenav>\n      <md-sidenav #end align=\"end\">\n        End Sidenav.\n        <i (click)=\"end.close()\">Close</i>\n      </md-sidenav>\n      <a class=\"dropdown-button\" (click)=\"start.toggle() && toggleOpen()\">\n          <i class=\"material-icons pan_menuicon\">&#xE5D2;</i>\n      </a>\n    </md-sidenav-layout>\n <my-headers> </my-headers>\n <my-home></my-home>\n</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MainHomeComponent);
    return MainHomeComponent;
}());
exports.MainHomeComponent = MainHomeComponent;
//# sourceMappingURL=mainhome.component.js.map