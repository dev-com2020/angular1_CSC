import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./core/notFound.component";

const routes: Routes = [
    
    { path: "form/:mode/:id", component: FormComponent},
    { path: "form/:mode", component: FormComponent},
    { path: "nie", redirectTo: "/form/create", pathMatch: "prefix"},
    { path: "table/:category", component: TableComponent},
    { path: "table", component: TableComponent},
    { path: "", redirectTo: "/table", pathMatch: "full"},
    { path: "**", component: NotFoundComponent}

]

export const routing = RouterModule.forRoot(routes);