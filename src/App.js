import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./components/Login";
import SocialCard from "./components/Card/SocialCardDisplay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { refreshAction } from "./actions/user";
import { useDispatch } from "react-redux";
import { PATH } from "./constants/path";
import LoginDisplay from "./components/Card/LoginDisplay";

function App() {
	// for already logged in user , from local storage
	const dispatch = useDispatch();
	const token = localStorage.getItem("token");
	if (token) {
		dispatch(refreshAction(token));
	}

	return (
		<Router>
			<div className="App">
				<NavBar />
				<Switch>
					<Route path={PATH.home} exact component={Home} />
					<Route path={PATH.about} component={About} />
					<Route path={PATH.contact} component={Contact} />
					<Route path={PATH.logIn} exact component={Login} />
					<Route path={PATH.logInDisplay} component={LoginDisplay} />
					<Route path={PATH.display} component={SocialCard} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
