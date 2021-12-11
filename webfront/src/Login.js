import React from 'react';

function Login() {
    return (
        <div class="formLogin">
            <form action="/login" method="POST" class="formValidationLogin">

                {/*<!-- INPUT MAIL -->*/}
                <div>
                    <label>Ingrese email</label>
                </div>
                <div>
                    <input class="emailL" type="text" name="email" />
                </div>

                {/*<!-- INPUT CONTRASEÑA -->*/}
                <div>
                    <label>Contraseña</label>
                </div>
                <div>
                    <input class="contrasenia" type="password" name="password" />
                </div>

                {/*<!-- INPUT RECORDARME -->*/}
                <div>
                    <label>Recordarme</label>
                </div>
                <div class="checkbox">
                    <input type="checkbox" name="recordame" id="" />
                </div>

                {/*<!-- BOTONES -->*/}
                <div>
                    <button type="reset" class="loginBotonTipo1">Borrar</button>
                    <button type="submit" class="loginBotonTipo1">Continuar</button>
                </div>
                <div>
                    <a href="./register"><button type="button" class="loginBotonTipo2">
                        Registrarse
                    </button></a>
                </div>
            </form>
        </div>
    )
}

export default Login;