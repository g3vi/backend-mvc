class IUser {
    static async createUser (email, password) {}
    static async findByEmail ( email) {}
    async verifyPassword (password) {}
}

modules.exports = IUser