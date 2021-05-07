import { Routes } from "@angular/router";
import { authGuards } from "./auth.guards";
import { ChildoneComponent } from "./childone.component";
import { ChildthreeComponent } from "./childthree.component";
import { ChildtwoComponent } from "./childtwo.component";
import { PageoneComponent } from "./pageone.component";
import { PagethreeComponent } from "./pagethree.component";
import { PagetwoComponent } from "./pagetwo.component";

export const appRoutes:Routes = [
    {path:"page_one/:p_id/:p_name/:p_cost",component:PageoneComponent,children:[{path:"child_one",component:ChildoneComponent}],canActivate:[authGuards]},
    
    {path:"page_two",component:PagetwoComponent,children:[{path:"child_two/:p_id/:p_name/:p_cost",component:ChildtwoComponent}],canDeactivate:[authGuards]},
    
    {path:"page_three/:p_id/:p_name/:p_cost",component:PagethreeComponent,children:[{path:"child_three",component:ChildthreeComponent}],canActivateChild:[authGuards]}
];