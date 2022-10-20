import './mavrCSS.css';

import {TopPanel} from "./Panels.js";

import set from "./icons/settings.png";

let test = "http://mavr.kemsu.ru:5500/API/brand";
let goaway = "http://localhost:3000/";

let port_see_profile = "http://mavr.kemsu.ru:5500/api/user/whoamiredact";
let port_reg_cl = "http://mavr.kemsu.ru:5500/API/class/";


function Page() {
		window.onload = function() {
			document.getElementById('prped').className = "topbutton-page";
			
			if (localStorage.token.length<5) window.location.assign(goaway);
			enterprof();
		};
	return (
		<div>
			< TopPanel />
			<div className="mavr">
				<div className="workspace">
					<div className="profile-space">
						<div className="profileName">
							<a><h1 id="fioprofile"> name </h1></a>
						</div>

						<div className="profile-info">
							<div className="infobar"> 
								<p> Связанные классы: </p>
								<p id="clprofile" className="clprofile3"></p>
							</div>
							<div className="infobar">
								<p> Роли в системе: </p>
								<p> Заместитель по воспитательной работе </p>
							</div>
						</div>
						
						<button id="container" className="profile-button"><img src="https://i.ibb.co/7WvypCK/settings.png" className="profile-button2" onClick={function(){enter();}}></img></button> 
						<a href="http://mavr.kemsu.ru/"> 
						</a>
					</div>
				</div>
			</div>				
		</div>
  );	
}

async function enter() {
	alert(localStorage.token);
}

async function enterprof() {
	let p;
	let txt;
	//Вывод информации о пользователе
	let showfrofile = {
	};
	let responseshowfrofile = await fetch(port_see_profile, {
	method: 'POST',
	headers: {
	Authorization: `Bearer ${localStorage.token}` ,
	'Content-Type': 'application/json;charset=utf-8'
	},
	body: JSON.stringify(showfrofile)
	});
	let resultshowfrofile = await responseshowfrofile.json();
	document.getElementById('fioprofile').innerHTML = resultshowfrofile.lname + '\u00A0' + resultshowfrofile.name + '\u00A0' + resultshowfrofile.mname;
	//Вывод привязанных классов
	let response = await fetch(port_reg_cl, {
		method: 'GET',
		headers: {
		Authorization: `Bearer ${localStorage.token}` ,
		'Content-Type': 'application/json;charset=utf-8'
		},
		});
	let result = await response.json();
	let i=0;
	while(i<result.count-1){
		p = document.createElement('div')
		txt = document.createTextNode(result.rows[i].number + result.rows[i].letter + "," + '\u00A0');
		p.appendChild(txt);
		document.getElementById('clprofile').appendChild(p);
		i++;
	}
	p = document.createElement('div')
	txt = document.createTextNode(result.rows[i].number + result.rows[i].letter);
	p.appendChild(txt);
	document.getElementById('clprofile').appendChild(p);
}


export default Page;