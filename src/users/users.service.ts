import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    
    // Simulación de una base de datos con datos de usuario
    private users = [
        {
            id: 1,
            name: 'John Doe',
            phone: '1234567890',
            email: 'john@example.com'
        },
        {
            id: 2,
            name: 'Jane Smith',
            phone: '0987654321',
            email: 'jane@example.com'
        }
    ];

    /**
     * Retorna todos los usuarios.
     * @returns {Array<Object>} Lista de usuarios.
     */
    getUsers() {
        return this.users;
    }
}

