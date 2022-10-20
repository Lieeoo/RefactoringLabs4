import './ProjectCSS.css';
import ReactDOM from 'react-dom';
import './mavrCSS.css';

import {TopPanel} from "./Panels.js";
import {NewStFa, NewStFaPol, NewStFaNepol, NewStFaOp} from "./See.js";
const element = <NewStFa />;
const element2 = <NewStFaPol />;
const element3 = <NewStFaNepol />;
const element4 = <NewStFaOp />;
let flag = false;
let flagFa=false;
let flagFa2=false;
let createStudentGroupOfRisk="нет";
export let createStudentWhiteFamilystatus="низкий доход";
export let createStudentWriteEducationLevelMother="высшее";
export let createStudentWriteWorkMother="работник по найму";
export let createStudentWriteEducationLevelFather="высшее";
export let createStudentWriteWorkFather="работник по найму";
export let createStudentWriteEducationLeveGuardian="высшее";
export let createStudentWriteWorkGuardian="работник по найму";
let fastatstr;
let programDelete=0;

let port_reg_st = "http://mavr.kemsu.ru:5500/API/student/";
let port_reg_cl = "http://mavr.kemsu.ru:5500/API/class/";
let port_reg_fa = "http://mavr.kemsu.ru:5500/API/family/";
let cl = "http://localhost:3000/classroom";
let port_create_program = "http://mavr.kemsu.ru:5500/API/additEduc/";
let port_student_to_dop = "http://mavr.kemsu.ru:5500/API/additEduc/addSTUD";
let flst;

