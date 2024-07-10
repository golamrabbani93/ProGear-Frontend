import {useState} from 'react';
import SideNav from './SideNav';
import './Header.css';
import NavLists from './NavLists';

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<div className="bg-black">
			<div className="container mx-auto">
				<div className="header  text-white shadow-md flex items-center justify-between px-8 py-02">
					{/* <!-- logo --> */}
					<h1 className=" text-primary">logo</h1>

					{/* <!-- navigation --> */}
					<nav className="nav font-semibold text-lg">
						<ul className="hidden lg:flex items-center">
							<NavLists />
						</ul>
					</nav>

					{/* 
                    Cart Buton  
                    */}

					{/* icon */}
					<div className="flex justify-center items-center">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="size-6 text-white"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
								/>
							</svg>
						</div>
						<div className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
							<svg
								onClick={() => setOpenMenu(!openMenu)}
								className="fill-current text-white"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
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
