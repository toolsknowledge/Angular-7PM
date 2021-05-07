import { Routes } from "@angular/router";
import { CartComponent } from "../screens/cart.component";
import { DetailComponent } from "../screens/details.component";
import { ProductsComponent } from "../screens/products.component";
import { registerComponent } from "../screens/register.component";
import { SigninComponent } from "../screens/signin.component";

export const appRoutes:Routes = [
        {path:"",component:ProductsComponent},
        {path:"detail/:id",component:DetailComponent},
        {path:"cart/:qty/:id",component:CartComponent},
        {path:"signin",component:SigninComponent},
        {path:"register",component:registerComponent}
];