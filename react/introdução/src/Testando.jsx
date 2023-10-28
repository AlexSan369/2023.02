import React from "react"


function Teste(props) {
    return <h1>{props.texto}</h1>
}

//Para deixar disponível a função Teste
//Caso exista outras funções elas não seram exportadas junto
export default Teste;