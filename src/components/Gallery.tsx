import * as React from 'react'
import Button from './Button'

const items = [
	{
		before: './assets/images/red.jpeg',
		after: '',
		title: 'Title 1',
		desc: 'something',
		tag: []
	},
	{
		before: './assets/images/acura.jpeg',
		after: '',
		title: 'Title 1',
		desc: 'something',
		tag: []
	},
	{
		before: './assets/images/bike.jpeg',
		after: '',
		title: 'Title 1',
		desc: 'something',
		tag: []
	},
	{
		before: './assets/images/mustang_interior.jpeg',
		after: '',
		title: 'Title 1',
		desc: 'something',
		tag: []
	},
	{
		before: './assets/images/mustang.jpeg',
		after: '',
		title: 'Title 1',
		desc: 'something',
		tag: []
	},
	{
		before: './assets/images/suv.jpeg',
		after: '',
		title: 'Title 1',
		desc: 'something',
		tag: []
	}
]

const Gallery = () => {
	return (
		<div className="container flex flex-row flex-wrap items-center justify-center">
			{items.map((item, index) => (
				<>
					<div
						className="w-1/4 h-64 bg-cover bg-center my-4 mx-4 relative cursor-pointer"
						style={{ backgroundImage: `url(${item.before})` }}
						key={index}
					>
						<>
							<div className="bg-overlay hover:bg-transparent transition-all w-full h-full absolute left-0 top-0 right-0 bottom-0 z-0"></div>
						</>
					</div>
				</>
			))}
			<Button
				variant="primary"
				className="w-1/5 font-semibold leading-loose"
			>
				Show more
			</Button>
		</div>
	)
}

export default Gallery
