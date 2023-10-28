import React from "react"
import Teste from "./Testando";
import Corpo from "./Corpo";
import Footer from "./Footer";
import clientes from "./clientes"

//Função retorna propriedades para o componente <Corpo />
// é acionada pelo method map(function)
function createCorpo(cliente){
  return <Corpo 
            key={cliente.id}
            nome={cliente.nome}
            email={cliente.email}
            telefone={cliente.Telefone}
          />
}


function App() {
  return (
    <>
        {/* texto é um props */}
        <Teste texto="Olá fique à vontade"/>
        <Teste texto="Veja alguns exemplos"/>
        {/* clientes é o objeto importado da página clientes.js */}
        {clientes.map(createCorpo)}
        <Footer />
    </>
  )
    
}

//Para deixar disponível a função Teste
//Caso exista outras funções elas não seram exportadas junto
export default App;