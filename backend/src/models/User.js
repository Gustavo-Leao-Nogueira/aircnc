const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String
}); // Cria o esquema modelo do usuário

module.exports = mongoose.model('User', UserSchema);