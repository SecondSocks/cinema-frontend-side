import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const primary = '#e30b13'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {  // Тут описываются настройки Tailwind
		colors: {  // Тут описываются цвета, созданные нами
			primary,
			black: colors.black,
			white: colors.white,
			transparent: colors.transparent,
			yellow: {
				700: '#f5c521',
			},
			gray: {
				300: '#d9dae8',
				500: '#999aa5',
				600: '#66676e',
				700: '#39393f',
				800: '#242529',
				900: '#191b1f',
				950: '#101215',
			},
		},
		extend: {  // Тут описываются дополнительные настройки
			spacing: {  // Тут описываются отступы
				0.5: '0.12rem',
				layout: '2.75rem',
			},
			fontSize: {  // Тут описываются размеры шрифтов
				'2lg': '1.38rem',
			},
			borderRadius: {  // Тут описываются радиусы
				image: '0.5rem',
				layout: '0.8rem',
			},
			transitionTimingFunction: {  // Тут стандартные тайминги анимации
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {  // Тут стандартные длительности анимации
				DEFAULT: '200ms',
			},
			zIndex: {  // Тут добавляются значения z-index
				1: '1',
				2: '2',
				3: '3',
			},
			keyframes: {  // Тут создаются анимации
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: 0.3,
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
			},
			animation: {  // Тут добавляются имена анимации
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
		},
	},
	plugins: [  // Тут описываются плагины
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({  // Добавляем свои компоненты
				'.btn-primary': {
					backgroundColor: primary,
					color: '#fff',
					borderRadius: '0.65rem',
					transition: 'background-color .3s ease-in-out',
					'&:hover': {
						backgroundColor: '#ff0009',
					},
				},
        
				'.text-link': {
					textUnderlineOffset: 4,
					color: 'rgba(255, 255, 255, 0.9)',
					transition: 'text-decoration-color .3s ease-in-out',
					textDecorationLine: 'underline',
					textDecorationColor: 'rgba(255, 255, 255, .2)',
					'&:hover': {
						textDecorationColor: 'rgba(255, 255, 255, .9)',
					},
				}, 

				'.air-block': {
					borderRadius: theme('borderRadius.layout'),
					backgroundColor: theme('colors.gray.950'),
					color: theme('colors.white'),
					boxShadow: theme('boxShadow.lg'),
				},
			})

      addUtilities({  // Добавляем свои утилиты
        '.text-shadow': {
          textShadow: '1px 1px rgba(0, 0, 0, 0.4)'
        },

        '.outline-border-none': {
          outline: 'none',
          border: 'none'
        },

        '.flex-center-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },

        '.image-like-bg': {
          objectPosition: 'center',
          objectFit: 'cover',
          pointerEvents: 'none'
        }
      })
		}),
	],
} satisfies Config
