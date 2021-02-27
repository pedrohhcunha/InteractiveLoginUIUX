const btnControlador = document.querySelector('#btnControlador')
const controlador = document.querySelector('#controlador')


btnControlador.addEventListener('click', () => {
    if (controlador.classList.contains('activeLogin')) {
        controlador.classList.remove('activeLogin')
        controlador.classList.add('activeCadastro')
        btnControlador.innerHTML = "Fazer Cadastro"
    } else {
        controlador.classList.remove('activeCadastro')
        controlador.classList.add('activeLogin')
        btnControlador.innerHTML = "Fazer Login"
    }
})