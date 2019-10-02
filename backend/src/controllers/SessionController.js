//index  = retorna listagen de session
// show  = lista uma unica session
// store = criar uma session  
//update = alterar uma session
//destroy = udeletar uma session 
const User = require('../models/User');
module.exports = {
    async store(req, res)  {
        const { email } = req.body;
        
        let user = await User.findOne({ email })

        if (!user){
         user = await User.create({ email });
        }
        return res.json(user);

    }
};