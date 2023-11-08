const inputMail = document.getElementById('inputMail');
const inputPass = document.getElementById('inputPass');
const inputRpass = document.getElementById('inputRpass');
const check = document.getElementById('idCheck');
const buttonReg = document.getElementById('buttonReg');
const errorElement = document.getElementById('error'); 

      const objForm = {
        user: '',
        pass: '',
        rpass: '',
        check: false,
      };

      const users = JSON.parse(localStorage.getItem('users')) || []; 

      buttonReg.addEventListener('click', (e) => {
        e.preventDefault();
        const user = inputMail.value;
        const pass = inputPass.value;
        const rpass = inputRpass.value;
        const isChecked = check.checked;

        if (user.length < 6 || !isEmail(user)) {
          showError('El usuario debe tener al menos 6 caracteres y ser un correo válido.');
        } else if (pass.length < 8 || !/\d/.test(pass)) {
          showError('La contraseña debe tener al menos 8 caracteres y al menos un número.');
        } else if (pass !== rpass) {
          showError('Las contraseñas no coinciden.');
        } else if (!isChecked) {
          showError('Debes aceptar los términos y condiciones.');
        } else {

          if (users.some((userObj) => userObj.user === user)) {
            showError('El usuario ya existe.');
          } else {
            const newUser = {
              id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
              user,
              pass,
              role: 'user',
              login: true,
              deleted: false,
            };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            alert('Registro exitoso. Redirigiendo a la página de inicio de sesión.');
            location.href = '../html/inicio-sesion.html';
          }
        }
      });

      function showError(message) {
        errorElement.textContent = message;
      }

      function isEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }