import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { LoadingSpinner } from "../../../../../shared/components/loading-spinner/loading-spinner";
import { LucidePlus, LucideStar, LucideDot } from "@lucide/angular";

@Component({
  selector: 'app-product-details',
  imports: [LoadingSpinner, CurrencyPipe, LucidePlus, LucideStar, LucideDot],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit {
  private readonly productService = inject(ProductsService);
  private readonly activatedRoute = inject(ActivatedRoute);
  id:string = '';
  product = signal<Product | null>(null);
  quantity: number = 1;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];

      this.productService.getProducts(this.id).subscribe({
        next: (res) => {
          this.product.set(res.data);
          console.log(this.product());
        },
      });
    });
  }


  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
