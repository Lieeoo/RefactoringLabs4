import './ProjectCSS.css';
import logo from './icon.png';
import './mavrCSS.css';

import {enter6, enter9, createStudentWhiteFamilystatus, createStudentWriteEducationLevelMother, createStudentWriteWorkMother, createStudentWriteEducationLevelFather, createStudentWriteWorkFather, createStudentWriteEducationLeveGuardian, createStudentWriteWorkGuardian} from "./NewSt.js";
import {enter10} from "./Classroom.js";
import {entervr} from "./VR.js";
import {enternewcl, enternewcl2, enterus2, enterus3} from "./US.js";
import {enterControlSystemEvents,enterControlSystemEventsShowDirections, directionDelete,enterControlSystemEventsDeleteDirections,enterControlSystemEventsDeleteOrganizations,enterControlSystemEventsThisDirection,enterControlSystemEventsDeleteDirectionFromSelect,enterControlSystemEventsCreateProgram,programDelete,enterControlSystemEventsDeletePrograms} from "./ControlSystemEvents.js";

let port_log = "http://mavr.kemsu.ru:5500/API/user/login";
let profile="http://mavr.kemsu.ru/profile";
let prof = "http://localhost:3000/profile";

export function ProfileOfStudent() {
  return (
	<div id="SP" className="St">
		<h2 id="fio"></h2>
		<div className="TextBox5">
			<div id="sex"></div><div>,&nbsp;</div><div>учится</div>
		</div>
		<hr className="hrEventProfile"/>
			<div className="TextBox"><div>Состояние семьи:&nbsp;</div><div id="profileFamilyCondition"></div></div>
			<div className="TextBox"><div>Детей в семье:&nbsp;</div><div>1</div></div>
			<div className="TextBox"><div>Достаток семьи:&nbsp;</div><div id="profileFamilysMoney"></div></div>
		<div>
		<hr className="hrEventProfile"/>
			<p id="profileInfoimationAboutParents">Информация о родителях</p>
			<div id="profileInfoimationAboutFamily">
			</div>
		</div>
		<hr className="hrEventProfile"/>
		<p>Дополнительное образование</p>
		<div className="TextBox">
			<div style={{}}>Сертификат ПФДО:&nbsp;</div><div id="PFDO">785735572</div>
		</div>
		<div id="studentProfileSetAdditionalEducation">
		</div>
		<button id="profileEdit" className="profile-button"><img src="https://i.ibb.co/9VHb7z3/edit.png" className="profile-button2"></img></button> 
		<button id="profileDelete" className="profile-button"><img src="https://i.ibb.co/vJC86mY/trash.png" className="profile-button2"></img></button>
		<button id="addAdditionalEducation" className="profile-button"><img src="https://i.ibb.co/Tbth16X/add.png" className="profile-button2"></img></button>
	</div>
  );
}

export function AdditionalEducation() {
  return (
		<div className="TextBox2">
			<div id="profileOrganizationOfAdditionalEducation" className="TextBox3">
				<div className="TextBox4">учреждение</div>
			</div>
			<div id="profileDirection" className="TextBox3">
				<div className="TextBox4">направление</div>
			</div>
			<div id="profileProgram" className="TextBox3">
				<div className="TextBox4">программа</div>
			</div>
		</div>
  );
}

