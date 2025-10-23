import { Injectable } from "@nestjs/common";

@Injectable()
export class TareasService {
    getTareas() {
        return ['Tarea 1', 'Tarea 2', 'Tarea 3', 'Tarea 4'];
        }
}