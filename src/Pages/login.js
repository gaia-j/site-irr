import '../App.css';
import {FaUserAlt, FaLock, FaPagelines} from "react-icons/fa";
import {IconContext} from "react-icons";


function Login() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="login-box">
                    <div className="LB">
                        <FaPagelines className="icone-main" size={50}/><h1>Leandro Bellini</h1>
                    </div>
                        <div className="login-field">
                            <FaUserAlt className="icones"/>
                            <input className="login-input" placeholder="Usuário"/>
                        </div>
                        <div className="password-field-m">
                            <div className="password-field">
                                <FaLock className="icones" />
                                <input className="password-input" placeholder="Senha"/>
                            </div>
                        </div>
                        <div className="button-field">
                            <button className="login-button">Login</button>
                        </div>
                </div>
            </header>
        </div>
    );
}
export default Login;
