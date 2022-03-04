import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { ChevronUpIcon } from '@heroicons/react/outline';
import { useState, useRef } from 'react';
import Image from 'next/image';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Dropdown({ title, items }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				{items ? (
					<Menu.Button className="inline-flex justify-center w-full rounded-md border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-all">
						{title}
						{items && (
							<ChevronDownIcon
								className="-mr-1 ml-2 h-5 w-5"
								aria-hidden="true"
							/>
						)}
					</Menu.Button>
				) : (
					<a
						className="inline-flex justify-center w-full rounded-md border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-all"
						href="https://google.com"
					>
						{title}
					</a>
				)}
			</div>

			{items && (
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="py-1">
							{items.map((item) => (
								<Menu.Item key={item.name}>
									{({ active }) => (
										<a
											href="#"
											className={classNames(
												active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
												'flex gap-4 px-6 py-4 text-lg items-center font-medium'
											)}
										>
											{item.icon && (
												<Image
													src={item.icon}
													alt={item.name}
													width={45}
													height={45}
												/>
											)}
											{item.name}
										</a>
									)}
								</Menu.Item>
							))}
						</div>
					</Menu.Items>
				</Transition>
			)}
		</Menu>
	);
}
