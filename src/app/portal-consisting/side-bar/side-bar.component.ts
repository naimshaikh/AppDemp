import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortalConsistingService } from '../portal-consisting.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {


  @Input() public set statewise(value: any[]) {
    if (value) {
      this._statewise = value;
      this.statewiseList = value.map((res) => {
        return ({ ...res, isSelected: true })
      });
      this.getCheckedItemList();

    }
  }

  public get statewise(): any[] {
    return this._statewise;
  }

  @Output() public selectedState: EventEmitter<any>;

  public masterSelected: boolean;
  public statewiseList: any[];
  public checkedList: any;

  private _statewise: any[];

  constructor() {
    this.masterSelected = true;
    this.selectedState = new EventEmitter<any>();
  }

  ngOnInit(): void {

  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll() {
    for (var i = 0; i < this.statewiseList.length; i++) {
      this.statewiseList[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  // Check All Checkbox Checked
  isAllSelected() {
    this.masterSelected = this.statewiseList.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList();
  }

  // Get List of Checked Items
  getCheckedItemList() {
    this.checkedList = [];
    for (var i = 0; i < this.statewiseList.length; i++) {
      if (this.statewiseList[i].isSelected)
        this.checkedList.push(this.statewiseList[i]);
    }
    this.selectedState.emit(this.checkedList);
    this.checkedList = JSON.stringify(this.checkedList);
  }

}

