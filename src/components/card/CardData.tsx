import {Card} from 'antd';
import {Link} from 'react-router-dom';
import {addProduct, TProduct} from '../../redux/features/cart/cartSlice';
import {useAppDispatch} from '../../redux/hooks';
import {toast} from 'sonner';

interface CardDataProps {
	item: TProduct;
}

const CardData: React.FC<CardDataProps> = ({item}) => {
	const dispatch = useAppDispatch();
	const addCart = () => {
		dispatch(addProduct(item));
		toast.success('Product Added In The Cart', {
			position: 'top-center',
			duration: 2000,
		});
	};
	return (
		<div>
			<div className="flex justify-center">
				<Card hoverable className="new-card">
					<div className=" card-compact">
						<div className="relative overflow-hidden">
							<Link to={`/shop/product/${item._id}`}>
								<img className="h-[200px] w-full objectImg2" src={item.image} alt={item?.name} />
							</Link>

							<div className="action-link">
								<div>
									<label
										onClick={addCart}
										className="text-white hover:text-primary font-bold uppercase transition duration-500 cursor-pointer"
									>
										Add to Cart
									</label>
								</div>
							</div>
							<h2 className="text-xs font-bold py-[2px] px-1 absolute top-[10px] left-[10px] text-primary-focus uppercase bg-primary opacity-70 text-white">
								{item.brand}
							</h2>
							<h2 className="text-xs font-bold py-[2px] px-1 absolute top-[10px] right-[10px] text-primary-focus uppercase bg-primary opacity-70 text-white">
								{item.stock} in stock
							</h2>
						</div>
						<div className="px-3 pb-3">
							<div className="my-3 flex justify-between">
								<Link to={`/shop/product/id`} className="hover:text-primary transiti duration-300">
									<h2 className="card-title font-bold">{item.name} </h2>
								</Link>
								<div className="price mr-3">
									<span className="font-bold text-primary">
										<span>${item.price}</span>
									</span>
								</div>
							</div>
							<div className="w-full bg-primary h-[1px] p-0"></div>
							<div className="price-rating flex justify-between">
								<p className="text-primary uppercase font-bold">{item.category}</p>
								<p>{item.rating}</p>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default CardData;
