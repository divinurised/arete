import { BsInstagram, BsFacebook } from 'react-icons/bs';

export default function Footer() {
	return (
		<footer className="bg-gray-800">
			<div className="container px-6 py-24 mx-auto">
				<div className="lg:flex">
					<div className="w-full -mx-6 lg:w-2/5">
						<div className="px-12">
							<div>
								<a
									href="#"
									className="font-bold text-green-500 hover:text-green-600 transition-all text-3xl"
								>
									Acampamento Areté
								</a>
							</div>

							<p className="max-w-md mt-2 text-gray-500 dark:text-gray-400 text-lg">
								Aprovando as coisas excelentes
							</p>

							<div className="flex mt-4 -mx-2 items-center">
								<a
									href="#"
									className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
									aria-label="Linkden"
								>
									<BsInstagram size={30} />
								</a>

								<a
									href="#"
									className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
									aria-label="Facebook"
								>
									<BsFacebook size={30} />
								</a>
							</div>
						</div>
					</div>

					<div className="mt-6 lg:mt-0 lg:flex-1">
						<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
							<div>
								<h3 className="text-gray-700 uppercase dark:text-white">
									Sobre
								</h3>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
								>
									História
								</a>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
								>
									Propósito
								</a>
							</div>

							<div>
								<h3 className="text-gray-700 uppercase dark:text-white">
									Acampamentos
								</h3>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
								>
									Militar
								</a>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
								>
									Famílias
								</a>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
								>
									Crianças
								</a>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
								>
									Casais
								</a>
							</div>

							<div>
								<h3 className="text-gray-700 uppercase dark:text-white">
									Projetos
								</h3>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
								>
									Congresso Nacional
								</a>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
								>
									Almoço na Chácara
								</a>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
								>
									Evangelismo
								</a>
							</div>

							<div>
								<h3 className="text-gray-700 uppercase dark:text-white">
									Contanto
								</h3>
								<span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
									+55 16 9999-9999
								</span>
								<span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
									arete@gmail.com
								</span>
							</div>
						</div>
					</div>
				</div>
				{/* 
				<hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

				<div>
					<p className="text-center text-gray-800 dark:text-white">
						© Brand 2020 - All rights reserved
					</p>
				</div> */}
			</div>
		</footer>
	);
}
