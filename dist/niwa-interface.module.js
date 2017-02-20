"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var niwa_interface_footer_component_1 = require('./niwa-interface-footer.component');
var NiwaInterfaceModule = (function () {
    function NiwaInterfaceModule() {
    }
    NiwaInterfaceModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, router_1.RouterModule],
                    declarations: [niwa_interface_footer_component_1.NiwaInterfaceFooterComponent],
                    exports: [niwa_interface_footer_component_1.NiwaInterfaceFooterComponent],
                    entryComponents: [],
                    providers: []
                },] },
    ];
    /** @nocollapse */
    NiwaInterfaceModule.ctorParameters = [];
    return NiwaInterfaceModule;
}());
exports.NiwaInterfaceModule = NiwaInterfaceModule;
//# sourceMappingURL=niwa-interface.module.js.map