export function EvProf() {
  return (
		<div id="EP" className="ListPr">
			<div className="vospSobTextInProfile"><div>Дата события:&nbsp;</div><div id="profileEventDateOfEvent"></div></div>
			<div className="vospSobTextInProfile"><div>Форма воспитательной работы:&nbsp;</div><div id="profileEventFormOfEducationalActivity"></div></div>
			<div className="vospSobTextInProfile"><div>Кто проводит:&nbsp;</div><div id="profileEventWhoProvide"></div></div>
			<div id="profileEventDirection" className="vospSobTextInProfile"><div>Направление:&nbsp;</div></div>
			<div className="vospSobTextInProfile"><div>Сетевое взаимодействие:&nbsp;</div><div id="profileEventNetworkConnection"></div></div>
			<div className="vospSobTextInProfile"><div>Проект:</div><div id="profileEventProject" className="paddingLeft"></div></div>
			<hr className="hrEventProfile"/>
			<div><div className="vospSobTextInProfile">Учащиеся:</div><div id="profileEventStudents" className="ucheniki2"></div></div>
			<hr className="hrEventProfile"/>
			<div><div className="vospSobTextInProfile">Приглашенные организации:</div><div id="profileEventInvitedOrganizations" className="vospSobTextInProfile"></div></div>
			<hr className="hrEventProfile"/>
			<div><div className="vospSobTextInProfile">Приглашенные родители:</div><div id="profileEventInvitedParents" className="vospSobTextInProfile"></div></div>
			<hr className="hrEventProfile"/>
			<div className="vospSobTextInProfile"><div>Сертификат:&nbsp;</div><div id="profileEventSertificate"></div></div>
			<div className="box">
				<a href="VRred"> 
					<button className="profile-button"><img src="https://i.ibb.co/9VHb7z3/edit.png" className="profile-button2"></img></button> 
				</a>
				<a href="VRsoh"> 
					<button className="profile-button"><img src="https://i.ibb.co/h2SfXRm/performed.png" className="profile-button2"></img></button> 
				</a>
			</div>
		</div>
  );
}

export function ArProf() {
  return (
		<div id="EP" className="ListPr">
			<div className="ListPrText">Дата события: 15.03.22</div>
			<div className="ListPrText">Форма воспитательной работы: урок города</div>
			<div className="ListPrText">Кто проводит: классный руководитель</div>
			<div className="ListPrText">Направление: познавательное</div>
			<div className="ListPrText">Сетевое взаимодействие: Библиотека "Читай - город"</div>
			<div className="ListPrText">Проект: "Живые уроки"</div>
			<p> </p>
			<div className="ListPrText">Приглашенные организации: орг1, орг2</div>
			<div className="ListPrText">Приглашенные родители:</div>
			<div className="ListPrText">Участники:</div>
			<p> </p>
			<div className="ListPrText">Сертификат:</div>
		</div>
  );
}

export function OAS() {
  return (
		<div className="OTB">
			<div className="ListPr3">
				<div className="ListPrText">Пофамильно:<input className="ListPrText2" type="checkbox"></input></div>
				<div className="ListPrText">Количественный:<input className="ListPrText2" type="checkbox"></input></div>
				<div className="ListPrText">Процентный:<input className="ListPrText2" type="checkbox"></input></div>
				<button className="TBVR"> Сформировать отчет </button> 
			</div>
			<div className="ListPr3">
				<div className="ListPrText">Классы:</div>
				<div className="MOCl">
					<p>Класс1</p>
					<p>Класс2</p>
				</div>
			</div>
		</div>
  );
}

export function NewStFa() {
  return (
		<div>
			Семья:
			<hr/>
			<div>
				<p>Достаток семьи:
					<select id="createStudentFamilysMoney" onChange={e => {createStudentWhiteFamilystatus = e.target.value}}>
						<option>низкий доход</option>
						<option>средний доход</option>
						<option>вполне благополучная семья</option>
					</select>
				</p>
				<div id="familyHolder">
				</div>
			</div>
			<hr/>
		</div>
  );
}

export function NewStFaPol() {
  return (
	<div className="TextStyleNVR3Holder">
		<div className="TextStyleNVR3">
			Мать:
			<div>
				<p>Образовательный уровень:</p>
				<select id="createStudentEducationLevelMother" onChange={e => {createStudentWriteEducationLevelMother = e.target.value}}>>
					<option>высшее</option>
					<option>незаконченное высшее</option>
					<option>средне-специальное</option>
					<option>среднее</option>
					<option>неполное среднее</option>
				</select>
				<p>Занятость:</p>
				<select id="createStudentWorkMother" onChange={e => {createStudentWriteWorkMother = e.target.value}}>
					<option>работник по найму</option>
					<option>предпринимательская деятельность</option>
					<option>безработный</option>
					<option>декретный отпуск</option>
					<option>инвалид</option>
					<option>пенсионер</option>
				</select>
			</div>
		</div>
		<div className="TextStyleNVR3">
			Отец:
			<div>
				<p>Образовательный уровень:</p>
				<select id="createStudentEducationLevelFather" onChange={e => {createStudentWriteEducationLevelFather = e.target.value}}>
					<option>высшее</option>
					<option>незаконченное высшее</option>
					<option>средне-специальное</option>
					<option>среднее</option>
					<option>неполное среднее</option>
				</select>
				<p>Занятость:</p>
				<select id="createStudentWorkFather" onChange={e => {createStudentWriteWorkFather = e.target.value}}>
					<option>работник по найму</option>
					<option>предпринимательская деятельность</option>
					<option>безработный</option>
					<option>декретный отпуск</option>
					<option>инвалид</option>
					<option>пенсионер</option>
				</select>
			</div>
		</div>
	</div>
  );
}

