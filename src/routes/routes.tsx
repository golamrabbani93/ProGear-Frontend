import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import AboutUs from '../pages/aboutUs/AboutUs';

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
		],
	},
]);

export default router;
