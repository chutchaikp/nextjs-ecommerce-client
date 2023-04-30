import axios from "axios";

export const BaseApiUrl = () => {
	return process.env.NEXT_PUBLIC_API_BASE_URL
}

export const toDiscountPercentage = (price, originalPrice) => {
	try {
		const discount = originalPrice - price;
		const percent = (100 / originalPrice) * discount
		// originalPrice 100
		return percent.toFixed(2)
	} catch (error) {
		return -1
	}
}

export const toCurrencyFormated = (price) => {
	try {
		return price.toLocaleString('th-TH', {
			style: 'currency',
			currency: 'THB',
		});
	} catch (error) {
		console.log(error)
		return price;
	}
}