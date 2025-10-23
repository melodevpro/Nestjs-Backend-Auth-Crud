import { Controller, Get } from '@nestjs/common';
import { TareasService } from './tareas.service';

@Controller({})
export class TareasController {
    tareasService: TareasService;
    constructor(tareasService: TareasService) {
        this.tareasService = tareasService;
    }

    @Get('/')
    index() {
        // return 'Pagina inicial';
        return 'Pagina inicial';
    }

    @Get('/tareas')
    getAllTareas() {
        return this.tareasService.getTareas();
    }




}