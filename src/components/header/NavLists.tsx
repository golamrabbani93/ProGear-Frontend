import {NavLink} from 'react-router-dom';

const NavLists = () => {
	return (
		<>
			<li className="p-2">
				<NavLink className={' hover:text-primary transition-all duration-400'} to={'/'} end>
					Home
				</NavLink>
			</li>
			<li className="p-2">
				<NavLink className={'hover:text-primary transition-all duration-400'} to={'/about-us'}>
					About Us
				</NavLink>
			</li>
			<li className="p-2">
				<NavLink className={'hover:text-primary transition-all duration-400'} to="/products">
					Products
				</NavLink>
			</li>
			<li className="p-2">
				<NavLink className={'hover:text-primary transition-all duration-400'} to="/manage-products">
					Manage Products{' '}
				</NavLink>
			</li>
		</>
	);
};

export default NavLists;
