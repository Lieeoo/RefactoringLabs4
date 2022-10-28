import React from "react";

import '../../../mavrCSS.css';
import AuthorizationUser from "../../ui/AuthorizationUser";

const LoginPage:React.FC = () => {
  return (
    <div id="index_login" className="workspace">
		<div className="login-space">
			
			<p className="hello"> Добро пожаловать в информационную систему "МАВР" </p>
			
			<div>
				<input id="emailUser" type="text" placeholder="логин" className="login-input"/>
				<input id="passwordUser" type="password" placeholder="пароль" className="login-input"/>
			</div>
					
			<div>
				<button onClick={function(){EnterLoginIn().then(r => r);}} className="login-button">  Войти </button>
			</div>
	
		</div>
		
	</div>
  );
};

async function EnterLoginIn() {

    const email = document.getElementById("emailUser").value;
    const password = document.getElementById("passwordUser").value;

	await AuthorizationUser(email, password);
}


export default LoginPage;