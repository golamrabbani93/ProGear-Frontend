import React from 'react';
import {Form, Input, Button, InputNumber, Select} from 'antd';
import {useGetAllGategoryQuery} from '../../../redux/features/category/CategoryApi';
import {
	useCreateSingleProductMutation,
	useGetAllProductsQuery,
} from '../../../redux/features/product/productApi';
import {TProduct} from '../../../redux/features/cart/cartSlice';
import {TCategory} from '../../home/category/Category';
import {toast} from 'sonner';

const {TextArea} = Input;

const AddProduct: React.FC = () => {
	const {data: categories, isLoading} = useGetAllGategoryQuery(undefined);
	const {data: product} = useGetAllProductsQuery(undefined);
	const brands = Array.from(new Set(product?.data?.map((item: TProduct) => item?.brand)));
	const [createProduct, {data: create}] = useCreateSingleProductMutation();

	if (create) {
		toast.success('Produc Created Successfully');
	}

	const [form] = Form.useForm();

	const onFinish = (productData: TProduct) => {
		console.log('Form values: ', productData);
		createProduct(productData);
	};

	const categoryOptions = categories?.data?.map((category: TCategory) => ({
		value: category.name,
		label: category.name,
	}));
	const brandsOptions = brands?.map((brand) => ({
		value: brand,
		label: brand,
	}));

	if (isLoading) {
		return <h2>Loading.....</h2>;
	}
	return (
		<Form form={form} layout="vertical" name="addProduct" onFinish={onFinish}>
			<Form.Item
				name="name"
				label="Product Name"
				rules={[{required: true, message: 'Please input the product name!'}]}
			>
				<Input placeholder="Enter product name" />
			</Form.Item>

			<Form.Item
				name="description"
				label="Description"
				rules={[{required: true, message: 'Please input the product description!'}]}
			>
				<TextArea placeholder="Enter product description" rows={4} />
			</Form.Item>

			<Form.Item
				name="image"
				label="Image"
				rules={[{required: true, message: ' Please upload a product image url ! '}]}
			>
				<Input placeholder="product image url" />
			</Form.Item>

			<Form.Item
				name="price"
				label="Price"
				rules={[{required: true, message: 'Please input the product price!'}]}
			>
				<InputNumber
					min={0}
					style={{width: '100%'}}
					placeholder="Enter product price"
					formatter={(value) => `$ ${value}`}
				/>
			</Form.Item>

			<Form.Item
				name="category"
				label="Category"
				rules={[{required: true, message: 'Please select a category!'}]}
			>
				<Select
					className="w-full"
					options={categoryOptions}
					placeholder="Select a category"
				></Select>
			</Form.Item>

			<Form.Item
				name="brand"
				label="Brand"
				rules={[{required: true, message: 'Please input the product brand!'}]}
			>
				<Select
					className="w-full"
					options={brandsOptions}
					placeholder="Enter product brand"
				></Select>
			</Form.Item>

			<Form.Item
				name="stock"
				label="stcok"
				rules={[{required: true, message: 'Please input the product Stock quantity!'}]}
			>
				<InputNumber min={0} style={{width: '100%'}} placeholder="Enter product Stock quantity" />
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					Add Product
				</Button>
			</Form.Item>
		</Form>
	);
};

export default AddProduct;
