import { Routes } from "@angular/router";
import { authGuard } from "../../../core/guards/auth-guard";

export const ProductRoutes: Routes = [
    { path: 'products', loadComponent: () => import('./pages/products/products').then((c) => c.Products), title: 'Products'  },
    { path: 'product-details/:id', loadComponent: () => import('./pages/product-details/product-details').then((c) => c.ProductDetails), title: 'Product Details'},
    {
        path: '**',
        loadComponent: () => import('../../../shared/components/not-found/not-found').then((n) => n.NotFound)
    }
]
