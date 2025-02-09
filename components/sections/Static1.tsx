
'use client'
import CountUp from 'react-countup'

export default function Static1() {
	return (
		<>

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

		</>
	)
}
