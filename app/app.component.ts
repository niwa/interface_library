import {Component, ViewEncapsulation, Optional} from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<niwa-interface-footer versionNumber="1.2.3" termsUrl="" alternateMessage="" [optionals]="optionals"></niwa-interface-footer>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    public optionals: [Optional];
    constructor() {
    }

    ngOnInit() {

        // this.optionals = [
        //
        //     {
        //         display: 'home',
        //         url: '/',
        //         type: 'int_link'
        //
        //     }
        // ]
    }

}
