import { LocationMarkerIcon } from '@heroicons/react/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Events() {
	const category = [
		{
			type: 'Acampamento',
			color: '#22c55e',
		},
		{
			type: 'Culto',
			color: '#3b82f6',
		},
	];

	return (
		<section className="text-gray-600 body-font py-24 lg:py-32">
			<h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-green-600 text-center pb-12 lg:pb-24">
				Próximos eventos
			</h2>
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
						slidesPerView: 3,
						centeredSlides: true,
					},
					1024: {
						centeredSlides: false,
						slidesPerView: 3,
					},
				}}
				className="container mx-auto w-4/5"
			>
				<div className="flex flex-wrap -mx-4 -my-8">
					<SwiperSlide className="py-8 px-4 lg:w-1/3">
						<div className="h-full flex items-start">
							<div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
								<span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
									Abr
								</span>
								<span className="font-medium text-lg text-gray-800 title-font leading-none">
									21
								</span>
							</div>
							<div className="flex-grow pl-6">
								<h2 className="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">
									ACAMPAMENTO
								</h2>
								<h1 className="title-font text-xl font-medium text-gray-900 mb-3">
									Acampamento Militar
								</h1>
								<p className="leading-relaxed mb-5">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Quaerat at asperiores, impedit saepe sapiente dignissimos ut
									blanditiis fuga numquam nam! Nulla pariatur eum hic ratione
									eveniet voluptatem praesentium similique quibusdam?
								</p>
								<div className="flex flex-col">
									<a className="inline-flex flex-col items-center gap-4">
										<div className="flex items-center">
											<LocationMarkerIcon className="text-green-500 w-8 h-8" />
											<span className="flex-grow flex flex-col pl-3">
												<span className="title-font font-medium text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis max-w-[130px]">
													Recanto Areté
												</span>
											</span>
										</div>
										<button className="w-full px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
											Inscrição
										</button>
									</a>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="py-8 px-4 lg:w-1/3">
						<div className="h-full flex items-start">
							<div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
								<span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
									Jul
								</span>
								<span className="font-medium text-lg text-gray-800 title-font leading-none">
									18
								</span>
							</div>
							<div className="flex-grow pl-6">
								<h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
									CONFERÊNCIA DE ANIVERSÁRIO
								</h2>
								<h1 className="title-font text-xl font-medium text-gray-900 mb-3">
									24º Aniversário da Igreja Bastista
								</h1>
								<p className="leading-relaxed mb-5">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Dolorum veritatis mollitia ducimus debitis laudantium
									exercitationem nobis consequatur earum culpa corporis,
									accusantium ut deleniti incidunt dignissimos eligendi! Quam
									nisi expedita dolor!
								</p>
								<div className="flex flex-col">
									<a className="inline-flex flex-col items-center gap-4">
										<div className="flex items-center">
											<LocationMarkerIcon className="text-green-500 w-8 h-8" />
											<span className="flex-grow flex flex-col pl-3">
												<span className="title-font font-medium text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis max-w-[130px]">
													Igreja Batista
												</span>
											</span>
										</div>
										<button className="w-full px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
											Saiba Mais
										</button>
									</a>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="py-8 px-4 lg:w-1/3">
						<div className="h-full flex items-start">
							<div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
								<span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
									Mar
								</span>
								<span className="font-medium text-lg text-gray-800 title-font leading-none">
									13
								</span>
							</div>
							<div className="flex-grow pl-6">
								<h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
									CONFRATERNIZAÇÃO
								</h2>
								<h1 className="title-font text-xl font-medium text-gray-900 mb-3">
									Almoço na Chácara
								</h1>
								<p className="leading-relaxed mb-5">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Delectus vel necessitatibus ea hic veritatis optio aliquam
									eligendi non repudiandae, ut architecto quos laudantium atque
									explicabo, nemo dolor sint velit molestias?
								</p>
								<div className="flex flex-col">
									<a className="inline-flex flex-col items-center gap-4">
										<div className="flex items-center">
											<LocationMarkerIcon className="text-green-500 w-8 h-8" />
											<span className="flex-grow flex flex-col pl-3">
												<span className="title-font font-medium text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis max-w-[130px]">
													Recanto Areté
												</span>
											</span>
										</div>
										<button className="w-full px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
											Saiba Mais
										</button>
									</a>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</div>
			</Swiper>
		</section>
	);
}
