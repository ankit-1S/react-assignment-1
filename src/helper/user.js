import { Octokit } from "@octokit/rest";
import { API } from "../constants/api";
/**
 * class to fetch the details form the githubAPIs
 */
export default class UserHelper {
	// to fetch the user detail
	constructor() {
		this.octokit = new Octokit();
	}
	async getProfile(userToken) {
		const res = await this.octokit.request(API.getAuth, {
			headers: { authorization: `token ${userToken}` },
		});
		return res;
	}
	//get single the user details
	async fetchDetails(username) {
		console.log(API.get);
		const result = await this.octokit.request(`${API.get}${username}`);
		return result;
	}
	// get all user details
	async fetchAllUser() {
		const result = await this.octokit.request(API.getAll);
		return result;
	}
}
