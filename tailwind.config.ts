import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
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
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'text-muted': 'hsl(var(--text-muted))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'handshake-left': {
					'0%, 100%': { transform: 'rotate(12deg) translateX(0)' },
					'25%': { transform: 'rotate(15deg) translateX(-2px)' },
					'50%': { transform: 'rotate(10deg) translateX(2px)' },
					'75%': { transform: 'rotate(13deg) translateX(-1px)' }
				},
				'handshake-right': {
					'0%, 100%': { transform: 'rotate(-12deg) translateX(0)' },
					'25%': { transform: 'rotate(-15deg) translateX(2px)' },
					'50%': { transform: 'rotate(-10deg) translateX(-2px)' },
					'75%': { transform: 'rotate(-13deg) translateX(1px)' }
				},
				'sparkle-1': {
					'0%, 100%': { opacity: '0.3', transform: 'rotate(45deg) scale(0.8)' },
					'50%': { opacity: '1', transform: 'rotate(45deg) scale(1.2)' }
				},
				'sparkle-2': {
					'0%, 100%': { opacity: '0.3', transform: 'rotate(45deg) scale(0.8)' },
					'50%': { opacity: '1', transform: 'rotate(45deg) scale(1.2)' }
				},
				'sparkle-3': {
					'0%, 100%': { opacity: '0.3', transform: 'rotate(45deg) scale(0.8)' },
					'50%': { opacity: '1', transform: 'rotate(45deg) scale(1.2)' }
				},
				'dash-1': {
					'0%, 100%': { opacity: '0.5', transform: 'translateX(0)' },
					'50%': { opacity: '1', transform: 'translateX(4px)' }
				},
				'dash-2': {
					'0%, 100%': { opacity: '0.5', transform: 'translateX(0)' },
					'50%': { opacity: '1', transform: 'translateX(-3px)' }
				},
				'dash-3': {
					'0%, 100%': { opacity: '0.5', transform: 'translateX(0)' },
					'50%': { opacity: '1', transform: 'translateX(2px)' }
				},
				'handshake-bounce': {
					'0%, 100%': { transform: 'scale(1) rotate(0deg)' },
					'25%': { transform: 'scale(1.05) rotate(2deg)' },
					'50%': { transform: 'scale(1.1) rotate(-1deg)' },
					'75%': { transform: 'scale(1.05) rotate(1deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'handshake-left': 'handshake-left 2s ease-in-out infinite',
				'handshake-right': 'handshake-right 2s ease-in-out infinite',
				'sparkle-1': 'sparkle-1 3s ease-in-out infinite',
				'sparkle-2': 'sparkle-2 3s ease-in-out infinite 0.5s',
				'sparkle-3': 'sparkle-3 3s ease-in-out infinite 1s',
				'dash-1': 'dash-1 2.5s ease-in-out infinite',
				'dash-2': 'dash-2 2.5s ease-in-out infinite 0.8s',
				'dash-3': 'dash-3 2.5s ease-in-out infinite 1.2s',
				'handshake-bounce': 'handshake-bounce 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
