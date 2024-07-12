import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import AboutUs from '../pages/aboutUs/AboutUs';
import Shop from '../pages/Shop/Shop';

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
				path: 'shop',
				element: <Shop />,
			},
			{
				path: 'shop/category/:name',
				element: <Shop></Shop>,
			},
		],
	},
]);

export default router;
