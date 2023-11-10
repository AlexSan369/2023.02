console.log('ok')
// Busca pelos elementos do formulário
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const horario = document.querySelector('#horario');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg_email');
const userList = document.querySelector('#users');

// Método addEventListener
myForm.addEventListener('submit', onSubmit);
// Validando email
emailInput.addEventListener('change', (e) => {
    let padrao = new RegExp(/.*@.*\..*/i);
    if (!padrao.test(emailInput.value)) {
        msg_email.classList.add('error');
        msg_email.innerHTML = 'Por favor, insira um email válido!';
        setTimeout(() => msg.remove(), 3000);
    }
})

function onSubmit(e) {
    e.preventDefault();

    // Validando se o usuário digitou no input
    if (nameInput.value === '' || emailInput.value === '') {
        // Adiciona classe error
        msg.classList.add('error');
        msg.innerHTML = 'Por favor, preencha os dados.';
        setTimeout(() => msg.remove(), 3000);
    } else {
        // Criando elemento <li>
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nameInput.value} : ${emailInput.value} : ${horario.value}`
            )
        );
        userList.appendChild(li);

        //Limpando Formulário
        nameInput.value = '';
        emailInput.value = '';
        horario.getElementsByTagName('option')[0].selected = 'selected';
        nameInput.focus();
    }
}