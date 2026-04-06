import { Routes } from "@angular/router";

export const ProductRoutes:Routes  = [
    {path:'products',loadComponent:()=>import('./pages/products/products').then((c) => c.Products),title:'Products'},
    {path:'product-details/:id',loadComponent:()=>import('./pages/product-details/product-details').then((c) => c.ProductDetails),title:'Product Details'},
]
