import './ProjectCSS.css';

// <button onClick={forgot} className="Login-button2"> Забыли пароль? </button> 
// Не знаю, нужно нам это будет или нет

//let ss="http://mavr.kemsu.ru/profile";
let ss="http://localhost:3000/profile";

const Auth = () => {
  return (
    <div className="App">	  
		<div name="login" id="index_login" className="Login">
			
			<p> Добро пожаловать! </p>
				
			<p className="Login-error-text" hidden={true} id="login_input">Введите логин!</p>
			<p className="Login-error-text" hidden={true} id="login_not_found">Пользователь с таким логином не найден.</p>
			<p className="Login-error-text" hidden={true} id="passwd_input">Введите пароль!</p>
			<p className="Login-error-text" hidden={true} id="passwd_wrong">Неверный пароль.</p>
			
			<input id="login1" type="text" placeholder="логин" className="loginimp"/>	
			<input id="login2" type="password" placeholder="пароль" className="loginimp"/>
					
			<div className="Login-buttons">
				<button className="loginbutt">  Войти </button>
			</div>
	
		</div>
		
	</div>
  );
}

export default Auth;