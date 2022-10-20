import './mavrCSS.css';

import icon from "./images/icon.png"
let ss = "";
//let ss = "http://mavr.kemsu.ru/";

export function TopPanel() {
	return(
		<div className="top-panel">
			<div> 
				<img src={icon} className="icon" alt /> 
			</div>
			
			<div>
				<a href={ss+"classroom"}> 
					<button id="clruk" className="topbutton" > Классное руководство </button> 
				</a>
			</div>
			
			<div> 
				<a href={ss+"VR"}> 
					<button id="vrab" className="topbutton"> Воспитательная работа </button> 
				</a> 
			</div>
			
			<div>
				<a href={ss+"MO"}> 
					<button id="mo" className="topbutton"> Менеджер отчётов </button> 
				</a>
			</div>	
				
			<div> 
				<a href={ss+"US"}> 
					<button id="upr" className="topbutton"> Управление системой </button> 
				</a>
			</div>
			
			<div> 
				<a href={ss+"profile"}> 
					<button id="prped" className="topbutton"> Профиль педагога </button> 
				</a>
			</div>
			
			<div> 
				<a href={"http://localhost:3000"}> 
					<button className="topbutton" onClick={function(){al();}}> Выход из системы </button> 
				</a>
			</div>
			
		</div>
	);

}

export function LeftPanelVR() {
	return(
		<div className="ClCl">
			<a href="VR"><button id="vr" className="leftPanel">Воспитательные события</button></a> 
			<a href="CVR"><button id="cvr" className="leftPanel">Цели воспитательной работы</button></a>
			<a href="AS"><button id="as" className="leftPanel">Архив событий</button></a>
		</div>
	);

}

export function LeftPanelO() {
	return(
		<div className="ClCl">
			<a href="MO"><button id="o" className="leftPanel">Занятость учащихся</button></a> 
			<a href="MO2"><button id="o2" className="leftPanel">Работа с классами</button></a>
		</div>
	);

}

export function LeftPanelUS() {
	return(
		<div className="ClCl">
			<a href="US"><button id="controlUsers" className="leftPanel">Пользователи</button></a> 
			<a href=""><button id="controlClasses" className="leftPanel">Классы</button></a>
			<a href="ControlSystemEvents"><button id="controlEvents" className="leftPanel">Воспитательные события</button></a>
			<a href=""><button id="controlPlans" className="leftPanel">Планы воспитательной работы</button></a>
		</div>
	);

}

async function al() {
	localStorage.clear();
}