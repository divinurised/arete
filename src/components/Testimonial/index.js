import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import evertonImage from '../../../public/assets/pastors/everton.jpg';
import williamImage from '../../../public/assets/pastors/william.jpg';
import pauloImage from '../../../public/assets/pastors/paulo.jpg';
import cacildoImage from '../../../public/assets/pastors/cacildo.jpg';
import bobImage from '../../../public/assets/pastors/bob.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function Events() {
	const pastors = [
		{
			name: 'Pr. Everton Firmino',
			church: 'Igreja Batista Idependente Macedônia',
			message:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores laborum autem, commodi magni quos labore perspiciatis, dicta esse in dolore tenetur inventore fugiat, id deleniti non quae blanditiis quo.',
			image: evertonImage,
		},
		{
			name: 'Pr. William Costa',
			church: 'Igreja Batista Idependente',
			message:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores laborum autem, commodi magni quos labore perspiciatis, dicta esse in dolore tenetur inventore fugiat, id deleniti non quae blanditiis quo.',
			image: williamImage,
		},
		{
			name: 'Pr. Paulo Castelan',
			church: '1ª Igreja Batista Independente de Franca',
			message:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores laborum autem, commodi magni quos labore perspiciatis, dicta esse in dolore tenetur inventore fugiat, id deleniti non quae blanditiis quo.',
			image: pauloImage,
		},
		{
			name: 'Pr. Cacildo Matias',
			church: 'Igreja Batista Independente Betel',
			message:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores laborum autem, commodi magni quos labore perspiciatis, dicta esse in dolore tenetur inventore fugiat, id deleniti non quae blanditiis quo.',
			image: cacildoImage,
		},
		{
			name: 'Pr. Bob Nichols',
			church: 'Igreja Batista Independente Nova Vida',
			message:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores laborum autem, commodi magni quos labore perspiciatis, dicta esse in dolore tenetur inventore fugiat, id deleniti non quae blanditiis quo.',
			image: bobImage,
		},
	];
	return (
		<>
			<section className="bg-gray-100">
				<div className="py-12 lg:py-32 mx-auto lg:pr-0 lg:mr-0 sm:py-24 w-5/6">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-8">
						<div className="max-w-xl space-y-8">
							<h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-green-600">
								Mensagem dos nossos pastores
							</h2>

							<p className="max-w-lg text-lg text-gray-500">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Voluptas veritatis illo placeat harum porro optio fugit a culpa
								sunt id!
							</p>
						</div>

						<div className="-mx-6 lg:col-span-2 lg:mx-0">
							<Swiper
								loop
								spaceBetween={32}
								slidesPerView={1}
								centeredSlides={true}
								autoplay={{
									delay: 5000,
									disableOnInteraction: false,
								}}
								pagination={{
									dynamicBullets: true,
								}}
								modules={[Autoplay, Pagination, Navigation]}
								breakpoints={{
									640: {
										slidesPerView: 1.5,
										centeredSlides: true,
									},
									1024: {
										centeredSlides: false,
										slidesPerView: 1.5,
									},
								}}
							>
								<div className="swiper-wrapper gap-2">
									{pastors.map((pastor) => (
										<>
											<SwiperSlide>
												<blockquote className="flex flex-col justify-between h-full p-12 bg-white rounded-lg shadow-lg">
													<div>
														<div className="mt-4">
															{/* <p className="text-2xl font-bold text-pink-600 sm:text-3xl">
																Lorem ipsum dolor sit amet.
															</p> */}
															<Image
																alt="testimonial"
																src={pastor.image}
																className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
																width={100}
																height={100}
															/>
															<p className="mt-4 text-lg text-gray-600">
																{pastor.message}
															</p>
														</div>
													</div>

													<footer className="mt-8 text-green-600 text-xl font-bold">
														{pastor.name}
													</footer>
												</blockquote>
											</SwiperSlide>
										</>
									))}
								</div>
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
