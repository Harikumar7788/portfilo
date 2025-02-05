
'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import CountUp from "react-countup"
export default function Work() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-work pt-120 pb-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase"> recent Work </Link>
										<h3 className="ds-3 mt-3 mb-4">Explore My Latest Work and Discover the Craftsmanship Behind Each Design</h3>
										<p className="text-300 fs-5">
											Explore my latest work and discover the craftsmanship behind each design: <br />
											a detailed look into how I bring innovation and creativity to life
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row">
								<div className="card-scroll mt-8">
									<div className="cards">
										{/* prettier-ignore */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image w-50 h-50" src="/assets/imgs/work/img-1.png" alt="" />
													<Link href="/work-single" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="/WeCare" className="card_title_link">
															<p className="text-primary mb-0 mb-md-2">Frontend Development</p>
															<h3 className="fw-semibold">Clinic site for Wecare Multispecility  Hospital</h3>
														</Link>
														<Link href="/WeCare" className="card-icon d-none d-md-inline-flex border border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">Designed a user-friendly and informative hospital landing page aimed at enhancing the patient experience. This involved creating easy navigation, clear information about medical services, doctors, and treatments, as well as features that facilitate online appointment scheduling, making healthcare services more accessible and user-friendly.</p>
                                                     <div className="d-md-flex content">
														<p className="mb-0 fs-7 text-uppercase w-40">
															Client
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															WeCare Multispecility Clinic
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															15 Days
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-uppercase w-40">
															Tools
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Figma, Next js , Tailwind Css
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image w-50 h-50" src="/assets/imgs/work/img-2.png" alt="" />
													<Link href="/work-single" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="/work-single" className="card_title_link">
															<p className="text-primary mb-0 mb-md-2">Full Stack Development </p>
															<h3 className="fw-semibold">E-commerce</h3>
														</Link>
														<Link href="/work-single" className="card-icon d-none d-md-inline-flex border border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">
													Developed a dynamic and user-friendly e-commerce platform designed to enhance the online shopping experience. This involved creating seamless navigation, intuitive product displays, and features that promote customer engagement and convenience, making shopping more efficient and enjoyable.
													</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-uppercase w-40">
															Client
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Interal Project 
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															2 months
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-uppercase w-40">
															Tools
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Figma,React Js, Bootstrap, Node Js, Express Js, Sql 
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image w-50 h-50" src="/assets/imgs/work/img-3.png" alt="" />
													<Link href="/food-delivery" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="/work-single" className="card_title_link">
															<p className="text-primary mb-0 mb-md-2">Full Stack Development </p>
															<h3 className="fw-semibold">Food delivery Web </h3>
														</Link>
														<Link href="/work-single" className="card-icon d-none d-md-inline-flex border border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">Designed a seamless and user-friendly food delivery platform aimed at enhancing the online ordering experience. This included developing intuitive navigation, a dynamic menu interface, and features that streamline ordering, payment, and delivery tracking, making food delivery more convenient and enjoyable for users.</p>
                                                   <div className="d-md-flex content">
														<p className="mb-0 fs-7 text-uppercase w-40">
															Client
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Internal Project 
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															1 months
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-uppercase w-40">
															Tools
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Figma, React Js, Tailwind Css, Node Js, Express Js, Mongo DB
														</p>
													</div>
												</div>
											</div>
										</div>
										{/* <div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image w-50 h-50" src="/assets/imgs/work/img-4.png" alt="" />
													<Link href="/work-single" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="/work-single" className="card_title_link">
															<p className="text-primary mb-0 mb-md-2">VISUAL DESIGN</p>
															<h3 className="fw-semibold">Educational Platform UI/UX</h3>
														</Link>
														<Link href="/work-single" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">Designed an interactive and engaging educational platform aimed at improving online learning experiences. This included developing intuitive navigation, interactive course materials, and features that support student engagement and participation, making learning more accessible and enjoyable.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Client
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Conceptual JSC
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															6 months
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Figma, Sketch, Photoshop, Framer
														</p>
													</div>
												</div>
											</div>
										</div> */}
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*Static 1*/}
					<div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-900">
				<div className="container">
					<div className="inner">
						<div className="row align-items-center justify-content-between">
							<div className="col-lg-auto col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="odometer ds-1 fw-semibold"><CountUp  enableScrollSpy={true} end={1} className="odometer ds-1 fw-semibold"/>+</span>
										<div className="text-start ms-2">
											<p className="fs-5 mb-0 text-300">Year of</p>
											<p className="fs-5 mb-0 fw-bold">Experience</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-auto col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="odometer ds-1 fw-semibold"><CountUp  enableScrollSpy={true} end={50} className="odometer ds-1 fw-semibold"/>+</span>
										<div className="text-start ms-2">
											<p className="fs-5 mb-0 text-300">Projects</p>
											<p className="fs-5 mb-0 fw-bold">Completed</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-auto col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="odometer ds-1 fw-semibold"><CountUp  enableScrollSpy={true} end={10} className="odometer ds-1 fw-semibold"/>+</span>
										<div className="text-start ms-2">
											<p className="fs-5 mb-0 text-300">Professional</p>
											<p className="fs-5 mb-0 fw-bold">Certifications Earned</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-auto col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="odometer ds-1 fw-semibold"><CountUp  enableScrollSpy={true} end={40} className="odometer ds-1 fw-semibold"/>K+</span>
										<div className="text-start ms-2">
											<p className="fs-5 mb-0"> </p>
											<p className="fs-5 mb-0 fw-bold">Lines of Code</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
					{/* Contact 1*/}
					<section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden">
						<div className="container position-relative z-1">
							<h3 className="ds-3 mt-3 mb-3 text-primary">Get in touch</h3>
							<span className="fs-5 fw-medium text-200">
								I'm always excited to take on new projects and collaborate with innovative minds. If you
								<br />
								have a project in mind or just want to chat about development, feel free to reach out!
							</span>
							<div className="row mt-8">
								<div className="col-lg-4 d-flex flex-column">
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-phone-fill text-primary fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Phone Number</span>
											<h6 className="mb-0">+91
