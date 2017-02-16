(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core"], factory);
	else if(typeof exports === 'object')
		exports["niwa-application-messages"] = factory(require("@angular/core"));
	else
		root["niwa-application-messages"] = factory(root["@angular/core"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
	var niwa_interface_footer_component_1 = __webpack_require__(3);
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
	var niwa_interface_footer_component_1 = __webpack_require__(3);
	var NiwaInterfaceModule = (function () {
	    function NiwaInterfaceModule() {
	    }
	    NiwaInterfaceModule = __decorate([
	        core_1.NgModule({
	            imports: [],
	            declarations: [niwa_interface_footer_component_1.NiwaInterfaceFooterComponent],
	            exports: [niwa_interface_footer_component_1.NiwaInterfaceFooterComponent],
	            entryComponents: [],
	            providers: []
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
	    NiwaInterfaceFooterComponent = __decorate([
	        core_1.Component({
	            selector: 'niwa-interface-footer',
	            providers: [],
	            template: "\n<footer role=\"contentinfo\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-8 col-xs-8\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>VERSION NUMBER</li>\n\t\t\t\t\t<li id=\"copyrightNiwa\">Copyright 2017 NIWA</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 col-xs-4\">\n\t\t\t\t<!--<ul class=\"pull-right\">\n                    <li >right footer notes</li>\n                </ul>-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<style type=\"text/css\">\n\t\tbody { margin-bottom: 60px; }\n\t</style>\n</footer>\n"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NiwaInterfaceFooterComponent);
	    return NiwaInterfaceFooterComponent;
	}());
	exports.NiwaInterfaceFooterComponent = NiwaInterfaceFooterComponent;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=niwa-application-messages.umd.js.map