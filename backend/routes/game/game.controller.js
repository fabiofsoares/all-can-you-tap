const GameModel = require('../../models/game.model')

const save = body => {
    return new Promise( (resolve, reject) => {
        // Search user by email
        console.log('controller game : ', body)
        GameModel.create(body).catch( mongoResponse => reject(mongoResponse))
        
    });
};

/*
Export
*/
module.exports = {
    save
}
//