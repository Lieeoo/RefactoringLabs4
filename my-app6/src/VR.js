import './ProjectCSS.css';

import TopPanel from "./TopPanel.js";

function Page() {
	return (
		<div className="pages">
				< TopPanel />
				<div className="Test">
					<div className="Blockk">
						<div className="ListSt">
							<p>Список событий</p>
							<div id="1" className="TextStyleNVR">
							<a href="VRList"> 
								<p>"УРОК ГОРОДА"</p>
								<p>15.03.2022, урок города, познавательное</p>
							</a>
									<div className="ListPr">
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
										<div className="box">
											<a href="VRred"> 
												<button className="TBVR"> Редактировать </button> 
											</a>
											<a href="VRsoh"> 
												<button className="TBVR"> Завершить </button> 
											</a>
										</div>
									</div>
							</div>
							<p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p>
							<div id="2" className="TextStyleNVR"><p>НАЗВАНИЕ СОБЫТИЯ</p><p>дата, форма,направление</p></div>
							<div id="3" className="TextStyleNVR"><p>НАЗВАНИЕ СОБЫТИЯ</p><p>дата, форма,направление</p></div>
						</div>
						<div className="Fl">
						Фильтры:
							<div className="FlText">Дата события:<input type="text"></input></div>
							<div className="FlText">Форма воспитательной работы:<input type="text"></input></div>
							<div className="FlText">Кто проводит:<input type="text"></input></div>
							<div className="FlText">Направление:<input type="text"></input></div>
							<div className="FlText">Сетевое взаимодействие:<input type="text"></input></div>
							<div className="FlText">Проект:<input type="text"></input></div>
							<div className="FlText"><p>Организации:</p>
							<div className="FlOr">
								<p>Орг1<input type="checkbox"></input></p>
								<p>Орг2<input type="checkbox"></input></p>
								<p>Орг3<input type="checkbox"></input></p>
								<p>Орг4<input type="checkbox"></input></p>
							</div>
							</div>
						</div>
					</div>
					<div className="ClCl">
						<div className="ClyClVR">
						Воспитательные события
						</div>
						<a href="CVR"> 
						<div className="ClnClVR">
						Цели воспитательной работы
						</div>
						</a>
						<a href="ASList"> 
							<div className="ClnClVR">
							Архив событий
							</div>
						</a>
					</div>
				</div>

		</div>
  );	
}

export default Page;