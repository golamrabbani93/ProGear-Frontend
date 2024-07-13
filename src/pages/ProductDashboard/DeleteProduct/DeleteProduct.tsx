import {Modal, Skeleton, Table} from 'antd';
import {TProduct} from '../../../redux/features/cart/cartSlice';
import {
	useDeleteSingleProductMutation,
	useGetAllProductsQuery,
} from '../../../redux/features/product/productApi';
import {useState} from 'react';
import {toast} from 'sonner';

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
const DeleteProduct = () => {
	const {data, isLoading} = useGetAllProductsQuery(undefined);
	const [deleteProduct] = useDeleteSingleProductMutation();
	const tableData: Product[] = data?.data?.map((item: TProduct) => ({
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
				<svg
					onClick={() => showModal(record.key)}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6 hover:text-primary cursor-pointer"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
					/>
				</svg>
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

	//! Modal
	const [open, setOpen] = useState(false);
	const [productId, setProductId] = useState('');

	const showModal = (id: string) => {
		setOpen(true);
		setProductId(id);
	};

	const handleOk = () => {
		deleteProduct(productId);
		toast.success('Product Deleted Successfull', {
			position: 'top-center',
			duration: 2000,
		});
		setOpen(false);
	};

	const handleCancel = () => {
		console.log('Clicked cancel button');
		setOpen(false);
	};
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
			<Modal title="Title" open={open} onOk={handleOk} onCancel={handleCancel}>
				<p>modalText</p>
			</Modal>
		</div>
	);
};

export default DeleteProduct;
