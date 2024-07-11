import CardData from '../../../components/card/CardData';
import {TProduct} from '../../../redux/features/cart/cart';
import {useGetAllProductsQuery} from '../../../redux/features/product/productApi';

const NewArrival = () => {
	const {data, isLoading} = useGetAllProductsQuery({pollingInterval: 3000});
	console.log('🚀🚀: NewArrival -> data', data);
	if (isLoading) {
		return <h2>Loading...........</h2>;
	}
	return (
		<section className="container mx-auto my-14 overflow-hidden">
			<div className="mx-5 md:mx-16">
				<div className="">
					<h2 className="text-2xl text-primary font-bold uppercase">The New Arrivals</h2>
				</div>

				<div className="grid md:grid-cols-4 gap-4 mt-5">
					{data?.data.slice(1, 5).map((item: TProduct) => (
						<CardData key={item._id} item={item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default NewArrival;
