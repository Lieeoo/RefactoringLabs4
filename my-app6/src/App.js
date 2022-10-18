import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, useRouteMatch, Switch } from "react-router-dom";

// Авторизация
import LoginPage from "./login.js";
import Profile from "./Profile.js";
import Test from "./Test.js";
import VR from "./VR.js";
import VRred from "./VRred.js";
import VRList from "./VRList.js";
import VRsoh from "./VRsoh.js";
import ClList from "./ClList.js";
import AS from "./AS.js";
import ASList from "./ASList.js";
import Clred from "./Clred.js";
import MO from "./MO.js";
import MO2 from "./MO2.js";
import MO3 from "./MO3.js";
import MOList from "./MOList.js";
import MO2List from "./MO2List.js";
import MO3List from "./MO3List.js";
import US from "./US.js";
import CVR from "./CVR.js";

function App() {
  return (
	<Router>
		<div className="App">
			<Routes>
				<Route path="/" exact element={<LoginPage/>}/>
				<Route path="/profile" exact element={<Profile/>}/>
				<Route path="/test" exact element={<Test/>}/>
				<Route path="/VR" exact element={<VR/>}/>
				<Route path="/VRred" exact element={<VRred/>}/>
				<Route path="/VRList" exact element={<VRList/>}/>
				<Route path="/VRsoh" exact element={<VRsoh/>}/>
				<Route path="/ClList" exact element={<ClList/>}/>
				<Route path="/AS" exact element={<AS/>}/>
				<Route path="/ASList" exact element={<ASList/>}/>
				<Route path="/Clred" exact element={<Clred/>}/>
				<Route path="/MO" exact element={<MO/>}/>
				<Route path="/MO2" exact element={<MO2/>}/>
				<Route path="/MO3" exact element={<MO3/>}/>
				<Route path="/MOList" exact element={<MOList/>}/>
				<Route path="/MO2List" exact element={<MO2List/>}/>
				<Route path="/MO3List" exact element={<MO3List/>}/>
				<Route path="/US" exact element={<US/>}/>
				<Route path="/CVR" exact element={<CVR/>}/>
			</Routes>
		</div>
	</Router>
  );
}


export default App;
