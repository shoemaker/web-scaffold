var c = require('../config').config;  // App configuration

/*
 * GET home page.
 */
exports.index = function(req, res){
    var model = {
        debug : (req.query.debug) ? true : false,
        title : 'Hello World!',
        welcome : 'It worked! This page confirms that the site is ready.'
    };

    res.render('index', model);
    
};