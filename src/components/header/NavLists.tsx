import {Link, NavLink} from 'react-router-dom';

const NavLists = () => {
	return (
		<>
			<li className="p-2 text-primary transition-all duration-500 cursor-pointer">
				<NavLink to={'/'}>Home</NavLink>
			</li>
			<li className="p-2 hover:text-primary transition-all duration-500 cursor-pointer">
				<Link to={''}>About Us</Link>
			</li>
			<li className="p-2  hover:text-primary transition-all duration-500 cursor-pointer">
				<a href="">Products</a>
			</li>
			<li className="p-2  hover:text-primary transition-all duration-500 cursor-pointer">
				<a href="">Manage Products </a>
			</li>
		</>
	);
};

export default NavLists;
