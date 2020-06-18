import React from 'react';
import Axios from 'axios';

import './App.css';
import logo3 from '../imagens/daredep.png';

export default class App extends React.Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         lista: [],
    //     }
    // }

    // componentDidMount(){
    //     this.listarServicos();
    // }

    // listarServicos = () =>{
    //     Axios.get('')
    //     .then(response => {
    //         this.setState({ lista: response.data })
    //         console.log({ lista: response.data })
    //     })
    // }

    render() {
        return (
            <div className="tela_servicos">
                <header className="container">
                    <img src={logo3} className="logo" />
                    <div id="titulo">
                        <h1 className="classeTitle">Nossos Serviços</h1>
                    </div>
                    <div id="caracteristicas">
                        <div id="nome">
                            <p className="nome"><strong>Nome do serviço:</strong></p>
                        </div>
                        <div id="descricao">
                            <p className="descricao"><strong>Descrição:</strong></p>
                        </div>
                        <div id="valor">
                            <p className="valor"><strong>Valor:</strong></p>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
