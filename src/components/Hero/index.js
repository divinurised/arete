import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import campPreview from '../../../public/assets/camp-gif.gif';
import Image from 'next/image';
import styles from './styles.module.css';

const navigation = [
	{ name: 'Product', href: '#' },
	{ name: 'Features', href: '#' },
	{ name: 'Marketplace', href: '#' },
	{ name: 'Company', href: '#' },
];

export default function Hero() {
	return (
		<div className="relative bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
					<svg
						className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
						fill="currentColor"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						aria-hidden="true"
					>
						<polygon points="50,0 100,0 50,100 0,100" />
					</svg>

					<Popover>
						<div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
					</Popover>

					<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
						<div className="sm:text-center lg:text-left">
							<h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
								<span className="block xl:inline">Acampamento Areté</span>{' '}
								<span className="block text-green-600 xl:inline">
									aprovando as coisas excelentes.
								</span>
							</h1>
							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
								molestias, quod, dignissimos reiciendis voluptatibus impedit
								labore deserunt, non consequuntur ipsam odit pariatur tempora
								recusandae illo voluptate est similique sit perferendis.
							</p>
							<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
								<div className="rounded-md shadow">
									<a
										href="#"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
									>
										Acampamentos
									</a>
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<a
										href="#"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
									>
										Igrejas
									</a>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
			<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 w-full h-full">
				<div className={styles.heroImage}></div>
			</div>
		</div>
	);
}
