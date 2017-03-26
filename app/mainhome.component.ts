import { Component } from '@angular/core';
@Component({
  selector: 'main-home',
  template: `
  <div class="container">
  <div class="pan_sidenav_overlay"  *ngIf="showToggle==true"></div>
  <md-sidenav-layout>
      <md-sidenav class="Leftsidenav" #start (open)="mybutton.focus()">
          <div class="Manage">
              <div>
                  <i class="material-icons ManageLeftIcon">&#xE051;</i>
                  <span class="ManageText">M A N A G E</span>
                  <i class="material-icons ManageRightIcon" #mybutton (click)="start.close() && toggleClose()">&#xE5C3;</i>
              </div>
          </div>
          <md2-accordion [multiple]="multiple">
              <md2-accordion-tab class="test" *ngFor="let tab of accordions" [header]="tab.title" [active]="tab.active" [disabled]="tab.disabled">
              <ul class="sidenavcontent">
              <li><i class="material-icons">&#xE5C9;</i>Items 700CS</li>
              <li><i class="material-icons"></i>Item BRD-1285</li>
              <li><i class="material-icons"></i>Items Tall Banner 701</li>
              <li><i class="material-icons"></i>Items Install Doc</li>
              </ul>
            </md2-accordion-tab>
          </md2-accordion>
          <!-- <ul class="TopLeftSidenav">
              <li><i class="material-icons">&#xE87B;</i>Assets</li>
              <li><i class="material-icons">&#xE8F9;</i>Items</li>
              <li><i class="material-icons">&#xE569;</i>Locations</li>
              <li><i class="material-icons">&#xE163;</i>Orders</li>
              <li><i class="material-icons">&#xE8B6;</i>Searches</li>
              <li><i class="material-icons">&#xE86E;</i>catalogs</li>
              <li><i class="material-icons">&#xE86C;</i>Suveys</li>
              <li><i class="material-icons">&#xE24D;</i>Documents</li>
              <li><i class="material-icons">&#xE02E;</i>Programs</li>
          </ul> -->
      </md-sidenav>
      <md-sidenav #end align="end">
        End Sidenav.
        <i (click)="end.close()">Close</i>
      </md-sidenav>
      <a class="dropdown-button" (click)="start.toggle() && toggleOpen()">
          <i class="material-icons pan_menuicon">&#xE5D2;</i>
      </a>
    </md-sidenav-layout>
 <my-headers> </my-headers>
 <my-home></my-home>
</div>
    `
})
export class MainHomeComponent {
showToggle:boolean=false;
constructor() {

 }
private accordions: Array<any> = [
    { title: {
                 'label' :'Assets',
                  'icon' : `&#xE87B;`
                  },
        content: 'Dynamic content 1' },
    { title: {
                 'label' :'Items',
                  'icon' : `&#xE8F9;`
                  },
        content: 'Dynamic content 2' },
    { title: {
                 'label' :'Locations',
                  'icon' : `&#xE569;`
                  },
        content: 'Dynamic content 1' },
    { title: {
                 'label' :'Orders',
                  'icon' : `&#xE163;`
                  },
        content: 'Dynamic content 2' },
    { title: {
                 'label' :'Searches',
                  'icon' : `&#xE8B6;`
                  },
        content: 'Dynamic content 1' },
    { title: {
                 'label' :'Catalogs',
                  'icon' : `&#xE865;`
                  },
        content: 'Dynamic content 2' },
    { title: {
                 'label' :'Surveys',
                  'icon' : `&#xE86C;`
                  },
        content: 'Dynamic content 1' },
    { title: {
                 'label' :'Documents',
                  'icon' : `&#xE24D;`
                  },
        content: 'Dynamic content 2' },
    { title: {
                 'label' :'Programs',
                  'icon' : `&#xE02E;`
                  },
        content: 'Dynamic content 1' }

];

toggleOpen(){
    this.showToggle=true;
    console.log("hdfgejkhd");
}
toggleClose(){
    this.showToggle=false;
    console.log("hdfgejfedsfsedfkhd");
}

}
