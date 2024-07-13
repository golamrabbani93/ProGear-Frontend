import {Skeleton, Table} from 'antd';
import {useGetAllProductsQuery} from '../../../redux/features/product/productApi';
import {Link} from 'react-router-dom';

interface RecordType {
	key: string;
	value?: string;
	// other properties as needed
}
interface Product {
	_id: string;
	name: string;
	key: string; // Assuming key is always a string
	update: string;
	image: string;
	product: string;
	price: number;
	stock: number;
}

const UpdateProduct = () => {
	const {data, isLoading} = useGetAllProductsQuery(undefined);

	const tableData: Product[] = data?.data?.map((item: Product) => ({
		key: item._id,
		update: 'Update',
		image: item.image,
		product: item.name,
		price: item.price,
		stock: item.stock,
	}));

	const columns = [
		{
			title: 'Update',
			dataIndex: 'update',
			key: 'update',
			render: (_text: string, record: RecordType) => (
				<Link to={`/manage-products/update-product/${record.key}`}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6 hover:text-primary"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
						/>
					</svg>
				</Link>
			),
		},
		{
			title: 'Image',
			dataIndex: 'image',
			key: 'image',
			render: (text: string) => <img className="!w-[125px] h-[100px]" src={text} alt="product" />,
		},
		{
			title: 'Product',
			dataIndex: 'product',
			key: 'product',
		},
		{
			title: 'Price',
			dataIndex: 'price',
			key: 'price',
			render: (text: number) => `$${text}`,
		},
		{
			title: 'Stock',
			dataIndex: 'stock',
			key: 'stock',
		},
	];
	if (isLoading) {
		return (
			<div>
				<Skeleton className="my-3" active />
				<Skeleton className="my-3" active />
				<Skeleton className="my-3" active />
				<Skeleton className="my-3" active />
				<Skeleton className="my-3" active />
			</div>
		);
	}
	return (
		<div className="container mx-auto text-center">
			<Table<Product> dataSource={tableData} columns={columns} />
		</div>
	);
};

export default UpdateProduct;
