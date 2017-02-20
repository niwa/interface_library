import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';


import {NiwaInterfaceFooterComponent} from './niwa-interface-footer.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NiwaInterfaceFooterComponent],
  exports:  [NiwaInterfaceFooterComponent],
  entryComponents: [],
  providers: []
})
export class NiwaInterfaceModule {}
