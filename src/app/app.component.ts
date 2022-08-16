import { Component } from "@angular/core";
// @ts-ignore
import * as Highcharts from 'highcharts'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  ngOnInit(){
    Highcharts.chart({
      chart:{
        renderTo:'container'
      },
      series: [{
        type:'line',
        data: [2, 5, 1, 6, 7, 8, 5]
      }],
    });
  }
}
