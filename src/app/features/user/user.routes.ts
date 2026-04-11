import { Routes } from "@angular/router";
import { UserLayout } from "../../layouts/user-layout/user-layout";
import { ProductRoutes } from "./products/products.routes";
import { authGuard } from "../../core/guards/auth-guard";
import { Home } from "./home/home";


export const UserRoutes: Routes = [
    { 
        path: '',
        component: UserLayout,
        children:[
        {path:'', redirectTo:'home',pathMatch:'full'},
        {path:'home', loadComponent:()=>import('../user/home/home').then((c)=>c.Home),title:'Home'},
        {path:'cart', loadComponent:()=>import('../user/cart/cart').then((c)=>c.Cart),title:'Cart'},
        {path:'wishlist', loadComponent:()=>import('../user/wishlist/wishlist').then((c)=>c.Wishlist),title:'Home'},
        {path:'categories', loadComponent:()=>import('../user/categories/categories').then((c)=>c.Categories),title:'Categories'},
        {path:'brands', loadComponent:()=>import('../user/brands/brands').then((c)=>c.Brands),title:'Categories'},
        ...ProductRoutes
    ]},
    
]
