import {Button} from 'antd';

const ContactUs = () => {
	return (
		<div className="mb-24 mt-20">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center px-7">
					<div className="text md:w-96 mb-10 md:mb-0">
						<h2 className="text-4xl font-bold uppercase text-primary">We ARe Here To help</h2>
						<p className="text-justify mt-3">
							Let us know how we can serve you. Use the conatact form to email us or select from the
							topics that best fits your needs. It's an honor to support you
						</p>
					</div>
					<div className="form">
						<div className="input">
							<input
								type="text"
								className="w-full h-[50px] border rounded-l border-[#9B9B97] outline-none px-4 text-black focus:border-primary transition-all duration-500 mb-4"
								placeholder="Name"
							/>
							<input
								type="text"
								className="w-full h-[50px] border rounded-l border-[#9B9B97] outline-none px-4 text-black focus:border-primary transition-all duration-500 mb-4"
								placeholder="Enter your email"
							/>
							<input
								type="text"
								className="w-full h-[50px] border rounded-l border-[#9B9B97] outline-none px-4 text-black focus:border-primary transition-all duration-500 mb-4"
								placeholder="Phone Number"
							/>
							<textarea
								className="w-full h-[80px] border rounded-l border-[#9B9B97] outline-none px-4 text-black focus:border-primary transition-all duration-500"
								placeholder="Write Your Message"
							/>
							<Button className="bg-primary border-0 hover:!bg-secondary !text-white font-bold  uppercase mt-2">
								Send Message
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
