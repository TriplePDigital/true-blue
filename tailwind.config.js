module.exports = {
	mode: 'jit',
	darkMode: 'media',
	purge: [
		'./public/**/*.html',
		'./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#FFF3C7',
				secondary: '#3D7A5D',
				tertiary: '#073C5D',
				overlay: 'rgba(31, 50, 62, 0.79)',
				overlayWhite: 'rgba(255, 255, 255, 0.3)',
				overlayNav: 'rgba(255, 255, 255, 0.85)'
			},
			zIndex: {
				'ng-1': '-1',
				'ng-2': '-2'
			},
			innerWidth: {
				'screen-container': '1135px'
			}
		}
	}
}
