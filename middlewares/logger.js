function logger(req, res, next){
    console.log(req.method, req.url, req.statusCode);
   next()
};

module.exports = logger;