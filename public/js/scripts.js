const mostrarLogin = (e) => {
    const modalLogin = document.getElementById('modal-login')
    modalLogin.style.display = 'flex';
}

// Modal Login & Cadastro

const login = document.querySelector('#login');
login.addEventListener('click', () => iniciarModal('modal-login'))

const cadastro = document.querySelector('.criar-conta');
cadastro.addEventListener('click', () => iniciarModal('modal-cadastro'))

const returnLogin = document.querySelector('.entrar-login');
returnLogin.addEventListener('click', () => iniciarModal('modal-login'))

// ADICIONANDO NUMERO NO CARRINHO
const keys = Object.keys(localStorage);
const addNumberCar = document.querySelector('.addNumberCar')
if (keys.length > 0) {
    addNumberCar.innerHTML += `<label class="numberCar">${keys.length}</label>`
}

//FORMULARIO ==> LOGUIN 

const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})

function checkInputs() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === '') {
        errorValidation(email, 'Digite o seu e-mail')
    } else {
        sucessValidation(email)
    }

    if (passwordValue === '') {
        errorValidation(password, 'Digite a senha')
    } else {
        sucessValidation(password)
    }
}

function errorValidation(input, menssage) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = menssage
    formControl.className = 'form-control error'
}

function sucessValidation(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}