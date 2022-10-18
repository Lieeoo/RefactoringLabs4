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
										<button className="TBVR"> Сформировать отчет </button> 
									</div>
									<div className="ListPr3">
										<div className="ListPrText">Учреждения:</div>
										<div className="MOCl">
										<p>Учреждение1</p>
										<p>Учреждение2</p>
										</div>
									</div>
									<div className="ListPr3">
										<div className="ListPrText">Секции:</div>
										<div className="MOCl">
										<p>Секция1</p>
										<p>Секция2</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="ClCl">
						<a href="MOList"> 
							<div className="ClnClVR">
							Классы
							</div>
						</a>
						<div className="ClyClVR">
						Воспитательная работа
						</div>
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