export function NewStFaNepol() {
  return (
	<div className="TextStyleNVR3Holder">
		<div className="TextStyleNVR3">
			<div>
				<p>Пол:<select onChange={e => {enter9(e.target.value); alert(e.target.value);}}>
										<option value="ж">ж</option>
										<option value="м">м</option>
									</select></p>
				<p>Образовательный уровень:</p>
				<select id="createStudentEducationLeveGuardian" onChange={e => {createStudentWriteEducationLeveGuardian = e.target.value}}>
					<option>высшее</option>
					<option>незаконченное высшее</option>
					<option>средне-специальное</option>
					<option>среднее</option>
					<option>неполное среднее</option>
				</select>
				<p>Занятость:</p>
				<select id="createStudentWorkGuardian" onChange={e => {createStudentWriteWorkGuardian = e.target.value}}>
					<option>работник по найму</option>
					<option>предпринимательская деятельность</option>
					<option>безработный</option>
					<option>декретный отпуск</option>
					<option>инвалид</option>
					<option>пенсионер</option>
				</select>
			</div>
		</div>
	</div>
  );
}

export function NewStFaOp() {
  return (
	<div className="TextStyleNVR3Holder">
		<div className="TextStyleNVR3">
			<div>
				<p>Пол:<select onChange={e => {enter9(e.target.value)}}>
										<option value="ж">ж</option>
										<option value="м">м</option>
									</select></p>
				<p>Образовательный уровень:</p>
				<select id="createStudentEducationLeveGuardian" onChange={e => {createStudentWriteEducationLeveGuardian = e.target.value}}>
					<option>высшее</option>
					<option>незаконченное высшее</option>
					<option>средне-специальное</option>
					<option>среднее</option>
					<option>неполное среднее</option>
				</select>
				<p>Занятость:</p>
				<select id="createStudentWorkGuardian" onChange={e => {createStudentWriteWorkGuardian = e.target.value}}>
					<option>работник по найму</option>
					<option>предпринимательская деятельность</option>
					<option>безработный</option>
					<option>декретный отпуск</option>
					<option>инвалид</option>
					<option>пенсионер</option>
				</select>
			</div>
		</div>
	</div>
  );
}

export function ClStudFaPol() {
  return (
	<div className="TextStyleNVR3Holder">
		<div className="TextStyleNVR3">
			Мать:
			<div>
				<p className="displayFlex"><div>Образовательный уровень:&nbsp;</div><div id="profileStudentEducationLeveMother"></div></p>
				<p className="displayFlex"><div>Занятость:&nbsp;</div><div id="profileStudentWorkMother"></div></p>
			</div>
		</div>
		<div className="TextStyleNVR3">
			Отец:
			<div>
				<p className="displayFlex"><div>Образовательный уровень:&nbsp;</div><div id="profileStudentEducationLeveFather"></div></p>
				<p className="displayFlex"><div>Занятость:&nbsp;</div><div id="profileStudentWorkFather"></div></p>
			</div>
		</div>
	</div>
  );
}

export function ClStudFaNepol() {
  return (
	<div className="TextStyleNVR3Holder">
		<div className="TextStyleNVR3">
			<div>
				<p className="displayFlex"><div>Образовательный уровень:&nbsp;</div><div id="profileStudentEducationLeveGuardian"></div></p>
				<p className="displayFlex"><div>Занятость:&nbsp;</div><div id="profileStudentWorkGuardian"></div></p>
			</div>
		</div>
	</div>
  );
}

