import {useParams} from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import {useGetAllProductsQuery} from '../../redux/features/product/productApi';

import Products from './products/Products';
import Category from './SideBar/Category/Category';

const Shop = () => {
	const query = useParams();
	const items = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Shop',
			path: '/shop',
		},
	];

	const {data} = useGetAllProductsQuery({category: query.name});
	return (
		<div>
			<BreadCrumb items={items} />
			<div className="container m-auto my-[100px]">
				<div className="shop-main grid grid-cols-1 md:grid-cols-4 gap-4 mx-8 md:mx-12 xl:mx-20">
					{/* !left side bar */}
					<div className="left-side">
						<Category></Category>
						{/* <FilterByPrize
							minValue={minValue}
							maxValue={maxValue}
							handleInputPrize={handleInputPrize}
						></FilterByPrize> */}
					</div>
					{/* !right side bar */}
					<div className="right-sid md:col-start-2 md:col-end-5">
						<Products items={data}></Products>
					</div>
				</div>
				{
					// <div className="text-center mt-12">
					// 	<button
					// 		className="text-black p-2 m-2 rounded-md w-10 hover:text-primary transition-all disabled:opacity-50"
					// 		onClick={() => setPage(page - 1)}
					// 		disabled={page === 0}
					// 	>
					// 		<FaArrowLeft />
					// 	</button>
					// 	{[...Array(totalPages).keys()].map((pg) => (
					// 		<button
					// 			onClick={() => setPage(pg)}
					// 			key={pg}
					// 			className={`${
					// 				page === pg ? 'bg-primary text-white' : ' bg-black text-white'
					// 			} p-2 m-2 rounded-md w-10 hover:bg-primary hover:text-white transition-all`}
					// 		>
					// 			{pg + 1}
					// 		</button>
					// 	))}
					// 	<button
					// 		onClick={() => setPage(page + 1)}
					// 		className="text-black p-2 m-2 rounded-md w-10 hover:text-primary transition-all disabled:opacity-50"
					// 		disabled={totalPages - 1 === page || page === totalPages}
					// 	>
					// 		<FaArrowRight />
					// 	</button>
					// </div>
				}
			</div>
		</div>
	);
};

export default Shop;
