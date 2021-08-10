import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalConsistingComponent } from './portal-consisting.component';

const routes: Routes = [
  {
    
      path: '', component: PortalConsistingComponent
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalConsistingRoutingModule { }
