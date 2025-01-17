import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'niwa-interface-footer',
    providers: [],
    template: `
<footer role="contentinfo">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-8 col-xs-8">
				<ul>
					<li>{{versionNumber}}</li>
					<li *ngIf="alternateMessage.length > 0" id="copyrightNiwa">{{alternateMessage}}</li>
					<li *ngIf="!alternateMessage.length > 0" id="copyrightNiwa">Copyright 2017 NIWA</li>
					<li *ngIf="termsUrl"><a routerLink="{{termsUrl}}">Terms and Conditions</a></li>
                    <li><a [routerLink]="['glossary']">Glossary</a></li>
                    <li><a href="http://getfirewise.org.nz/Rural-FWSYS-Form/orderform.htm">Register now</a></li>
				</ul>
			</div>
			<div class="col-md-4 col-xs-4">
				<!--<ul class="pull-right">
                    <li >right footer notes</li>
                </ul>-->
			</div>
		</div>
	</div>
	<style type="text/css">
		body { margin-bottom: 60px; }
	</style>
</footer>
`
})
export class NiwaInterfaceFooterComponent {
  @Input() alternateMessage: string;
  @Input() versionNumber: string;
  @Input() termsUrl: string;

    constructor() {
    }

    ngOnInit() {


    }




}
