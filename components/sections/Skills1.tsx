'use client'
import Link from "next/link"
import CountUp from 'react-countup'

export default function Skills1() {
	return (
		<>
			<section className="section-skills-1 position-relative section-padding bg-900">
				<div className="container">
					<div className="row">
						<div className="text-center mb-7">
							<h3 className="ds-3 mt-3 mb-3 text-primary">My Skills</h3>
							<span className="fs-5 fw-medium text-200">
								I thrive on turning complex problems into simple, beautiful
								<br className="d-md-block d-none" />
								solutions that enhance user satisfaction.
							</span>
						</div>
						<div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-3 mb-7 px-6">
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/hero/hero-1/brand-1.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0">
										<CountUp className="odometer fw-semibold" enableScrollSpy={true} end={92} />%
									</h3>
									<p className="text-400 fw-medium text-uppercase">React Js</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/hero/hero-1/brand-2.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0">
										<CountUp className="odometer fw-semibold" enableScrollSpy={true} end={76} />%
									</h3>
									<p className="text-400 fw-medium text-uppercase">Node Js</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/hero/hero-1/brand-3.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0">
										<CountUp className="odometer fw-semibold" enableScrollSpy={true} end={78} />%
									</h3>
									<p className="text-400 fw-medium text-uppercase">Mongo DB</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/hero/hero-1/brand-4.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0">
										<CountUp className="odometer fw-semibold" enableScrollSpy={true} end={80} />%
									</h3>
									<p className="text-400 fw-medium text-uppercase">Vue Js</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/icon-1.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0">
										<CountUp className="odometer fw-semibold" enableScrollSpy={true} end={78} />%
									</h3>
									<p className="text-400 fw-medium text-uppercase">Figma</p>
								</div>
							</div>
						</div>
						<div className="text-center">
	<p className="fs-5 text-200 mb-0">
		I am proficient in several front-end(Animations) and design technologies, including:
	</p>
	<div className="d-flex justify-content-center gap-1">
		<Link href="/#" className="fs-5 fw-bold">Three.js,</Link>
		<Link href="/#" className="fs-5 fw-bold">Bootstrap,</Link>
		<Link href="/#" className="fs-5 fw-bold">TailwindCSS</Link>
	</div>
</div>

					</div>
				</div>
			</section>
			<style jsx>{`
				.skills {
					width: 180px;
					height: 250px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					padding: 20px;
					background-color: #ffffff;
					border-radius: 10px;
					box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
				}
				.skills-icon img {
					width: 60px;
					height: 60px;
				}
			`}</style>
		</>
	)
}
