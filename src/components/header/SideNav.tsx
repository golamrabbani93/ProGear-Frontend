import {Drawer} from 'antd';
import NavLists from './NavLists';

interface SideNavProps {
	openMenu: boolean;
	setOpenMenu: (open: boolean) => void;
}

const SideNav: React.FC<SideNavProps> = ({openMenu, setOpenMenu}) => {
	return (
		<Drawer
			className="!w-8/12 !ml-auto !bg-black text-white"
			onClick={() => setOpenMenu(!openMenu)}
			open={openMenu}
		>
			<ul
				className={`lg:hidden w-full h-full text-right   ${
					openMenu ? 'mx-auto transition  duration-500' : '-ml-[5000px] font-bold'
				} `}
			>
				<NavLists />
			</ul>
		</Drawer>
	);
};

export default SideNav;
