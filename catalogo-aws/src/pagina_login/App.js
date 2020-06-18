import React from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';
import './App.css';

import logo from '../imagens/daredep.png';

export default class Login extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         email: "",
    //         senha: ""
    //     }
    // }

    // loginEmail = (event) => {
    //     this.setState({ email: event.target.value })
    // }

    // loginSenha = (event) => {
    //     this.setState({ senha: event.target.value })
    // }

    // efetuarLogin = (event) => {
    //     event.preventDefault();

    //     Axios.post("", {
    //         email: this.state.email,
    //         senha: this.state.senha,
    //     })
    //         .then(data => {
    //             if (data.status === 200) {
    //                 localStorage.setItem("usuario-darede", data.data.token);
    //                 this.props.history.push('/');
    //             } else {
    //                 console.log("Erro!")
    //             }
    //         })
    //         .catch(erro => {
    //             this.setState({ erro: <div className="erro">"Usuário ou senha inválido"</div> });
    //             console.log(erro);
    //         })
    // }

    render() {
        return (
            <div className="tela_login">
                <header className="container2">
                    <img src={logo} className="logo" />
                </header>
                <section className="corpo">
                    <form>
                        <div className="item">
                            <input className="input_email" placeholder="  E-mail:" type="email" name="username" />
                        </div>
                        <div className="item1">
                            <input className="input_senha" placeholder="  Senha:" type="password" name="password" />
                        </div>
                        <div className="item2">
                            <button className="btn_login">
                            <Link className="EMILIA" to='/home'>Login</Link>
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        );

    }
}

