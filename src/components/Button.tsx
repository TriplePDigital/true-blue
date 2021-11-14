import * as React from 'react'
import { ArrowDownCircle } from 'react-feather'

interface Props {
	variant?: 'primary' | 'secondary' | 'icon'
	className?: string
	onClick?: () => void
}

const Button: React.FC<Props> = ({
	children,
	variant,
	className,
	...props
}) => {
	return (
		<button
			className={`${
				variant === 'secondary'
					? 'bg-secondary text-white hover:bg-green-700 '
					: ' '
			} ${
				variant === 'primary'
					? 'bg-primary text-black hover:bg-yellow-200'
					: ' '
			} ${
				variant === 'icon'
					? 'flex flex-row justify-between items-center py-4 px-4 font-semibold absolute left-4 bottom-2 text-white hover:border-white hover:bg-overlayWhite'
					: ' '
			} border-2 border-transparent font-normal shadow-md py-2 px-6 leading-loose rounded-full mx-4 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transition-all ${className}`}
		>
			{children}
		</button>
	)
}

export default Button
