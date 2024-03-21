const bcrypt = require('bcrypt')
const firebase = ('./../config/firebase')
const IUser = require('./../interfaces/user.interface')

class User extends IUser {
    constructor (email, password) {
        super()
        this.email = email
        this.password = password
    }
    
    static async createUser (email, password) {
        // Codigo para crear nuevo usuario
    }
    
    static async findByEmail ( email) {
        // Codigo para buscoar por correo
    }

    async verifyPassword (password) {
        // verificacion de password
    }
}

module.exports = User