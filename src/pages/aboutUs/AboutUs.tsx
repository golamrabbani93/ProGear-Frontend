import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const AboutUs = () => {
	const items = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'About Us',
			path: '/about-us',
		},
	];
	return (
		<div>
			<BreadCrumb items={items} />
		</div>
	);
};

export default AboutUs;
