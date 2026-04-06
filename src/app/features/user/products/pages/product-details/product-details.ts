import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
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
  id = '';
  product = signal<Product|null>(null);


  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];

      this.productService.getProducts(this.id).subscribe({
        next: (res) => {
          this.product.set(res.data);
        },
      });
    });
  }
}
