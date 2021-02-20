import React from 'react';
const LoginPage = () => {
    return ( <div>
        <label htmlFor="login">Podaj login:
         <input type="text" id="login" placeholder="Wpisz login: " />
        </label>
        <label htmlFor="pass">Podaj login:
         <input type="password" id="pass" placeholder="Wpisz hasło: " />
        </label>
        <button>Wyślij</button>
    </div> );
}
 
export default LoginPage;