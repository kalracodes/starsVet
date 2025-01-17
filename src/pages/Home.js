import React from "react";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import advice from "../images/advice.svg";
import doctor from "../images/doctor.svg";
import hospital from "../images/hospital.svg";
import bandage from "../images/bandage.svg";
import knife from "../images/knife.svg";
import vaccine from "../images/vaccine.svg";
import pad from "../images/writing_pad.svg";
import blob_service from "../images/blob_service.svg";
import blob_mam_service from "../images/mam.png";
import Aryan from "../images/Aryan.jpeg"
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "../styles/Home.css";

export default function Home() {

	var review = [
		{
			name: "Aryan Kalra",
			date: "17 July 2023",
			title: "Co-Founder, Imaginary Company",
			description: "Abc",
			img: Aryan
		},
	];
	return (
		<>
			<Navbar />
			<section className="bg-green w-full pt-12 home relative">
				<div className="home-header text-left font-extrabold text-teal text-8xl ml-16 bottom-20 absolute">
					<h1> Care </h1>
					<h1> Compassion </h1>
					<h1> Conservation </h1>
				</div>

				<div className="cards">
					<Card
						heading={"Book Appoinment"}
						imageUrl={"book-appointment"}
						description={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
						}
					/>

					<Card
						heading={"Online Consultation"}
						imageUrl={"online-consultation"}
						description={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
						}
					/>

					<Card
						heading={"Home Visit"}
						imageUrl={"home-visit"}
						description={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
						}
					/>
				</div>
			</section>
			<section className="bg-teal w-full h-[42rem] relative rounded-l-3xl rounded-r-3xl -mt-6 banner-content">
				<div className="banner w-full h-52 bg-green text-teal mb-28 bottom-0 left-1/2 transform -translate-x-1/2 absolute py-4 px-8 flex flex-col justify-center items-center">
					<h3 className="font-semibold text-4xl">Welcome to the</h3>
					<h2 className="font-semibold text-7xl mt-2">
						Stars Vet Animal & Bird Clinic
					</h2>
					<p className="m-4">
						Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem
						ipsumLorem ipsum
					</p>
				</div>
			</section>
			<section className="w-full animal-info">
				<div className="heading text-8xl font-bold">
					<p className="animal-heading">
						<span className="text-green">Exotic Pets</span> We Treat
					</p>
					<p className="animal-description w-1/2 mx-auto text-base mt-8 font-thin">
						{" "}
						We take pride in being your top choice as pet doctors.
						Our expertise extends beyond cats and dogs; we
						specialize in exotic veterinary care, catering to a wide
						range of unique and small-sized pets.
					</p>
				</div>
				<div className="grid-animal-desc flex flex-row justify-center w-full my-12 flex-wrap gap-4 px-6 max:px-2">
					<AnimalCard
						heading={"Reptiles"}
						description={
							"Our expertise extends to caring for all reptiles, from bearded dragons to snakes, ensuring exceptional treatment for your scaly companions."
						}
						imageUrl={"reptile"}
					/>

					<AnimalCard
						heading={"Rabbits"}
						description={
							"With extensive knowledge, experience, and skill, we excel in maintaining the health of rabbits, surpassing mere carrot-based care."
						}
						imageUrl={"rabbit"}
					/>

					<AnimalCard
						heading={"Birds"}
						description={
							"Our expertise extends to caring for all reptiles, from bearded dragons to snakes, ensuring exceptional treatment for your scaly companions."
						}
						imageUrl={"bird"}
					/>

					<AnimalCard
						heading={"Guinea Pigs"}
						description={
							"Stars Vet specializes in guinea pigs, providing superior care, treatment, and support to ensure optimal health for your beloved companions."
						}
						imageUrl={"guineaPig"}
					/>

					<AnimalCard
						heading={"Fish"}
						description={
							"Stars Vet offers a comprehensive array of services, including fish surgery, catering to fish of diverse shapes and sizes."
						}
						imageUrl={"fish"}
					/>

					<AnimalCard
						heading={"Amphibians"}
						description={
							"Having trouble finding a vet for your frog or axolotl? Look no more. Our skilled veterinarians offer advanced care for all amphibians."
						}
						imageUrl={"amphibian"}
					/>
				</div>
				<div className="slider-animal-desc w-full my-12">
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						style={{
							"--swiper-navigation-color": "#06a37e",
							"--swiper-pagination-color": "#06a37e",
						}}
						autoplay={{
							delay: 3500,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper w-[80%]  flex flex-row justify-center h-[20rem]"
					>
						<SwiperSlide>
							<AnimalCard
								heading={"Reptiles"}
								description={
									"Our expertise extends to caring for all reptiles, from bearded dragons to snakes, ensuring exceptional treatment for your scaly companions."
								}
								imageUrl={"reptile"}
								className="m-auto mt-6"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<AnimalCard
								heading={"Rabbits"}
								description={
									"With extensive knowledge, experience, and skill, we excel in maintaining the health of rabbits, surpassing mere carrot-based care."
								}
								imageUrl={"rabbit"}
								className="m-auto mt-6"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<AnimalCard
								heading={"Birds"}
								description={
									"Our expertise extends to caring for all reptiles, from bearded dragons to snakes, ensuring exceptional treatment for your scaly companions."
								}
								imageUrl={"bird"}
								className="m-auto mt-6"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<AnimalCard
								heading={"Guinea Pigs"}
								description={
									"Stars Vet specializes in guinea pigs, providing superior care, treatment, and support to ensure optimal health for your beloved companions."
								}
								imageUrl={"guineaPig"}
								className="m-auto mt-6"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<AnimalCard
								heading={"Fish"}
								description={
									"Stars Vet offers a comprehensive array of services, including fish surgery, catering to fish of diverse shapes and sizes."
								}
								imageUrl={"fish"}
								className="m-auto mt-6"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<AnimalCard
								heading={"Amphibians"}
								description={
									"Having trouble finding a vet for your frog or axolotl? Look no more. Our skilled veterinarians offer advanced care for all amphibians."
								}
								imageUrl={"amphibian"}
								className="m-auto mt-6"
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
			<section>
				<div className="why_choose_us">
					<div className="heading text-8xl font-bold">
						<p className="animal-heading">
							Why <span className="text-green">Choose</span> Us?
						</p>
						<p className="animal-description w-3/4 mx-auto text-base mt-8 font-thin">
							We take pride in being your top choice as pet
							doctors. Our expertise extends beyond cats and dogs;
							we specialize in exotic veterinary care, catering to
							a wide range of unique and small-sized pets.
						</p>
					</div>
					<div className="why-vector mt-24">
						<div className="vector1 wh-vector">
							<img src={doctor} alt="" />
							<p className="vector-description w-3/4">
								Expert pet care by qualified team
							</p>
						</div>
						<div className="vector2 wh-vector">
							<img src={hospital} alt="" />
							<p className="vector-description w-3/4">
								State-of-the art facilities
							</p>
						</div>
						<div className="vector3 wh-vector">
							<img src={advice} alt="" />
							<p className="vector-description w-3/4">
								Advice on nutirition and husbandry
							</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="our_services mt-24">
					<div className="heading text-8xl font-bold">
						<p className="animal-heading">
							Our <span className="text-green">Services</span>
						</p>
						<p className="animal-description w-3/4 mx-auto text-base mt-8 font-thin">
							We take pride in being your top choice as pet
							doctors. Our expertise extends beyond cats and dogs;
							we specialize in exotic veterinary care, catering to
							a wide range of unique and small-sized pets.
						</p>
					</div>
					<div className="services_block">
						<div className="services_left">
							<div className="services_left_item services_left_item1">
								<div className="services_left_content">
									<p className="services_left_header">
										Healthcare Packages
									</p>
									<p className="services_left_middle">
										The initial months with a new pet can be overwhelming. Hence, we have designed packages ensuring peace of mind and top-notch veterinary care for your new companion.
									</p>
									<p className="services_left_link">Learn more &gt;</p>
									<img src={vaccine} alt="" />
								</div>
							</div>
							<div className="services_left_item services_left_item2">
								<div className="services_left_content">
									<p className="services_left_header">
										Sterilization (Desexing)
									</p>
									<p className="services_left_middle">
										Sterilization, also referred to as desexing or neutering, plays a crucial role in preventing potential issues that may arise in your pet's future.
									</p>
									<p className="services_left_link">Learn more &gt;</p>
									<img src={bandage} alt="" className="bandage_img" />
								</div>
							</div>
							<div className="services_left_item services_left_item3">
								<div className="services_left_content">
									<p className="services_left_header ">
										General Health Check
									</p>
									<p className="services_left_middle">
										The initial months with a new pet can be overwhelming. Hence, we have designed packages ensuring peace of mind and top-notch veterinary care for your new companion.
									</p>
									<p className="services_left_link">Learn more &gt;</p>
									<img src={pad} alt="" />
								</div>
							</div>
							<div className="services_left_item services_left_item4">
								<div className="services_left_content">
									<p className="services_left_header">
										Surgery and Anaesthesia
									</p>
									<p className="services_left_middle">
										Although all surgeries and anesthesia carry inherent risks, we prioritize providing the utmost care to minimize them for your beloved pet.
									</p>
									<p className="services_left_link">Learn more &gt;</p>
									<img src={knife} alt="" />
								</div>
							</div>
						</div>
						<div className="services_right">
							<div>
								<img src={blob_service} alt="" />
								<img src={blob_mam_service} alt="" class="services_right_img2" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="why-choose-us mt-24">
					<div className="heading text-8xl font-bold mb-10">
						<p className="animal-heading">
							<span className="text-green">Reviews</span>
						</p>
					</div>
					<div className="CustomerReviewCards">
						<CustomerReviewCards
							name={review[0].name}
							date={review[0].date}
							title={review[0].title}
							description={review[0].description}
							img={review[0].img}
						/>
						<CustomerReviewCards
							name={review[0].name}
							date={review[0].date}
							title={review[0].title}
							description={review[0].description}
							img={review[0].img}
						/>
						<CustomerReviewCards
							name={review[0].name}
							date={review[0].date}
							title={review[0].title}
							description={review[0].description}
							img={review[0].img}
						/>
						<CustomerReviewCards
							name={review[0].name}
							date={review[0].date}
							title={review[0].title}
							description={review[0].description}
							img={review[0].img}
						/>
					</div>
				</div>
			</section>
		</>
	);
}

function Card({ heading, imageUrl, description }) {
	return (
		<div className="card">
			<div className="header">
				<h3>{heading}</h3>
				<div className="header-icon relative">
					<img
						src={require(`../images/${imageUrl}.svg`)}
						alt="icon"
						className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9"
					/>
				</div>
			</div>
			<div className="description flex flex-col justify-between">
				<p className="block">{description}</p>
				<a href="#" className="font-semibold">
					Know More
				</a>
			</div>
		</div>
	);
}

function AnimalCard({ heading, description, imageUrl, className }) {
	return (
		<>
			<div className={`reptile-card relative ${className}`}>
				<div className="h-full w-3/5 text-left pr-6">
					<h2 className="text-3xl font-semibold">{heading}</h2>
					<div className="flex flex-col justify-between h-3/4">
						<p className="mt-2 text-xs">{description}</p>
						<a href="#" className="font-semibold">
							More information
						</a>
					</div>
				</div>
				<div className="h-full w-2/5">
					<img
						src={require(`../images/${imageUrl}.png`)}
						alt="icon"
						className="absolute top-0 -right-6 h-80"
					/>
					<div className="circle"></div>
				</div>
			</div>
		</>
	);
}


// import noise from "../../assets/noise.webp";
function CustomerReviewCards(props) {
	return (
		<div className="review">
			<div className="review_header">
				<div className="review_photo">
					<img src={props.img} alt="" />
				</div>
				<div className="review_header_text">
					<div className="review_header_name">{props.name}</div>
					<div className="review_header_date">{props.date}</div>
				</div>
			</div>
			<div className="review_content">
				<div className="review_title">{props.title}</div>
				<div className="review_description">{props.description}</div>
			</div>
		</div>
	);
}

