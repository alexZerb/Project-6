function fourOneFourHandler( req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
};

function globalHandler(err, req, res, next){
    if(err.status === 404){
        res.status(404);
        res.render('page-not-found', { err });
    } else {
        err.message = err.message || "Something went wrong!";
        res.status(err.status || 500);
        res.render('error', { err });
    } 
    console.log(err.status, err.message);
};

module.exports = {fourOneFourHandler, globalHandler};