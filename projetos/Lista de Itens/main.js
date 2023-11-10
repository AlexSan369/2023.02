//Variáveis dos elementos da lista para conexão entre as partes

//Atribuindo o formulário a uma variável
const form = document.getElementById('addForm');
//Atribuir a lista a uma variável
const itemList = document.getElementById('items');
//Atribuição da barra de pesquisa
const filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', buscarItems);

function buscarItems(e) {
    /* alert('tecla ativa'); */
    // Entender como o text é coletado letra a letra
    console.log(e.target.value.toLowerCase());
    // Armazenando valor digitado
    let txt = e.target.value.toLowerCase();
    // Buscar todos os Itens
    let Items = itemList.getElementsByTagName('li');
    // Converte os itens para array
    Array.from(Items).forEach( function(item){
        // Busca o item na lista
        let nomeItem = item.firstChild.textContent;

        if(nomeItem.toLowerCase().indexOf(txt) != -1){
            item.style.display = 'block'; // Mostra o item
        } else {
            item.style.display = 'none'; // Oculta o item
        }
    });
}
 
function removeItem(evento) {
    /* console.log("CLICOU ERRADO! ISSO N É UM BTN") */
    if(evento.target.classList.contains('delete')){
        /* console.log('TENHO QUE DELETAR') */
        let li = evento.target.parentElement;
        itemList.removeChild(li);
    }

}

function addItem(evento) {
    // preventDefault é o comportamento de recarregar a página
    // esse comportamento é padrão para <form>
    evento.preventDefault();

    // Criar a tag <li>
    let novo_li = document.createElement('li');
    // Add a classe para a tag <li class="list-group-item">
    novo_li.className = 'list-group-item';
    // Resgatamos o valor inserido no formulário
    let novoItem = document.getElementById('item').value;

    // Unindo o <li> com o nome do item
    novo_li.appendChild(document.createTextNode(novoItem));
    
    // Criar o botão deletar
    let deleteBtn = document.createElement('button');
    // Atribuindo classes ao btn
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    // Acresentando o 'X' ao btn
    deleteBtn.appendChild(document.createTextNode('X'));

    // Colocar o btn dentro da tag <li>
    novo_li.appendChild(deleteBtn)

    // Adcionando <li> completa a <ul>
    itemList.appendChild(novo_li);
    // Limpar campos input
    form.reset();

    /* console.log(evento) */

}