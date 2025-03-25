/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,jsx}'],
  theme: {
  	container: {
  		center: true,
  		padding: {
  			DEFAULT: '1.5rem',
  			sm: '2rem',
  			lg: '4rem',
  			xl: '5rem'
  		},
  		screens: {
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1536px'
  		}
  	},
  	extend: {
  		colors: {
  			primary: {
  				'600': '#525252',
  				'700': '#404040',
  				'800': '#262626',
  				'900': '#1a1a1a',
  				pink: '#fc59a3',
  				green: '#87c830',
  				yellow: '#ffd400',
  				orange: '#fe7e0f',
  				purple: '#8e3ccb',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			accent: {
  				eclipse: '#1a1a1a',
  				equinox: '#2a2a2a',
  				lunar: '#3a3a3a',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			neutral: {
  				'50': '#fafafa',
  				'100': '#f5f5f5',
  				'200': '#e5e5e5',
  				'300': '#d4d4d4',
  				'400': '#a3a3a3',
  				'500': '#737373',
  				'600': '#525252',
  				'700': '#404040',
  				'800': '#262626',
  				'900': '#171717'
  			},
  			'primary-purple': '#bd93f9',
  			'primary-pink': '#ff79c6',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Varela Round',
  				'system-ui',
  				'sans-serif'
  			],
  			display: [
  				'Varela Round',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			'display-large': [
  				'4.5rem',
  				{
  					lineHeight: '1.1'
  				}
  			],
  			display: [
  				'3.75rem',
  				{
  					lineHeight: '1.1'
  				}
  			],
  			'display-small': [
  				'3rem',
  				{
  					lineHeight: '1.1'
  				}
  			]
  		},
  		borderRadius: {
  			sm: 'calc(var(--radius) - 4px)',
  			md: 'calc(var(--radius) - 2px)',
  			lg: 'var(--radius)',
  			xl: '0.75rem',
  			'2xl': '1rem',
  			'3xl': '1.5rem'
  		},
  		spacing: {
  			'18': '4.5rem',
  			'22': '5.5rem',
  			'30': '7.5rem'
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.8s ease-out',
  			'slide-up': 'slideUp 0.8s ease-out',
  			'slide-left': 'slideLeft 0.5s ease-out',
  			'slide-right': 'slideRight 0.5s ease-out',
  			'pulse-glow': 'pulseGlow 2s ease-in-out infinite'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			slideLeft: {
  				'0%': {
  					transform: 'translateX(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			slideRight: {
  				'0%': {
  					transform: 'translateX(-20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			pulseGlow: {
  				'0%, 100%': {
  					boxShadow: '0 0 20px rgba(142, 60, 203, 0.2)'
  				},
  				'50%': {
  					boxShadow: '0 0 30px rgba(142, 60, 203, 0.4)'
  				}
  			}
  		},
  		backdropFilter: {
  			none: 'none',
  			blur: 'blur(4px)',
  			'blur-md': 'blur(8px)',
  			'blur-lg': 'blur(12px)',
  			'blur-xl': 'blur(16px)',
  			'blur-2xl': 'blur(24px)',
  			'blur-3xl': 'blur(32px)'
  		},
  		boxShadow: {
  			glow: '0 0 20px rgba(142, 60, 203, 0.2)',
  			'glow-lg': '0 0 30px rgba(142, 60, 203, 0.3)',
  			'inner-glow': 'inset 0 0 20px rgba(142, 60, 203, 0.2)'
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
      require("tailwindcss-animate")
],
}