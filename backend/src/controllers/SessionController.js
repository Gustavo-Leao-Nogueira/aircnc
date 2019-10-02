const User = require('../models/User');
// index, show , store, update, destroy
module.exports = {
    async store(req, res)  { // é assincrona a função
        const { email } = req.body; // Pega o email do corpo da requisição
        let user =  await User.findOne({email: email}); // Procura o usuário e espera até terminar
        if(!user){    
            user = await User.create({email}); // Cria o usuário esperando até ser executado
        }
        return res.json(user);
    }
};
