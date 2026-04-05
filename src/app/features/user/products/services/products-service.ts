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

  getProducts(): Observable<any> {
    return this.http.get(`${this.baseURL}/products`);
  }
  getProductDetails() {

  }

}
