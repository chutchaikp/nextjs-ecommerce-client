import axios from "axios";

// export const ApiUrl = () => {
// 	return process.env.NEXT_API_URL
// }

// export const toCurrencyFormated = (price) => {
// 	try {
// 		return price.toLocaleString('th-TH', {
// 			style: 'currency',
// 			currency: 'THB',
// 		});
// 	} catch (error) {
// 		console.log(error)
// 		return price;
// 	}
// }

// ex - url: /products?populate=*
export const fetchDataFromApi = async (url) => {
	try {
		// debugger;
		// const apiToken = process.env.NEXT_API_TOKEN
		// const apiUrl = process.env.NEXT_API_URL
		// debugger;

		const params = {
			headers: {
				// Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
				// Authorization: "bearer " + import.meta.env.VITE_STRAPI_TOKEN_KEY,
				Authorization: "bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
			},
		};

		const { data } = await axios.get(
			process.env.NEXT_PUBLIC_API_URL + url,
			params
		);
		return data;
	} catch (err) {
		debugger;
		console.log(err);
		return err;
	}
};