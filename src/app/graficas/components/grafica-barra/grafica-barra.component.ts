import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    // scales: { xAxes: [{}], yAxes: [{}] },
    // plugins: {
    //   datalabels: {
    //     anchor: 'end',
    //     align: 'end',
    //   }
    // }
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() public barChartData: ChartDataSets[] = [];
  @Input() public barChartLabels: Label[] = [];
  @Input() public horizontal: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartType = 'horizontalBar';
    }
  }

}
