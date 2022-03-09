import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import Dropdown from './Dropdown';
import Image from 'next/image';

import areteLogo from '../../../public/assets/arete-white.png';
import areteArmyLogo from '../../../public/assets/arete-army.png';
import areteKidsLogo from '../../../public/assets/arete-kids.png';
import areteFamilyLogo from '../../../public/assets/arete-family.png';
import areteCoupleLogo from '../../../public/assets/arete-couples.png';

const camps = [
	{ name: 'Militar', href: '#', icon: areteArmyLogo, current: true },
	{ name: 'Famílias', href: '#', icon: areteFamilyLogo, current: false },
	{ name: 'Casais', href: '#', icon: areteCoupleLogo, current: false },
	{ name: 'Crianças', href: '#', icon: areteKidsLogo, current: false },
];

const churchs = [
	{ name: 'Av. St. Cruz', href: '#', current: true },
	{ name: 'Macedônia', href: '#', current: false },
	{ name: 'Betel', href: '#', current: false },
	{ name: 'Nova Vida', href: '#', current: false },
	{ name: 'Aviação', href: '#', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	return (
		<Disclosure as="nav" className="bg-gray-800">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
								<div className="flex-shrink-0 flex items-center">
									<Image
										className="block lg:hidden"
										src={areteLogo}
										alt="Logo Areté"
										width={45}
										height={45}
									/>
								</div>
								<div className="hidden sm:flex sm:ml-6">
									<div className="flex space-x-4 items-center">
										<Dropdown title="Acampamentos" items={camps} />
										<Dropdown title="Igrejas" items={churchs} />
										<Dropdown title="Projetos" />
										<Dropdown title="Contato" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							<section className="fixed inset-y-0 right-0 z-50 flex">
								<div className="w-screen">
									<div className="flex flex-col h-full divide-y divide-gray-200 bg-gray-50">
										<div className="space-y-6 overflow-y-scroll">
											<header className="flex items-center justify-between h-16 pl-6 border-b border-gray-200">
												<span className="text-sm font-medium tracking-widest uppercase">
													{' '}
													Menu{' '}
												</span>

												<Disclosure.Button className="inline-flex items-center justify-center p-4 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
													<span className="sr-only">Open main menu</span>
													{open ? (
														<XIcon
															className="block h-6 w-6"
															aria-hidden="true"
														/>
													) : (
														<MenuIcon
															className="block h-6 w-6"
															aria-hidden="true"
														/>
													)}
												</Disclosure.Button>
											</header>

											<div className="px-6">
												<h2 className="text-sm font-medium tracking-widest text-green-600 uppercase">
													Acampamento Areté
												</h2>
												<p className="mt-2 text-sm text-gray-500">
													Aprovando as coisas excelentes
												</p>
											</div>

											<nav className="flex flex-col text-sm font-medium text-gray-500 border-t border-b border-gray-200 divide-y divide-gray-200">
												<a href="" className="px-6 py-3">
													{' '}
													Página Inicial{' '}
												</a>
												<a href="" className="px-6 py-3">
													{' '}
													Sobre{' '}
												</a>
												<a
													href=""
													className="flex items-center justify-between px-6 py-3"
												>
													Acampamentos
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="w-5 h-5"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M9 5l7 7-7 7"
														/>
													</svg>
												</a>
												<a
													href=""
													className="flex items-center justify-between px-6 py-3"
												>
													Igrejas
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="w-5 h-5"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M9 5l7 7-7 7"
														/>
													</svg>
												</a>
												<a href="" className="px-6 py-3">
													{' '}
													Projetos{' '}
												</a>
												<a href="" className="px-6 py-3">
													{' '}
													Contato{' '}
												</a>
											</nav>
										</div>
									</div>
								</div>
							</section>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
