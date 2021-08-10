import { Component, OnInit } from '@angular/core';
import { PortalConsistingService } from './portal-consisting.service';

@Component({
  selector: 'app-portal-consisting',
  templateUrl: './portal-consisting.component.html',
  styleUrls: ['./portal-consisting.component.scss']
})
export class PortalConsistingComponent implements OnInit {

  public stateWise: any[];

  public tested: any[];

  public selectedStateArray: any[];

  constructor(
    private portalService: PortalConsistingService
  ) { }

  ngOnInit(): void {
    this.portalService.getData().subscribe(data => {
      this.stateWise = data.statewise;
      this.tested = data.tested;
    })
  }

  public selectedState(data) {
    this.selectedStateArray = data;
  }
}
