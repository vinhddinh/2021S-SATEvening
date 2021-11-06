import WebService from './WebService';

export default class AvailabilityService {
	async updateAvailability(userId, availabilityString) {
		await WebService.post("https://localhost:5001/api/availability/update", {userId, availabilityString });
	}

	async getAvailability(userID) {
		const availabilityString = await WebService.post("https://localhost:5001/api/availability/get", { userID });;
		return availabilityString;
	}
}