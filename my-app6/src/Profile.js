import './ProjectCSS.css';

import TopPanel from "./TopPanel.js";


function Page() {
	return (
		<div className="pages">
			
				
				< TopPanel />
				
				
				<div className="Profile">
				
					<h1> name </h1>
					
					<a href="http://mavr.kemsu.ru/"> 
					<button className="profButtons"> Редактировать профиль </button> 
					</a>
					<a href="http://mavr.kemsu.ru/"> 
					<button className="profButtons"> Изменить пароль </button> 
					</a>
					
					<p> Логин: admin </p>
					
					<div className="infoClass">
							Связанные классы:
							<p> </p>
						</div>
							
					<div className="infoRole">
						Роли в системе:
						<p> Администратор </p>
						</div>
				
			
						
				</div>
				
				
			
		</div>
  );	
}

export default Page;