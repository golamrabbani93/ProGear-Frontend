import {useState} from 'react';
import SideNav from './SideNav';
import './Header.css';
import NavLists from './NavLists';
import {Link} from 'react-router-dom';
import {Badge} from 'antd';

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<div className="bg-black">
			<div className="container mx-auto">
				<div className="header  text-white shadow-md flex items-center justify-between px-8 py-5 py-02 ">
					{/* <!-- logo --> */}
					<Link to={'/'} className="">
						<span className="text-white text-3xl md:text-5xl font-bold">Pro</span>
						<span className="text-primary text-2xl md:text-3xl font-bold">Gear</span>
					</Link>

					{/* <!-- navigation --> */}
					<nav className="nav font-semibold text-lg">
						<ul className="hidden lg:flex items-center">
							<NavLists />
						</ul>
					</nav>

					{/* icon */}
					<div className="flex justify-center items-center">
						<div className="mx-3">
							{/* Cart Buton   */}
							<Badge count={1} className="">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="size-8 text-white cursor-pointer hover:text-primary transition-all duration-400"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
									/>
								</svg>
							</Badge>
						</div>
						{/* mobile menu icon  */}
						<div className="block lg:hidden cursor-pointer ml-auto relative ">
							<svg
								onClick={() => setOpenMenu(!openMenu)}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="size-8"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</div>
					</div>
				</div>
				<SideNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
			</div>
		</div>
	);
};

export default Header;