export function StudProfRed() {
  return (
	<div id="SPRed" className="St">
		<div>Фамилия:<input id="profileStudentNameEdit" type="text"></input></div>
		<div>ФИО:<input id="profileStudentFIOEdit" type="text" style={{width: 250}}></input></div>
		<div className="TextBox5">
			Пол:<select id="profileStudentSexEdit">
					<option>мужской</option>
					<option>женский</option>
				</select><div>,</div><div>учится</div>
		</div>
		<div>Группа риска:<select id="profileStudentGroupOfRiskEdit">
								<option>нет</option>
								<option>девиантное поведение</option>
								<option>неуспеваемость</option>
								<option>иное</option>
							</select>
		</div>
		<div>Дата рождения:<input id="profileStudentBirthdayEdit" type="date"></input></div>
			<div className="TextBox"><div>Состояние семьи: </div><select id="profileStudentFamilyStatusEdit" onChange={e => {enter10(e.target.value)}}>
				<option value="полная">полная</option>
				<option value="неполная">неполная</option>
				<option value="опекун">опекун</option>
			</select></div>
			<div className="TextBox"><div>Детей в семье: </div><div>1</div></div>
			<div className="TextBox"><div>Достаток семьи: </div><select id="profileStudentFamilysMoneyEdit">
						<option value="низкий доход">низкий доход</option>
						<option value="средний доход">средний доход</option>
						<option value="вполне благополучная семья">вполне благополучная семья</option>
					</select></div>
		<div>
			<p id="profileStudentInformationAboutParentsEdit">Информация о родителях</p>
			<div id="profileStudentInformationAboutParentsEditContainer">
			</div>
		</div>
		<p>Дополнительное образование</p>
		<div className="TextBox">
			<div style={{}}>Сертификат ПФДО: </div><input id="profileStudentPFDOEdit" type="text"></input>
		</div>
		<div className="TextBox2">
			<div className="TextBox3">
				<div className="TextBox4">учреждение</div>
				<div className="TextBox4">МБОУ "СОШ №11"</div>
			</div>
			<div className="TextBox3">
				<div className="TextBox4">направление</div>
				<div className="TextBox4">техническое</div>
			</div>
			<div className="TextBox3">
				<div className="TextBox4">программа</div>
				<div className="TextBox4">"фиксики"</div>
			</div>
		</div>
		<button id="profileStudentEditAccept" className="profile-button"><img src="https://i.ibb.co/WpvGmC9/save.png" className="profile-button2"></img></button> 
		<button id="profileStudentEditCancel" className="profile-button"><img src="https://i.ibb.co/yBBD6GY/cancel.png" className="profile-button2"></img></button>
	</div>
  );
}

export function Overlay() {
  return (
	  <div>
		<div className="overlay"></div>
		<div className="overlay2" id="blockAllToEdit"></div>
	</div>
  );
}

export function EventCreateClass() {
  return (
	<div className="OTB">
		<div className="ListPr4">
			<p>Номер класса:<input id="createClassNumber" type="text"></input></p>
			<p>Буква класса:<input id="createClassLetter" type="text"></input></p>
			<button className="TBVR" onClick={function(){enternewcl();}}> Создать класс </button>
		</div>
	</div>
  );
}

export function EventDelClass() {
  return (
	<div className="OTB">
		<div className="ListPr4">
			<p>Класс:
				<select id="deleteClassSelect">
				</select>
			</p>
			<button className="TBVR" onClick={function(){}}> Удалить класс </button>
		</div>
	</div>
  );
}

export function EventCreateNapr() {
  return (
	<div className="OTB">
		<div className="ListPr4">
			<p>Название направления:<input id="createDirection" type="text"></input></p>
			<button className="TBVR" onClick={function(){enterus3();}}> Создать направление </button>
		</div>
	</div>
  );
}

export function EventCreateOrganization() {
  return (
	<div className="OTB">
		<div className="ListPr4">
			<p>Название организации дополнительного образования:<input id="EventCreateOrganizationInputName" type="text"></input></p>
			<p>Описание:<textarea id="EventCreateOrganizationInputDescriprtion" type="text"></textarea></p>
			<button className="TBVR" onClick={function(){enterControlSystemEvents();}}> Создать </button>
		</div>
	</div>
  );
}

