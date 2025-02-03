'use client'

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import CountUp from 'react-countup';
import Image from "next/image";

export default function FoodDeliveryWeb() {
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
                  <h3 className="ds-3 mt-3 mb-4 text-dark">Food Delivery Web – Modern Food Delivery Platform</h3>
                  <p className="text-300 fs-5 mb-0">
                    Food Delivery Web is a modern and efficient food delivery platform designed to provide users with a seamless ordering experience. Built with Next.js, Tailwind CSS, and MongoDB, it ensures fast performance, responsive design, and easy scalability.
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
                  <h6>01 July 2024</h6>
                </div>
                <div className="bg-6 px-5 py-3 rounded-2">
                  <p className="text-300 mb-0">Complete</p>
                  <h6>31 July 2024</h6>
                </div>
                <div className="bg-6 px-5 py-3 rounded-2">
                  <p className="text-300 mb-0">Services</p>
                  <h6>Full-Stack Development, UI/UX Design</h6>
                </div>
                <div className="bg-6 px-5 py-3 rounded-2">
                  <p className="text-300 mb-0">Website</p>
                  <Link href="https://ephemeral-stroopwafel-9da897.netlify.app">fooddeliveryweb</Link>
                </div>
              </div>
              <Image 
                src="/assets/imgs/projects/projects-1/img-4.png" 
                alt="Food Delivery Web" 
                layout="responsive" 
                width={100} 
                height={60} 
                style={{ objectFit: "cover" }} 
              />

              <div className="col-lg-8 mx-lg-auto mt-8">
                <h5 className="fs-5 fw-medium">Description</h5>
                <p className="text-300">
                  Food Delivery Web is designed to provide a modern and efficient platform for ordering food online. The platform offers a user-friendly interface, real-time order tracking, and seamless integration with MongoDB for data storage.
                </p>
                <h5 className="fs-5 fw-medium mt-4">Key Features</h5>
                <ul>
                  <li>
                    <p className="text-dark fw-bold">Responsive Design: <span className="text-300 fw-medium">Fully optimized for mobile, tablet, and desktop screens.</span></p>
                  </li>
                  <li>
                    <p className="text-dark fw-bold">Real-Time Order Tracking: <span className="text-300 fw-medium">Users can track their orders in real-time.</span></p>
                  </li>
                  <li>
                    <p className="text-dark fw-bold">User-Friendly Navigation: <span className="text-300 fw-medium">Easy-to-use layout for browsing restaurants and menu items.</span></p>
                  </li>
                </ul>
                <h5 className="fs-5 fw-medium mt-4">Technologies Used</h5>
                <ul>
                  <li>
                    <p className="text-dark fw-bold">Frontend: <span className="text-300 fw-medium">Next.js, Tailwind CSS</span></p>
                  </li>
                  <li>
                    <p className="text-dark fw-bold">Backend: <span className="text-300 fw-medium">Next.js API Routes</span></p>
                  </li>
                  <li>
                    <p className="text-dark fw-bold">Database: <span className="text-300 fw-medium">MongoDB</span></p>
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
                      <span className="odometer ds-1 text-dark fw-semibold"><CountUp enableScrollSpy={true} end={1} className="odometer ds-1 text-dark fw-semibold"/>+</span>
                      <div className="text-start ms-2">
                        <p className="fs-5 mb-0 text-300">Years of</p>
                        <p className="fs-5 mb-0 fw-bold">Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-auto col-md-6">
                  <div className="counter-item-cover counter-item">
                    <div className="content text-center mx-auto d-flex align-items-center">
                      <span className="odometer ds-1 text-dark fw-semibold"><CountUp enableScrollSpy={true} end={70} className="odometer ds-1 text-dark fw-semibold"/>+</span>
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
                      <span className="odometer ds-1 text-dark fw-semibold"><CountUp enableScrollSpy={true} end={15} className="odometer ds-1 text-dark fw-semibold"/>+</span>
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
                      <span className="odometer ds-1 text-dark fw-semibold"><CountUp enableScrollSpy={true} end={50} className="odometer ds-1 text-dark fw-semibold"/>K+</span>
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