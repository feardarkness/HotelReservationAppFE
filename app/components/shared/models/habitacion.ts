/**
 * Created by fear on 15-11-16.
 */
import {Caracteristicas} from './caracteristicas';

export class Habitacion{
    id: number;
    nombre: string;
    // el precio debe ser entero, si se necesita decimales, sera un entero con 2 dígitos extras para evitar error de punto flotante
    precioReferencial: number;
    size: number;
    ubicacion: number;
    maximoPersonas: number;
    tipo: string;
    descripcion: string;
    observacion: string;
    características: Caracteristicas[];
}

