/**
 * Created by fear on 28-11-16.
 */
/**
 * Created by fear on 28-11-16.
 */
import {Routes, RouterModule} from "@angular/router";
import {HabitacionComponent} from "./habitacion.component";


const habitacionRoutes: Routes = [
    {path: "habitacion", component: HabitacionComponent},
];

export const habitacionRouting = RouterModule.forChild(habitacionRoutes);