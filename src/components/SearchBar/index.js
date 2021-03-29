import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { PATH } from "../../constants/path";

// component for searchBar
function SearchBar() {
	const [searchInput, setSearchInput] = useState("");
	const history = new useHistory();
	const handleSearch = async () => {
		history.push(`${PATH.slash}${searchInput}`);
	};
	return (
		<div>
			<input
				type="text"
				placeholder="username"
				value={searchInput}
				onChange={(e) => {
					setSearchInput(e.target.value);
				}}
				required
			/>
			<button onClick={handleSearch}>search</button>
		</div>
	);
}

export default SearchBar;