export function EventShowDirections() {
  return (
	<div className="OTB">
		<div className="ListPr4">
			<p>Направления:<select id="showDirectionsSelect" size="10"></select></p>
			<button className="TBVR" onClick={function(){enterControlSystemEventsDeleteDirections();}}> Удалить выбранное направление </button>
		</div>
	</div>
  );
}

export function EventShowOrganizations() {
  return (
	<div className="OTB">
		<div className="ListPr4">
			<p>Организации:<select id="showOrganizationsSelect" size="10"></select></p>
			<button className="TBVR" onClick={function(){enterControlSystemEventsDeleteDirections();}}> Удалить выбранную организацию </button>
		</div>
	</div>
  );
}

export function EventCreateProgram() {
  return (
	<div className="OTB">
		<div className="ListPr4">
			<p>Название программы:<input id="createProgramNameInput" type="text"></input></p>
			<p>Описание:<textarea id="createProgramDescriprtionInput" type="text"></textarea></p>
			<p>Учреждение:<select id="createProgramShowOrganizationsSelect">
			<option selected disabled></option>
			</select></p>
			<p>Направление:<select id="createProgramShowDirectionsSelectChoose" size="3" onChange={e => {enterControlSystemEventsDeleteDirectionFromSelect(e.target.selectedIndex)}}></select>
			<select id="createProgramShowDirectionsSelect">
			<option selected disabled></option>
			</select></p>
			<button className="TBVR" onClick={function(){enterControlSystemEventsCreateProgram();}}> Создать направление </button>
		</div>
	</div>
  );
}

export function EventShowPrograms() {
  return (
	<div className="OTB">
		<div className="ListPr4">
			<p>Программы:<select id="showProgramSelect" size="10"></select></p>
			<button className="TBVR" onClick={function(){enterControlSystemEventsDeletePrograms();}}> Удалить выбранную программу </button>
		</div>
	</div>
  );
}

export function CrPlan() {
  return (
	<div className="OTB">
		<div className="ListPr4">
			<p>Год плана:<input id="createYearPlanInputYear" type="text"></input></p>
			<p>Цели воспитательной работы:</p>
			<p><textarea id="createYearPlanInputGoalsOfEducationalWork" type="text" style={{width: 500, height:100}}></textarea></p>
			<p>Целевые приоритеты для учащихся с 1 по 4 кл:</p>
			<p><textarea id="createYearPlanInputTargetPriorities14" type="text" style={{width: 500, height:100}}></textarea></p>
			<p>Целевые приоритеты для учащихся с 5 по 9 кл:</p>
			<p><textarea id="createYearPlanInputTargetPriorities59" type="text" style={{width: 500, height:100}}></textarea></p>
			<p>Целевые приоритеты для учащихся с 10 по 11 кл:</p>
			<p><textarea id="createYearPlanInputTargetPriorities1011" type="text" style={{width: 500, height:100}}></textarea></p>
			<p>Задачи воспитательной работы:</p>
			<p><textarea id="createYearPlanInputTasksOfEducationalWork" type="text" style={{width: 500, height:100}}></textarea></p>
			<button className="TBVR" onClick={function(){enterus2();}}> Задать план школы </button>
		</div>
	</div>
  );
}

export function OCl2() {
  return (
		<div className="OTB2">
			<div className="displayFlex">
				<div className="ListPr3">
					<div className="ListPrText">Пофамильно:<input id="opof" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Количественный:<input id="okol" className="ListPrText2" type="checkbox"></input></div>
				</div>
				<div className="ListPr3">
					<div className="ListPrText">Класс:</div>
					<select id="oCl2">
					</select>
				</div>
			</div>
			<button id="orClb" className="TBVR"> Сформировать отчет </button> 
		</div>
  );
}

export function OCl3() {
  return (
		<div className="OTB2">
			<div className="displayFlex">
				<div className="ListPr3">
					<div className="ListPrText">Мальчиков:<input id="omal" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Девочек:<input id="odev" className="ListPrText2" type="checkbox"></input></div>
				</div>
				<div className="ListPr3">
					<div className="ListPrText">Класс:</div>
					<select id="oCl3">
					</select>
				</div>
			</div>
			<button id="orClb3" className="TBVR"> Сформировать отчет </button> 
		</div>
  );
}

