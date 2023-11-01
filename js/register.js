const inputMail = document.getElementById('inputMail')
const inputPass = document.getElementById('inputPass')
const inputRpass = document.getElementById('inputRpass') 
const check = document.getElementById('idCheck')
const buttonReg = document.getElementById('buttonReg')

const objForm = {
    user: '',
    pass: '',
    rpass:'',
    check: false
} 

const formValues = (ev) => {
    const { name, value } = ev.target
    if(name === 'check'){
        objForm[name] = check.checked
    }
    objForm[name] = value 
}

const sendForm = (ev) => {
    ev.preventDefault()
    const { user , pass, rpass , check } = objForm
    

    if(user && pass & rpass){
        if(pass === rpass){
            const users =  JSON.parse(localStorage.getItem('users')) || []
            const userExist = users.filter((userLS) => userLS.user === user)

            if(userExist.length > 0){
                return alert('El usuario ya existe')
            }

            const newUser = {
                id: users.length > 0 ? users[users.length -1].id + 1 : 1,
                user,
                pass,
                role: 'user',
                login: false
            }   
            users.push(newUser)
            
            localStorage.setItem('users',JSON.stringify(users))
        }
        else{
            alert('las contraseñas no coinciden')
        }
    }
}

inputMail.addEventListener('input', formValues)
inputPass.addEventListener('input', formValues)
inputRpass.addEventListener('input',formValues)
check.addEventListener('click',formValues)
buttonReg.addEventListener('click', sendForm)