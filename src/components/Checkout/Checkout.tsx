/* eslint-disable @typescript-eslint/no-explicit-any */
import {useForm} from 'react-hook-form';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import OrderDetails from './OrderDetails/OrderDetails';
import {useAppSelector} from '../../redux/hooks';
import {getCurrentCart, TProduct} from '../../redux/features/cart/cartSlice';
import UseCartTotal from '../../hooks/UseCartTotal';
import {useState} from 'react';
import {Button, Modal, Select} from 'antd';
import {
	useGetAllProductsQuery,
	useUpdateSingleProductMutation,
} from '../../redux/features/product/productApi';
import {useNavigate} from 'react-router-dom';
import {toast} from 'sonner';

const CheckOut = () => {
	const cartListItems = useAppSelector(getCurrentCart);
	const subTotal = UseCartTotal(cartListItems);
	const {data: products} = useGetAllProductsQuery(undefined);
	const [updatestock] = useUpdateSingleProductMutation();
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm();

	// !get Total Products Price

	// let total = 0;
	// const shipping = 5;
	// // !calculate total Products price +shipping
	// if (subTotal) {
	// 	total += subTotal + shipping;
	// }
	// // !get order date
	// const date = new Date();
	// const orderDate = format(date, 'PP');
	// // !useing loader for user information
	// if (userLoader) {
	// 	refetch();
	// 	return <Loader></Loader>;
	// }
	// !handle billingDetails
	const handleBillingDetails = async () => {
		// // eslint-disable-next-line @typescript-eslint/no-unused-vars
		// const billingDetails = {
		// 	name: data.name,
		// 	email: data.email,
		// 	phone: data.phone,
		// 	country: data.country,
		// 	townCity: data.townCity,
		// 	street: data.street,
		// 	orderNote: data.orderNote,
		// 	// products: newProducts,
		// 	// total: total,
		// 	// date: orderDate,
		// 	// status: 'Processing',
		// };
		showModal();
	};

	const countryName = [
		{
			name: 'Bangladesh',
			value: 'Bangladesh',
		},
		{
			name: 'India',
			value: 'India',
		},
		{
			name: 'Pakistan',
			value: 'Pakistan',
		},
		{
			name: 'Bhutan',
			value: 'Bhutan',
		},
		{
			name: 'Nepal',
			value: 'Nepal',
		},
	];
	const breaditems = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Shop',
			path: '/shop',
		},
		{
			name: 'Checkout',
			path: '/shop/checkout',
		},
	];

	let total = 0;
	const shipping = 5;
	const vatRate = 0.15;
	const totalPriceWithVAT = subTotal * (1 + vatRate);
	// !calculate total Products price +shipping
	if (subTotal) {
		total = totalPriceWithVAT + shipping;
	}

	// !modal Data
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const showModal = () => {
		setOpen(true);
	};

	const handleOk = async () => {
		cartListItems.forEach(async (cart: TProduct) => {
			const product = products.data.find((item: TProduct) => item._id === cart._id);
			if (product) {
				const newStock = product.stock - cart.quantity;
				const data = {
					id: product._id,
					data: {stock: newStock},
				};
				await updatestock(data);
			}
		});
		toast.success('Order Confirmed', {
			position: 'top-center',
			duration: 2000,
		});
		setOpen(false);
		reset();
		navigate('/');
	};

	const handleCancel = () => {
		console.log('Clicked cancel button');
		setOpen(false);
	};
	return (
		<div>
			<BreadCrumb items={breaditems}></BreadCrumb>
			{/* {cartListItems?.length > 0 ? ( */}
			<div className="checkout">
				<form onSubmit={handleSubmit(handleBillingDetails)}>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10 mx-10 md:mx-40">
						<div className="form-data">
							<h2 className="bg-black text-white p-4 text-xl font-bold uppercase">
								Billing Details
							</h2>
							<div className="flex flex-col xl:flex-row">
								<div className="form-control mt-5 w-full  !xl:w-2/3 mr-4">
									<label className="label">
										<span className="label-text font-bold">Name*</span>
									</label>
									<input
										{...register('name', {required: 'Name is required'})}
										type="text"
										placeholder="Name"
										className="bg-[#d6e3f9] p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black"
										autoComplete="name"
									/>
									{errors.name && typeof errors.name.message === 'string' && (
										<span className="text-red-600">{errors.name.message}</span>
									)}
								</div>
								<div className="form-control mt-5 w-full">
									<label className="label">
										<span className="label-text font-bold">Email*</span>
									</label>
									<input
										{...register('email', {required: 'Email is required'})}
										type="text"
										placeholder="Email"
										className="bg-[#d6e3f9] p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black"
										autoComplete="email"
									/>
									{errors.email && typeof errors.email.message === 'string' && (
										<span className="text-red-600">{errors.email.message}</span>
									)}
								</div>
							</div>
							<div className="form-control mt-5 mr-5">
								<div>
									<label className="label">
										<span className="label-text font-bold">Phone*</span>
									</label>
								</div>
								<input
									{...register('phone', {required: 'Phone Number is required'})}
									type="text"
									placeholder="Phone Number"
									className={`p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black w-full`}
									autoComplete="phone"
								/>
								{errors?.phone && typeof errors.phone.message === 'string' && (
									<span className="text-red-600">{errors.phone.message}</span>
								)}
							</div>
							<div className="form-control mt-5 mr-3 ">
								<div>
									<label className="label">
										<span className="label-text font-bold">Country*</span>
									</label>
								</div>
								<select
									{...register('country', {required: 'Country is required'})}
									className="p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black w-full"
								>
									{countryName.map((country, index) => {
										return <option key={index}>{country.name}</option>;
									})}
								</select>
								{errors.country && typeof errors.country.message === 'string' && (
									<span className="text-red-600">{errors.country.message}</span>
								)}
							</div>
							<div className="form-control mt-5 mr-3">
								<div>
									<label className="label">
										<span className="label-text font-bold">Town/City*</span>
									</label>
								</div>
								<input
									{...register('townCity', {required: 'Town/City is required'})}
									type="text"
									placeholder="Town or City name"
									className={` p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black w-full`}
									autoComplete="phone"
								/>
								{errors.townCity && typeof errors.townCity.message === 'string' && (
									<span className="text-red-600">{errors.townCity.message}</span>
								)}
							</div>
							<div className="form-control mt-5 mr-3">
								<div>
									<label className="label">
										<span className="label-text font-bold">Street Address*</span>
									</label>
								</div>
								<input
									{...register('street', {required: 'Street Address is required'})}
									type="text"
									placeholder="Street name and House number"
									className={` p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black w-full`}
									autoComplete="phone"
								/>
								{errors.street && typeof errors.street.message == 'string' && (
									<span className="text-red-600">{errors.street.message}</span>
								)}
							</div>
							<div className="form-control mt-5 mr-3">
								<div>
									<label className="label">
										<span className="label-text font-bold">Order Note</span>
									</label>
								</div>
								<textarea
									{...register('orderNote')}
									placeholder="Notes about your order, e.g. special notes for delivery."
									className="p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black h-32 w-full"
									autoComplete="note"
								/>
							</div>
						</div>
						<div className="order-details">
							<div className="cupon">
								<h2 className="bg-black text-white p-4 text-xl font-bold uppercase">
									Order details
								</h2>
								<OrderDetails cartLists={cartListItems}></OrderDetails>

								<div className="cart-subtotal">
									<div className="mx-5 my-5 font-bold">
										<div>
											<div className="flex justify-between mb-2 ">
												<h2 className="uppercase">Subtotal</h2>
												<h2>{subTotal.toFixed(2)}</h2>
											</div>
											<div className="flex justify-between mb-2">
												<h2 className="uppercase">Shipping</h2>
												<h2>$5</h2>
											</div>
											<div className="flex justify-between mb-2">
												<h2 className="uppercase">Tax</h2>
												<h2>15%</h2>
											</div>
										</div>
										<div className="divider"></div>
										<div>
											<div className="flex justify-between mb-2">
												<h2 className="uppercase">Total</h2>
												<h2>{total.toFixed(2)}</h2>
											</div>
										</div>
									</div>
								</div>
								<div className="form-control mt-6">
									<button
										// onClick={() => showModal()}
										type="submit"
										className="bg-primary border-0 hover:!bg-secondary !text-white font-bold w-full uppercase h-9 rounded-md"
									>
										Place Order
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
			{/* ) : (
				// <EmptyCartWishList name={'Cart'}></EmptyCartWishList>
				<h2>nai</h2>
			)} */}
			<Modal
				title="Select Payment Method"
				open={open}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={() => (
					<>
						<Button
							onClick={handleOk}
							className="bg-primary border-0 hover:!bg-secondary !text-white font-bold w-full uppercase mt-5"
						>
							Place Order
						</Button>
					</>
				)}
			>
				<Select
					defaultValue="Cash on Delivery"
					style={{width: ' 100%'}}
					options={[
						{value: '1', label: 'Cash on Delivery'},
						{value: '2', label: 'Online Payment'},
					]}
					suffixIcon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
							/>
						</svg>
					}
				/>
			</Modal>
		</div>
	);
};

export default CheckOut;
