import React from 'react';
import {TProduct} from '../../../redux/features/cart/cartSlice';
import CardData from '../../../components/card/CardData';

type TProduciItems = {
	items: {
		success: boolean;
		statusCode: number;
		message: string;
		data: [];
	};
};
const Products: React.FC<TProduciItems> = ({items}) => {
	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
				{items?.data?.map((product: TProduct) => (
					<CardData key={product?._id} item={product} />
				))}
			</div>
		</div>
	);
};

export default Products;
