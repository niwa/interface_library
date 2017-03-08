(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/platform-browser"), require("@angular/router"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/platform-browser", "@angular/router"], factory);
	else if(typeof exports === 'object')
		exports["niwa-application-messages"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/platform-browser"), require("@angular/router"));
	else
		root["niwa-application-messages"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/platform-browser"], root["@angular/router"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var niwa_interface_module_1 = __webpack_require__(1);
	exports.NiwaInterfaceModule = niwa_interface_module_1.NiwaInterfaceModule;
	var niwa_interface_footer_component_1 = __webpack_require__(5);
	exports.NiwaInterfaceFooterComponent = niwa_interface_footer_component_1.NiwaInterfaceFooterComponent;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(2);
	var common_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(4);
	var niwa_interface_footer_component_1 = __webpack_require__(5);
	var router_1 = __webpack_require__(6);
	var NiwaInterfaceModule = (function () {
	    function NiwaInterfaceModule() {
	    }
	    NiwaInterfaceModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, platform_browser_1.BrowserModule, router_1.RouterModule],
	            declarations: [niwa_interface_footer_component_1.NiwaInterfaceFooterComponent],
	            exports: [niwa_interface_footer_component_1.NiwaInterfaceFooterComponent],
	            entryComponents: [],
	            providers: [{
	                    provide: common_1.APP_BASE_HREF,
	                    useValue: '/'
	                }],
	            bootstrap: [niwa_interface_footer_component_1.NiwaInterfaceFooterComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NiwaInterfaceModule);
	    return NiwaInterfaceModule;
	}());
	exports.NiwaInterfaceModule = NiwaInterfaceModule;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(2);
	var NiwaInterfaceFooterComponent = (function () {
	    function NiwaInterfaceFooterComponent() {
	    }
	    NiwaInterfaceFooterComponent.prototype.ngOnInit = function () {
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NiwaInterfaceFooterComponent.prototype, "alternateMessage", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NiwaInterfaceFooterComponent.prototype, "versionNumber", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NiwaInterfaceFooterComponent.prototype, "termsUrl", void 0);
	    NiwaInterfaceFooterComponent = __decorate([
	        core_1.Component({
	            selector: 'niwa-interface-footer',
	            providers: [],
	            template: "\n<footer role=\"contentinfo\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-8 col-xs-8\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>{{versionNumber}}</li>\n\t\t\t\t\t<li *ngIf=\"alternateMessage.length > 0\" id=\"copyrightNiwa\">{{alternateMessage}}</li>\n\t\t\t\t\t<li *ngIf=\"!alternateMessage.length > 0\" id=\"copyrightNiwa\">Copyright 2017 NIWA</li>\n\t\t\t\t\t<li *ngIf=\"termsUrl\"><a routerLink=\"{{termsUrl}}\">Terms and Conditions</a></li>\n                    <li><a [routerLink]=\"['glossary']\">Glossary</a></li>\n                    <li><a href=\"http://getfirewise.org.nz/Rural-FWSYS-Form/orderform.htm\">Register now</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 col-xs-4\">\n\t\t\t\t<!--<ul class=\"pull-right\">\n                    <li >right footer notes</li>\n                </ul>-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<style type=\"text/css\">\n\t\tbody { margin-bottom: 60px; }\n\t</style>\n</footer>\n"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NiwaInterfaceFooterComponent);
	    return NiwaInterfaceFooterComponent;
	}());
	exports.NiwaInterfaceFooterComponent = NiwaInterfaceFooterComponent;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=niwa-application-messages.umd.js.map