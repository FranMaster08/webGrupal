const { usersModel } = require('../model');
const bcrypt = require("bcryptjs")

let controller = {
    /* GET: Login Form */
    login: (req, res) => {
        return res.render('./users/login.ejs');
    },

    /* POST: User to login */
    processLogin: async function (req, res) {
        try {
            let userToLogin = await usersModel.findByField('email', req.body.email);
    
            // Check the user & password combination
            // Save the user in Session
            if (userToLogin) {
                let checkPassword = bcrypt.compareSync(req.body.password, userToLogin.password);
                if (checkPassword) {
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
    
                    // Set user in Cookies
                    if (req.body.remember_user) {
                        res.cookie('userCookieEmail', req.body.email, { maxAge: (1000 * 60)})
                    }
    
                    return res.redirect('/users/mi-cuenta')
                }
                return res.render('./users/login.ejs', {
                    errors: {
                        email: {
                            msg: 'No reconocemos esta combinación de usuario y contraseña'
                        }
                    }
                });
            }
    
            return res.render('./users/login.ejs', {
                errors: {
                    email: {
                        msg: 'No se encuentra este email en nuestra Base de Datos'
                    }
                }
            });

        } catch (error) {
            res.status(404).render('404-page.ejs');
        }
    },

    /* GET: Register Form */
    register: (req, res) => {
        return res.render('./users/register.ejs');
    },

    /* POST: Create new user in the database */
    processRegister: async function (req, res) { 
        const file = req.file;

        try {
            // Check if the email is already register in the Database
            let userExist = await usersModel.findByField('email', req.body.email);
            if (userExist) {
                return res.render('./users/register.ejs', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body
                });
            }

            // Take the information to create the user
            let userToCreate = {
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 10),
                image: `/img/users/${file.filename}`
            }

            await usersModel.create(userToCreate);
    
            // Save the user in Session
            // Set user in Cookies
            delete userToCreate.password;
            req.session.userLogged = userToCreate;
            res.cookie('userCookieEmail', req.body.email, { maxAge: (1000 * 60)})
    
            return res.redirect('/users/mi-cuenta')

        } catch (error) {
            res.status(404).render('404-page.ejs');
        }
    },

    /* GET: Redirect to user profile (mi-cuenta) */
    profile: (req, res) => {
        return res.render("./users/profile.ejs", { user: req.session.userLogged })
    },

    /* GET: Delete everything that is in session & cookies */
    logout: (req, res) => {
        res.clearCookie('userCookieEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = controller