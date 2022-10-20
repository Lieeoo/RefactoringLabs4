import logo from './images/logo.svg';
import { BrowserRouter as Router, Route, Routes, useRouteMatch, Switch } from "react-router-dom";

// Авторизация
import LoginPage from "./login.js"; // Авторизация +
import Profile from "./Profile.js"; // Профиль +
import Classroom from "./Classroom.js"; // Классное руководство
import VR from "./VR.js"; // Воспитательная работа
import VRred from "./VRred.js"; // Редактирование воспитательного события
import AS from "./AS.js"; // Архив
import Clred from "./Clred.js"; // Редактирование ученика в классе
import MO from "./MO.js"; // менеджер отчетов, вкладка 1
import MO2 from "./MO2.js"; // менеджер отчетов, вкладка 2
import MO3 from "./MO3.js"; // менеджер отчетов, вкладка 3
import US from "./US.js"; // Управление системой
import CVR from "./CVR.js"; // Цель воспитательной работы
import NewUser from "./NewUser.js"; // Создание нового пользователя
import NewSt from "./NewSt.js"; // Новый ученик
import NewEv from "./NewEv.js"; // Новый ивент
import ControlSystemEvents from "./ControlSystemEvents.js"; // Управление системой, воспитательный события

function App() {
  return (
	<Router>
		<div className="page">
			<Routes>
				<Route path="/" exact element={<LoginPage/>}/>
				<Route path="/profile" exact element={<Profile/>}/>
				<Route path="/classroom" exact element={<Classroom/>}/>
				<Route path="/VR" exact element={<VR/>}/>
				<Route path="/VRred" exact element={<VRred/>}/>
				<Route path="/AS" exact element={<AS/>}/>
				<Route path="/Clred" exact element={<Clred/>}/>
				<Route path="/MO" exact element={<MO/>}/>
				<Route path="/MO2" exact element={<MO2/>}/>
				<Route path="/MO3" exact element={<MO3/>}/>
				<Route path="/US" exact element={<US/>}/>
				<Route path="/CVR" exact element={<CVR/>}/>
				<Route path="/NewUser" exact element={<NewUser/>}/>
				<Route path="/NewSt" exact element={<NewSt/>}/>
				<Route path="/NewEv" exact element={<NewEv/>}/>
				<Route path="/ControlSystemEvents" exact element={<ControlSystemEvents/>}/>
			</Routes>
		</div>
	</Router>
  );
}


export default App;
