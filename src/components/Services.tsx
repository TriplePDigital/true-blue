import * as React from 'react'
import {
	Camera,
	TrendingUp,
	Wind,
	Umbrella,
	Shield,
	RefreshCw
} from 'react-feather'

const services = [
	{
		title: 'Exterior Detailing',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam ratione dolor iusto, id aperiam placeat, natus soluta amet quibusdam porro exercitationem nostrum ducimus aspernatur voluptatibus voluptas facere, quasi quam!',
		icon: <Camera size={28} />
	},
	{
		title: 'Interior Detailing',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam ratione dolor iusto, id aperiam placeat, natus soluta amet quibusdam porro exercitationem nostrum ducimus aspernatur voluptatibus voluptas facere, quasi quam!',
		icon: <Wind size={28} />
	},
	{
		title: 'Complete Care',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam ratione dolor iusto, id aperiam placeat, natus soluta amet quibusdam porro exercitationem nostrum ducimus aspernatur voluptatibus voluptas facere, quasi quam!',
		icon: <Umbrella size={28} />
	},
	{
		title: 'Rim Restoration',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam ratione dolor iusto, id aperiam placeat, natus soluta amet quibusdam porro exercitationem nostrum ducimus aspernatur voluptatibus voluptas facere, quasi quam!',
		icon: <RefreshCw size={28} />
	},
	{
		title: 'Longterm Care',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam ratione dolor iusto, id aperiam placeat, natus soluta amet quibusdam porro exercitationem nostrum ducimus aspernatur voluptatibus voluptas facere, quasi quam!',
		icon: <TrendingUp size={28} />
	},
	{
		title: 'Guaranteed Satisfaction',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam ratione dolor iusto, id aperiam placeat, natus soluta amet quibusdam porro exercitationem nostrum ducimus aspernatur voluptatibus voluptas facere, quasi quam!',
		icon: <Shield size={28} />
	}
]

const Services = () => {
	return (
		<section className="bg-primary w-full min-h-screen flex items-center justify-center">
			<div className="container mx-auto flex flex-row flex-wrap px-28 py-20">
				{services.map((service, index) => (
					<div className="flex flex-row w-1/3 my-8 justify-between">
						<div
							className="bg-secondary text-primary w-16 h-16 rounded-full object-cover flex items-center justify-center"
							key={index}
						>
							{service.icon}
						</div>
						<div className="flex flex-col w-4/5">
							<h1 className="font-semibold leading-loose text-2xl">
								{service.title}
							</h1>
							<p>{service.desc}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Services
