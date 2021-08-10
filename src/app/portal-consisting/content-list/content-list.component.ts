import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
declare let google: any;

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  @Input() public set statewise(value: any[]) {
    if (value) {
      this._statewise = value;
      this.statewiseList = value.map((res) => {
        return ({ ...res, isSelected: true })
      });
    }
  }

  public get statewise(): any[] {
    return this._statewise;
  }

  @Input() public set tested(value: any[]) {
    if (value) {
      value.forEach((item) => {
        let asd = +item.totalindividualstested;
        this.totalTested += asd;
      });
    }
  }
  public get tested(): any[] {
    return this._tested;
  }

  @Input() public set selectedStateArray(value: any[]) {
    if (value) {
      this._selectedStateArray = value;
      this.preparData(value);
      this.selectedStates = value.length;
      
      this.totalRecoverd = 0;
      this.totalConfirm = 0;
      for (let i = 0; i < value.length; i++) {
        var rec = +value[i].recovered;
        this.totalRecoverd += rec;
      }

      for (let i = 0; i < value.length; i++) {
        var rec = +value[i].confirmed;
        this.totalConfirm += rec;
      }
    }
  }

  public get selectedStateArray(): any[] {
    return this._selectedStateArray;
  }

  public statewiseList: any[];

  public testedList: any[];

  public selectedStates = 0;

  public totalRecoverd = 0;
  public totalConfirm = 0;
  public totalTested = 0;
  private _statewise: any[];
  private _tested: any[];
  private _selectedStateArray: any[];

  constructor() { }

  ngOnInit(): void {
    this.drawChartDistricWise();
  }

  private preparData(value) {
    const asd = value.map((item) => {
      return [item['state'], +item['confirmed'], +item['recovered'], '']
    });
    const asddd = ['state', 'confirmed', 'recovered', { role: 'annotation' }];
    let stateWiseData = [asddd, ...asd]
    this.drawChartStateWiseChart(stateWiseData);
  }

  private drawChartStateWiseChart(stateWiseData) {
    google.charts.load('current', { packages: ['bar'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable(stateWiseData);

      const options = {
        chart: {
          title: 'STATE WISE',
        },
        titleTextStyle: {
          fontSize: 10, // 12, 18 whatever you want (don't specify px)
          bold: true,    // true or false          
        },
        width: 600,
        height: 600,
        legend: { position: 'buttom', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true,
        bars: 'horizontal',
        vAxis: { format: 'decimal' },
        hAxis: { format: '' },
        series: {
          0: { color: '#e53935' },
          1: { color: '#43a047' }
        }
      };

      const chart = new google.charts.Bar(
        document.querySelector('#pieChart')
      );
      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  }

  private drawChartDistricWise() {
    google.charts.load('current', { packages: ['bar'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Gujarat', 'Recoverd', 'Confirmed', { role: 'annotation' }],
        ['Surat', 10, 24, ''],
        ['Navsari', 16, 22, ''],
        ['Valsad', 28, 19, '']
      ]);

      const options = {
        chart: {
          title: 'District Wise',
        },
        titleTextStyle: {
          fontSize: 10, // 12, 18 whatever you want (don't specify px)
          bold: true,    // true or false          
        },
        width: 600,
        height: 150,
        legend: { position: '', maxLines: 3 },
        bar: { groupWidth: '75%' },
        bars: 'horizontal',
        vAxis: { format: 'decimal' },
        hAxis: { format: '' },
        series: {
          0: { color: '#76A7FA' },
          1: { color: '#4df7db' }
        }
      };

      const chart = new google.charts.Bar(
        document.querySelector('#barChat')
      );
      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  }

}
