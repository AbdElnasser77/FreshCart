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
        {path:'home', component:Home,title:'Home'},
        ...ProductRoutes
    ]},
    
]
