//Bibliotecas essências
import React from 'react';
import ReactDOM from 'react-dom';
import Teste from './Testando';

const nome = 'Alex Sander';
const sobrenome = 'Neves';

//Objetos de estilo 
const estilo = {color: "orangered", textAlign: "center", fontSize: "4rem"};

//Função para retornar componente
function Header(){
  return <h2>Olá</h2>
}
//Função renderizadora de componentes
ReactDOM.render(
  // A função consegue renderizar múltiplos elementos apenas dentro de uma tag que inclua seus filhos
    <>
      <h1 style={estilo}>x369</h1>
      <p>Hello {nome + ' ' + sobrenome}</p>
      <p>Um numero aleatório: {(Math.random()*10).toFixed(1)}</p>
      <Header />
      <Header />
      <Teste />
    </>,
    document.getElementById('root')
);

/* 
  Essa página serve para exemplificar 
  como o React opera páginas Web
 */