export function OCl4() {
  return (
		<div className="OTB2">
			<div className="displayFlex">
				<div className="ListPr3">
					<div className="ListPrText">Всего семей:<input id="osemvs" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Полных:<input id="osempol" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Неполных:<input id="osemnepol" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Опекунов:<input id="osemo" className="ListPrText2" type="checkbox"></input></div>
				</div>
				<div className="ListPr3">
					<div className="ListPrText">Класс:</div>
					<select id="oCl4">
					</select>
				</div>
			</div>
			<button id="orClb4" className="TBVR"> Сформировать отчет </button> 
		</div>
  );
}

export function OCl5() {
  return (
		<div className="OTB2">
			<div className="displayFlex">
				<div className="ListPr3">
					<div className="ListPrText">Многодетные:<input id="omn" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Малообеспеченные:<input id="omob" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Матери-одиночки:<input id="omo" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Отцы-одиночки:<input id="ooo" className="ListPrText2" type="checkbox"></input></div>

				</div>
				<div className="ListPr3">
					<div className="ListPrText">Класс:</div>
					<select id="oCl5">
					</select>
				</div>
			</div>
			<button id="orClb5" className="TBVR"> Сформировать отчет </button> 
		</div>
  );
}

export function OCl6() {
  return (
		<div className="OTB2">
			<div className="displayFlex">
				<div className="ListPr3">
					<div className="ListPrText">Низкий:<input id="oniz" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Средний:<input id="osr" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Вполне благополучные:<input id="obl" className="ListPrText2" type="checkbox"></input></div>
				</div>
				<div className="ListPr3">
					<div className="ListPrText">Класс:</div>
					<select id="oCl6">
					</select>
				</div>
			</div>
			<button id="orClb6" className="TBVR"> Сформировать отчет </button> 
		</div>
  );
}

export function OCl7() {
  return (
		<div className="OTB2">
			<div className="displayFlex">
				<div className="ListPr3">
					<div className="ListPrText">Высшее:<input id="ovi" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Незаконченное высшее:<input id="onevi" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Средне-специальное:<input id="osrsp" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Среднее:<input id="osred" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Неполное среднее:<input id="onepsr" className="ListPrText2" type="checkbox"></input></div>
				</div>
				<div className="ListPr3">
					<div className="ListPrText">Класс:</div>
					<select id="oCl7">
					</select>
				</div>
			</div>
			<button id="orClb7" className="TBVR"> Сформировать отчет </button> 
		</div>
  );
}

export function OCl8() {
  return (
		<div className="OTB2">
			<div className="displayFlex">
				<div className="ListPr3">
					<div className="ListPrText">Работник по найму:<input id="odevpov" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Предпринимательская деятельность:<input id="oneusp" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Безработный:<input id="oin" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Декретный отпуск:<input id="odevpov" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Инвалид:<input id="oneusp" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Пенсионер:<input id="oin" className="ListPrText2" type="checkbox"></input></div>
				</div>
				<div className="ListPr3">
					<div className="ListPrText">Класс:</div>
					<select id="oCl8">
					</select>
				</div>
			</div>
			<button id="orClb8" className="TBVR"> Сформировать отчет </button> 
		</div>
  );
}

export function OCl9() {
  return (
		<div className="OTB2">
			<div className="displayFlex">
				<div className="ListPr3">
					<div className="ListPrText">Девиантное поведение:<input id="odevpov" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Неуспеваемость:<input id="oneusp" className="ListPrText2" type="checkbox"></input></div>
					<div className="ListPrText">Иное:<input id="oin" className="ListPrText2" type="checkbox"></input></div>
					<button id="orClb8" className="TBVR"> Сформировать отчет </button> 
				</div>
				<div className="ListPr3">
					<div className="ListPrText">Класс:</div>
					<select id="oCl8">
					</select>
				</div>
			</div>
			<button id="orClb9" className="TBVR"> Сформировать отчет </button> 
		</div>
  );
}

