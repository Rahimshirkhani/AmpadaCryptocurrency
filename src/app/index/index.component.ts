import {Component, OnInit, OnDestroy} from '@angular/core';
import {AppConfig} from "../domain/app-config";
import {AppConfigService} from "../service/app-config-service";

import { LazyLoadEvent } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import {Coin} from "../models/coin";
import {CoinsService} from "../service/coins.service";


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

  public coins?: Coin[];
  virtualCoins: Coin[];
  cols: any[];

  constructor(private coinService: CoinsService) {
    this.coins = [];
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


    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'symbol', header: 'symbol' },
      { field: 'name', header: 'name' },
      { field: 'nameId', header: 'nameId' },
      { field: 'price_usd', header: 'price_usd' },
      { field: 'price_btc', header: 'price_btc' },
      { field: 'market_cap_usd', header: 'market_cap_usd' },
    ];


debugger;
      this.coinService.getAll()
        .subscribe(response => {
          this.coins = response.data;
        });
    debugger;
    this.virtualCoins = Array.from({ length: 10000 });
  }

  loadCoinsLazy(event: LazyLoadEvent) {
    //simulate remote connection with a timeout
    setTimeout(() => {
      //load data of required page
      let loadedCoins = this.coins!.slice(event.first!, event.first! + event.rows!);

      //populate page of virtual coins
     // Array.prototype.splice.apply(this.virtualCoins!, [
      //  ...[event.first, event.rows],
    //    ...loadedCoins,
     // ]);

      //trigger change detection
      this.virtualCoins = [...this.virtualCoins];
    }, Math.random() * 1000 + 250);
  }

}

