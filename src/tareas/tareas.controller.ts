import { Controller, Delete, Get, Post, Put, Patch, Body } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { CreateTareaDto } from './dto/create-tarea.dto';
import type { Tarea } from './tareas.service';

@Controller('/tareas')
export class TareasController {
    constructor(private readonly tareasService: TareasService) {}


    @Get()
    getAllTareas() {
        return this.tareasService.getTareas();
    }

    @Post()
    create(@Body() CreateTareaDto: CreateTareaDto): Tarea {
        return this.tareasService.createTareas(CreateTareaDto);
    }

    @Put()
    updateTareas(){
        return this.tareasService.updateTareas();
    }

    @Delete()
    deleteTareas(){
        return this.tareasService.deleteTareas();
    }

    @Patch()
    patchTareasStatus(){
        return this.tareasService.patchTareasStatus();
    }
}