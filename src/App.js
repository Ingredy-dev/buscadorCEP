import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component{
  consultarCep = (event) =>{
    event.preventDefault();

    let cep = document.getElementById('cep').value;
    axios.get('https://viacep.com.br/ws/'+cep+'/json/', {})
      .then(response => {
        console.log(response)
        let info = response.data;
        document.getElementById('dados').innerHTML = '<div id="conteudoEndereco"><p className="infoRua">'+info.logradouro+'</p> <p className="infoEndereco">'+info.bairro+'</p> <p className="infoEndereco">'+info.localidade+'-'+info.uf+'</p> <p className="infoEndereco">'+info.cep+'</p></div>';

      })
      .catch(error => {
          // console.log(error)
          document.getElementById('dados').innerHTML = '<p>Endereço não encontrado</p>';
      })
  }

  render(){
    return(
      <div className="App">
        <div className="container">
          <div id="buscador">
            <h1>Consultar</h1>
            <form>
                <label>cep</label>
                <input type="text" id="cep" />
                <button onClick={this.consultarCep}>consultar</button>
            </form>
          </div>
          <div id="dados"></div>
          </div>
      </div>
    );
  }
};
export default App;
