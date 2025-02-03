import Link from "next/link"

export default function Service1() {
	return (
		<>
			<section className="section-service-1 pt-120 pb-120">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary">What do I offer?</h3>
							<span className="fs-5 fw-medium text-200">
								As a Full Stack Developer, I craft seamless web applications <br />
								with a focus on performance and scalability.
							</span>
						</div>
						<div className="col-lg-auto">
							<Link href="/#contact" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								Contact Me
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
					<div className="row mt-6 justify-content-between">
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/img-1.png">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<Link href="/work-single">
											<span className="service-number">01.</span>
											Frontend Development
										</Link>
									</h3>
									<Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Building dynamic and responsive user interfaces with React.js, Vue.js, <br />
											and modern JavaScript frameworks.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/img-2.png">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<Link href="/work-single">
											<span className="service-number">02.</span>
											Backend Development
										</Link>
									</h3>
									<Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Creating scalable backend systems using Node.js, Express.js, <br />
											and Python with secure API integration.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/img-3.png">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<Link href="/work-single">
											<span className="service-number">03.</span>
											Database Management
										</Link>
									</h3>
									<Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Designing and managing databases using SQL, SQLite, and MongoDB <br />
											to ensure efficient data handling and storage.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3 border-bottom" data-fx={1} data-img="assets/imgs/services/services-1/img-4.png">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										<Link href="/work-single">
											<span className="service-number">04.</span>
											Full Stack Projects
										</Link>
									</h3>
									<Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Developing comprehensive web applications like e-commerce platforms <br />
											and job search portals with full-stack technologies.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
