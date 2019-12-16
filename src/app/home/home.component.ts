
// import { CARTService } from './../Services/cart.service';
// import { Component, AfterViewInit, OnInit, AfterViewChecked } from '@angular/core';

// import * as Prism from 'prismjs';

// import { Http } from '@angular/http';
// // import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
// import { process, State } from '@progress/kendo-data-query';

// import {
//     GridComponent,
//     GridDataResult,
//     DataStateChangeEvent, PageChangeEvent
// } from '@progress/kendo-angular-grid';

// import { Observable } from 'rxjs';

// import { TestBed } from '@angular/core/testing';

import { Application } from '../Model/application';

 import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { products } from './../Model/products';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import { CategoriesService } from '../Services/northwind.service';
import { State } from '@progress/kendo-data-query';
import { CARTService } from '../Services/cart.service';

import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// export class HomeComponent implements AfterViewInit, OnInit, AfterViewChecked  {
  export class HomeComponent {
    public columns: any[] = [{field: "ProductID"}, {field: "ProductName"}, {field: "QuantityPerUnit"}];
    public bindingType: String = 'array';
    public view: Observable<GridDataResult>;
    public gridData: any = products;
    public gridDataResult: GridDataResult = {data: products, total: products.length};

    constructor(private http: HttpClient, private service: CategoriesService, private cartService: CARTService) {
      this.view = service;
    }

    getCustomers() {
      const state: State = {skip: 0, take: 100};
      this.columns = [{field: "id"}, {field: "name"}];
      this.cartService.getApplication().subscribe(data => {
        console.log(data);
      });
    }

    changeBindingType(e) {
      switch (this.bindingType) {
        case 'array' : {
          this.columns = [{field: "ProductID"}, {field: "ProductName"}, {field: "QuantityPerUnit"}];
          this.gridData = products;
          break;
        }
        case 'gridDataResult' : {
          this.columns = [{field: "ProductID"}, {field: "ProductName"}, {field: "QuantityPerUnit"}];
          this.gridData = this.gridDataResult;
          break;
        }
        case 'async' : {
          const state: State = {skip: 0, take: 100};
          this.columns = [{field: "CategoryID"}, {field: "CategoryName"}, {field: "Description"}];
          this.service.query(state);
          this.view.subscribe(res => {
            this.gridData = res;
            console.log(this.gridData);
            });
          break;
        }
        case 'cart' : {
          const state: State = {skip: 0, take: 100};
          this.columns = [{field: "id"}, {field: "name"}];
          this.cartService.getApplication().subscribe(data => {
            // console.log(data);
            this.gridData = data;

            console.log(this.gridData);
          });
          break;
        }
      }
    }
}
