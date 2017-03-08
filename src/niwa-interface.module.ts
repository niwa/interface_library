import { NgModule } from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import { BrowserModule} from '@angular/platform-browser';
import { Router } from '@angular/router';

import {NiwaInterfaceFooterComponent} from './niwa-interface-footer.component'
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule],
  declarations: [NiwaInterfaceFooterComponent],
  exports:  [NiwaInterfaceFooterComponent],
  entryComponents: [],
  providers: [{
      provide: APP_BASE_HREF,
      useValue: '/'
  }],
    bootstrap: [NiwaInterfaceFooterComponent]

})
export class NiwaInterfaceModule {}
