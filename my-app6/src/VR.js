import './ProjectCSS.css';
import ReactDOM from 'react-dom';
import './mavrCSS.css';

import {TopPanel, LeftPanelVR} from "./Panels.js";
import {EvProf} from "./See.js";

let port_show_vr = "http://mavr.kemsu.ru:5500/api/event/";
let port_reg_napksob2 = "http://mavr.kemsu.ru:5500/api/event/napravlenie_give";
let port_delete_ev = "http://mavr.kemsu.ru:5500/api/event/";
let port_see_u = "http://mavr.kemsu.ru:5500/api/event/stud_set";

const element = <EvProf />;
var flags=new Array();


function Page() {
	window.onload = function() {
			document.getElementById('vrab').className = "topbutton-page";
			document.getElementById('vr').style.background = "#8ccba1";
			entervr2();
			//entervr3(2);
			
		};
	return (
		<div>
				< TopPanel />
				<div className="Test">
					<div id="LeftPanelVR">
						<LeftPanelVR/>
					</div>
					<div className="workspaceClassWork">
						<div className="ListSt">
							<a href="NewEv"><button className="profile-button"><img src="https://i.ibb.co/Tbth16X/add.png" className="profile-button2"></img></button></a>
							<p>Список событий</p>
							<div id="Events">
							</div>

						</div>
						<div className="FlRight">
							<div className="Fl">
								<div>Фильтры:</div>
								<div className="FlText"><div>Форма воспитательной работы:&nbsp;</div><select type="text">
									<option selected disabled></option>
									<option>классный час</option>
									<option>тематическая беседа</option>
								</select></div>
								<div className="FlText"><div>Кто проводит:&nbsp;</div><input type="text" className="FilterInput"></input></div>
								<div className="FlText"><div>Направление:&nbsp;</div><select type="text">
									<option selected disabled></option>
									<option>познавательное</option>
									<option>трудовое</option>
									<option>экологическое</option>
								</select></div>
								<div className="FlText"><div>Сетевое взаимодействие:&nbsp;</div><input type="text"></input></div>
								<div className="FlText"><div>Проект:&nbsp;</div><input type="text"></input></div>
								<div className="FlText"><div>Организация:&nbsp;</div><input type="text"></input></div>
								<div className="FlRight"><button className="profile-button"><img src="https://i.ibb.co/jbvfRzm/search.png" className="profile-button2"></img></button></div>
							</div>
						</div>
					</div>
				</div>

		</div>
  );	
}
//Вывод данных в профиль события
export async function entervr(a, count, napr) {
	let p;
	let txt
	switch(flags[a.id]) {
		case false:
		let i=1;
		while(i<count){
			ReactDOM.render(null, document.getElementById(a.id+"SetSP"));
			flags[i]=false;	
			i++;
		}
		ReactDOM.render(element, document.getElementById(a.id+"SetSP"));
		document.getElementById('profileEventDateOfEvent').innerHTML = a.date_of_nach_event;
		//Вывод всех направлений воспитательного события
		let j=0;
		while(j<napr.length-1)
		{
			p = document.createElement('div')
			txt = document.createTextNode(napr[j].name);
			p.className = "float";
			p.appendChild(txt);
			document.getElementById('profileEventDirection').appendChild(p);
			p = document.createElement('div')
			txt = document.createTextNode(","+'\u00A0');
			p.appendChild(txt);
			document.getElementById('profileEventDirection').appendChild(p);
			j++;
		}
		p = document.createElement('div')
		txt = document.createTextNode(napr[j].name);
		p.appendChild(txt);
		document.getElementById('profileEventDirection').appendChild(p);
		document.getElementById('profileEventFormOfEducationalActivity').innerHTML = a.form_vosp_rab;
		document.getElementById('profileEventWhoProvide').innerHTML = a.who;
		let uviz = {
		id:a.id,
		};
		let responseuviz = await fetch(port_see_u, {
		method: 'POST',
		headers: {
		Authorization: `Bearer ${localStorage.token}` ,
		'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(uviz)
		});
		let resultuviz = await responseuviz.json();
		//Вывод всех учеников-участников воспитательного события
		i=0;
		while(i<resultuviz.length-1){
			p = document.createElement('div')
			txt = document.createTextNode(resultuviz[i].fullname);
			p.appendChild(txt);
			document.getElementById('profileEventStudents').appendChild(p);
			p = document.createElement('div')
			txt = document.createTextNode(","+'\u00A0');
			p.appendChild(txt);
			document.getElementById('profileEventStudents').appendChild(p);
			i++;
		}
		if(resultuviz.length!=0){
			p = document.createElement('div')
			txt = document.createTextNode(resultuviz[i].fullname);
			p.appendChild(txt);
		}
		document.getElementById('profileEventStudents').appendChild(p);
		document.getElementById('profileEventNetworkConnection').innerHTML = a.network_interaction;
		document.getElementById('profileEventProject').innerHTML = a.project;
		document.getElementById('profileEventInvitedOrganizations').innerHTML = a.invited_organizations;
		document.getElementById('profileEventInvitedParents').innerHTML = a.invited_parents;
		document.getElementById('profileEventSertificate').innerHTML = a.sertificate;
		flags[a.id]=true;
		break;
		case true:
		ReactDOM.render(null, document.getElementById(a.id+"SetSP"));
		flags[a.id]=false;
		break;
	}
}
//Вывод всех событий
export async function entervr2() {
	let napksob2;
	let responsenapksob2;
	let resultnaprsob2;
	let responsevr = await fetch(port_show_vr, {
	method: 'GET',
	headers: {
	Authorization: `Bearer ${localStorage.token}` ,
	'Content-Type': 'application/json;charset=utf-8'
	},
	});
	let resultvr = await responsevr.json();
	let i=0;
	while(i<resultvr.count){
		napksob2 = {
		id:resultvr.rows[i].id,
		};
		responsenapksob2 = await fetch(port_reg_napksob2, {
		method: 'POST',
		headers: {
		Authorization: `Bearer ${localStorage.token}` ,
		'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(napksob2)
		});
		resultnaprsob2 = await responsenapksob2.json();
		let p = document.createElement('div')
		p.className = 'TextStyleNVR';
		p.id=resultvr.rows[i].id+"event";
		document.getElementById('Events').appendChild(p);
		p = document.createElement('div')
		p.className = 'TextStyleNVR';
		p.id=resultvr.rows[i].id+"osn";
		let j=parseInt(resultvr.rows[i].id);
		let i2 =parseInt(i);
		flags[j]=false;
		p.onclick = function() {entervr(resultvr.rows[i2],resultvr.count,resultnaprsob2);};
		document.getElementById(resultvr.rows[i].id+"event").appendChild(p);
		p = document.createElement('p')
		p.id=resultvr.rows[i].id+"osn2";
		document.getElementById(resultvr.rows[i].id+"osn").appendChild(p);
		p = document.createElement('div')
		p.id=resultvr.rows[i].id+"navr";
		let txt = document.createTextNode(resultvr.rows[i].event_name);
		p.appendChild(txt);
		document.getElementById(resultvr.rows[i].id+"osn2").appendChild(p);
		p = document.createElement('div')
		p.id=resultvr.rows[i].id+"flex";
		p.className="displayFlex";
		document.getElementById(resultvr.rows[i].id+"osn").appendChild(p);
		p = document.createElement('div')
		p.id=resultvr.rows[i].id+"danavr";
		txt = document.createTextNode(resultvr.rows[i].date_of_nach_event);
		//txt = document.createTextNode(resultvr.rows[i].id);
		p.appendChild(txt);
		document.getElementById(resultvr.rows[i].id+"flex").appendChild(p);
		p = document.createElement('div')
		txt = document.createTextNode(","+'\u00A0');
		p.appendChild(txt);
		document.getElementById(resultvr.rows[i].id+"flex").appendChild(p);
		p = document.createElement('div')
		p.id=resultvr.rows[i].id+"fovr";
		txt = document.createTextNode(resultvr.rows[i].form_vosp_rab);
		p.appendChild(txt);
		document.getElementById(resultvr.rows[i].id+"flex").appendChild(p);
		p = document.createElement('div')
		txt = document.createTextNode(","+'\u00A0');
		p.appendChild(txt);
		document.getElementById(resultvr.rows[i].id+"flex").appendChild(p);
		p = document.createElement('div')
		p.id=resultvr.rows[i].id+"napvr";
		//Вывод всех направлений воспитательного события
		let h=0;
		while(h<resultnaprsob2.length-1){
			txt = document.createTextNode(resultnaprsob2[h].name + ","+'\u00A0');
			p.appendChild(txt);
			h++;
		}
		txt = document.createTextNode(resultnaprsob2[h].name);
		p.appendChild(txt);
		document.getElementById(resultvr.rows[i].id+"flex").appendChild(p);
		p = document.createElement('div')
		p.id=resultvr.rows[i].id+"SetSP";
		document.getElementById(resultvr.rows[i].id+"event").appendChild(p);
		i++;
	}
}
//Удаление воспитательного события
export async function entervr3(a) {
	let evdel = {
	id:a,
	};
	let responseevdel = await fetch(port_delete_ev, {
	method: 'DELETE',
	headers: {
	Authorization: `Bearer ${localStorage.token}` ,
	'Content-Type': 'application/json;charset=utf-8'
	},
	body: JSON.stringify(evdel)
	});
	let resultevdel = await responseevdel.json();
	alert(JSON.stringify(resultevdel));
}


export default Page;