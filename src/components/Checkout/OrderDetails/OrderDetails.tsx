import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import {TProduct} from '../../../redux/features/cart/cartSlice';

type OrderDetailsProps = {
	cartLists: TProduct[];
};
const OrderDetails: React.FC<OrderDetailsProps> = ({cartLists}) => {
	return (
		<div>
			<div className="overflow-x-auto">
				<table className=" w-full">
					{/* head */}
					<thead className="bg-[#ddd] h-[60px]">
						<tr className="font-bold text-xl text-black text-left mx-2">
							<th className="pl-2">Product</th>
							<th className="text-right pr-4">Total</th>
						</tr>
					</thead>
					<tbody className="px-2">
						{/* row 1 */}
						{cartLists?.map((cartList: TProduct) => {
							return (
								<tr key={cartList?._id} className="border border-r-2 border-l-0">
									<td className="flex items-center border border-r-2 border-l-0 border-b-0 border-t-0 ml-2">
										{cartList?.name} <AiOutlineClose className="ml-1" />
										<span className="ml-1 font-bold">{cartList.quantity}</span>
									</td>
									<td className="text-right mr-2">${cartList?.price}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default OrderDetails;
