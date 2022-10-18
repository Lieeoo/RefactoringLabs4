import './ProjectCSS.css';

import TopPanel from "./TopPanel.js";

function Page() {
	return (
		<div className="pages">
				< TopPanel />
				<div className="Test">
					<div className="Blockk">
						<div className="ListSt">
							<div className="TextStyleNVR">
							<a href="ASList"> 
							"Отчет"
							</a>
								<div className="OTB">
									<div className="ListPr3">
										<div className="ListPrText">Пофамильно:<input className="ListPrText2" type="checkbox"></input></div>
										<div className="ListPrText">Количественный:<input className="ListPrText2" type="checkbox"></input></div>
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
							</div>
						</div>
					</div>
					<div className="ClCl">
						<div className="ClyClVR">
						Классы
						</div>
						<a href="MO2List"> 
							<div className="ClnClVR">
							Воспитательная работа
							</div>
						</a>
						<a href="MO3List"> 
							<div className="ClnClVR">
							Общие
							</div>
						</a>
					</div>
				</div>

		</div>
  );	
}

export default Page;