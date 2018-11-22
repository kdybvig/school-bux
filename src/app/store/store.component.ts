import { Component, OnInit } from '@angular/core';
import { Items } from '../mock-items';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  items = Items;

  constructor() { }

  ngOnInit() {
  }

}
