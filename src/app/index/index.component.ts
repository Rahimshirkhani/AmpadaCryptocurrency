import {Component, OnInit, OnDestroy} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Subscription} from 'rxjs';
import {AppConfig} from "../domain/app-config";
import {AppConfigService} from "../service/app-config-service";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  value1: any = 70;

  chartdata: any;
  chartOptions: any;

  basicData: any;
  basicOptions: any;

  constructor() {
  }

  ngOnInit() {

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    };
    this.chartdata = {
      labels: ['BTC', 'ADA', 'SHIB', 'CRO', 'ETH', 'OTHER'],
      datasets: [
        {
          data: [250, 300, 350, 200, 250, 50],
          backgroundColor: [
            "#BAB6F3",
            "#D8D5F9",
            "#A9ACBB",
            "#453DE0",
            "#7C76EB",
            "#4C506B"
          ],
          hoverBackgroundColor: [
            "#BAB6F3",
            "#D8D5F9",
            "#A9ACBB",
            "#453DE0",
            "#7C76EB",
            "#4C506B"
          ]
        }
      ]
    };
    this.basicOptions = {
      responsive: true,
    };
    this.basicData = {
      labels: ['Today', 'This Week', 'This Month', 'This Year', '...'],
      datasets: [
        {
          label: '',
          data: [10, 20, 30, 20, 40, 10],
          fill: false,
          borderColor: '#453DE0 ',
          tension: .4
        }
      ]
    };



  }

}

