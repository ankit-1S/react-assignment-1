import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/index";
import { useSelector, useDispatch } from "react-redux";
import { addLogout } from "../../actions/user";
import { PATH } from "../../constants/path";

// navbar component
function NavBar() {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.isLogged);
	const handleClick = () => {
		localStorage.removeItem("token");
		dispatch(addLogout());
	};
	return (
		<nav className="nav-bar">
			<ul className="nav-list">
				<Link className="nav-links" to={PATH.home}>
					<li>Home</li>
				</Link>
				<Link className="nav-links" to={PATH.about}>
					<li>About-Us</li>
				</Link>
				<Link className="nav-links" to={PATH.contact}>
					<li>Contact-Us</li>
				</Link>
			</ul>
			{/* checking the which button to show */}
			<SearchBar />
			{isLoggedIn ? (
				<Link onClick={handleClick} to={PATH.home}>
					<button>Log-out</button>
				</Link>
			) : (
				<Link to={PATH.logIn}>
					<button>Log-In</button>
				</Link>
			)}
		</nav>
	);
}

export default NavBar;
