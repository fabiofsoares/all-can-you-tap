/*
Imports
*/
    // Node
    const express = require('express');
    const gameRouter = express.Router();

    // Inner
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/response.service');
    const { checkFields } = require('../../services/request.service');
    const { save } = require('./game.controller')
    
    
//

class GameRouterClass { 

    routes() {
       
        gameRouter.post( '/', (req, res) => {
            console.log('route game')
            save(req.body)
            .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
            .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
        });
    }

     // Start router
     init(){
        // Get route fonctions
        this.routes();

        // Sendback router
        return gameRouter;
    };

}

module.exports =  GameRouterClass;