const axios = require('axios');
let config = require('../config.json');


const Players = async () => {
    try {
        const resp = await axios.get('http://'+config.server_ip+'/players.json');
        
        
            let total = resp;
            return total;
        

    } catch (err) {
        console.error(err);

    }
};

    module.exports.Players = Players;

