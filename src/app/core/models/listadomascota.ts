import { Raza } from './raza';
import { Persona } from './persona';
import { Especie } from './especie';

export interface Listadomascota {
    idMascota: string;
    nombre : string;
    genero : string;
    edad : number;
    Especie : Especie;
    Raza : Raza;
    Persona : Persona;
}