6374037769</h6>
										</div>
										<Link href="/tel:+91-6374037769" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-mail-fill text-primary fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Email</span>
											<h6 className="mb-0">harisenthil787@gmail.com</h6>
										</div>
										<Link href="/mailto:harisenthil787@gmail.com" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-linkedin-fill text-primary fs-26 p-3" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">LinkedIn</span>
											<h6 className="mb-0">https://www.linkedin.com/in/hari-kumar-senthil</h6>
										</div>
										<Link href="https://www.linkedin.com/in/hari-kumar-senthil" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
								</div>
								<div className="col-lg-7 offset-lg-1 ps-lg-0 pt-5 pt-lg-0">
									<div className="position-relative">
										<div className="position-relative z-2">
											<h3>Leave a message</h3>
											<form action="#">
												<div className="row mt-3">
													<div className="col-md-6 ">
														<label className="mb-1 mt-3" htmlFor="name">Your name <span className="text-primary">*</span></label>
														<input type="text" className="form-control border rounded-3" id="name" name="name" placeholder="Your Name" aria-label="username" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3" htmlFor="email">Email address <span className="text-primary">*</span></label>
														<input type="text" className="form-control border rounded-3" id="email" name="email" placeholder="Your Email" aria-label="email" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3" htmlFor="phone">Your phone <span className="text-primary">*</span></label>
														<input type="text" className="form-control border rounded-3" id="phone" name="phone" placeholder="+01 234 567 89" aria-label="phone" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3" htmlFor="subject">Subject <span className="text-primary">*</span></label>
														<input type="text" className="form-control border rounded-3" id="subject" name="subject" placeholder="I want to contact for...." aria-label="subject" />
													</div>
													<div className="col-12">
														<label className="mb-1 mt-3" htmlFor="message">Message <span className="text-primary">*</span></label>
														<textarea className="form-control border rounded-3 pb-10" id="message" name="message" placeholder="Your message here...." aria-label="With textarea" />
													</div>
													<div className="col-12">
														<button type="submit" className="btn btn-gradient mt-3">
															Send Message
															<i className="ri-arrow-right-up-line" />
														</button>
													</div>
												</div>
											</form>
										</div>
										<div className="z-0 bg-primary -dark rectangle-bg z-1 rounded-3" />
									</div>
								</div>
							</div>
						</div>
						<div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-900 overflow-hidden">
							<div className="wow img-custom-anim-top">
								<h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">harikumar.s</h3>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}