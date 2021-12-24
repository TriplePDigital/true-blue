import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Tracker from '@openreplay/tracker'
import { Menu } from 'react-feather'

const Nav = () => {
	const [colorChange, setColorchange] = useState(false)
	const [open, setOpen] = useState(false)
	const tracker =
		import.meta.env.PUBLIC_ENV !== 'development'
			? new Tracker({
					projectKey: '1M7WOgZtyWP8q1mcb9Gu'
			  })
			: null

	useEffect(() => {
		import.meta.env.PUBLIC_ENV !== 'development' ? tracker.start() : null
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	function handleScroll() {
		if (window.pageYOffset > 50) {
			return setColorchange(true)
		}
		return setColorchange(false)
	}

	function handleOpen() {
		setOpen(!open)
		setColorchange(true)
	}

	return (
		<nav
			className={`fixed py-2 top-0 transition-all w-full ${
				colorChange
					? `bg-overlayNav border-b border-gray-300 shadow-md text-black`
					: 'bg-transparent border-0 border-transparent'
			} xl:min-h-16 min-h-1/3 z-10 flex transition-all`}
		>
			<div className="px-16 container flex flex-col lg:flex-row items-center self-center mx-auto">
				<h1
					className={`xl:w-3/12 my-4 lg:my-0 text-lg text-center font-medium leading-loose tracking-tight after:w-full after:block after:h-0.5 after:-mt-2 after:bg-secondary ${
						open || colorChange ? 'text-black' : 'text-gray-100'
					}`}
				>
					True Blue Ultimate Detailing
				</h1>
				<div
					className={`w-full xl:flex ${
						open ? 'flex' : 'hidden'
					} flex-col xl:flex-row justify-between items-center transition-all`}
				>
					<ul
						className={`xl:w-7/12 my-4 lg:my-0 w-full flex xl:flex-row flex-col justify-end items-center h-full text-base font-light leading-loose ${
							open || colorChange ? 'text-black' : 'text-gray-200'
						}`}
					>
						<a
							href="#portfolio"
							onClick={() => {
								setOpen(!open)
								setColorchange(!colorChange)
							}}
						>
							<li className="mx-6 md:py-1 text-lg font-semibold">
								Portfolio
							</li>
						</a>
						<a
							href="#services"
							onClick={() => {
								setOpen(!open)
								setColorchange(!colorChange)
							}}
						>
							<li className="mx-6 md:py-1 text-lg font-semibold">
								Services
							</li>
						</a>
						<li className="mx-6 md:py-1 text-lg font-semibold">
							Pricing
						</li>
					</ul>
					<Button
						className="xl:w-2/12 w-full my-4 lg:my-0 xl:ml-9 mx-0 px-0 py-2 bg-primary text-black text-lg font-medium leading-loose rounded-full"
						variant="primary"
					>
						Schedule
					</Button>
				</div>
			</div>
			<button
				className="self-start my-4 px-2 absolute"
				onClick={() => handleOpen()}
			>
				<Menu className={`xl:hidden w-10 h-10`} size={60} />
			</button>
		</nav>
	)
}

export default Nav
