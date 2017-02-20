"use strict";
var core_1 = require('@angular/core');
var NiwaInterfaceFooterComponent = (function () {
    function NiwaInterfaceFooterComponent() {
    }
    NiwaInterfaceFooterComponent.prototype.ngOnInit = function () {
    };
    NiwaInterfaceFooterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'niwa-interface-footer',
                    providers: [],
                    template: "\n<footer role=\"contentinfo\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-8 col-xs-8\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>{{versionNumber}}</li>\n\t\t\t\t\t<li id=\"copyrightNiwa\">Copyright 2017 NIWA</li>\n\t\t\t\t\t<li *ngIf=\"termsUrl\"><a routerLink=\"{{termsUrl}}\">Terms and Conditions</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 col-xs-4\">\n\t\t\t\t<!--<ul class=\"pull-right\">\n                    <li >right footer notes</li>\n                </ul>-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<style type=\"text/css\">\n\t\tbody { margin-bottom: 60px; }\n\t</style>\n</footer>\n"
                },] },
    ];
    /** @nocollapse */
    NiwaInterfaceFooterComponent.ctorParameters = [];
    NiwaInterfaceFooterComponent.propDecorators = {
        'versionNumber': [{ type: core_1.Input },],
        'termsUrl': [{ type: core_1.Input },],
    };
    return NiwaInterfaceFooterComponent;
}());
exports.NiwaInterfaceFooterComponent = NiwaInterfaceFooterComponent;
//# sourceMappingURL=niwa-interface-footer.component.js.map