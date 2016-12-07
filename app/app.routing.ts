/**
 * Created by fear on 20-11-16.
 */
import {Routes, RouterModule} from "@angular/router";
import {ContactComponent} from "./contact/contact.component";
import {ModuleWithProviders} from "@angular/core";
import {NotFoundComponent} from "./error-pages/not-found.component";
import {HomeComponent} from "./home/home.component";


/*
Las rutas se buscan en orden!!!!, ** es un comodín
*/
const appRoutes: Routes = [
    // redireccion
    /*
    {
        path: "",
        redirectTo: "/about",
        pathMatch: "full"
    },*/
    {path: "", component: HomeComponent},
    {path: "contact", component: ContactComponent},
    {path: "**", component: NotFoundComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);