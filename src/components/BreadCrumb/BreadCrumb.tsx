import React from 'react';
import {Link} from 'react-router-dom';

type TBreadcumbItem = {
	name: string;
	path: string;
};
type TBreadcumb = {
	items: TBreadcumbItem[];
};

const BreadCrumb: React.FC<TBreadcumb> = ({items}) => {
	// !Get only true value from items array
	const filteredItems = items.filter(Boolean);
	const breadHeadName = filteredItems.slice(-1)[0].name;
	return (
		<div className="text-center bg-black text-white w-full h-96 flex justify-center items-center flex-col">
			<div>
				<h2 className="text-5xl uppercase font-bold">{breadHeadName}</h2>
			</div>
			<div className="flex items-center mt-3 gap-1 justify-center">
				{filteredItems.map((item: TBreadcumbItem, index: number) => (
					<Link
						className={`hover:text-primary transition duration-500 capitalize ${
							index === filteredItems.length - 1 && 'text-[#6C757D] btn-disabled'
						}`}
						key={index}
						to={item.path}
					>
						<span className={`flex items-center justify-center gap-1`}>
							{item.name}
							{index !== filteredItems.length - 1 && (
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 24 24"
									className="mx-2 !text-white"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill="none"
										stroke="#FFF"
										strokeWidth="2"
										d="M2,12 L22,12 M13,3 L22,12 L13,21"
									></path>
								</svg>
							)}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default BreadCrumb;
