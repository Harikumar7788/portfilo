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
										<h3 className="ds-3 mt-3 mb-4 text-dark">
											Jobby – Job Search Platform
										</h3>
										<p className="text-300 fs-5 mb-0">
											Jobby is a user-friendly job search platform designed to connect job seekers with their ideal employers. The platform allows users to search for job opportunities, apply directly, and manage their profiles, creating a seamless experience for both job seekers and recruiters.
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
										<h6>01 April 2024</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Complete</p>
										<h6>01 May 2024</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Services</p>
										<h6> Full Stack Development, UI/UX Design</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Website</p>
										<Link href="https://hkumarjobby.ccbp.tech/">hkumarjobby.ccbp.tech</Link>
									</div>
								</div>
								<Image 
									src="/assets/imgs/projects/projects-1/img-2.png" 
									alt="" 
									layout="responsive" 
									width={100} 
									height={60} 
									style={{ objectFit: "cover" }} 
								/>

								<div className="col-lg-8 mx-lg-auto mt-8">
									<h5 className="fs-5 fw-medium">Description</h5>
									<p className="text-300">
										Jobby is a job search platform designed to help users find the best career opportunities based on their skill sets. The platform allows users to create profiles, upload resumes, and apply to jobs directly, streamlining the recruitment process.
									</p>
									<h5 className="fs-5 fw-medium mt-4">Key Features</h5>
									<ul>
										<li>
											<p className="text-dark fw-bold">User Profiles: <span className="text-300 fw-medium">Users can create and manage profiles to showcase their skills, experience, and preferences.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Job Search and Filtering: <span className="text-300 fw-medium">Advanced search functionality allows users to filter jobs based on industry, location, salary, and more.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Easy Applications: <span className="text-300 fw-medium">Job seekers can apply for jobs directly through the platform, making the application process quick and efficient.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Admin Dashboard: <span className="text-300 fw-medium">Recruiters and employers can post job openings, manage applications, and track candidate progress through a comprehensive dashboard.</span></p>
										</li>
									</ul>
									<h5 className="fs-5 fw-medium mt-4">Technologies Used</h5>
									<ul>
										<li>
											<p className="text-dark fw-bold">Front-End: <span className="text-300 fw-medium">React.js – For building a dynamic and responsive UI that provides an interactive user experience.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Back-End: <span className="text-300 fw-medium">Node.js and Express.js – For server-side functionality and handling user authentication, job postings, and applications.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Database: <span className="text-300 fw-medium">MongoDB – Used for efficient data storage, including user profiles, job postings, and application data.</span></p>
										</li>
									</ul>
									<h5 className="fs-5 fw-medium mt-4">Design Highlights</h5>
									<ul>
										<li>
											<p className="text-dark fw-bold">User-Friendly Design: <span className="text-300 fw-medium">Emphasis on a clean, modern design to ensure a smooth navigation experience for users of all technical levels.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Mobile-First Approach: <span className="text-300 fw-medium">Responsive design to ensure that users can search and apply for jobs on any device.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Intuitive UI: <span className="text-300 fw-medium">Designed an intuitive interface to enhance the user experience by making navigation, job search, and application processes seamless.</span></p>
										</li>
									</ul>
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
				</div>
			</Layout>
		</>
	)
}
