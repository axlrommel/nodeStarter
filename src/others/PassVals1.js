require('es6-promise').polyfill();
require('isomorphic-fetch');

export const PassVals1 = async (req, resp, next) => {

    // if exception
    //resp.status(400).send(JSON.stringify({ "code": "ERROR_CODE_CHANGE_ME", 
    // "message": 'ERROR_MESSAGE_CHANGE_ME' }));
    //else next()
    next()
}