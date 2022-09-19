import { Component, OnInit, OnDestroy } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  value1: any = 70;

  constructor() { }

  ngOnInit(): void {
    }

  }

