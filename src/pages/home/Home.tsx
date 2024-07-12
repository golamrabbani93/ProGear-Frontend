import Category from './category/Category';
import ContactUs from './ContactUs/ContactUs';
import Hero from './Hero/Hero';
import NewArrival from './newArrival/NewArrival';

const Home = () => {
	return (
		<div>
			<Hero />
			<NewArrival />
			<Category />
			<ContactUs />
		</div>
	);
};

export default Home;
