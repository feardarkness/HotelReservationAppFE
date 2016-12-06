/**
 * Created by fear on 28-11-16.
 */
import {Routes, RouterModule} from "@angular/router";
import {AboutComponent} from "./about.component";
import {AboutUserComponent} from "./about-user.component";

const aboutRoutes: Routes = [
    {path: "about", component: AboutComponent},
    {path: "about/:username", component: AboutUserComponent},
];

export const aboutRouting = RouterModule.forChild(aboutRoutes);