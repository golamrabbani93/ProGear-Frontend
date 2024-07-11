import {TProduct} from '../redux/features/cart/cartSlice';

import {useEffect, useState} from 'react';
const UseCartTotal = (items: TProduct[]) => {
	const [total, setTotal] = useState(0);
	useEffect(() => {
		const totalCartPrice = items?.reduce((total, product) => {
			total += product.price * product.quantity;
			return total;
		}, 0);
		setTotal(totalCartPrice);
	}, [items]);
	return total;
};

export default UseCartTotal;
