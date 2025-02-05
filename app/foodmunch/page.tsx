'use client'

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import CountUp from 'react-countup';
import Image from "next/image";

export default function ChefMunch() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div>
        <section className="section-work-single section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-lg-auto mb-lg-0">
                <div className="text-center">
                  <Link href="/#" className="btn btn-gradient d-inline-block text-uppercase">
                    work details
                  </Link>
                  <h3 className="ds-3 mt-3 mb-4">Chef Munch – Responsive Restaurant Website</h3>
                  <p className="text-300 fs-5 mb-0">
                    Chef Munch is a beautifully designed restaurant website that provides users with a seamless browsing experience. Built with HTML, CSS, and Bootstrap, it ensures responsiveness across all devices, offering an elegant interface for viewing delicious food items.
                  </p>
                </div>
              </div>
              <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                <div className="bg-6 px-5 py-3 rounded-2">
                  <p className="text-300 mb-0">Client</p>
                  <h6>Internal Project</h6>
                </div>
                <div className="bg-6 px-5 py-3 rounded-2">
                  <p className="text-300 mb-0">Start</p>
                  <h6>01 June 2024</h6>
                </div>
                <div className="bg-6 px-5 py-3 rounded-2">
                  <p className="text-300 mb-0">Complete</p>
                  <h6>30 June 2024</h6>
                </div>
                <div className="bg-6 px-5 py-3 rounded-2">
                  <p className="text-300 mb-0">Services</p>
                  <h6>Frontend Development, UI/UX Design</h6>
                </div>
                <div className="bg-6 px-5 py-3 rounded-2">
                  <p className="text-300 mb-0">Website</p>
                  <Link href="https://chefmunch.ccbp.tech/">chefmunch.ccbp.tech</Link>
                </div>
              </div>
              <Image 
                src="/assets/imgs/projects/projects-1/img-3.png" 
                alt="Chef Munch" 
                layout="responsive" 
                width={100} 
                height={60} 
                style={{ objectFit: "cover" }} 
              />

              <div className="col-lg-8 mx-lg-auto mt-8">
                <h5 className="fs-5 fw-medium">Description</h5>
                <p className="text-300">
                  Chef Munch is designed to showcase a restaurant’s menu with an attractive and user-friendly layout. The website follows a mobile-first approach, ensuring a seamless browsing experience on any device.
                </p>
                <h5 className="fs-5 fw-medium mt-4">Key Features</h5>
                <ul>
                  <li>
                    <p className="fw-bold">Responsive Design: <span className="text-300 fw-medium">Fully optimized for mobile, tablet, and desktop screens.</span></p>
                  </li>
                  <li>
                    <p className="fw-bold">Bootstrap Framework: <span className="text-300 fw-medium">Utilized Bootstrap to enhance design consistency and responsiveness.</span></p>
                  </li>
                  <li>
                    <p className="fw-bold">User-Friendly Navigation: <span className="text-300 fw-medium">Easy-to-use layout for browsing different menu categories.</span></p>
                  </li>
                </ul>
                <h5 className="fs-5 fw-medium mt-4">Technologies Used</h5>
                <ul>
                  <li>
                    <p className="fw-bold">Frontend: <span className="text-300 fw-medium">HTML, CSS, Bootstrap</span></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
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
      </div>
    </Layout>
  );
}
