'use client'
import Layout from "@/components/layout/Layout"
import CountUp from "react-countup"
import Link from "next/link"

export default function Services() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-service-list pt-120 pb-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase">
											My Works
										</Link>
										<h3 className="ds-3 mt-3 mb-4 text-dark">
											Transforming Ideas
											<span className="text-dark"> into Innovative Solutions for</span>
											High-Performance Web Applications
										</h3>
										<p className="text-300 fs-5">
											As a Full Stack Developer, I specialize in creating responsive web applications and scalable backend systems. <br />
											Explore my work and see technology in action.
										</p>
									</div>
									<div className="card-scroll mt-8">
										<div className="cards">
											<div className="card-custom" data-index={0}>
												<div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
													<div className="card__title d-flex align-items-center mb-md-4 mb-3">
														<Link href="" className="card_title_link">
															<h3 className="fw-semibold mb-2">Full Stack Development</h3>
															<p className="mb-0">Innovative. Scalable. Efficient.</p>
														</Link>
														<Link href="" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<div className="card__image-container zoom-img position-relative">
														<img className="card__image" src="/assets/imgs/services-list/img-1.png" alt="Full Stack Development" />
														<Link href="" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
													</div>
													<div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Responsive Web Applications
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Building responsive web applications using React.js and Vue.js, ensuring a seamless user experience across devices.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																API Integration
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Integrating REST APIs for dynamic data handling and enhancing application functionality.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Database Management
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Utilizing SQL and MongoDB for efficient data storage and retrieval, ensuring data integrity and performance.
															</p>
														</div>
													</div>
												</div>
											</div>
											<div className="card-custom" data-index={0}>
												<div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
													<div className="card__title d-flex align-items-center mb-md-4 mb-3">
														<Link href="" className="card_title_link">
															<h3 className="fw-semibold mb-2">E-commerce Solutions</h3>
															<p className="mb-0">Creative. Unique. Reality.</p>
														</Link>
														<Link href="" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															 <i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<div className="card__image-container zoom-img position-relative">
														<img className="card__image" src="/assets/imgs/services-list/img-2.png" alt="E-commerce Solutions" />
														<Link href="" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
													</div>
													<div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Full-Stack E-commerce Platforms
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Developing full-stack e-commerce platforms with secure payment integration and user-friendly interfaces.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																JWT Authentication
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Implementing JWT authentication for secure user sessions and data protection.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Performance Optimization
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Optimizing applications for performance, leading to increased user retention and engagement.
															</p>
														</div>
													</div>
												</div>
											</div>
											<div className="card-custom" data-index={0}>
												<div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
													<div className="card__title d-flex align-items-center mb-md-4 mb-3">
														<Link href="" className="card_title_link">
															<h3 className="fw-semibold mb-2">Job Search Platforms</h3>
															<p className="mb-0">Creative. Unique. Reality.</p>
														</Link>
														<Link href="" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<div className="card__image-container zoom-img position-relative">
														<img className="card__image" src="/assets/imgs/services-list/img-3.png" alt="Job Search Platforms" />
														<Link href="" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
													</div>
													<div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Job Search Functionality
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Building job search platforms with features like job listings, applications, and user profiles.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Real-Time Notifications
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Implementing real-time notifications for job alerts and application updates.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																User-Centric Design
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Creating user-centric designs to enhance the job search experience.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
				
								</div>
							</div>
						</div>
					</section>
					{/*Statistics Section*/}
					<div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-900">
				<div className="container">
					<div className="inner">
						<div className="row align-items-center justify-content-between">
							<div className="col-lg-auto col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="odometer ds-1 text-dark fw-semibold"><CountUp  enableScrollSpy={true} end={1} className="odometer ds-1 text-dark fw-semibold"/>+</span>
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
										<span className="odometer ds-1 text-dark fw-semibold"><CountUp  enableScrollSpy={true} end={50} className="odometer ds-1 text-dark fw-semibold"/>+</span>
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
										<span className="odometer ds-1 text-dark fw-semibold"><CountUp  enableScrollSpy={true} end={10} className="odometer ds-1 text-dark fw-semibold"/>+</span>
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
										<span className="odometer ds-1 text-dark fw-semibold"><CountUp  enableScrollSpy={true} end={40} className="odometer ds-1 text-dark fw-semibold"/>K+</span>
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
					{/* Contact Section */}
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
														<label className="mb-1 mt-3 text-dark" htmlFor="name">Your name <span className="text-primary">*</span></label>
														<input type="text" className="form-control border rounded-3" id="name" name="name" placeholder="Your Name" aria-label="username" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="email">Email address <span className="text-primary">*</span></label>
														<input type="text" className="form-control border rounded-3" id="email" name="email" placeholder="Your EmailS" aria-label="email" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="phone">Your phone <span className="text-primary">*</span></label>
														<input type="text" className="form-control border rounded-3" id="phone" name="phone" placeholder="+01 234 567 89" aria-label="phone" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="subject">Subject <span className="text-primary">*</span></label>
														<input type="text" className="form-control border rounded-3" id="subject" name="subject" placeholder="I want to contact for...." aria-label="subject" />
													</div>
													<div className="col-12">
														<label className="mb-1 mt-3 text-dark" htmlFor="message">Message <span className="text-primary">*</span></label>
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