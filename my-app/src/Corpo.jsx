import React from "react";

//props são propriedades

function Corpo(props){
    return (
        <div>
            <h2>{props.nome}</h2> {/* Propriedades recebidas da função createCorpo */}
            <p>{props.email}</p>
            <p>{props.telefone}</p>
        </div>
    )
};

export default Corpo;