import { Injectable } from "@nestjs/common";

@Injectable()
export class TareasService {
    getTareas() {
        return ['Tarea 1', 'Tarea 2', 'Tarea 3', 'Tarea 4'];
        }
    
    createTareas() {
        return 'Creando tareas'
    }

    updateTareas(){
        return 'Actualizando tareas'
    }

    deleteTareas(){
        return 'ELiminando Tareas'
    }

    patchTareasStatus(){
        return 'Actualizando parcialmente tareas'
    }
}