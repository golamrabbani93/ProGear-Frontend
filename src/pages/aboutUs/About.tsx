import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Company from './aboutCompany/Company';
import Contact from './Contact/Contact';
import Mission from './Mission/Mission';
import Team from './Team/Team';

const About = () => {
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
			<Company />
			<Mission />
			<Team />
			<Contact />
		</div>
	);
};

export default About;
