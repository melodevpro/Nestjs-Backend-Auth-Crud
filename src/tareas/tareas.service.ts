import { Injectable } from "@nestjs/common";
import { CreateTareaDto } from "./dto/create-tarea.dto";
export interface Tarea {
    id: number;
    titulo: string;
    descripcion: string;
    completada: boolean;
}

@Injectable()
export class TareasService {
    // Usa la interfaz para tipar tu array
    private tareas: Tarea[] = [];

    createTareas(CreateTareaDto: CreateTareaDto): Tarea {
        const nuevaTarea: Tarea = {
            id: this.tareas.length + 1,
            ...CreateTareaDto,
            completada: false,
        };
        this.tareas.push(nuevaTarea);
        return nuevaTarea;
    }

    getTareas() {
        return this.tareas;
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