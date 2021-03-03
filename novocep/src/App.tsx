import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { CEP } from './types/cep' 


/**
 * Este é o enunciado: Consuma a API dos correios e mostre as informações passando o cep
    Essa é a API: https://viacep.com.br/ws/13010150/json/
    A parte em vermelho é o CEP que deve ser alterado pelo o que o usuário digitar
    Faça uma página com um input de texto que será digitado o CEP
    Crie um botão que irá enviar essa requisição
    Mostre todas as informações na tela
    Tipe o retorno
    Use typescript, axios, useState, interface
 */

function App() {

  const [cep, setCep] = useState<String>("")
  const [endereço, setendereço] = useState<CEP>()

  const getCep = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => setendereço(resposta.data))
  }

  return (
    <div className="App">
      <input type="text" placeholder="Digite seu cep aqui" onChange={(event)=> setCep(event.target.value)} />
        <button onClick={getCep}> Busca CEP</button>

          <ul>
            <li>Bairro: {endereço?.cep}</li>
            <li>CEP: {endereço?.cep}</li>
            <li>UF: {endereço?.uf}</li>
            <li>Rua: {endereço?.logradouro}</li>
            <li>Cidade: {endereço?.localidade}</li>
          </ul>
    </div>
  );
}

export default App;
