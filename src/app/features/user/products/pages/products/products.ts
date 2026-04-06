import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { Product } from '../../models/product';
import { LucidePlus, LucideStar } from '@lucide/angular';
import { CurrencyPipe } from "@angular/common";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-products',
  imports: [LucidePlus, CurrencyPipe, LucideStar,RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  products = signal<Product[]>([]);
  switchImages: boolean = true;
  private readonly productsService = inject(ProductsService);



  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (res) => {
        this.products.set(res.data);
      }
    })
  }
  onImageHover() {
    this.switchImages = true;
  }
  onImageLeave(){
    this.switchImages = false;
  }
}
