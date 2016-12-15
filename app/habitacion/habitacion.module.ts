/**
 * Created by fear on 28-11-16.
 */
import {NgModule} from "@angular/core";
import {habitacionRouting} from "./habitacion.routing";
import {CommonModule} from "@angular/common";
import {HabitacionComponent} from "./habitacion.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        habitacionRouting,
    ],
    declarations: [
        HabitacionComponent,
    ],
    providers: [
    ],
})

export class HabitacionModule {

    constructor (

    ) {}


}