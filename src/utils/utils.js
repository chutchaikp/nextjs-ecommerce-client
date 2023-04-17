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