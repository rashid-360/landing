/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: '#37E5A5',
  				foreground: '#000000'
  			},
  			secondary: {
  				DEFAULT: '#000000',
  				foreground: '#FFFFFF'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: '#000000',
  				foreground: '#FFFFFF'
  			},
  			accent: {
  				DEFAULT: '#37E5A5',
  				foreground: '#000000'
  			},
  			popover: {
  				DEFAULT: '#000000',
  				foreground: '#FFFFFF'
  			},
  			card: {
  				DEFAULT: '#000000',
  				foreground: '#FFFFFF'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			sans: [
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		animation: {
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite',
  			ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite'
  		},
  		keyframes: {
			scale: {
				'0%': { transform: 'scale(0)' },
				'100%': { transform: 'scale(1)' }
			  },
			  bounce: {
				'0%, 100%': { transform: 'translateY(0)' },
				'50%': { transform: 'translateY(-25%)' }
			  },
			  fadeIn: {
				'0%': { opacity: '0' },
				'100%': { opacity: '1' }
			  },
  			orbit: {
  				'0%': {
  					transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
  				},
  				'100%': {
  					transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))'
  				}
  			},
  			ripple: {
  				'0%, 100%': {
  					transform: 'translate(-50%, -50%) scale(1)'
  				},
  				'50%': {
  					transform: 'translate(-50%, -50%) scale(0.9)'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};