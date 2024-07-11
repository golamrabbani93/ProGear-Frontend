import {Button, Carousel} from 'antd';
import {Link} from 'react-router-dom';

const contentStyle: React.CSSProperties = {
	margin: -1,
	height: '90vh',
};

const HeroSlider = () => {
	return (
		<Carousel dotPosition="left" autoplay={true}>
			{/* Hero-1 */}
			<div>
				<div style={contentStyle} className={`banner-1 text-white relative`}>
					<div className="banner__image relative ">
						<img
							className="h-[90vh] w-full object-cover"
							src="https://i.ibb.co/0QVh6VP/banner-4.jpg"
							alt=""
						/>
					</div>
					<div className="container mx-auto">
						<div className="banner__info w-[250px] sm:w-[320px] md:w-[580px] absolute top-1/2 translate-y-[-50%] pl-10 lg:pl-20">
							<div className="relative ">
								<p className="sm:text-xl uppercase ml-3 text-primary">Last chance</p>

								<h2 className=" text-primary-focus text-8xl font-semibold sm:leading-[70px] mt-2 mb-10 ">
									Super Sale
								</h2>
								<h1 className="text-3xl uppercase ml-2">
									<span>Up to</span>
									<span className="text-5xl font-bold text-primary"> 50%</span>
									<span>off</span>
								</h1>
								<Link to={'/product'} className="mt-4 block">
									<Button className="bg-primary border-0 hover:!bg-secondary !text-white font-bold uppercase">
										Shop Now
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Hero-2 */}
			<div>
				<div style={contentStyle} className={`banner-1 text-white relative`}>
					<div className="banner__image relative ">
						<img
							className="h-[90vh] w-full object-cover"
							src="https://i.ibb.co/y599RsZ/banner-3.jpg"
							alt=""
						/>
					</div>
					<div className="container mx-auto">
						<div className="banner__info w-[250px] sm:w-[320px] md:w-[580px] absolute top-1/2 translate-y-[-50%] pl-10 lg:pl-20">
							<div className="relative ">
								<p className="sm:text-xl uppercase ml-3 text-primary">Last chance</p>

								<h2 className=" text-primary-focus text-8xl font-semibold sm:leading-[70px] mt-2 mb-10 ">
									Super Sale
								</h2>
								<h1 className="text-3xl uppercase ml-2">
									<span>Up to</span>
									<span className="text-5xl font-bold text-primary"> 50%</span>
									<span>off</span>
								</h1>
								<Link to={'/product'} className="mt-4 block">
									<Button className="bg-primary border-0 hover:!bg-secondary !text-white font-bold uppercase">
										Shop Now
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Hero-3 */}
			<div>
				<div style={contentStyle} className={`banner-1 text-white relative`}>
					<div className="banner__image relative ">
						<img
							className="h-[90vh] w-full object-cover"
							src="https://i.ibb.co/yRb2VWB/banner-1.jpg"
							alt=""
						/>
					</div>
					<div className="container mx-auto">
						<div className="banner__info w-[250px] sm:w-[320px] md:w-[580px] absolute top-1/2 translate-y-[-50%] pl-10 lg:pl-20">
							<div className="relative ">
								<p className="sm:text-xl uppercase ml-3 text-primary">Last chance</p>

								<h2 className=" text-primary-focus text-8xl font-semibold sm:leading-[70px] mt-2 mb-10 ">
									Super Sale
								</h2>
								<h1 className="text-3xl uppercase ml-2">
									<span>Up to</span>
									<span className="text-5xl font-bold text-primary"> 50%</span>
									<span>off</span>
								</h1>
								<Link to={'/product'} className="mt-4 block">
									<Button className="bg-primary border-0 hover:!bg-secondary !text-white font-bold uppercase">
										Shop Now
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Carousel>
	);
};

export default HeroSlider;
