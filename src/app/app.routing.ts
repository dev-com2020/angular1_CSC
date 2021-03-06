import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./core/notFound.component";
import { ProductCountComponent } from "./core/productCount.component";
import { CategoryCountComponent } from "./core/categoryCount.component";
import { ModelResolver } from "./model/model.resolver";
import { TermsGuard } from "./terms.guards";



const childRoutes: Routes = [
    {
        path: "",
        canActivateChild: [TermsGuard],
        children: [    
    { path: "products", component: ProductCountComponent},
    { path: "categories", component: CategoryCountComponent},
    { path: "**", component: ProductCountComponent}],
    resolve: {model : ModelResolver}
        }
    ];


const routes: Routes = [
    
    { path: "form/:mode/:id", component: FormComponent, resolve: {model: ModelResolver}},
    { path: "form/:mode", component: FormComponent, resolve: {model: ModelResolver}, canActivate: [TermsGuard]},
    { path: "table/:category", component: TableComponent, children: childRoutes},
    { path: "table",component: TableComponent, children: childRoutes},
    // { path: "nie", redirectTo: "/form/create", pathMatch: "prefix"}, 
    { path: "", redirectTo: "/table", pathMatch: "full"},
    { path: "**", component: NotFoundComponent}

]

export const routing = RouterModule.forRoot(routes);