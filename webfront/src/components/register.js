import './register.css';


function Register() {
    return (
        <div className="register-page">
            <form className="register-form" action="/register" method="post" enctype="multipart/form-data">
                <ul className="register-ul">
                    <li>
                        <div className="register-form-div">
                            <input type="text" name="nombre" placeholder="Nombre" required />
                        </div>
                    </li>
                    <li>
                        <div className="register-form-div">
                            <input type="text" name="apellido" placeholder="Apellido" required />
                        </div>
                    </li>
                    <li>
                        <div className="register-form-div">
                            <input type="email" name="email" placeholder="Correo" required />
                        </div>
                    </li>
                    <li>
                        <div className="register-form-div">
                            <input type="password" name="password" placeholder="Ingrese una contraseña" required />
                        </div>
                    </li>
                    <li>
                        <div className="register-form-div">
                            <input type="password" placeholder="Repita la contraseña" required />
                        </div>
                    </li>

                    <li>
                        <div className="register-form-div-buttons">
                            <button className="register-button" type="submit" disabled>
                                <span className="register-button-span">Enviar</span>
                            </button>
                            <button className="register-button" type="reset" disabled>
                                <span className="register-button-span">Borrar</span>
                            </button>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    );
}


export default Register;