import {useParams} from 'react-router-dom';
import Rating from '../Rating/Rating';
import {useGetSingleProductQuery} from '../../redux/features/product/productApi';
import {Button} from 'antd';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import {useAppDispatch} from '../../redux/hooks';
import {addProduct, TProduct} from '../../redux/features/cart/cartSlice';
import {toast} from 'sonner';
import {useState} from 'react';

const SingleProduct = () => {
	const {id} = useParams();
	const [quantity, setQuantity] = useState(1);
	const dispatch = useAppDispatch();
	const {data} = useGetSingleProductQuery({id});
	const product = data?.data;

	const items = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Shop',
			path: '/shop',
		},
		{
			name: `${product?.name || 'Product Details'}`,
			path: '/product-details',
		},
	];

	const handleAddToCart = (item: TProduct) => {
		const newItem = {...item, quantity};
		dispatch(addProduct(newItem));
		toast.success('Product Added In The Cart', {
			position: 'top-center',
			duration: 2000,
		});
		setQuantity(1);
	};
	return (
		<div>
			<BreadCrumb items={items}></BreadCrumb>
			<div className="container mx-auto my-24">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
					<div>
						<img className="w-[500px] lg:ml-auto border" src={product?.image} alt="" />
					</div>
					<div className="product-details ml-3">
						<h2 className="text-4xl font-bold">{product?.name}</h2>
						<div className="mt-2 flex items-center">
							<Rating rating={product?.rating}></Rating>
							<h5 className="ml-1">(customer review )</h5>
						</div>
						<h2 className="text-3xl mt-3">${product?.price}</h2>
						<h5 className="mt-4">
							{/* {product.description.length > 100
								? product?.description.slice(0, 300)
								: product?.description} */}
							{product?.description}
						</h5>
						<div className="divider my-10"></div>

						<h3 className=" font-bold uppercase mt-4 flex items-center">
							{/* <AiFillCheckCircle className="text-green-500 w-5 h-5 mr-2" /> */}
							<span>{product?.stock} In stocks</span>
						</h3>
						<h5 className="mr-3 mt-4 text-xl">Quantity:</h5>
						<div className="flex items-center mt-3">
							<input
								onChange={(e) => setQuantity(Number(e.target.value))}
								className="border border-gray-400 px-2 py-1 w-20 h-8 mr-3"
								type="number"
								min={1}
								max={100}
								value={quantity}
							/>

							<Button
								onClick={() => handleAddToCart(product)}
								className="bg-primary border-0 hover:!bg-secondary !text-white font-bold  uppercase"
							>
								Add to Cart
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
