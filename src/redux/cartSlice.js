import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [], // [ { product: {}, size: '', quantity: 1, } ]
		isFetching: false,
		error: '',
	},
	reducers: {
		addItem: (state, action) => {
			// TODO: check same product but difference size

			debugger;
			// action.payload = { product: {}, size: '', quantity: 1 }			
			// const ifExist = state.items.find((itm) => {
			// 	debugger;
			// 	if (itm.product.attributes.slug === action.payload.product.slug) {
			// 		return true;
			// 	}
			// 	// return false;
			// })
			const ifExist = state.items.find(itm => {
				// check state data
				const slug = itm.product.slug;
				const price = itm.product.price;
				const categories = itm.product.categories

				// itm.product.categories.data.map(cat => {
				// 	const { name } = cat.attributes
				// 	const _name = 'x'
				// })

				// const res = itm.product.slug === action.payload.product.slug
				// return res;

				return itm.product.slug === action.payload.product.slug
			})
			debugger;
			if (ifExist) {
				// increase quantity 
				debugger;
			} else {
				debugger;
				state.items = [...state.items, action.payload]
			}
		},
		removeItem: (state, action) => {
			const slug = action.payload.product.slug
			const items = state.items.filter(it => {
				return it.product.slug !== slug
			});
			state.items = items;
		},
		resetItems: (state) => {
			state.items = []
		},

		// prop value appear at deepest level

		// checkProxyData: (state) => {
		// 	debugger;
		// 	var { product } = { ...[...state.items][0], }
		// 	debugger;
		// 	const myProduct = { ...product }
		// 	debugger;
		// 	const { attributes } = { ...product }
		// 	debugger;
		// 	const myAttributes = { ...attributes }
		// 	debugger;			
		// },
		increseQuantity: (state, action) => {
			state.items = state.items.map(it => {
				if (it.product.slug === action.payload.product.slug) {
					return { ...it, quantity: it.quantity + 1 }
				}
				return it
			})
		},
		decreaseQuantity: (state, action) => {
			// product = action.payload			

			state.items = state.items.map(it => {
				if (it.product.slug === action.payload.product.slug) {
					return { ...it, quantity: it.quantity - 1 }
				}
				return it
			})
		}
	}
})

export const { addItem, removeItem, resetItems, increseQuantity, decreaseQuantity, } = cartSlice.actions
export default cartSlice.reducer;