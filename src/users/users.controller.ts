import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

// ¡IMPORTANTE! El prefijo del controlador es 'users'.
// Esto hace que todas las rutas dentro sean /users/...
@Controller()
export class UsersController {
    
    // Inyección de dependencia del servicio
    constructor(private readonly usersService: UsersService) {}

    /**
     * Maneja la petición GET a la ruta base /users
     * @returns {Array<Object>} Los datos de usuario.
     */
    @Get('/users') // Esto mapea a la ruta: GET /users
    findAll() {
        // Llama al método del servicio para obtener los datos
        return this.usersService.getUsers();
    }
}