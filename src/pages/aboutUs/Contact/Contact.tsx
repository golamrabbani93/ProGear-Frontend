const Contact = () => {
	return (
		<div className="my-20">
			<div className="container mx-auto">
				<div className="flex justify-center">
					<div className="containerContact">
						<div className="picture-container">
							<div className="picture">
								<svg
									width="400px"
									height="300px"
									viewBox="-150 -99 1230 1022"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
								>
									<desc>Created with Sketch.</desc>
									<defs></defs>
									<path
										d="M436.612844,783.873989 C383.646464,1018.56651 721.019595,913.998104 845.173614,771.175243 C969.327632,628.352383 1062.8876,382.230412 980.489795,310.603094 C947.305347,281.756293 855.841203,313.393833 782.453276,334.918921 C762.737736,340.701598 647.28515,389.857308 620.73246,284.637931 C613.357636,255.413983 684.801981,108.205582 678.469226,4.83555972 C674.811257,-54.8737311 640.6213,-101.236496 562.120181,-98.4819349 C432.84531,-93.9457513 336.174606,42.3294163 261.018224,135.816995 C211.526825,197.379713 160.232117,228.107983 154.506663,233.912672 C103.126466,286.003925 194.073335,-151.19202 -57.3286154,47.7276753 C-100.69372,82.0399523 -290.558853,254.241782 -187.455608,545.707939 C-168.397037,599.585276 -34.1223694,378.890577 -92.7241774,609.425338 C-151.325985,839.960099 -77.3777541,854.175414 -49.1572726,855.085459 C182.866272,862.567681 310.654632,621.150197 393.96853,604.731975 C484.706615,586.850709 437.18152,781.354203 436.612844,783.873989"
										id="Oval-3"
										stroke="none"
										fill="#ECF5FD"
										fill-rule="evenodd"
									></path>
								</svg>
							</div>
						</div>
						<div className="contact-form-container">
							<form className="contact-form">
								<span className="form-header">Contact us</span>
								<input type="email" className="email-input" placeholder="Email" />
								<textarea
									name="feedback"
									cols={30}
									rows={5}
									className="message"
									placeholder="Message..."
								></textarea>
								<button className="submit" type="submit">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
