import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

export type Product = {
  name: string;
  price: number;
  description: string
}

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.css']
})
export class BasicListComponent implements OnInit {

  loading: boolean = false;
  listElements: Product[] = [
    {
      name: "leche",
      price: 123,
      description: 'descr'
    },
    {
      name: "huevos",
      price: 123,
      description: 'descr'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeLoading(){
    this.loading = !this.loading;
  }

}
