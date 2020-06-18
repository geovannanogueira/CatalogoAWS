import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import logo2 from '../imagens/daredep.png';

export default class App extends React.Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     lista: []
  //   }
  // }

  render() {
    return (
      <div className="tela_home">
        <header className="container">
          <img src={logo2} className="logo" />
          <div>
            <h1>WELCOME TO OUR WEBSITE</h1>
          </div>

          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <div>
            <p>A Darede é uma empresa de consultoria especialista em serviço de TI.</p>
          </div>
          <div id="botoes">
            <div className="botao1">
              <button className="btn_ec2">
                <strong>
                  <Link className="EMILIA" to='/servicos'>CRIAR</Link>
            {/* <br />
                EC2 */}
                </strong>
              </button>
              <p className="nome"><strong>EC2</strong></p>
            </div>
            <div className="botao2">
              <button className="btn_lambda">
                <strong>
                  <Link className="EMILIA" to='/servicos'>CRIAR</Link>
            {/* <br />
              LAMBDA */}
                </strong>
              </button>
              <p className="nome"><strong>LAMBDA</strong></p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

