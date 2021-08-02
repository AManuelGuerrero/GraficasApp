import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100],
    // [50, 150, 120],
    // [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    {
      backgroundColor:[
        '#64ADF9',
        '#58BBDB',
        '#6DF2F0',
        '#58DBB4',
        '#64F9A2'

      ]
    }
  ]

  constructor(
    private graficaService: GraficasService
  ) { }

  ngOnInit(): void {
  //   this.graficaService.getUsuariosRedesSociales().subscribe((data)=>{
  //   const labels = Object.keys(data);
  //   const values = Object.values(data);
  //   this.doughnutChartLabels = labels;
  //   this.doughnutChartData.push(values);
    
  // });
  this.graficaService.getUsuariosRedesSocialesDonaData().subscribe(({labels,values})=>{
    this.doughnutChartLabels = labels;
    this.doughnutChartData.push(values);

  })
}

}
