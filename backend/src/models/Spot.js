const mongoose = require('mongoose');

const Spot = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}); // Cria o esquema modelo do usuário

module.exports = mongoose.model('Spot', Spot);