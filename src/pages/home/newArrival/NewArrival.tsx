import CardData from '../../../components/card/CardData';

const NewArrival = () => {
	return (
		<section className="container mx-auto my-14 overflow-hidden">
			<div className="mx-5 md:mx-16">
				<div className="">
					<h2 className="text-2xl text-primary font-bold uppercase">The New Arrivals</h2>
				</div>

				<div className="grid md:grid-cols-4 gap-4 mt-5">
					<CardData />
					<CardData />
					<CardData />
					<CardData />
				</div>
			</div>
		</section>
	);
};

export default NewArrival;
