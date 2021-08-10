import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 public myDateValue: Date;
 public  minDate;
 public maxDate; 
 
 constructor() {
    this.myDateValue = new Date();
   }

  ngOnInit(): void {
  }
  onDateChange(newDate: Date) {
    console.log(newDate);
  }

}
