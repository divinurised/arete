import {
	BookOpenIcon,
	ShieldCheckIcon,
	SparklesIcon,
} from '@heroicons/react/outline';

export default function Features() {
	return (
		<section className="grid grid-cols-1 gap-20 px-4 py-12 lg:py-32 mx-auto max-w-7xl lg:px-16 xl:px-20 md:grid-cols-2 lg:grid-cols-3 w-5/6">
			<div>
				<BookOpenIcon className="w-12 h-12 mb-4 text-green-600" />
				<h2 className="mb-3 text-xl font-medium leading-tight text-gray-900">
					Fundamentalistas
				</h2>
				<p className="text-base leading-relaxed text-gray-600">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error eaque
					perspiciatis esse tempora ad, nesciunt laborum quia! Ab accusamus, vel
					quis autem ipsa unde earum, accusantium rerum voluptatum animi odio.
				</p>
			</div>
			<div>
				<ShieldCheckIcon className="w-12 h-12 mb-4 text-green-600" />
				<h3 className="mb-3 text-xl font-medium leading-tight text-gray-900">
					Conservadores
				</h3>
				<p className="text-base leading-relaxed text-gray-600">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet
					beatae eligendi animi laudantium temporibus facere, ex itaque illum
					corrupti, incidunt, maxime aliquid culpa enim nemo expedita cumque eos
					earum.
				</p>
			</div>
			<div>
				<SparklesIcon className="w-12 h-12 mb-4 text-green-600" />
				<h3 className="mb-3 text-xl font-medium leading-tight text-gray-900">
					Separatistas
				</h3>
				<p className="text-base leading-relaxed text-gray-600">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
					dolore ex mollitia sapiente est, doloremque voluptates officiis
					assumenda amet error! Reprehenderit illum asperiores repellat rem ab
					recusandae incidunt omnis fugit?
				</p>
			</div>
		</section>
	);
}
