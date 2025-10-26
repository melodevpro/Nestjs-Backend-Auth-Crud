import { Controller, Delete, Get, Post, Put, Patch } from '@nestjs/common';
import { TareasService } from './tareas.service';

@Controller('/tareas')
export class TareasController {
    constructor(private tareasService: TareasService) {}

    @Get('/')
    index() {
        // return 'Pagina inicial';
        return 'Pagina inicial';
    }

    @Get()
    getAllTareas() {
        return this.tareasService.getTareas();
    }

    @Post()
    createTareas(){
        return this.tareasService.createTareas();
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