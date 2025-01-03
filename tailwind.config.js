/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
			fontFamily: {
        monaspace_krypton: ["MonaspaceKrypton"],
        monaspace_neon: ["MonaspaceNeon"],
				monaspace_xenon: ["MonaspaceXenon"],
      },
  		colors: {
  			background: "hsl(var(--background))",
  			foreground: "hsl(var(--foreground))",
  			card: {
  				DEFAULT: "hsl(var(--card))",
  				foreground: "hsl(var(--card-foreground))"
  			},
  			popover: {
  				DEFAULT: "hsl(var(--popover))",
  				foreground: "hsl(var(--popover-foreground))"
  			},
  			primary: {
  				DEFAULT: "hsl(var(--primary))",
  				foreground: "hsl(var(--primary-foreground))"
  			},
  			secondary: {
  				DEFAULT: "hsl(var(--secondary))",
  				foreground: "hsl(var(--secondary-foreground))"
  			},
  			muted: {
  				DEFAULT: "hsl(var(--muted))",
  				foreground: "hsl(var(--muted-foreground))"
  			},
  			accent: {
  				DEFAULT: "hsl(var(--accent))",
  				foreground: "hsl(var(--accent-foreground))"
  			},
  			destructive: {
  				DEFAULT: "hsl(var(--destructive))",
  				foreground: "hsl(var(--destructive-foreground))"
  			},
  			border: "hsl(var(--border))",
  			input: "hsl(var(--input))",
  			ring: "hsl(var(--ring))",
  			chart: {
  				"1": "hsl(var(--chart-1))",
  				"2": "hsl(var(--chart-2))",
  				"3": "hsl(var(--chart-3))",
  				"4": "hsl(var(--chart-4))",
  				"5": "hsl(var(--chart-5))"
  			}
  		},
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)"
  		}
  	},
  	keyframes: {
  		'slide-up': {
  			'0%, 20%': { transform: 'translateY(100%)', opacity: 0 },
  			'30%, 50%': { transform: 'translateY(0)', opacity: 1 },
  			'60%, 80%': { transform: 'translateY(0)', opacity: 1 },
  			'90%, 100%': { transform: 'translateY(-100%)', opacity: 0 },
  		},
  		'scale-yellow': {
  			'0%, 100%': { transform: 'scale(1)', color: '#FBBF24' },
  			'50%': { transform: 'scale(1.05)', color: '#F59E0B' },
  		},
  		'scale-green': {
  			'0%, 100%': { transform: 'scale(1)', color: '#10B981' },
  			'50%': { transform: 'scale(1.05)', color: '#059669' },
  		},
  		'scale-red': {
  			'0%, 100%': { transform: 'scale(1)', color: '#EF4444' },
  			'50%': { transform: 'scale(1.05)', color: '#DC2626' },
  		},
  	},
  	animation: {
  		'slide-up': 'slide-up 9s cubic-bezier(0.4, 0, 0.2, 1) infinite',
  		'scale-yellow': 'scale-yellow 2s ease-in-out infinite',
  		'scale-green': 'scale-green 2s ease-in-out infinite 0.6s',
  		'scale-red': 'scale-red 2s ease-in-out infinite 1.2s',
  	},
  },
  plugins: [require("tailwindcss-animate")],
};