function Page() {
	window.onload = function() {
			enter3();
		};
	return (
		<div>
			< TopPanel />
			<div className="Test">
				<div className="workspaceClassWorkFlexColumn">
				<p>Создание пользователя</p>
				<div>
					<div className="ListSt2">
						<div>
							Основная информация:
							<hr/>
							<div className="TextStyleNVR">
							<p>Фамилия:<input id="createStudentName" type="text"></input></p>
							<p>ФИО:<input id="createStudentFIO" type="text" style={{width: 250}}></input></p>
							<p>Класс:
								<select id="clSel">
								</select>
							</p>
							<p>Дата рождения:<input id="createStudentBirthday" type="date"></input></p>
							<p>Группа риска:
								<select onChange={e => {createStudentGroupOfRisk = e.target.value}}>
									<option>нет</option>
									<option>девиантное поведение</option>
									<option>неуспеваемость</option>
									<option>иное</option>
								</select>
							</p>
							<p>Пол:
								<select id="clSex">
									<option value="2">м</option>
									<option value="1">ж</option>
								</select>
							</p>
							<p>Семья:<select id="createStudentFamilyStatus" onChange={e => {enter6(e.target.value)}}>
									<option value="полная">полная</option>
									<option value="неполная">неполная</option>
									<option value="опекун">опекун</option>
								</select>
							</p>
							<p>ПФДО:<input id="createStudentPFDO" type="text"></input></p>
							<hr/> 
							</div>
						</div>
						<div>
						<div id="pasteFa">
						</div>
						<p>Дополнительное образование:</p>
						<div>
							<div className="displayFlex">
								<div>
								<select id="listOfAdditionalEducationsAdd" size="3">
								</select>
								</div>
								<div>
								<select id="listOfAdditionalEducations">
									<option selected disabled></option>
								</select>
								</div>
							</div>
						</div>
						<hr/>
						</div>
					</div>
					</div>
					<div>
					<button className="TBVR" onClick={function(){enter4();}}> Автозаполнить </button>
					<button className="TBVR" onClick={function(){enter();}}> Сохранить </button>
					</div>
				</div>
			</div>

		</div>
  );	
}
//Добавление ученика в БД
async function enter() {
	let family2;
	let response2;
	let result2;
	//Добавление семьи
	switch(flst) {
		case 0:
		family2 = {
		family_status:0
		};
		response2 = await fetch(port_reg_fa, {
		method: 'POST',
		headers: {
		Authorization: `Bearer ${localStorage.token}` ,
		'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(family2),
		});
		result2 = await response2.json();
		break;
		case 1:
		family2 = {
		family_status:1,
		material_condition:document.getElementById('createStudentFamilysMoney').value,
		educationFather:document.getElementById('createStudentEducationLevelFather').value,
		educationMother:document.getElementById('createStudentEducationLevelMother').value,
		fatherStat:document.getElementById('createStudentWorkFather').value,
		motherStat:document.getElementById('createStudentWorkMother').value
		};
		response2 = await fetch(port_reg_fa, {
		method: 'POST',
		headers: {
		Authorization: `Bearer ${localStorage.token}` ,
		'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(family2),
		});
		result2 = await response2.json();
		break;
		case 2:
		family2 = {
		family_status:2,
		material_condition:document.getElementById('createStudentFamilysMoney').value,
		educationMother:document.getElementById('createStudentEducationLeveGuardian').value,
		motherStat:document.getElementById('createStudentWorkGuardian').value
		};
		response2 = await fetch(port_reg_fa, {
		method: 'POST',
		headers: {
		Authorization: `Bearer ${localStorage.token}` ,
		'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(family2),
		});
		result2 = await response2.json();
		break;
		case 3:
		alert(3);
		family2 = {
		family_status:3,
		material_condition:document.getElementById('createStudentFamilysMoney').value,
		educationFather:document.getElementById('createStudentEducationLeveGuardian').value,
		fatherStat:document.getElementById('createStudentWorkGuardian').value
		};
		response2 = await fetch(port_reg_fa, {
		method: 'POST',
		headers: {
		Authorization: `Bearer ${localStorage.token}` ,
		'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(family2),
		});
		result2 = await response2.json();
		alert(33);
		break;
		case 4:
		family2 = {
		family_status:4,
		material_condition:document.getElementById('createStudentFamilysMoney').value,
		educationMother:document.getElementById('createStudentEducationLeveGuardian').value,
		motherStat:document.getElementById('createStudentWorkGuardian').value
		};
		response2 = await fetch(port_reg_fa, {
		method: 'POST',
		headers: {
		Authorization: `Bearer ${localStorage.token}` ,
		'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(family2),
		});
		result2 = await response2.json();
		break;
		case 5:
		family2 = {
		family_status:5,
		material_condition:document.getElementById('createStudentFamilysMoney').value,
		educationFather:document.getElementById('createStudentEducationLeveGuardian').value,
		fatherStat:document.getElementById('createStudentWorkGuardian').value
		};
		response2 = await fetch(port_reg_fa, {
		method: 'POST',
		headers: {
		Authorization: `Bearer ${localStorage.token}` ,
		'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(family2),
		});
		result2 = await response2.json();
		break;
	}
	let result3 = parseInt(JSON.stringify(result2.id));
	//Добавление ученика
	alert(document.getElementById('createStudentPFDO').value);
	let student = {
		name:document.getElementById('createStudentName').value,
		fullname:document.getElementById('createStudentFIO').value,
		class_ID:document.getElementById('clSel').value,
		birthday:document.getElementById('createStudentBirthday').value,
		group_of_risk:createStudentGroupOfRisk,
		sex:document.getElementById('clSex').value,
		family_id:result3,
		PFDO:document.getElementById('createStudentPFDO').value
		};
	let response = await fetch(port_reg_st, {
		method: 'POST',
		headers: {
		Authorization: `Bearer ${localStorage.token}` ,
		'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(student),
		});
	let result = await response.json();
	let result4 = parseInt(JSON.stringify(result.id));
	alert(JSON.stringify(result));
	//Добавление дополнительного образования
	let m=0;
	while(m<document.getElementById("listOfAdditionalEducationsAdd").options.length){
		let studenttodop = {
			id:document.getElementById("listOfAdditionalEducationsAdd").options[m].value,
			stud_id:result4
			};
		let responsestudenttodop = await fetch(port_student_to_dop, {
			method: 'POST',
			headers: {
			Authorization: `Bearer ${localStorage.token}` ,
			'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(studenttodop),
			});
		let resultstudenttodop = await responsestudenttodop.json();
		m++;
	}
	window.location.assign(cl);
}
//Функция-тест
async function enter2() {
	alert(document.getElementById('createStudentGroupOfRisk').value);
}
//Заполнение данных на странице
async function enter3() {
		let response = await fetch(port_reg_cl, {
		method: 'GET',
		headers: {
		Authorization: `Bearer ${localStorage.token}` ,
		'Content-Type': 'application/json;charset=utf-8'
		},
		});
	let result = await response.json();
	let i=0;
	while(i<result.count){
		let result2 = JSON.stringify(result.rows[i].number +  " " + result.rows[i].letter);
		var result3 = result2.substring(1, result2.length-1);
		let p = document.createElement('option')
		p.value=result.rows[i].id;
		let txt = document.createTextNode(result3)
		p.appendChild(txt);
		document.getElementById('clSel').appendChild(p);
		i++;
	}
	flst = 1;
	ReactDOM.render(element, document.getElementById('pasteFa'));
	ReactDOM.render(element2, document.getElementById('familyHolder'));
	//Заполнение списков программ для дополнительного образования
	let responseprogram = await fetch(port_create_program, {
		method: 'GET',
		headers: {
		Authorization: `Bearer ${localStorage.token}` ,
		'Content-Type': 'application/json;charset=utf-8'
		},
		});
	let resultprogram = await responseprogram.json();
	let j=0;
	while(j<resultprogram.count){
		let resultprogram2 = resultprogram.rows[j].name;
		let p = document.createElement('option')
		p.value=resultprogram.rows[j].id;
		let txt = document.createTextNode(resultprogram2)
		p.appendChild(txt);
		document.getElementById('listOfAdditionalEducations').appendChild(p);
		j++;
	}
	document.getElementById('listOfAdditionalEducationsAdd').onchange = e => {enterNewStudentDeleteProgramFromSelect(e.target.selectedIndex);};
	document.getElementById('listOfAdditionalEducations').onchange = e => {enterControlSystemEventsThisProgram(e.target.value);};
}
//Автозаполнение полей ученика
async function enter4() {
	document.getElementById('createStudentName').value = "Студент";
	document.getElementById('createStudentFIO').value = "Студент Студентович Студентов";
	document.getElementById('createStudentBirthday').value = "2005-03-03";
	document.getElementById('createStudentFamilyStatus').value = "полная";
	flst = 1;
	document.getElementById('createStudentPFDO').value = "88006660606";
}
//Открытие создания семьи
export async function enter6(a) {
	ReactDOM.render(element, document.getElementById('pasteFa'));
	switch(a) {
		case 'полная':
		ReactDOM.render(element2, document.getElementById('familyHolder'));
		flst=1;
		break;
		case 'неполная':
		ReactDOM.render(element3, document.getElementById('familyHolder'));
		flst=2;
		break;
		case 'опекун':
		ReactDOM.render(element4, document.getElementById('familyHolder'));
		flst=4;
		break;
	}
}
//Заполнение поля неполной семьи в зависимости от матери/отца-одиночки или опекуна
export async function enter9(a) {
	alert("flst: "+ flst);
	switch(a) {
		case 'ж':
		if (flst==2||flst==3){
			flst=2;
		}
		else {
			flst=4;
		}
		break;
		case 'м':
		if (flst==2||flst==3){
			flst=3;
		}
		else {
			flst=5;
		}
		break;
	}
}

export async function enterControlSystemEventsThisProgram(a) {
	//Проверка, нет ли уже этого направления в select
	let kolstr = document.getElementById("listOfAdditionalEducationsAdd").options.length;
	let i=0;
	let j=0;
	while(i<kolstr){
		if(document.getElementById("listOfAdditionalEducationsAdd").options[i].value==a) j++;
		i++;
	}
	if (j>0){
		alert("Это направление уже есть в списке!");
	}
	else{
		//Добавление выбранного направления в select
		let responsedirection = await fetch(port_create_program, {
			method: 'GET',
			headers: {
			Authorization: `Bearer ${localStorage.token}` ,
			'Content-Type': 'application/json;charset=utf-8'
			},
			});
		let resultdirection = await responsedirection.json();
		let h=0;
		while(a!=resultdirection.rows[h].id) h++;
		let thisDirection = resultdirection.rows[h].name;
		let p = document.createElement('option')
		p.value=resultdirection.rows[h].id;
		let txt = document.createTextNode(thisDirection);
		p.appendChild(txt);
		document.getElementById('listOfAdditionalEducationsAdd').appendChild(p);
	}
}
//Удаление программы из select-а при клике
export async function enterNewStudentDeleteProgramFromSelect(a) {
	document.getElementById("listOfAdditionalEducationsAdd").options[a] = null;
}



export default Page;