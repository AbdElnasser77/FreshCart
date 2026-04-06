import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit {
  private readonly productService = inject(ProductsService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly id = this.activatedRoute.snapshot.params['id'];
  private product: Product | null = null;

  ngOnInit() {
    this.productService.getProducts(this.id).subscribe({
      next: (res) => {
        this.product = res.data;
        console.log(this.product);
      },
    });
  }
}
