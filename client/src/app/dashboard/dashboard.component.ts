import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { DashboardService } from "./services/dashboard.service";
import { AuthService} from "../services/auth.service";
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private chart: AmChart;
  private user;
  private data;

  constructor(
   private AmCharts: AmChartsService,
   private dashBoardService: DashboardService,
   private authService: AuthService,
   private _flashMessagesService: FlashMessagesService,
   private router: Router
  ) { }

  ngOnInit() {


  }

  ngAfterViewInit(){
    this.authService.getProfile()
      .subscribe(profileData => {
        const data: any = profileData;
        if (data.success === false) {
          this._flashMessagesService.show('You are logged out', {cssClass: 'alert-info', timeout: 1000});
          this.router.navigate(['/login']);
        } else {
          this.user = data.user;
          this.dashBoardService.getChartData(data.user.username).subscribe( (data)=>{
            console.log(data);
            let chart = {
              "type": "serial",
              "theme": "light",
              "marginRight": 40,
              "marginLeft": 40,
              "autoMarginOffset": 20,
              "mouseWheelZoomEnabled":true,
              "dataDateFormat": "YYYY-MM-DD",
              "valueAxes": [{
                "id": "v1",
                "axisAlpha": 0,
                "position": "left",
                "ignoreAxisWidth":true
              }],
              "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
              },
              "graphs": [{
                "id": "g1",
                "balloon":{
                  "drop":true,
                  "adjustBorderColor":false,
                  "color":"#ffffff"
                },
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 5,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "title": "red line",
                "useLineColorForBulletBorder": true,
                "valueField": "value",
                "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
              }],
              "chartScrollbar": {
                "graph": "g1",
                "oppositeAxis":false,
                "offset":30,
                "scrollbarHeight": 80,
                "backgroundAlpha": 0,
                "selectedBackgroundAlpha": 0.1,
                "selectedBackgroundColor": "#888888",
                "graphFillAlpha": 0,
                "graphLineAlpha": 0.5,
                "selectedGraphFillAlpha": 0,
                "selectedGraphLineAlpha": 1,
                "autoGridCount":true,
                "color":"#AAAAAA"
              },
              "chartCursor": {
                "pan": true,
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "cursorAlpha":1,
                "cursorColor":"#258cbb",
                "limitToGraph":"g1",
                "valueLineAlpha":0.2,
                "valueZoomable":true
              },
              "categoryField": "date",
              "categoryAxis": {
                "parseDates": true,
                "dashLength": 1,
                "minorGridEnabled": true
              },
              "dataProvider": data.mes
            };
          })
        }
      });


  }


  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }


}
