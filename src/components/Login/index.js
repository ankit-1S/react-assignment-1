import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style.css";
import { loginAction } from "../../actions/user";
import { PATH } from "../../constants/path";
// login page
function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();
	const dispatch = useDispatch();
	const handleSubmit = () => {
		dispatch(loginAction(username, password));
		history.push(`${PATH.log}${username}`);
	};
	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<h1>Enter your details to Login</h1>
			<div>
				<h2>Username</h2>
				<input
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					placeholder="username"
					required
				/>
			</div>
			<div>
				<h2>Password</h2>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="password"
					required
				/>
			</div>
			<input type="submit" value="Submit" />
		</form>
	);
}

export default Login;
