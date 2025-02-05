'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import CountUp from 'react-countup'
import Image from "next/image"

export default function jobby() {

    return (
        <>
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
                                        <h3 className="ds-3 mt-3 mb-4">
                                            A Landing Page for a Multi-Speciality Hospital (WecareClinic)
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            WecareClinic is a modern, fully responsive hospital landing page designed specifically for PC view. Developed using Next.js and Tailwind CSS, it provides users with a seamless browsing experience for healthcare services and information.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Client</p>
                                        <h6>External Project for a Clinic</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Start</p>
                                        <h6>15 Jan 2025</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Complete</p>
                                        <h6>31 Jan 2025</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Services</p>
                                        <h6> Front-End Development, UI/UX Design</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Website</p>
                                        <Link href="https://weareclinic.vercel.app/">weCareclinic Multi-spcecilityz (Desktop View Only) </Link>
                                    </div>
                                </div>
                                <Image 
                                    src="/assets/imgs/projects/projects-1/img-5.png" 
                                    alt="Wecare Clinic Project Image" 
                                    layout="responsive" 
                                    width={100} 
                                    height={60} 
                                    style={{ objectFit: "cover" }} 
                                />

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">Description</h5>
                                    <p className="text-300">
                                        WecareClinic is a hospital landing page that offers an easy-to-navigate interface for users to explore healthcare services, hospital specialties, and online appointment scheduling. Built with Next.js for fast rendering and Tailwind CSS for a responsive design, it ensures a smooth experience on PC devices.
                                    </p>
                                    <h5 className="fs-5 fw-medium mt-4">Key Features</h5>
                                    <ul>
                                        <li>
                                            <p className="fw-bold">PC-Optimized Design: <span className="text-300 fw-medium">Tailored to work on PC, with a focus on detailed layouts and clear navigation.</span></p>
                                        </li>
                                        <li>
                                            <p className="fw-bold">Service Listings: <span className="text-300 fw-medium">Comprehensive listing of medical services offered, including specialties, consultations, and more.</span></p>
                                        </li>
                                        <li>
                                            <p className="fw-bold">Appointment Scheduling: <span className="text-300 fw-medium">Users can schedule appointments through an intuitive form.</span></p>
                                        </li>
                                        <li>
                                            <p className="fw-bold">Information Sections: <span className="text-300 fw-medium">Information about doctors, facilities, and treatments are easily accessible.</span></p>
                                        </li>
                                    </ul>
                                    <h5 className="fs-5 fw-medium mt-4">Technologies Used</h5>
                                    <ul>
                                        <li>
                                            <p className="fw-bold">Front-End: <span className="text-300 fw-medium">Next.js – A React framework for building server-side rendered pages.</span></p>
                                        </li>
                                        <li>
                                            <p className="fw-bold">Styling: <span className="text-300 fw-medium">Tailwind CSS – A utility-first CSS framework for custom, responsive styling.</span></p>
                                        </li>
                                    </ul>
                                    <h5 className="fs-5 fw-medium mt-4">Design Highlights</h5>
                                    <ul>
                                        <li>
                                            <p className="fw-bold">Responsive Layout: <span className="text-300 fw-medium">Optimized for desktop viewing with a clean, professional aesthetic.</span></p>
                                        </li>
                                        <li>
                                            <p className="fw-bold">User-Centric Design: <span className="text-300 fw-medium">Easy navigation and structured content to guide users through the hospital’s offerings.</span></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Static Section */}
                    <div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-900">
                        <div className="container">
                            <div className="inner">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-lg-auto col-md-6">
                                        <div className="counter-item-cover counter-item">
                                            <div className="content text-center mx-auto d-flex align-items-center">
                                                <span className="odometer ds-1 fw-semibold">
                                                    <CountUp enableScrollSpy={true} end={1} className="odometer ds-1 fw-semibold"/>+
                                                </span>
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
                                                <span className="odometer ds-1 fw-semibold">
                                                    <CountUp enableScrollSpy={true} end={50} className="odometer ds-1 fw-semibold"/>+
                                                </span>
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
                                                <span className="odometer ds-1 fw-semibold">
                                                    <CountUp enableScrollSpy={true} end={10} className="odometer ds-1 fw-semibold"/>+
                                                </span>
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
                                                <span className="odometer ds-1 fw-semibold">
                                                    <CountUp enableScrollSpy={true} end={40} className="odometer ds-1 fw-semibold"/>K+
                                                </span>
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
        </>
    )
}
