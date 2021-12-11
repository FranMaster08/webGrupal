// =========== Modelo =================================
const User = require('../models/User.model.js');

// =========== Controlador ============================
const userController = {

    /*** Cierre de sesión ***/
    logout: (req, res) => {
		res.clearCookie('userEmail');                                            // Destruyo la cookie sino no me voy a poder desloguear.
		req.session.destroy();
		res.redirect('/');
	}
}

// =========== Exporto Controlador ===========================
module.exports = userController