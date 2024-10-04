/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#cce4f8", // Lighter shade
					200: "#99c9f2",
					300: "#66adeb",
					400: "#3392e5",
					500: "#1572D3", // Base color
					600: "#1059a7",
					700: "#0c417b",
					800: "#072950",
					900: "#031124", // Darkest shade
				},
				"text-color": "#484848",
			},
			fontFamily: {
				sans: ["Inter", "ui-sans-serif", "system-ui"],
				Poppins: ["Poppins", "sans-serif"],
			},
			animation: {
				"car-animation": "car-animation 2s linear", // Reference the keyframe name
			},
			keyframes: {
				"car-animation": {
					"0%": { width: "0" }, // The width value should be a string with quotes
					"100%": { width: "50%" }, // Same for this value
				},
			},
		},
	},
	plugins: [],
};
