import { Routes } from "@angular/router";
import { UserLayout } from "../../layouts/user-layout/user-layout";
import { ProductRoutes } from "./products/products.routes";
import { authGuard } from "../../core/guards/auth-guard";


export const UserRoutes: Routes = [

    { path: '', component: UserLayout, children: ProductRoutes,canActivate:[authGuard] },
    
]
