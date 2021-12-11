function authMiddleware (req, res, next){
    if (!req.session.userLogged){
        return res.redirect('aca te tiene que mandar al login porque no estás logueado');
    }
    next();
}

module.exports = authMiddleware;