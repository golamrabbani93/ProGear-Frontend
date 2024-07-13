import CardData from '../../../components/card/CardData';
import Loader from '../../../components/Loader/Loader';
import {TProduct} from '../../../redux/features/cart/cartSlice';
import {useGetAllProductsQuery} from '../../../redux/features/product/productApi';

const NewArrival = () => {
	const {data, isLoading} = useGetAllProductsQuery({sort: ''}, {pollingInterval: 30000});
	if (isLoading) {
		return <Loader />;
	}
	return (
		<section className="container mx-auto my-14 overflow-hidden">
			<div className="mx-5 md:mx-16">
				<div className="">
					<h2 className="text-2xl text-primary font-bold uppercase">The New Arrivals</h2>
				</div>

				<div className="grid md:grid-cols-4 gap-4 mt-5">
					{data?.data.slice(0, 4).map((item: TProduct) => (
						<CardData key={item._id} item={item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default NewArrival;
