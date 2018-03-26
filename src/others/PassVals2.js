require('es6-promise').polyfill();
require('isomorphic-fetch');

export const PassVals1 = async (req, resp, next) => {
    req.body = Object.keys(req.query).length > 0 ? req.query : {url: req.originalUrl}
    next()
}