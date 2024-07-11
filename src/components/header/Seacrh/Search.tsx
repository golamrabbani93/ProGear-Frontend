import {Drawer, Input} from 'antd';
import './Search.css';
interface SideNavProps {
	openSearch: boolean;
	setOpenSearch: (open: boolean) => void;
}

const Search: React.FC<SideNavProps> = ({openSearch, setOpenSearch}) => {
	return (
		<div className="search">
			<Drawer
				className=" !ml-auto !bg-black opacity-70 text-white"
				onClose={() => setOpenSearch(!openSearch)}
				open={openSearch}
				placement="top"
			>
				<div className="flex justify-center items-center w-full h-full">
					<Input className=" md:w-1/2 md:h-14 md:text-2xl font-bold" placeholder="Search Product" />
					<div className=" bg-primary hover:bg-secondary h-8 md:h-14 w-9 md:w-14 flex justify-center items-center ml-4 rounded-lg cursor-pointer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6 md:size-8"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
							/>
						</svg>
					</div>
				</div>
			</Drawer>
		</div>
	);
};

export default Search;
