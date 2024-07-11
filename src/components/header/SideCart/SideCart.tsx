import {Drawer} from 'antd';
import SingleCart from './SingleCart';
import {Link} from 'react-router-dom';
import ButtonFull from '../../ui/ButtonFull';

interface SideNavProps {
	openCart: boolean;
	setOpenCart: (open: boolean) => void;
}
const SideCart: React.FC<SideNavProps> = ({openCart, setOpenCart}) => {
	return (
		<div>
			<Drawer
				className="!ml-auto !bg-black text-white"
				onClose={() => setOpenCart(!openCart)}
				open={openCart}
			>
				<div className="self-stretch  flex-col justify-start items-start flex">
					<h2 className="text-xl font-bold uppercase text-White">Shopping Cart</h2>

					<div className="mt-8">
						<SingleCart />
					</div>
				</div>

				<div className="flex justify-between mx-2 mt-6">
					<h2 className="uppercase text-2xl text-white font-bold">Subtotal:</h2>
					<h2 className="uppercase text-2xl text-white font-bold">200</h2>
				</div>
				<div className="mt-6">
					<Link to={''}>
						<ButtonFull text={'view cart'} />
					</Link>
				</div>
			</Drawer>
		</div>
	);
};

export default SideCart;
