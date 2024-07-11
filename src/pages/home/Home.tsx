import Category from './category/Category';
import Hero from './Hero/Hero';
import NewArrival from './newArrival/NewArrival';

const Home = () => {
	return (
		<div>
			<Hero />
			<NewArrival />
			<Category />
		</div>
	);
};

export default Home;
