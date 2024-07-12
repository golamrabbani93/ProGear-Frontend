import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import AboutUs from '../pages/aboutUs/AboutUs';
import Products from '../pages/product/Products';

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
				element: <AboutUs />,
			},
			{
				path: 'products',
				element: <Products />,
			},
		],
	},
]);

export default router;
