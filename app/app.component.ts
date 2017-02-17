import {Component, ViewEncapsulation} from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<niwa-interface-footer versionNumber="1.2.3" termsUrl=""></niwa-interface-footer>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {


    constructor() {
    }

    ngOnInit() {
    }

}
