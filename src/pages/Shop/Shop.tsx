import {useNavigate, useParams} from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import productsApi, {useGetAllProductsQuery} from '../../redux/features/product/productApi';
import Products from './products/Products';
import Category from './SideBar/Category/Category';
import FilterByPrize from './SideBar/FilterByPrize/FilterByPrize';
import {useState} from 'react';
import Search from './SideBar/Search/Search';
import {Button} from 'antd';
import {useAppDispatch} from '../../redux/hooks';

const Shop = () => {
	const dispatch = useAppDispatch();
	const {name} = useParams<{name?: string}>();
	const navigate = useNavigate();
	const [price, setPrice] = useState<string | undefined>(undefined);
	undefined;
	const [search, setSearch] = useState<string | undefined>(undefined);

	const categoryName = name;

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

	const {data} = useGetAllProductsQuery({category: categoryName, sort: price, searchTerm: search});

	const handleClaerFilter = () => {
		setPrice(undefined);
		setSearch(undefined);
		dispatch(productsApi.util.resetApiState());
		navigate('/shop');
	};
	return (
		<div>
			<BreadCrumb items={items} />
			<div className="container m-auto my-[100px]">
				<div className="shop-main grid grid-cols-1 md:grid-cols-4 gap-4 mx-8 md:mx-12 xl:mx-20">
					{/* !left side bar */}
					<div className="left-side">
						<Search search={search} setSearch={setSearch} />
						<Category></Category>
						<FilterByPrize setPrice={setPrice}></FilterByPrize>

						<Button
							onClick={handleClaerFilter}
							className="bg-primary border-0 hover:!bg-secondary !text-white font-bold w-full uppercase mt-20"
						>
							Clear All Filter
						</Button>
					</div>
					{/* !right side bar */}
					<div className="right-sid md:col-start-2 md:col-end-5">
						<Products items={data}></Products>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
