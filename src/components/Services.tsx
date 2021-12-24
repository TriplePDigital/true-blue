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
		title: 'Sky Blue Express',
		desc: 'This service comes with a vacuum windows inside wash entire outside wash $35 dollars.',
		icon: <Camera size={28} />
	},
	{
		title: 'True Blue Blue',
		desc: 'A wash wax rims tires tire walls vacuum inside and out dashboard consul seats spotted carpet spot it if necessary only $50 dollars four spots $10 extra.',
		icon: <Wind size={28} />
	},
	{
		title: 'Ultra Blue',
		desc: "Is a wash and wax. Windows inside and out rims tires tire walls. And carpet Spanic $10 extra shampoo if necessary or request it all door jams truck jam so Hood jam that's only $75.",
		icon: <Umbrella size={28} />
	},
	{
		title: 'True blue Ultimate Detailing',
		desc: 'It consist of engine clean truck vacuum hood jam truck jam door jams shampoo interior or condition leather. Shampoo carpet windows inside and out. Dashboard Consol and smell good starts at 1:50 and up based on the condition of your car. True blue ultimate detail.',
		icon: <RefreshCw size={28} />
	}
]

const Services = () => {
	return (
		<section
			className="bg-primary w-full min-h-screen flex items-center justify-center"
			id="services"
		>
			<div className="container mx-auto flex flex-row flex-wrap items-center justify-center xl:px-28 px-5 py-20">
				{services.map((service, index) => (
					<div className="flex flex-row xl:w-1/3 w-full my-8 justify-between">
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
