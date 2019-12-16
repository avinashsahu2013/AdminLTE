import { HttpClient } from '@angular/common/http';
import { Application } from './../Model/application';


import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CARTService{
  public loading: boolean;
    // private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private httpClient: HttpClient) {    }

    getApplication() {
        // alert('getApplication');
        // return this.httpClient.get('https://localhost:44356/api/Post/GetCategories');
        //  return this.httpClient.get<any[]>('https://localhost:44356/api/Post/GetCategories')
        //  .pipe(
        //    tap(data => console.log("Anlagenstatus Daten:", data)),
        //    catchError(this.handleError('getData')),
        //  );
        return this.httpClient.get<any[]>('https://localhost:44356/api/Post/GetCategories')
          .pipe(
            map(response => (<GridDataResult>{
                data: response,
                total: parseInt('4', 10)
            })),
            tap(() => this.loading = false)
        );

        // return this.http.get('/api/SampleData/Applications');
    }

}
