/* eslint-disable no-unsafe-optional-chaining */
import {Form, Input, Button, InputNumber, Select, Skeleton} from 'antd';
import {toast} from 'sonner';
import {TProduct} from '../../../../redux/features/cart/cartSlice';
import {useGetAllGategoryQuery} from '../../../../redux/features/category/CategoryApi';
import {
	useGetAllProductsQuery,
	useGetSingleProductQuery,
	useUpdateSingleProductMutation,
} from '../../../../redux/features/product/productApi';
import {useParams} from 'react-router-dom';
import TextArea from 'antd/es/input/TextArea';
import {TCategory} from '../../../home/category/Category';

const SingleUpdate = () => {
	const {id} = useParams();

	const {data: categories} = useGetAllGategoryQuery(undefined);
	const {data: product} = useGetAllProductsQuery(undefined);
	const brands = Array.from(new Set(product?.data?.map((item: TProduct) => item?.brand)));
	const [updateProduct] = useUpdateSingleProductMutation();
	const {data: singleProduct, isLoading} = useGetSingleProductQuery({id});
	// eslint-disable-next-line no-unsafe-optional-chaining

	const [form] = Form.useForm();

	const onFinish = async (productData: TProduct) => {
		const data = {
			id,
			data: productData,
		};
		const res = await updateProduct(data).unwrap();

		if (!res?.data?._id) {
			toast.error('Product Update Unsuccessfull', {
				position: 'top-center',
				duration: 2000,
			});
		} else {
			toast.success('Product Update Successfull', {
				position: 'top-center',
				duration: 2000,
			});
		}
	};

	const categoryOptions = categories?.data?.map((category: TCategory) => ({
		value: category.name,
		label: category.name,
	}));
	const brandsOptions = brands?.map((brand) => ({
		value: brand,
		label: brand,
	}));
	// const singleData = singleProduct?.data;

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

	const singleData = {
		name: singleProduct?.data.name,
		description: singleProduct?.data.description,
		image: singleProduct?.data.image,
		price: singleProduct?.data.price, // Example initial values
		category: singleProduct?.data?.category,
		brand: singleProduct?.data?.brand,
		stock: singleProduct?.data?.stock,
		rating: singleProduct?.data?.rating,
	};
	return (
		<Form
			form={form}
			initialValues={singleData}
			layout="vertical"
			name="addProduct"
			onFinish={onFinish}
		>
			<Form.Item name="name" label="Product Name">
				<Input defaultValue={singleData?.name} placeholder={singleData?.name} />
			</Form.Item>

			<Form.Item name="description" label="Description">
				<TextArea value={singleData?.description} placeholder={singleData?.description} rows={4} />
			</Form.Item>

			<Form.Item name="image" label="Image">
				<Input defaultValue={singleData?.image} placeholder={singleData?.image} />
			</Form.Item>

			<Form.Item name="price" label="Price">
				<InputNumber
					style={{width: '100%'}}
					placeholder={singleData?.price}
					defaultValue={singleData?.price}
					min={0}
				/>
			</Form.Item>

			<Form.Item name="category" label="Category">
				<Select
					className="w-full"
					defaultValue={singleData?.category}
					options={categoryOptions}
					placeholder={singleData?.category}
				></Select>
			</Form.Item>

			<Form.Item name="brand" label="Brand">
				<Select
					className="w-full"
					defaultValue={singleData?.brand}
					options={brandsOptions}
					placeholder={singleData?.brand}
				></Select>
			</Form.Item>

			<Form.Item name="stock" label="Stcok">
				<InputNumber
					min={0}
					style={{width: '100%'}}
					defaultValue={singleData?.stock}
					placeholder={singleData?.stock}
				/>
			</Form.Item>
			<Form.Item name="rating" label="rating">
				<InputNumber
					min={0}
					style={{width: '100%'}}
					defaultValue={singleData?.rating}
					placeholder={singleData?.rating}
				/>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					Add Product
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SingleUpdate;
