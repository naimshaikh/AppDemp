import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalConsistingRoutingModule } from './portal-consisting-routing.module';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentListComponent } from './content-list/content-list.component';
import { PortalConsistingComponent } from './portal-consisting.component';
import { FormsModule } from '@angular/forms';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [HeaderComponent, SideBarComponent, ContentListComponent, PortalConsistingComponent],
  imports: [
    CommonModule,
    PortalConsistingRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot() 
  ]
})
export class PortalConsistingModule { }
