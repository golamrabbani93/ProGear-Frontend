import {Drawer} from 'antd';
import SingleCart from './SingleCart';
import {Link} from 'react-router-dom';
import ButtonFull from '../../ui/ButtonFull';
import {useAppSelector} from '../../../redux/hooks';
import {getCurrentCart, TProduct} from '../../../redux/features/cart/cartSlice';

interface SideNavProps {
	openCart: boolean;
	setOpenCart: (open: boolean) => void;
}
const SideCart: React.FC<SideNavProps> = ({openCart, setOpenCart}) => {
	const carts = useAppSelector(getCurrentCart);
	console.log('🚀🚀: carts', carts);
	return (
		<div className="!w-[500px]">
			<Drawer
				className=" !ml-auto !bg-black text-white"
				onClose={() => setOpenCart(!openCart)}
				open={openCart}
				width={400}
			>
				<div className="self-stretch  flex-col justify-start items-start flex">
					<h2 className="text-xl font-bold uppercase text-White">Shopping Cart</h2>

					<div className="mt-8">
						{/* !single Cart List */}
						{carts.products?.length > 0 ? (
							carts?.products?.map((item: TProduct) => <SingleCart key={item._id} item={item} />)
						) : (
							<h2 className="font-bold uppercase text-primary">No Items Found</h2>
						)}
					</div>
				</div>

				{carts?.products?.length > 0 && (
					<div className="flex justify-between mx-2 mt-6">
						<h2 className="uppercase text-2xl text-white font-bold">Subtotal:</h2>
						<h2 className="uppercase text-2xl text-white font-bold">200</h2>
					</div>
				)}

				{carts?.products?.length > 0 ? (
					<div className="mt-6">
						<Link to={''}>
							<ButtonFull text={'view cart'} />
						</Link>
					</div>
				) : (
					<div className="mt-6">
						<Link to={''}>
							<ButtonFull text={'Shop Now'} />
						</Link>
					</div>
				)}
			</Drawer>
		</div>
	);
};

export default SideCart;
