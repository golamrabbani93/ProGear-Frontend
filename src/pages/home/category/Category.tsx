import {Link} from 'react-router-dom';
import './Category.css';
import {useGetAllGategoryQuery} from '../../../redux/features/category/CategoryApi';

export type TCategory = {
	image: string;
	name: string;
	_id: string;
};
const Category = () => {
	const {data} = useGetAllGategoryQuery(undefined);
	return (
		<div className="mb-14 px-2">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				{data?.data?.map((item: TCategory) => (
					<Link
						to={`/shop/category/category?.name.toLowerCase()`}
						className="category-item"
						key={item?._id}
					>
						<div className="banner-animation relative">
							<img src={item.image} alt="" className="w-full  " />
							<div className="absolute top-3 left-0 w-full ">
								<div className="flex justify-between items-center mx-4">
									<h3 className="text-2xl font-bold uppercase text-white">{item?.name}</h3>
									<button className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="size-8"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Category;
