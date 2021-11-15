import * as React from 'react'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Tracker from '@openreplay/tracker'

const Nav = () => {
	const [colorChange, setColorchange] = useState(false)
	const tracker = new Tracker({
		projectKey: '1E6CElr8PHsRsnFPgDX0'
	})

	useEffect(() => {
		tracker.start()
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	function handleScroll() {
		if (window.pageYOffset > 50) {
			return setColorchange(true)
		}
		return setColorchange(false)
	}

	return (
		<nav
			className={`fixed py-2 top-0 transition-all w-full ${
				colorChange
					? 'md:bg-overlayNav md:border-b md:border-gray-300 md:shadow-md md:text-black'
					: 'bg-transparent border-0 border-transparent'
			} xl:min-h-16 min-h-1/3  text-gray-100 z-10`}
		>
			<div className="px-16 container flex flex-col  lg:flex-row items-center self-center mx-auto">
				<h1 className="xl:w-3/12 w-full my-4 lg:my-0 text-base font-medium leading-loose tracking-tight after:w-full after:block after:h-0.5 after:-mt-2 after:bg-secondary">
					True Blue Ultimate Detailing
				</h1>
				<ul className="xl:w-7/12 my-4 lg:my-0 w-full flex lg:flex-row flex-col justify-end items-center h-full text-base font-light leading-loose">
					<li className="mx-6">Portfolio</li>
					<li className="mx-6">About</li>
					<li className="mx-6">Pricing</li>
				</ul>
				<Button
					className="xl:w-2/12 w-full my-4 lg:my-0 ml-9 py-2 bg-primary text-black font-medium leading-loose rounded-full"
					variant="primary"
				>
					Schedule
				</Button>
			</div>
		</nav>
	)
}

export default Nav
