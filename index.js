const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password-two')

form.addEventListener('submit', (e) => {
        e.preventDefault()

        checkInputs()
})

function checkInputs() {

        const usernameValue = username.value.trim()
        const usernamevalue = username.value.trim()
        const emailValue = email.value.trim()
        const passwordValue = password.value.trim()
        const passwordtwoValue = passwordtwo.value.trim()

        if (usernameValue === '') {

                setErrorFor(username, 'Preencha esse campo')
        } else {

                setSuccessFor(username)
        }


        if (usernamevalue === '') {

                setErrorFor(username, 'Preencha esse campo')

        } else if (usernamevalue.length < 3 || usernamevalue.length > 25) {

                setErrorFor(username, 'Username deve ter entre 3 a 25 caracteres.')

        } else {

                setSuccessFor(username)
        }


        if (emailValue === '') {

                setErrorFor(email, 'Preencha esse campo')
        } else if (!isEmail(emailValue)) {
                setErrorFor(email, 'Email inválido')
        } else {

                setSuccessFor(email)
        }



        if (passwordValue === '') {

                setErrorFor(password, 'Preencha esse campo')

        } else if (passwordValue.length < 8) {

                setErrorFor(password, 'Senha deve ter mais que 8 caracteres')

        } else {

                setSuccessFor(password)
        }

        if (passwordtwoValue === '') {

                setErrorFor(passwordtwo, 'Preencha esse campo')

        } else if (passwordValue !== passwordtwoValue) {
                setErrorFor(passwordtwo, 'Senhas não tão iguais')
        } else {

                setSuccessFor(passwordtwo)   
        }


}

function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small')

        small.innerText = message

        formControl.className = 'form-control error'
}


function setSuccessFor(input) {
        const formControl = input.parentElement;

        formControl.className = 'form-control success'
        //form.reset()
}


function isEmail(email) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



