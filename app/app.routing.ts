/**
 * Created by fear on 20-11-16.
 */

import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {ModuleWithProviders} from "@angular/core";
import {NotFoundComponent} from "./error-pages/not-found.component";
import {AboutUserComponent} from "./about/about-user.component";


/*
Las rutas se buscan en orden!!!!, ** es un comodín
*/
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'about/:username', component: AboutUserComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: NotFoundComponent}
];

export const appRouting: ModuleWithProviders= RouterModule.forRoot(appRoutes);