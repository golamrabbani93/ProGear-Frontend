import {Table} from 'antd';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {deleteProduct, getCurrentCart, updateQuantity} from '../../redux/features/cart/cartSlice';

import CartTotal from './cartTotal/CartTotal';
import {toast} from 'sonner';
interface RecordType {
	key: string;
	value?: string;
	// other properties as needed
}
interface Product {
	key: string; // Assuming key is always a string
	delete: string;
	image: string;
	product: string;
	price: number;
	quantity: number;
	total: number;
}
const Cart = () => {
	const carts = useAppSelector(getCurrentCart);

	const dispatch = useAppDispatch();
	const data: Product[] = carts.map((cart) => ({
		key: cart._id,
		delete: 'Delete',
		image: cart.image,
		product: cart.name,
		price: cart.price,
		quantity: cart.quantity,
		total: cart.price * cart.quantity,
	}));

	const handleQuantity = (value: string, _id: string) => {
		dispatch(updateQuantity({value, _id}));
	};
	const handleDelete = (_id: string) => {
		dispatch(deleteProduct({_id}));
		toast.success('Product Deleted From The Cart', {
			position: 'top-center',
			duration: 2000,
		});
	};
	const columns = [
		{
			title: 'Delete',
			dataIndex: 'delete',
			key: 'delete',
			render: (_text: string, record: RecordType) => (
				<svg
					onClick={() => handleDelete(record.key)}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6 cursor-pointer hover:text-primary"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
					/>
				</svg>
			),
		},
		{
			title: 'Image',
			dataIndex: 'image',
			key: 'image',
			render: (text: string) => <img className="!w-[125px] h-[100px]" src={text} alt="product" />,
		},
		{
			title: 'Product',
			dataIndex: 'product',
			key: 'product',
		},
		{
			title: 'Price',
			dataIndex: 'price',
			key: 'price',
			render: (text: number) => `$${text}`,
		},
		{
			title: 'Quantity',
			dataIndex: 'quantity',
			key: 'quantity',
			render: (_text: string, record: RecordType) => (
				<input
					onChange={(e) => handleQuantity(e.target.value, record.key)}
					className="border border-gray-400 px-2 py-1 w-20 h-8 mr-3"
					type="number"
					min={1}
					max={100}
					defaultValue={1}
				/>
			),
		},
		{
			title: 'Total',
			dataIndex: 'total',
			key: 'total',
			render: (text: number) => `$${text.toFixed(2)}`,
		},
	];
	return (
		<div className="container mx-auto text-center">
			<Table<Product> dataSource={data} columns={columns} />
			{carts?.length > 0 && <CartTotal carts={carts} />}
		</div>
	);
};

export default Cart;
