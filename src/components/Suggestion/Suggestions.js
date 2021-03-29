import React from "react";
import SingleSuggestion from "./SingleSuggestion";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllUser } from "../../actions/user";
import { useEffect, useState } from "react";

//All suggestion component
const AllSuggestion = () => {
	const [num, setNum] = useState(0);
	const [users, setUsers] = useState([]);

	//for getting all users in redux
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllUser());
	}, []);
	// getting data of users
	const userDetails = useSelector((state) => state.allUser.data || []);
	const displayUsers = users?.slice(num, num + 3) || [];

	useEffect(() => {
		setUsers(userDetails);
	}, [userDetails]);

	const handleClick = () => {
		const len = users.length;
		setNum((num + 3) % len);
	};
	// for deleting a suggestion
	const deleteSuggestion = (index) => {
		users.splice(num + index, 1);
		setUsers(users.slice());
	};

	return (
		<div>
			<div className="container">
				<h1>WHO TO FOLLOW</h1>
				<p className="refresh-btn" onClick={handleClick}>
					REFRESH
				</p>
				{displayUsers.map((userInfo, index) => (
					<SingleSuggestion
						key={index}
						user={userInfo}
						deleteSuggestion={deleteSuggestion}
						index={index}
					/>
				))}
			</div>
		</div>
	);
};

export default AllSuggestion;
