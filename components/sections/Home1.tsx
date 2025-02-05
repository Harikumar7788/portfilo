'use client'

import Link from "next/link";
import Image from "next/image";

export default function Home1() {
	return (
		<>
			<section className="section-hero-1 position-relative pt-6 pb-120 overflow-hidden">
				<div className="container position-relative z-3">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<span className="fs-5 fw-medium">👋 Hi there, I'm Hari</span>
							<h1 className="display-3 fw-bold mb-4">
								Web Developer <span className="text-primary">Crafting Impactful Digital Solutions</span>
							</h1>
							<p className="text-muted fs-5 mb-6">
							A passionate Web Developer creating innovative digital experiences with React, Node.Js, and SQL to drive business success.
							</p>
							<div className="d-flex gap-3 mb-6">
								<Link href="https://drive.google.com/file/d/1w0UxtWyRlBxJWz8B_Nhw-p40s3g6I9Df/view?usp=sharing" className="btn btn-gradient btn-lg me-2" target="_blank">
									Download CV <i className="ri-download-line ms-2" />
								</Link>
							</div>
							<p className="text-muted fs-6 mb-4">+ 1 year of professional software development experience</p>
							<div className="d-flex gap-3 flex-wrap">
							<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 shadow-sm">
								<Image src="/assets/imgs/hero/hero-1/brand-1.png" alt="brand" width={40} height={40} />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 shadow-sm">
								<Image src="/assets/imgs/hero/hero-1/brand-2.png" alt="brand" width={40} height={40} />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 shadow-sm">
								<Image src="/assets/imgs/hero/hero-1/brand-3.png" alt="brand" width={40} height={40} />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 shadow-sm">
								<Image src="/assets/imgs/hero/hero-1/brand-4.png" alt="brand"  width={40} height={40}/>
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 shadow-sm">
								<Image src="/assets/imgs/hero/hero-1/brand-5.png" alt="brand" width={40} height={40} />
								</div>

								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 shadow-sm d-none d-md-flex">
									<img src="/assets/imgs/hero/hero-1/brand-6.png" alt="brand" />
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 position-relative">

							{/* Hero Image Section */}
							<div className="shape-1 position-absolute bottom-0 start-50 translate-middle-x z-1 d-none d-md-block" style={{ top: "6%" }}>
								<img
									className="position-relative z-1 filter-gray"
									src="/assets/imgs/hero/hero-1/man.png"
									alt="man"
									style={{ width: "130%", maxWidth: "650px", marginTop: "-250px" }} 
								/>

								{/* Ribbon Fixed at Top Without Extra Space */}
								<div className="position-absolute top-0 start-0 z-0 ps-4">
								<div 
									className="ribbonRotate" 
									style={{ 
										width: "550px", 
										height: "350px", 
										display: "flex", 
										justifyContent: "center", 
										alignItems: "center", 
										overflow: "hidden", 
										position: "relative" 
									}}
                                     >
									<img 
										src="/assets/imgs/hero/hero-1/decorate.png" 
										alt="Rotating Ribbon" 
										style={{ 
										width: "350px", 
										height: "auto", 
										animation: "rotate 10s linear infinite", 
										transformOrigin: "center", 
										}} 
									/>
													</div>

													<style jsx>{`
													@keyframes rotate {
														0% {
														transform: rotate(0deg);
														}
														100% {
														transform: rotate(360deg);
														}
													}
													`}</style>

                               </div>
							</div>
						</div>
					</div>
				</div>

				{/* Background Image */}
				<div
					className="position-absolute top-0 start-0 w-150 h-150 filter-invert"
					style={{
						backgroundImage: "url('/assets/imgs/hero/hero-1/background.png')",
						backgroundSize: "cover",
						backgroundPosition: "top",
						zIndex: -1,
					}}
				/>
			</section>
		</>
	);
}