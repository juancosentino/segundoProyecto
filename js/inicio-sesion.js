    const inputMail = document.getElementById('idUser')
const inputPass = document.getElementById('idPass')
const buttonLog = document.getElementById('buttonLogin') 

const objForm = {
    user: '',
    pass: ''
} 

const formValues = (ev) => {
    const { name, value } = ev.target   
    objForm[name] = value 
}

const sendForm = (ev) => {
    ev.preventDefault()
    const { user , pass } = objForm

    if(user && pass){
        console.log('click')
        const users =  JSON.parse(localStorage.getItem('users')) || []
        const userExist = users.filter((userLS) => userLS.user === user)
        console.log(userExist.length)

        if(userExist.length < 0){
            return alert('usuario y/o contraseña incorrecta')
        }
        
        if(userExist[0].pass === pass && userExist[0].user === user){
            userExist[0].login = true
            localStorage.setItem('users', JSON.stringify(users))
            localStorage.setItem('user', JSON.stringify(userExist[0]))

            if(userExist[0].rol === 'admin'){
                location.href = '#'
            }else{
                location.href = '../html/Home.html'
            }
            
        }else{
            alert('usuario y/o contraseña incorrecta')
        }
    }
}

inputMail.addEventListener('input', formValues)
inputPass.addEventListener('input', formValues)
buttonLog.addEventListener('click', sendForm)