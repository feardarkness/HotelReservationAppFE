/**
 * Created by fear on 28-11-16.
 */


import {Component, OnInit} from "@angular/core";
import {Habitacion} from "../shared/models/habitacion";

@Component({
    templateUrl: "./app/habitacion/habitacion.component.html",
    styleUrls: ["./app/habitacion/habitacion.component.css"],
})

export class HabitacionComponent implements OnInit{
    habitacion: Habitacion = new Habitacion();
    nombre: String;

    constructor (

    ) {}

    ngOnInit() {
        this.habitacion.nombre = "Ariel";
    }

    get diagnostic() {
        return JSON.stringify(this.habitacion, null, 2);
    }

}