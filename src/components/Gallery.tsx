import { useState } from 'react'
import Button from './Button'

const items = [
	{
		before: './assets/images/red.jpeg',
		after: '',
		title: 'Title 1',
		desc: 'something',
		tag: ['car']
	},
	{
		before: './assets/images/acura.jpeg',
		after: '',
		title: 'Title 1',
		desc: 'something',
		tag: ['car']
	},
	{
		before: './assets/images/bike.jpeg',
		after: '',
		title: 'Title 1',
		desc: 'something',
		tag: ['bike']
	},
	{
		before: './assets/images/mustang_interior.jpeg',
		after: '',
		title: 'Title 1',
		desc: 'something',
		tag: ['car']
	},
	{
		before: './assets/images/mustang.jpeg',
		after: '',
		title: 'Title 1',
		desc: 'something',
		tag: ['car']
	},
	{
		before: './assets/images/suv.jpeg',
		after: '',
		title: 'Title 1',
		desc: 'something',
		tag: ['car', 'util']
	}
]

const Gallery = () => {
	const [current, setCurrent] = useState('all')
	const [touch, setTouch] = useState(false)
	return (
		<>
			<ul className="flex flex-row justify-between w-full xl:w-1/2 px-3 xl:mx-auto text-sm xl:text-base text-gray-200">
				<a onClick={() => setCurrent('all')} className="cursor-pointer">
					<li
						className={` ${
							current === 'all' &&
							'text-primary after:block after:bg-primary after:w-full after:h-0.5 after:mt-2'
						}`}
					>
						Show all
					</li>
				</a>
				<a onClick={() => setCurrent('car')} className="cursor-pointer">
					<li
						className={` ${
							current === 'car' &&
							'text-primary after:block after:bg-primary after:w-full after:h-0.5 after:mt-2'
						}`}
					>
						Cars
					</li>
				</a>
				<a
					onClick={() => setCurrent('bike')}
					className="cursor-pointer"
				>
					<li
						className={` ${
							current === 'bike' &&
							'text-primary after:block after:bg-primary after:w-full after:h-0.5 after:mt-2'
						}`}
					>
						Motorbikes
					</li>
				</a>
				<a
					onClick={() => setCurrent('util')}
					className="cursor-pointer"
				>
					<li
						className={` ${
							current === 'util' &&
							'after:block after:bg-primary after:w-full after:h-0.5 after:mt-2'
						}`}
					>
						Utility vehicles
					</li>
				</a>
			</ul>
			<div className="container flex flex-row flex-wrap items-center justify-center">
				{items
					.filter(
						(item) =>
							current === 'all' || item.tag.includes(current)
					)
					.map((item, index) => (
						<div
							className="w-full xl:w-1/4 h-64 bg-cover bg-center my-4 mx-4 relative cursor-pointer"
							style={{
								backgroundImage: `url(${item.before})`
							}}
							key={index}
						>
							<div className="bg-overlay hover:bg-transparent focus:bg-transparent transition-all w-full h-full absolute left-0 top-0 right-0 bottom-0 z-0"></div>
						</div>
					))}
			</div>
			<Button
				variant="primary"
				className="block mx-auto xl:w-1/5 font-semibold leading-loose"
			>
				Show more
			</Button>
		</>
	)
}

export default Gallery
