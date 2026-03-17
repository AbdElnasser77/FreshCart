import { Component } from '@angular/core';
import { productsData } from '../../../../../../../productsData'
@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  products:any = productsData;

}
