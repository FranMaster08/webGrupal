function authMiddleware (req, res, next){
    if (!req.session.userLogged){
        return res.redirect('/users/ingreso');
    }
    next();
}

module.exports = authMiddleware;