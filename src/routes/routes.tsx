import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import Shop from '../pages/Shop/Shop';
import SingleProduct from '../components/SingleProduct/SingleProduct';
import Cart from '../components/cart/Cart';
import ManageProductLayout from '../components/layout/ManageProductLayout';
import AddProduct from '../pages/ProductDashboard/AddProduct/AddProduct';
import UpdateProduct from '../pages/ProductDashboard/UpdateProduct/UpdateProduct';
import SingleUpdate from '../pages/ProductDashboard/UpdateProduct/SingleUpdate';
import DeleteProduct from '../pages/ProductDashboard/DeleteProduct/DeleteProduct';
import CheckOut from '../components/Checkout/Checkout';
import About from '../pages/aboutUs/About';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'about-us',
				element: <About />,
			},
			{
				path: 'shop',
				element: <Shop />,
			},
			{
				path: 'shop/cart',
				element: <Cart />,
			},
			{
				path: 'shop/product/:id',
				element: <SingleProduct />,
			},
			{
				path: 'shop/category/:name',
				element: <Shop></Shop>,
			},
			{
				path: 'shop/checkout',
				element: <CheckOut />,
			},
		],
	},
	{
		path: '/manage-products',
		element: <ManageProductLayout />,
		children: [
			{
				path: '',
				element: <AddProduct />,
			},
			{
				path: 'add-product',
				element: <AddProduct />,
			},
			{
				path: 'update-product',
				element: <UpdateProduct />,
			},
			{
				path: 'update-product/:id',
				element: <SingleUpdate />,
			},
			{
				path: 'delete-product/',
				element: <DeleteProduct />,
			},
		],
	},
]);

export default router;