export function OClNORM() {
  return (
		<div className="ONORMVIR">
			<div className="OClNORMBlock">
				<div><b>По учащимся класса</b></div>
				<div className="OClNORMBlockIn">
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Пофамильно:</div><input id="reportQuantityName" className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Количественный:</div><input id="reportQuantity" className="ListPrText2" type="checkbox"></input></div>
				</div>
				<hr/>
				<div><b>По количеству мальчиков/девочек в классе:</b></div>
				<div className="OClNORMBlockIn">
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Мальчиков:</div><input id="reportSexMale" className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Девочек:</div><input id="reportSexFemale" className="ListPrText2" type="checkbox"></input></div>
				</div>
				<hr/>
				<div><b>Количественный по статусу семей:</b></div>
				<div className="OClNORMBlockIn">
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Всего семей:</div><input id="reportFamilyAll" className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Полных:</div><input id="reportFamilyFull" className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Неполных:</div><input id="reportFamilyNoFull" className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Опекунов:</div><input id="reportFamilyGuardian" className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Многодетные:</div><input id="reportFamilyManyChildren" className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Малообеспеченные:</div><input id="reportFamilyLowMoney" className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Отцы-одиночки:</div><input id="reportFamilyLonelyFathers" className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Матери-одиночки:</div><input id="reportFamilyLonelyMothers" className="ListPrText2" type="checkbox"></input></div>
				</div>
				<hr/>
				<div><b>По материальному состоянию семей</b></div>
				<div className="OClNORMBlockIn">
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Низкий:</div><input id="reportFamilyMaterialConditionLow" className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Средний:</div><input id="reportFamilyMaterialConditionMiddle" className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Вполне благополучный:</div><input id="reportFamilyMaterialConditionMany" className="ListPrText2" type="checkbox"></input></div>
				</div>
				<hr/>
			</div>
			<div className="OClNORMBlock">
				<div><b>По образовательному уровню родителей:</b></div>
				<div className="OClNORMBlockIn">
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Высшее:</div><input id="reportFamilyEducationHigh" className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Незаконченное высшее:</div><input id="reportFamilyEducationHighNoFull" className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Средне-специальное:</div><input id="reportFamilyEducationMiddleSpecial" className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Среднее:</div><input id="reportFamilyEducationMiddle" className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Неполное среднее:</div><input id="reportFamilyEducationMiddleNoFull" className="ListPrText2" type="checkbox"></input></div>
				</div>
				<hr/>
				<div><b>По занятости родителей:</b></div>
				<div className="OClNORMBlockIn">
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Работник по найму:</div><input className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Предпринимательская деятельность:</div><input className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Безработный:</div><input className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Декретный отпуск:</div><input className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Инвалид:</div><input className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Пенсионер:</div><input className="ListPrText2" type="checkbox"></input></div>
				</div>
				<hr/>
				<div><b>По группам риска:</b></div>
				<div className="OClNORMBlockIn">
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Девиантное поведение:</div><input className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Неуспеваемость:</div><input className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Иное:</div><input className="ListPrText2" type="checkbox"></input></div>
				</div>
				<hr/>
			</div>
		</div>
  );
}

export function OClNORM2() {
  return (
		<div className="ONORMVIR">
			<div className="OClNORMBlock">
				<div><b>По учащимся, имеющим сертификат ПФДО</b></div>
				<div className="OClNORMBlockIn">
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Пофамильно:</div><input id="opof" className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Количественный:</div><input id="okol" className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Процентный:</div><input id="opr" className="ListPrText2" type="checkbox"></input></div>
				</div>
				<hr/>
			</div>
			<div className="OClNORMBlock">
				<div><b>По занятости учащихся:</b></div>
				<div className="OClNORMBlockIn">
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Количественный по каждому учреждению:</div><input className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Количественный по секциям каждого учреждения:</div><input className="ListPrText2" type="checkbox"></input></div>
					<div className="OClNORMBlockInItem"><div className="OClNORMBlockInName">Количественный по секциям дополнительного образования школы:</div><input className="ListPrText2" type="checkbox"></input></div>
				</div>
				<hr/>
			</div>
		</div>
  );
}