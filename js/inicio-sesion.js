const inputMail = document.getElementById('idUser');
const inputPass = document.getElementById('idPass');
const buttonLog = document.getElementById('buttonLogin');

const objForm = {
    user: '',
    pass: ''
};

const formValues = (ev) => {
    const { name, value } = ev.target;
    objForm[name] = value;
};

const sendForm = (ev) => {
    ev.preventDefault();
    const { user, pass } = objForm;

    if (user && pass) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExist = users.find((userLS) => userLS.user === user);

        if (!userExist) {
            return alert('Usuario y/o contraseña incorrecta');
        }

        if (userExist.pass === pass && userExist.user === user) {
            userExist.login = true;
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('user', JSON.stringify(userExist));

            if (userExist.role === 'admin') {
                location.href = '#'; 
            } else {
                location.href = '../html/Home.html'; 
            }
        } else {
            alert('Usuario y/o contraseña incorrecta');
        }
    } else {
        alert('Por favor, complete todos los campos.');
    }
};

inputMail.addEventListener('input', formValues);
inputPass.addEventListener('input', formValues);
buttonLog.addEventListener('click', sendForm);
