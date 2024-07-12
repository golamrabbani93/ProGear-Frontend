import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const Products = () => {
	const items = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Products',
			path: '/product',
		},
	];
	return (
		<div>
			<BreadCrumb items={items} />
		</div>
	);
};

export default Products;
