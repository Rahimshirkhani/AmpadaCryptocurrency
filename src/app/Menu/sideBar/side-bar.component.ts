import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  styles: [`
      :host ::ng-deep .ui-slidemenu {
          width: 13.5em
      }
  `]
})
export class SideBarComponent implements OnInit {

  constructor() { }


  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label:'News',
        icon:'pi pi-fw pi-map',

      },
      {
        label:'NFT',
        icon:'pi pi-fw pi-tablet',

      },
      {
        label:'Stacking',
        icon:'pi pi-fw pi-clone',
      },
      {
        label:'Wallets',
        icon:'pi pi-fw pi-wallet',

      },
      {
        label:'Security',
        icon:'pi pi-fw pi-lock',

      },
      {
        separator:true
      },
      {
        label:'Settings',
        icon:'pi pi-fw pi-cog'
      }
    ];
  }

}
