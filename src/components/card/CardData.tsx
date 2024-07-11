import {Card} from 'antd';
import {Link} from 'react-router-dom';

const CardData = () => {
	return (
		<div>
			<div className="flex justify-center">
				<Card hoverable className="new-card">
					<div className=" card-compact">
						<div className="relative overflow-hidden">
							<Link to={`/shop/product/id`}>
								<img
									src="https://i.ibb.co/QjX7zMF/pexels-enginakyurt-3019018.jpg"
									alt={'data?.name'}
								/>
							</Link>

							<div className="action-link">
								<div>
									<label className="text-white hover:text-primary font-bold uppercase transition duration-500 cursor-pointer">
										Add to Cart
									</label>
								</div>
							</div>
							<h2 className="text-xs font-bold py-[2px] px-1 absolute top-[10px] left-[10px] text-primary-focus uppercase bg-primary opacity-70 text-white">
								Brand
							</h2>
							<h2 className="text-xs font-bold py-[2px] px-1 absolute top-[10px] right-[10px] text-primary-focus uppercase bg-primary opacity-70 text-white">
								23 in stock
							</h2>
						</div>
						<div className="px-3 pb-3">
							<div className="my-3 flex justify-between">
								<Link to={`/shop/product/id`} className="hover:text-primary transiti duration-300">
									<h2 className="card-title font-bold">Valour Performance Velvet </h2>
								</Link>
								<div className="price mr-3">
									<span className="font-bold text-primary">
										<span>$575</span>
									</span>
								</div>
							</div>
							<div className="w-full bg-primary h-[1px] p-0"></div>
							<div className="price-rating flex justify-between">
								<p>data?cat</p>
								<p>data?.rating</p>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default CardData;
