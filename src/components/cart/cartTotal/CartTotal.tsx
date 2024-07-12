import {Link} from 'react-router-dom';
import UseCartTotal from '../../../hooks/UseCartTotal';
import {TProduct} from '../../../redux/features/cart/cartSlice';
import React, {useEffect, useState} from 'react';
import {Button} from 'antd';
import {useGetAllProductsQuery} from '../../../redux/features/product/productApi';

export type CartToltalProps = {
	carts: TProduct[];
};
const CartTotal: React.FC<CartToltalProps> = ({carts}) => {
	const [outOfStock, setOutOfStock] = useState(false);
	const subTotal = UseCartTotal(carts);
	const ids = carts.map((cart) => cart._id);
	const {data, isLoading} = useGetAllProductsQuery(undefined);
	const products = data?.data;

	useEffect(() => {
		if (!isLoading) {
			const outOfStock = products.filter((product: TProduct) => ids.includes(product._id));
			if (outOfStock) {
				setOutOfStock(true);
			}
		}
	}, [data, ids, products, isLoading]);
	let total = 0;
	const shipping = 5;
	const vatRate = 0.15;
	const totalPriceWithVAT = subTotal * (1 + vatRate);
	// !calculate total Products price +shipping
	if (subTotal) {
		total = totalPriceWithVAT + shipping;
	}
	return (
		<div>
			<div className="cart-total grid grid-cols-1 lg:grid-cols-2 gap-6 my-10 mx-10 md:mx-40">
				<div className="cupon border border-spacing-1 h-min">
					<h2 className="bg-black text-white p-4 text-xl font-bold">COUPON</h2>
					<div className="ml-5 mt-5">
						<h4>Enter your coupon code if you have one.</h4>
						<div className="my-5">
							<input
								type="text"
								placeholder="Cuppon Code"
								className="p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black"
							/>

							<Button className="bg-primary border-0 hover:!bg-secondary !text-white font-bold  uppercase ml-2">
								Apply Cuppon
							</Button>
						</div>
					</div>
				</div>
				<div className="cupon border border-spacing-1 ">
					<h2 className="bg-black text-white p-4 text-xl font-bold">CART TOTALS</h2>
					<div className="mx-5 my-5 font-bold">
						<div>
							<div className="flex justify-between mb-2">
								<h2 className="uppercase">Subtotal</h2>
								<h2>${subTotal.toFixed(2)}</h2>
							</div>
							<div className="flex justify-between mb-2">
								<h2 className="uppercase">Shipping</h2>
								<h2>$5</h2>
							</div>
							<div className="flex justify-between mb-2">
								<h2 className="uppercase">Tax</h2>
								<h2>15%</h2>
							</div>
						</div>
						<div className="divider"></div>
						<div>
							<div className="flex justify-between mb-2">
								<h2 className="uppercase">Total</h2>
								<h2>${total.toFixed(2)}</h2>
							</div>
							<div className="text-right">
								<Link to="/shop/checkout" className="btn btn-primary btn-outline mt-5 text-right">
									<Button
										className="bg-primary border-0 hover:!bg-secondary !text-white font-bold w-full uppercase"
										disabled={outOfStock}
									>
										Proceed to Checkout
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartTotal;
