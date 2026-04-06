import { HttpClient } from '@angular/common/http';

import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  baseURL = environment.BaseURL;

  private readonly http = inject(HttpClient);

  getProducts(): Observable<any>;
  getProducts(id: string): Observable<any>;

  getProducts(id?: string):Observable<any> {
    if(id != null){
      return this.http.get(`${this.baseURL}/products/${id}`);
    }else{
      return this.http.get(`${this.baseURL}/products`);
    }
  }

}
